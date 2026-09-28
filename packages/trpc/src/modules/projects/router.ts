import { z } from 'zod';
import { router, publicProcedure, adminProcedure } from '../../trpc';
import { projectInfoSchema, projectSchema, sectionLayoutSchema } from './schema';
import projectService from './service';

export const projectRouter = router({
  list: publicProcedure.query(({ ctx }) => projectService.list(ctx.db)),

  options: adminProcedure.query(({ ctx }) => projectService.options(ctx.db)),

  get: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ ctx, input }) => projectService.get(ctx.db, input.slug)),

  update: adminProcedure
    .input(projectSchema)
    .mutation(({ ctx, input }) => projectService.update(ctx.db, input)),

  updateInfo: adminProcedure
    .input(projectInfoSchema)
    .mutation(({ ctx, input }) => projectService.updateInfo(ctx.db, input)),

  updateSection: adminProcedure
    .input(sectionLayoutSchema)
    .mutation(({ ctx, input }) =>
      projectService.updateSection(ctx.db, input.slug, input.position, input.layout, input.by)
    ),
});

export default projectRouter;
