import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { TRPCError } from '@trpc/server';
import { Prisma, type PrismaClient, type StudioMember as StudioMemberRow } from '@repo/database';
import type { StudioMember } from './schema';

const toMember = ({ position, createdAt, updatedAt, ...row }: StudioMemberRow): StudioMember => ({
  ...row,
  role: row.role as StudioMember['role'],
  description: row.description as StudioMember['description'],
  bio: row.bio as StudioMember['bio'],
  rotation: row.rotation as StudioMember['rotation'],
  socials: row.socials as StudioMember['socials'],
  labels: row.labels as StudioMember['labels'],
  facts: row.facts as StudioMember['facts'],
});

export const studioService = {
  list: async (db: PrismaClient) =>
    (await db.studioMember.findMany({ orderBy: { position: 'asc' } })).map(toMember),

  get: async (db: PrismaClient, slug: string) => {
    const row = await db.studioMember.findUnique({ where: { slug } });

    if (!row)
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Member not found' });

    return toMember(row);
  },

  update: async (db: PrismaClient, { slug, ...data }: StudioMember) => {
    try {
      return toMember(await db.studioMember.update({ where: { slug }, data }));
    } catch (err) {
      // P2025 is Prisma's "record to update not found", anything else is a real failure
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025')
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Member not found' });

      throw err;
    }
  },

  projectOptions: async (contentDir: string) => {
    const projects: Array<{ slug: string; name: string }> = JSON.parse(
      await readFile(join(contentDir, 'projects', 'projects.json'), 'utf8')
    );

    return projects.map(({ slug, name }) => ({ slug, name }));
  },
};

export default studioService;
