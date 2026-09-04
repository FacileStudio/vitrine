import { S3Client } from 'bun';
import * as path from 'path';
import * as fs from 'fs';

const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT ?? 'http://127.0.0.1:9000';
const MINIO_ROOT_USER = process.env.MINIO_ROOT_USER ?? 'minioadmin';
const MINIO_ROOT_PASSWORD = process.env.MINIO_ROOT_PASSWORD ?? 'minioadminpassword';
const MINIO_BUCKET_NAME = process.env.MINIO_BUCKET_NAME ?? 'my-app-bucket';
const MINIO_PUBLIC_URL = process.env.MINIO_PUBLIC_URL?.replace(/\/$/, '') ?? MINIO_ENDPOINT;

const SEED_MEDIA_DIR = path.join(__dirname, 'seed_media');

const s3 = new S3Client({
  endpoint: MINIO_ENDPOINT,
  accessKeyId: MINIO_ROOT_USER,
  secretAccessKey: MINIO_ROOT_PASSWORD,
  bucket: MINIO_BUCKET_NAME,
});

export async function seedMedia(filePath: string): Promise<string> {
  const localPath = path.join(SEED_MEDIA_DIR, filePath);

  if (!fs.existsSync(localPath)) {
    throw new Error(`Seed media not found: ${localPath}`);
  }

  const file = Bun.file(localPath);
  const data = new Uint8Array(await file.arrayBuffer());
  const key = filePath.startsWith('/') ? filePath.slice(1) : filePath;

  const s3File = s3.file(key);
  await (s3File as any).write(data, { type: file.type });

  return `${MINIO_PUBLIC_URL}/${MINIO_BUCKET_NAME}/${key}`;
}
