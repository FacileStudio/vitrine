import { router } from './trpc';
import { authRouter } from './modules/auth/router';
import { createOpenApiDocument } from './openapi';

export const appRouter = router({
  auth: authRouter,
});
export const openApiDocument = createOpenApiDocument(appRouter);

export type AppRouter = typeof appRouter;

export { createContext, type Context, type CreateContextOptions } from './context';
export { publicProcedure, protectedProcedure, adminProcedure } from './trpc';
export { globalCacheFactory } from './cache';
export { rateLimit, clientKey } from './rate-limit';
