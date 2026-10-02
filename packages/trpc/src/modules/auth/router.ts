import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../../trpc';
import { loginSchema } from '@repo/auth-shared';
import authService from './service';
import { setAuthCookie, clearAuthCookie } from './cookie';

export const authRouter = router({
  login: publicProcedure.input(loginSchema).mutation(async ({ ctx, input }) => {
    const { token, expiresAt, user } = await authService.login(ctx.db, ctx.auth, input, {
      ipAddress: ctx.ipAddress,
      userAgent: ctx.userAgent,
    });
    setAuthCookie(ctx.resHeaders, token, expiresAt, ctx.config);
    return { user };
  }),

  me: protectedProcedure.input(z.object({})).query(({ ctx }) => {
    return ctx.user;
  }),

  logout: publicProcedure.input(z.object({})).mutation(async ({ ctx }) => {
    if (ctx.token) {
      await ctx.auth.deleteSession(ctx.token);
    }
    clearAuthCookie(ctx.resHeaders, ctx.config);
    return { success: true };
  }),
});

export default authRouter;
