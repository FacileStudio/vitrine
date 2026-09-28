import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../../trpc';
import { loginSchema } from '@repo/auth-shared';
import authService from './service';

export const authRouter = router({
  login: publicProcedure.input(loginSchema).mutation(async ({ ctx, input }) => {
    return authService.login(ctx.db, ctx.auth, input);
  }),

  me: protectedProcedure.input(z.object({})).query(({ ctx }) => {
    return ctx.user;
  }),
});

export default authRouter;
