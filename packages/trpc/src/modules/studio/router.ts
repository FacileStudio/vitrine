import { z } from 'zod';
import { router, publicProcedure, adminProcedure } from '../../trpc';
import { memberSchema } from './schema';
import studioService from './service';

export const studioRouter = router({
  list: publicProcedure.query(({ ctx }) => studioService.list(ctx.db)),

  get: adminProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ ctx, input }) => studioService.get(ctx.db, input.slug)),

  update: adminProcedure
    .input(memberSchema)
    .mutation(({ ctx, input }) => studioService.update(ctx.db, input)),

  projectOptions: adminProcedure.query(({ ctx }) =>
    studioService.projectOptions(ctx.config.CLIENT_CONTENT_DIR)
  ),
});

export default studioRouter;
