import { router } from './trpc';
import { authRouter } from './modules/auth/router';
import { projectRouter } from './modules/project/router';
import { createOpenApiDocument } from './openapi';

export const appRouter = router({
  auth: authRouter,
  project: projectRouter,
});
export const openApiDocument = createOpenApiDocument(appRouter);

export type AppRouter = typeof appRouter;

export { createContext, type Context, type CreateContextOptions } from './context';
export { publicProcedure, protectedProcedure, adminProcedure } from './trpc';
export { globalCacheFactory } from './cache';
export { rateLimit, clientKey } from './rate-limit';
