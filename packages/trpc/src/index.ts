import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { router } from './trpc';
import { contactRouter } from './modules/contact/router';
import { userRouter } from './modules/user/router';
import { mediaRouter } from './modules/media/router';
import { authRouter } from './modules/auth/router';
import { statisticsRouter } from './modules/statistics/router';
import { studioRouter } from './modules/studio/router';
import { createOpenApiDocument } from './openapi';

export const appRouter = router({
  auth: authRouter,
  contact: contactRouter,
  user: userRouter,
  media: mediaRouter,
  statistics: statisticsRouter,
  studio: studioRouter,
});

export const openApiDocument = createOpenApiDocument(appRouter);

export type AppRouter = typeof appRouter;

export type RouterOutputs = inferRouterOutputs<AppRouter>;
export type RouterInputs = inferRouterInputs<AppRouter>;

export { createContext, type Context, type CreateContextOptions } from './context';
export { publicProcedure, protectedProcedure, adminProcedure } from './trpc';
export { globalCacheFactory } from './cache';
