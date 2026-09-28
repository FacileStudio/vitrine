import { z } from 'zod';
import { router, publicProcedure, adminProcedure } from '../../trpc';
import statisticsService from './service';

export const statisticsRouter = router({
  trackVisit: publicProcedure
    .input(z.object({ visitorKey: z.string().regex(/^[a-zA-Z0-9_-]{12,128}$/) }))
    .mutation(async ({ ctx, input }) => {
      return statisticsService.trackVisit(ctx.db, input.visitorKey);
    }),

  overview: adminProcedure.query(async ({ ctx }) => {
    return statisticsService.getOverview(ctx.db);
  }),
});

export default statisticsRouter;
