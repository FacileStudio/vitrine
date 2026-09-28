import { prisma, type Prisma } from '../src/index';
import projects from '../../../apps/client/app/[locale]/projects/projects.json';

type Section = {
  title?: Prisma.InputJsonValue;
  by?: string | string[];
  blocks: Omit<Prisma.StoryBlockCreateWithoutSectionInput, 'position'>[];
};

async function main() {
  for (const [position, { slug, team, story, ...project }] of projects.entries()) {
    const data = {
      ...project,
      position,
      techStack: project.techStack ?? [],
    };
    const members = team.map((member) => ({ slug: member }));

    // one transaction per project, so a failure never leaves half a story behind
    await prisma.$transaction(async (tx) => {
      await tx.project.upsert({
        where: { slug },
        create: { slug, ...data, team: { connect: members } },
        update: { ...data, team: { set: members } },
      });

      await tx.storySection.deleteMany({ where: { projectSlug: slug } });

      for (const [index, { title, by, blocks }] of ((story ?? []) as Section[]).entries())
        await tx.storySection.create({
          data: {
            projectSlug: slug,
            position: index,
            title,
            by: [by ?? []].flat(),
            blocks: { create: blocks.map((block, order) => ({ position: order, ...block })) },
          },
        });
    });

    console.log(`imported ${slug}: ${story?.length ?? 0} sections`);
  }
}

main()
  .catch((e) => {
    console.error('Failed to import projects:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
