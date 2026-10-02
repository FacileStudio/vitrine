import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { PrismaClient } from '../src/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const prisma = new PrismaClient({ adapter: new PrismaPg(new pg.Pool({ connectionString: process.env.DATABASE_URL })) });

const present = <T extends object>(row: T) =>
  Object.fromEntries(Object.entries(row).filter(([, value]) => value !== null)) as Partial<T>;

const members = await prisma.studioMember.findMany({ orderBy: { position: 'asc' }, omit: { createdAt: true, updatedAt: true } });

const projects = await prisma.project.findMany({
  where: { image: { not: '' } },
  orderBy: { position: 'asc' },
  omit: { createdAt: true, updatedAt: true },
  include: {
    team: { select: { slug: true }, orderBy: { position: 'asc' } },
    story: {
      orderBy: { position: 'asc' },
      omit: { id: true, projectSlug: true },
      include: { blocks: { orderBy: { position: 'asc' }, omit: { id: true, sectionId: true } } },
    },
  },
});

const content = {
  members,
  projects: projects.map(({ team, story, ...project }) => ({
    ...present(project),
    team: team.map((member) => member.slug),
    story: story.map(({ blocks, ...section }) => ({ ...present(section), blocks: blocks.map(present) })),
  })),
};

await writeFile(join(import.meta.dir, 'content.json'), `${JSON.stringify(content, null, 2)}\n`);
console.log(`Dumped ${members.length} studio members and ${projects.length} projects to prisma/content.json`);
await prisma.$disconnect();
