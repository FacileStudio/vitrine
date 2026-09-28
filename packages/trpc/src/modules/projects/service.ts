import { TRPCError } from '@trpc/server';
import { Prisma, type PrismaClient } from '@repo/database';
import type { ProjectEntry } from './types';

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
  challenge,
  team,
  story,
  ...project
}: ProjectRow): ProjectEntry =>
  // Prisma cannot see inside Json columns, only import-projects.ts writes them, in this shape
  ({
    ...project,
    ...present({ link, video, coverEffect, challenge }),
    team: team.map((member) => member.slug),
    story: story.map(({ title, by, blocks }) => ({
      ...present({ title, by }),
      blocks: blocks.map(({ id, sectionId, position, type, ...block }) => ({ type, ...present(block) })),
    })),
  }) as unknown as ProjectEntry;

export const projectService = {
  list: async (db: PrismaClient) =>
    (await db.project.findMany({ orderBy: { position: 'asc' }, include: projectInclude })).map(toProject),

  get: async (db: PrismaClient, slug: string) => {
    const row = await db.project.findUnique({ where: { slug }, include: projectInclude });

    if (!row)
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Project not found' });

    return toProject(row);
  },

  update: async (
    db: PrismaClient,
    { slug, team, story, link, video, coverEffect, challenge, ...fields }: ProjectEntry
  ) => {
    const exists = await db.project.findUnique({ where: { slug }, select: { slug: true } });

    if (!exists)
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Project not found' });

    const members = await db.studioMember.count({ where: { slug: { in: team } } });

    if (members !== new Set(team).size)
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'Unknown team member' });

    // one transaction, so a failed save never leaves the story half rewritten
    await db.$transaction(async (tx) => {
      await tx.project.update({
        where: { slug },
        data: {
          ...fields,
          // a field the admin cleared arrives as undefined, which Prisma reads as "leave unchanged"
          link: link ?? null,
          video: video ?? null,
          coverEffect: coverEffect ?? null,
          challenge: challenge ?? Prisma.DbNull,
          team: { set: team.map((member) => ({ slug: member })) },
        },
      });

      await tx.storySection.deleteMany({ where: { projectSlug: slug } });

      for (const [position, { title, by, blocks }] of story.entries())
        await tx.storySection.create({
          data: {
            projectSlug: slug,
            position,
            title,
            by: by ?? [],
            blocks: { create: blocks.map((block, order) => ({ position: order, ...block })) },
          },
        });
    });

    return projectService.get(db, slug);
  },
};

export default projectService;
