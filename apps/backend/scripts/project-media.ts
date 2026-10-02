import { access, readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { prisma, Prisma } from '@repo/database';
import { createStorage } from '@repo/storage';
import { serverEnvSchema } from '@repo/env';

const PUBLIC_DIR = join(import.meta.dir, '../../client/public');
const LOCAL = /^\/(images|videos)\//;
const dryRun = process.argv.includes('--dry-run');

const TYPES: Record<string, string> = {
    '.webp': 'image/webp',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.avif': 'image/avif',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
};

const env = serverEnvSchema.parse(process.env);

if (env.STORAGE_DRIVER !== 's3')
    throw new Error('STORAGE_DRIVER must be s3, the site cannot serve files from the backend disk');

const storage = createStorage({
    driver: 's3',
    endpoint: env.MINIO_ENDPOINT,
    accessKeyId: env.MINIO_ROOT_USER,
    secretAccessKey: env.MINIO_ROOT_PASSWORD,
    bucket: env.MINIO_BUCKET_NAME,
    publicUrl: env.MINIO_PUBLIC_URL,
});

const uploaded = new Map<string, string>();

async function upload(path: string) {
    const file = decodeURIComponent(path);
    const key = `projects${file}`.normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-zA-Z0-9._/-]/g, '-');

    if (dryRun) {
        await access(join(PUBLIC_DIR, file));
        return storage.getFileUrl(key);
    }

    if (await storage.exists(key))
        return storage.getFileUrl(key);

    const data = await readFile(join(PUBLIC_DIR, file));

    return storage.upload(key, data, TYPES[extname(file).toLowerCase()] ?? 'application/octet-stream');
}

function collect(value: unknown, paths: Set<string>) {
    if (typeof value === 'string' && LOCAL.test(value))
        paths.add(value);
    else if (Array.isArray(value))
        value.forEach((item) => collect(item, paths));
    else if (value && typeof value === 'object')
        Object.values(value).forEach((item) => collect(item, paths));
}

function swap<T>(value: T): T {
    if (typeof value === 'string')
        return (uploaded.get(value) ?? value) as T;

    if (Array.isArray(value))
        return value.map(swap) as T;

    if (value && typeof value === 'object')
        return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, swap(item)])) as T;

    return value;
}

const json = (value: unknown) => (value === null ? Prisma.DbNull : (value as Prisma.InputJsonValue));

const projects = await prisma.project.findMany({ select: { slug: true, image: true, video: true, gallery: true, bucket: true } });
const sections = await prisma.storySection.findMany({ select: { id: true, layout: true } });
const blocks = await prisma.storyBlock.findMany({ select: { id: true, media: true } });

const paths = new Set<string>();
collect([projects, sections, blocks], paths);

for (const path of paths) {
    try {
        uploaded.set(path, await upload(path));
        console.log(`${path} -> ${uploaded.get(path)}`);
    } catch (err) {
        console.warn(`${path} skipped, it stays as it is: ${(err as Error).message}`);
    }
}

if (dryRun) {
    console.log(`dry run: ${uploaded.size} of ${paths.size} file(s) would move, nothing was written`);
    process.exit(0);
}

await prisma.$transaction(async (tx) => {
    for (const { slug, image, video, gallery, bucket } of projects)
        await tx.project.update({
            where: { slug },
            data: { image: swap(image), video: swap(video), gallery: swap(gallery), bucket: json(swap(bucket)) },
        });

    for (const { id, layout } of sections)
        await tx.storySection.update({ where: { id }, data: { layout: json(swap(layout)) } });

    for (const { id, media } of blocks)
        await tx.storyBlock.update({ where: { id }, data: { media: json(swap(media)) } });
}, { timeout: 60_000 });

console.log(`${uploaded.size} of ${paths.size} file(s) moved to storage, the database now points at them`);
await prisma.$disconnect();
