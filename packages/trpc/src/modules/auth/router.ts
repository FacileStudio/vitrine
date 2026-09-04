import { router, publicProcedure, protectedProcedure } from '../../trpc';
import { loginSchema, registerSchema } from '@repo/auth-shared';
import { rateLimit, clientKey } from '../../rate-limit';
import authService from './service';

export const authRouter = router({
  login: publicProcedure.input(loginSchema).mutation(async ({ ctx, input }) => {
    /*
     * This endpoint answers a yes/no question about a password to anyone who
     * asks, which is exactly what credential stuffing feeds on: a leaked
     * address/password list replayed until one pair sticks. Unmetered, the only
     * thing standing between a dump and the backoffice is how fast the attacker
     * can open sockets. Ten tries per quarter hour is room for a person
     * mistyping their password and none for a list.
     */
    rateLimit({
      key: `login:${clientKey(ctx.ipAddress)}`,
      limit: 10,
      windowMs: 15 * 60 * 1000,
      message: 'Trop de tentatives de connexion. Merci de réessayer dans quinze minutes.',
    });

    return authService.login(ctx.db, ctx.auth, input);
  }),

  register: publicProcedure.input(registerSchema).mutation(async ({ ctx, input }) => {
    /*
     * Registration is public and each call writes a user row and sends a welcome
     * mail, so an unmetered caller fills the table and spends the domain's
     * sending reputation in the same request. It also reports whether an address
     * is already taken, which is an enumeration channel the login limit above
     * would otherwise not cover. Five an hour is far above anything a real
     * visitor needs.
     */
    rateLimit({
      key: `register:${clientKey(ctx.ipAddress)}`,
      limit: 5,
      windowMs: 60 * 60 * 1000,
      message: "Trop de tentatives d'inscription. Merci de réessayer dans une heure.",
    });

    return authService.register(ctx.db, ctx.auth, input);
  }),

  me: protectedProcedure.query(({ ctx }) => {
    return ctx.user;
  }),

  logout: publicProcedure.mutation(async () => {
    return { success: true };
  }),
});

export default authRouter;
