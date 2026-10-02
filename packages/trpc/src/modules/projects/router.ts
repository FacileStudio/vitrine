import { z } from 'zod';
import { router, publicProcedure, adminProcedure } from '../../trpc';
import { projectInfoSchema, projectSchema, storyLayoutSchema } from './schema';
import projectService from './service';

export const projectRouter = router({
  list: publicProcedure.query(({ ctx }) => projectService.list(ctx.db)),

  options: adminProcedure.query(({ ctx }) => projectService.options(ctx.db)),

  get: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ ctx, input }) => projectService.get(ctx.db, input.slug)),

  create: adminProcedure
    .input(z.object({ name: z.string().trim().min(1).max(120) }))
    .mutation(({ ctx, input }) => projectService.create(ctx.db, input.name)),

  remove: adminProcedure
    .input(z.object({ slug: z.string() }))
    .mutation(({ ctx, input }) => projectService.remove(ctx.db, input.slug)),

  update: adminProcedure
    .input(projectSchema)
    .mutation(({ ctx, input }) => projectService.update(ctx.db, input)),

  updateInfo: adminProcedure
    .input(projectInfoSchema)
    .mutation(({ ctx, input }) => projectService.updateInfo(ctx.db, input)),

  updateStory: adminProcedure
    .input(storyLayoutSchema)
    .mutation(({ ctx, input }) => projectService.updateStory(ctx.db, input.slug, input.sections, input.bucket)),

  reorder: adminProcedure
    .input(z.object({ slugs: z.array(z.string()).min(1) }))
    .mutation(({ ctx, input }) => projectService.reorder(ctx.db, input.slugs)),
});

export default projectRouter;
