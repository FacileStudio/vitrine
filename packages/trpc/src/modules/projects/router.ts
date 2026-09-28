import { z } from 'zod';
import { router, publicProcedure, adminProcedure } from '../../trpc';
import { projectSchema } from './schema';
import projectService from './service';

export const projectRouter = router({
  list: publicProcedure.query(({ ctx }) => projectService.list(ctx.db)),

  get: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ ctx, input }) => projectService.get(ctx.db, input.slug)),

  update: adminProcedure
    .input(projectSchema)
    .mutation(({ ctx, input }) => projectService.update(ctx.db, input)),
});

export default projectRouter;
