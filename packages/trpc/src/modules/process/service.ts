import { TRPCError } from '@trpc/server';
import { Prisma, type PrismaClient, type ProcessStep as ProcessStepRow } from '@repo/database';
import type { ProcessStep } from './schema';

const emptyText = { en: '', fr: '', es: '', de: '' };

const emptyLines = { en: [], fr: [], es: [], de: [] };

const slugify = (title: string) =>
  title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const toStep = ({ position, createdAt, updatedAt, ...row }: ProcessStepRow): ProcessStep => ({
  ...row,
  title: row.title as ProcessStep['title'],
  duration: row.duration as ProcessStep['duration'],
  keywords: row.keywords as ProcessStep['keywords'],
  tagline: row.tagline as ProcessStep['tagline'],
  text: row.text as ProcessStep['text'],
  items: row.items as ProcessStep['items'],
});

// P2025 is Prisma's "record to update not found", anything else is a real failure
const notFound = (err: unknown) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025')
    throw new TRPCError({ code: 'NOT_FOUND', message: 'Step not found' });

  throw err;
};

export const processService = {
  list: async (db: PrismaClient) =>
    (await db.processStep.findMany({ orderBy: { position: 'asc' } })).map(toStep),

  get: async (db: PrismaClient, slug: string) => {
    const row = await db.processStep.findUnique({ where: { slug } });

    if (!row)
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Step not found' });

    return toStep(row);
  },

  create: async (db: PrismaClient, title: string) => {
    const base = slugify(title) || 'step';
    const taken = new Set(
      (await db.processStep.findMany({ where: { slug: { startsWith: base } }, select: { slug: true } })).map(
        (step) => step.slug
      )
    );

    let slug = base;
    for (let suffix = 2; taken.has(slug); suffix += 1) slug = `${base}-${suffix}`;

    const last = await db.processStep.findFirst({ orderBy: { position: 'desc' }, select: { position: true } });

    return toStep(
      await db.processStep.create({
        data: {
          slug,
          position: (last?.position ?? -1) + 1,
          image: '',
          title: { en: title, fr: title, es: title, de: title },
          duration: emptyText,
          keywords: emptyText,
          tagline: emptyText,
          text: emptyText,
          items: emptyLines,
          team: [],
        },
      })
    );
  },

  update: async (db: PrismaClient, { slug, ...data }: ProcessStep) =>
    toStep(await db.processStep.update({ where: { slug }, data }).catch(notFound)),

  remove: async (db: PrismaClient, slug: string) => {
    await db.processStep.delete({ where: { slug } }).catch(notFound);
  },

  reorder: async (db: PrismaClient, slugs: string[]) => {
    const known = new Set((await db.processStep.findMany({ select: { slug: true } })).map((step) => step.slug));

    if (slugs.length !== known.size || new Set(slugs).size !== slugs.length || !slugs.every((slug) => known.has(slug)))
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'The order must list every step exactly once' });

    // position is unique, so every step steps aside to a negative slot before taking its new one
    await db.$transaction([
      ...slugs.map((slug, index) => db.processStep.update({ where: { slug }, data: { position: -(index + 1) } })),
      ...slugs.map((slug, index) => db.processStep.update({ where: { slug }, data: { position: index } })),
    ]);

    return processService.list(db);
  },
};

export default processService;
