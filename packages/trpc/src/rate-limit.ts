import { TRPCError } from '@trpc/server';

/*
 * A fixed-window limiter for public write endpoints.
 *
 * In memory on purpose: this runs as a single backend container, and a limiter
 * that needs Redis to exist is a limiter nobody turns on. Move it to a shared
 * store the day the backend is replicated -- until then per-process state is
 * exactly as strong as the process handling the request.
 */
type Window = { count: number; resetAt: number };

const windows = new Map<string, Window>();

/*
 * The bucket one caller is counted against.
 *
 * ctx.ipAddress arrives already resolved by resolveClientIp in client-ip.ts, so
 * the header picking that used to live here is gone. What it hands over is
 * either a cf-connecting-ip value believed only because the immediate peer was
 * a published Cloudflare range, or the peer address Traefik read off the socket.
 * Both are addresses the caller cannot choose, which is the single property the
 * limiter rests on: a key the caller picks is a key the caller rotates, and a
 * limit that never binds. That failure has already been measured twice, in
 * tronc's RealIP before v0.10.0 and in this file's own cf-connecting-ip path.
 *
 * undefined means no x-forwarded-for reached the process, so nothing observed
 * the peer. Those requests share one 'unknown' bucket on purpose. Throttling
 * them together is wrong in the direction that costs a caller latency, not the
 * direction that reopens the bypass.
 */
export function clientKey(address: string | undefined): string {
  return address?.trim() || 'unknown';
}

export function rateLimit(options: {
  key: string;
  limit: number;
  windowMs: number;
  message: string;
}): void {
  const now = Date.now();

  for (const [key, window] of windows) {
    if (window.resetAt <= now) windows.delete(key);
  }

  const current = windows.get(options.key);
  if (!current || current.resetAt <= now) {
    windows.set(options.key, { count: 1, resetAt: now + options.windowMs });
    return;
  }

  current.count += 1;
  if (current.count > options.limit) {
    throw new TRPCError({ code: 'TOO_MANY_REQUESTS', message: options.message });
  }
}
