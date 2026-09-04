import { PrismaClient, BlockKind, CoverEffect, BlockSmalls } from '@repo/database';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import * as path from 'path';
import * as fs from 'fs';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: ['error', 'warn'],
});

// the raw shape authored in apps/client/app/[locale]/projects/projects.json —
// mirrors apps/client/components/facile/story/types.ts, kept local since a
// package can't import an app's path-aliased TS module
interface RawSwatch {
  label: string;
  hex: string;
  note?: string;
  rgb?: string;
  cmyk?: string;
  hsv?: string;
  textColor?: string;
}

interface RawBlock {
  type: string;
  media?: (string | number)[];
  eyebrow?: string;
  title?: string;
  text?: string;
  tags?: string[];
  logos?: string[];
  link?: string;
  linkLabel?: string;
  effect?: string;
  smalls?: 'top' | 'bottom';
  cols?: number;
  font?: string;
  fontFamily?: string;
  description?: string;
  secondFont?: string;
  secondFontFamily?: string;
  secondDescription?: string;
  swatches?: RawSwatch[];
}

interface RawSection {
  title?: string;
  by?: string | string[];
  blocks: RawBlock[];
}

interface RawProject {
  slug: string;
  customCover?: string;
  name: string;
  weeks: number;
  tier?: number;
  link?: string;
  image: string;
  video?: string;
  gallery?: string[];
  description: string;
  techStack?: string[];
  date: string;
  challenge?: string;
  services?: string[];
  team?: string[];
  notes?: string[];
  story?: RawSection[];
}

const PROJECTS_JSON_PATH = path.join(
  __dirname,
  '../../../apps/client/app/[locale]/projects/projects.json'
);

const loadProjectsJson = (): RawProject[] => {
  const raw = fs.readFileSync(PROJECTS_JSON_PATH, 'utf-8');
  return JSON.parse(raw) as RawProject[];
};

// a block's media entries are either a raw src or an index into the project's
// gallery — collapsing that indirection at seed time is what let the relational
// StoryBlock.media column drop the string|index union entirely (see story.prisma)
const resolveMedia = (gallery: string[], refs: (string | number)[] = []): string[] =>
  refs
    .map((r) => (typeof r === 'number' ? gallery[r] : r))
    .filter((src): src is string => Boolean(src));

const COVER_EFFECTS: Record<string, CoverEffect> = {
  marcel: CoverEffect.marcel,
  'projet-zero-pillar': CoverEffect.projetZeroPillar,
};

const toSectionsCreate = (gallery: string[], sections: RawSection[] = []) =>
  sections.map((section, sectionOrder) => ({
    order: sectionOrder,
    title: section.title,
    by: ([] as string[]).concat(section.by ?? []),
    blocks: {
      create: section.blocks.map((block, blockOrder) => ({
        order: blockOrder,
        type: block.type as BlockKind,
        media: resolveMedia(gallery, block.media),
        eyebrow: block.eyebrow,
        title: block.title,
        text: block.text,
        tags: block.tags ?? [],
        logos: block.logos ?? [],
        link: block.link,
        linkLabel: block.linkLabel,
        effect: block.effect ? COVER_EFFECTS[block.effect] : undefined,
        smalls: block.smalls as BlockSmalls | undefined,
        cols: block.cols,
        font: block.font,
        fontFamily: block.fontFamily,
        description: block.description,
        secondFont: block.secondFont,
        secondFontFamily: block.secondFontFamily,
        secondDescription: block.secondDescription,
        swatches: { create: (block.swatches ?? []).map((s, order) => ({ order, ...s })) },
      })),
    },
  }));

async function seedProjects() {
  const projects = loadProjectsJson();

  await prisma.storySection.deleteMany();
  await prisma.project.deleteMany();
  console.log('Cleared existing projects.');

  for (const project of projects) {
    const { story, gallery, ...fields } = project;

    await prisma.project.create({
      data: {
        ...fields,
        gallery: gallery ?? [],
        sections: { create: toSectionsCreate(gallery ?? [], story) },
      },
    });
    console.log(`Seeded project → ${project.name}`);
  }
}

async function main() {
  console.log('Start seeding...');
  await seedProjects();
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
