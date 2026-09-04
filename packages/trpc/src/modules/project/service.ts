import type { PrismaClient, Prisma, BlockKind, CoverEffect, BlockSmalls } from '@repo/database';

export const storyInclude = {
  sections: {
    orderBy: { order: 'asc' as const },
    include: {
      blocks: {
        orderBy: { order: 'asc' as const },
        include: {
          swatches: { orderBy: { order: 'asc' as const } },
          tiles: { orderBy: { order: 'asc' as const } },
          people: { orderBy: { order: 'asc' as const } },
        },
      },
    },
  },
} satisfies Prisma.ProjectInclude;

export interface SwatchInput {
  label: string;
  hex: string;
  note?: string;
  rgb?: string;
  cmyk?: string;
  hsv?: string;
  textColor?: string;
}

export interface TileInput {
  label: string;
  text?: string;
  icon?: string;
}

export interface PersonInput {
  name: string;
  role: string;
  avatar: string;
  highlight?: string;
  model?: string;
  scale?: number;
  roughness?: number;
  hair?: string;
}

export interface BlockInput {
  type: BlockKind;
  media?: string[];
  eyebrow?: string;
  title?: string;
  text?: string;
  tags?: string[];
  logos?: string[];
  link?: string;
  linkLabel?: string;
  effect?: CoverEffect;
  smalls?: BlockSmalls;
  cols?: number;
  font?: string;
  fontFamily?: string;
  description?: string;
  secondFont?: string;
  secondFontFamily?: string;
  secondDescription?: string;
  swatches?: SwatchInput[];
  tiles?: TileInput[];
  people?: PersonInput[];
}

export interface SectionInput {
  title?: string;
  by?: string[];
  blocks?: BlockInput[];
}

export interface ProjectFieldsInput {
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
}

// order is stamped from array position rather than authored, so callers (the
// seed, a backoffice) never have to keep a gap-free counter themselves
const toSectionsCreate = (sections: SectionInput[] = []) =>
  sections.map((section, sectionOrder) => ({
    order: sectionOrder,
    title: section.title,
    by: section.by ?? [],
    blocks: {
      create: (section.blocks ?? []).map((block, blockOrder) => ({
        order: blockOrder,
        type: block.type,
        media: block.media ?? [],
        eyebrow: block.eyebrow,
        title: block.title,
        text: block.text,
        tags: block.tags ?? [],
        logos: block.logos ?? [],
        link: block.link,
        linkLabel: block.linkLabel,
        effect: block.effect,
        smalls: block.smalls,
        cols: block.cols,
        font: block.font,
        fontFamily: block.fontFamily,
        description: block.description,
        secondFont: block.secondFont,
        secondFontFamily: block.secondFontFamily,
        secondDescription: block.secondDescription,
        swatches: { create: (block.swatches ?? []).map((s, order) => ({ order, ...s })) },
        tiles: { create: (block.tiles ?? []).map((t, order) => ({ order, ...t })) },
        people: { create: (block.people ?? []).map((p, order) => ({ order, ...p })) },
      })),
    },
  }));

export const projectService = {
  list: (db: PrismaClient) => db.project.findMany({ orderBy: { id: 'asc' }, include: storyInclude }),

  getBySlug: (db: PrismaClient, slug: string) =>
    db.project.findUnique({ where: { slug }, include: storyInclude }),

  create: (db: PrismaClient, input: ProjectFieldsInput & { sections?: SectionInput[] }) => {
    const { sections, ...fields } = input;
    return db.project.create({
      data: {
        ...fields,
        sections: { create: toSectionsCreate(sections) },
      },
      include: storyInclude,
    });
  },

  // sections, when provided, replace the whole story rather than being diffed
  // block-by-block — a backoffice authors a chapter/block list as one unit, so
  // "update the story" reads as delete-then-recreate rather than a merge
  update: (
    db: PrismaClient,
    slug: string,
    input: Partial<ProjectFieldsInput> & { sections?: SectionInput[] }
  ) => {
    const { sections, ...fields } = input;

    return db.$transaction(async (tx) => {
      if (sections) {
        await tx.storySection.deleteMany({ where: { project: { slug } } });
      }

      return tx.project.update({
        where: { slug },
        data: {
          ...fields,
          ...(sections ? { sections: { create: toSectionsCreate(sections) } } : {}),
        },
        include: storyInclude,
      });
    });
  },

  remove: (db: PrismaClient, slug: string) => db.project.delete({ where: { slug } }),
};

export default projectService;
