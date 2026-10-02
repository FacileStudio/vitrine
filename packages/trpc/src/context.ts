import { type FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { parse } from 'cookie';
import { prisma } from '@repo/database';
import { type AuthManager } from '@repo/auth';
import { type ServerEnv } from '@repo/env';
import type { StorageProvider } from '@repo/storage';
import type { Logger } from '@repo/logger';
import { AUTH_COOKIE_NAME } from './modules/auth/cookie';

export interface CreateContextOptions extends FetchCreateContextFnOptions {
  authManager: AuthManager;
  storage: StorageProvider;
  env: ServerEnv;
  logger: Logger;
}

export const createContext = async ({
  req,
  resHeaders,
  authManager,
  storage,
  env,
  logger,
}: CreateContextOptions) => {
  const cookieHeader = req.headers.get('cookie');
  const token = cookieHeader ? (parse(cookieHeader)[AUTH_COOKIE_NAME] ?? null) : null;
  const user = token ? await authManager.verifyToken(token) : null;
  const contextLogger = user ? logger.child({ userId: user.id, email: user.email }) : logger;
  const ipAddress =
    req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip') || undefined;
  const userAgent = req.headers.get('user-agent') || undefined;

  return {
    user,
    token,
    resHeaders,
    db: prisma,
    auth: authManager,
    storage,
    // not `env`: @hono/trpc-server overwrites that key with Hono's runtime bindings
    config: env,
    ipAddress,
    userAgent,
    log: contextLogger,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
