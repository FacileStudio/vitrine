import { TRPCError } from '@trpc/server';
import { Prisma, type PrismaClient } from '@repo/database';
import { blocksToLayout } from './layout';
import type { GridItem, ProjectEntry, ProjectStoryBlock, SectionLayout } from './types';

type Db = PrismaClient | Prisma.TransactionClient;

export type ProjectInfo = Omit<ProjectEntry, 'story' | 'bucket'>;

type SectionChange = { position: number; layout: SectionLayout; by: string[] };

const projectInclude = {
  team: { select: { slug: true }, orderBy: { position: 'asc' } },
  story: {
    orderBy: { position: 'asc' },
    include: { blocks: { orderBy: { position: 'asc' } } },
  },
} satisfies Prisma.ProjectInclude;

type ProjectRow = Prisma.ProjectGetPayload<{ include: typeof projectInclude }>;

// projects.json leaves optional fields out, so null columns and empty lists are dropped to match it
const present = <T extends object>(fields: T) =>
  Object.fromEntries(
    Object.entries(fields).filter(([, value]) => value !== null && !(Array.isArray(value) && value.length === 0))
  ) as Partial<T>;

const toProject = ({
  position,
  createdAt,
  updatedAt,
  link,
  video,
  coverEffect,
  team,
  story,
  bucket,
  ...project
}: ProjectRow): ProjectEntry =>
  // Prisma cannot see inside Json columns, only the project_content migration and the backoffice write them, in this shape
  ({
    ...project,
    ...present({ link, video, coverEffect }),
    team: team.map((member) => member.slug),
    // the shared bucket may have accumulated duplicates from the per-section migration
    bucket: [...new Map((bucket as GridItem[]).map((item) => [item.id, item])).values()],
    story: story.map(({ title, by, blocks, layout }) => {
      const cleaned = blocks.map(({ id, sectionId, position, type, ...block }) => ({
        type,
        ...present(block),
      })) as unknown as ProjectStoryBlock[];

      return {
        ...present({ title, by }),
        blocks: cleaned,
        layout: (layout as SectionLayout | null) ?? blocksToLayout(cleaned, project.gallery),
        hasLayout: layout !== null,
      };
    }),
  }) as unknown as ProjectEntry;

// a grid is 3 rows tall, every placed item must stay inside it and never cover another
function assertLayout({ cols, items }: SectionLayout) {
  const taken = new Set<string>();

  for (const item of items) {
    if (item.x < 1 || item.y < 1 || item.x + item.w - 1 > cols || item.y + item.h - 1 > 3)
      throw new TRPCError({ code: 'BAD_REQUEST', message: `Item ${item.id} is outside the grid` });

    for (let col = item.x; col < item.x + item.w; col++)
      for (let row = item.y; row < item.y + item.h; row++) {
        const cell = `${col}:${row}`;

        if (taken.has(cell))
          throw new TRPCError({ code: 'BAD_REQUEST', message: `Item ${item.id} overlaps another item` });

        taken.add(cell);
      }
  }
}

async function assertMembers(db: Db, slugs: string[]) {
  const members = await db.studioMember.count({ where: { slug: { in: slugs } } });

  if (members !== new Set(slugs).size)
    throw new TRPCError({ code: 'BAD_REQUEST', message: 'Unknown team member' });
}

async function writeInfo(db: Db, { slug, team, link, video, coverEffect, ...fields }: ProjectInfo) {
  await assertMembers(db, team);

  await db.project.update({
    where: { slug },
    data: {
      ...fields,
      // a field the admin cleared arrives as undefined, which Prisma reads as "leave unchanged"
      link: link ?? null,
      video: video ?? null,
      coverEffect: coverEffect ?? null,
      team: { set: team.map((member) => ({ slug: member })) },
    },
  });
}

async function assertExists(db: Db, slug: string) {
  const exists = await db.project.findUnique({ where: { slug }, select: { slug: true } });

  if (!exists)
    throw new TRPCError({ code: 'NOT_FOUND', message: 'Project not found' });
}

// copy of SERVICES in apps/client/lib/content/projects.ts, the backend cannot import site code
const SERVICES = [
  'appDevelopment',
  'webDevelopment',
  'desktopDevelopment',
  'frontendDevelopment',
  'brandIdentity',
  'artDirection',
  'photography',
  'productDesign',
  'uiUxDesign',
  'designSystem',
  'redesign',
  'motionDesign',
  'transformation',
];

export const projectService = {
  options: async (db: PrismaClient) => {
    const [projects, members] = await Promise.all([
      db.project.findMany({ select: { techStack: true } }),
      db.studioMember.findMany({ select: { slug: true, name: true }, orderBy: { position: 'asc' } }),
    ]);

    return {
      services: SERVICES,
      techStack: [...new Set(projects.flatMap((project) => project.techStack))].sort(),
      members,
    };
  },

  list: async (db: PrismaClient) =>
    (await db.project.findMany({ orderBy: { position: 'asc' }, include: projectInclude })).map(toProject),

  get: async (db: PrismaClient, slug: string) => {
    const row = await db.project.findUnique({ where: { slug }, include: projectInclude });

    if (!row)
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Project not found' });

    return toProject(row);
  },

  update: async (db: PrismaClient, { story, bucket, ...info }: ProjectEntry) => {
    await assertExists(db, info.slug);

    // one transaction, so a failed save never leaves the story half rewritten
    await db.$transaction(async (tx) => {
      await writeInfo(tx, info);
      await tx.project.update({
        where: { slug: info.slug },
        data: { bucket: bucket as unknown as Prisma.InputJsonValue },
      });
      await tx.storySection.deleteMany({ where: { projectSlug: info.slug } });

      for (const [position, { title, by, blocks, layout, hasLayout }] of story.entries())
        await tx.storySection.create({
          data: {
            projectSlug: info.slug,
            position,
            title,
            by: by ?? [],
            // a converted layout is only a view of the blocks, only a saved one is written back
            layout: hasLayout ? (layout as unknown as Prisma.InputJsonValue) : Prisma.DbNull,
            blocks: { create: blocks.map((block, order) => ({ position: order, ...block })) },
          },
        });
    });

    return projectService.get(db, info.slug);
  },

  updateInfo: async (db: PrismaClient, info: ProjectInfo) => {
    await assertExists(db, info.slug);
    await writeInfo(db, info);

    return projectService.get(db, info.slug);
  },

  // moving an element between sections touches two layouts and the bucket, so they are written as one
  updateStory: async (db: PrismaClient, slug: string, sections: SectionChange[], bucket: GridItem[]) => {
    await assertExists(db, slug);

    for (const { layout, by } of sections) {
      assertLayout(layout);
      await assertMembers(db, by);
    }

    try {
      await db.$transaction(async (tx) => {
        for (const { position, layout, by } of sections)
          await tx.storySection.update({
            where: { projectSlug_position: { projectSlug: slug, position } },
            data: { layout: layout as unknown as Prisma.InputJsonValue, by },
          });

        await tx.project.update({
          where: { slug },
          data: { bucket: bucket as unknown as Prisma.InputJsonValue },
        });
      });
    } catch (err) {
      // P2025 is Prisma's "record to update not found", anything else is a real failure
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025')
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Section not found' });

      throw err;
    }

    return projectService.get(db, slug);
  },

  reorder: async (db: PrismaClient, slugs: string[]) => {
    const existing = await db.project.findMany({ select: { slug: true } });
    const known = new Set(existing.map((project) => project.slug));

    if (slugs.length !== known.size || new Set(slugs).size !== slugs.length || !slugs.every((slug) => known.has(slug)))
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'The order must list every project exactly once' });

    // position is unique, so every project steps aside to a negative slot before taking its new one
    await db.$transaction([
      ...slugs.map((slug, index) => db.project.update({ where: { slug }, data: { position: -(index + 1) } })),
      ...slugs.map((slug, index) => db.project.update({ where: { slug }, data: { position: index } })),
    ]);

    return projectService.list(db);
  },
};

export default projectService;
