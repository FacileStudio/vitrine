import { z } from 'zod';
import { router, publicProcedure, adminProcedure } from '../../trpc';
import { stepSchema } from './schema';
import processService from './service';

export const processRouter = router({
  list: publicProcedure.query(({ ctx }) => processService.list(ctx.db)),

  get: adminProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ ctx, input }) => processService.get(ctx.db, input.slug)),

  create: adminProcedure
    .input(z.object({ title: z.string().trim().min(1).max(120) }))
    .mutation(({ ctx, input }) => processService.create(ctx.db, input.title)),

  update: adminProcedure
    .input(stepSchema)
    .mutation(({ ctx, input }) => processService.update(ctx.db, input)),

  remove: adminProcedure
    .input(z.object({ slug: z.string() }))
    .mutation(({ ctx, input }) => processService.remove(ctx.db, input.slug)),

  reorder: adminProcedure
    .input(z.object({ slugs: z.array(z.string()).min(1) }))
    .mutation(({ ctx, input }) => processService.reorder(ctx.db, input.slugs)),
});

export default processRouter;
