import { type FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { prisma } from '@repo/database';
import { type AuthManager } from '@repo/auth';
import { type ServerEnv } from '@repo/env';
import type { StorageProvider } from '@repo/storage';
import type { Logger } from '@repo/logger';
import { resolveClientIp } from './client-ip';

export interface CreateContextOptions extends FetchCreateContextFnOptions {
  authManager: AuthManager;
  storage: StorageProvider;
  env: ServerEnv;
  logger: Logger;
}

export const createContext = async ({
  req,
  authManager,
  storage,
  env,
  logger,
}: CreateContextOptions) => {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
  const user = token ? await authManager.verifyToken(token) : null;
  const contextLogger = user ? logger.child({ userId: user.id, email: user.email }) : logger;
  /*
   * The rightmost x-forwarded-for hop decides, and cf-connecting-ip is believed
   * only when that hop proves Cloudflare is really in front.
   *
   * Reading cf-connecting-ip first was a bypass, not a preference. This origin
   * is directly reachable: two of its hostnames are unproxied A records, Traefik
   * routes on the Host header with forwardedHeaders.trustedIPs unset, and it
   * forwards client-supplied headers verbatim. So anyone could skip Cloudflare,
   * set cf-connecting-ip to a new value on every request, and collect a fresh
   * rate-limit bucket each time, which is a login limit that never binds.
   *
   * resolveClientIp keeps the property the limiter actually needs: an address
   * the caller cannot choose. See client-ip.ts for the trust model and for what
   * happens when no x-forwarded-for arrives at all.
   */
  const ipAddress = resolveClientIp(req.headers);
  const userAgent = req.headers.get('user-agent') || undefined;

  return {
    user,
    db: prisma,
    auth: authManager,
    storage,
    env,
    ipAddress,
    userAgent,
    log: contextLogger,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
