import type { Context, MiddlewareHandler } from 'hono';
import { getConnInfo } from 'hono/bun';

interface RateLimitOptions {
  procedure: string;
  max: number;
  windowMs: number;
}

// the proxy appends the peer it saw, so only the rightmost hop is not client-controlled
export const clientIp = (c: Context) =>
  c.req.header('x-forwarded-for')?.split(',').pop()?.trim() || getConnInfo(c).remote.address || 'unknown';

export const rateLimit = ({ procedure, max, windowMs }: RateLimitOptions): MiddlewareHandler => {
  const hits = new Map<string, { count: number; resetAt: number }>();

  return async (c, next) => {
    if (!c.req.path.includes(procedure))
      return next();

    const now = Date.now();
    const key = clientIp(c);
    const entry = hits.get(key);

    if (!entry || entry.resetAt <= now) {
      hits.set(key, { count: 1, resetAt: now + windowMs });
      if (hits.size > 10_000)
        for (const [ip, e] of hits)
          if (e.resetAt <= now)
            hits.delete(ip);
      return next();
    }

    if (++entry.count > max)
      return c.json({ error: 'Too many requests' }, 429);

    return next();
  };
};
