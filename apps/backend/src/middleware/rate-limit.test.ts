import { expect, test } from 'bun:test';
import { Hono } from 'hono';
import { rateLimit } from './rate-limit.middleware';

test('limits one procedure per client ip and leaves others alone', async () => {
  const app = new Hono();

  app.use('*', rateLimit({ procedure: 'statistics.trackVisit', max: 2, windowMs: 60_000 }));
  app.all('*', (c) => c.text('ok'));

  const hit = async (path: string, ip: string) =>
    (await app.request(path, { headers: { 'x-forwarded-for': `6.6.6.6, ${ip}` } })).status;

  expect(await hit('/trpc/statistics.trackVisit', '1.1.1.1')).toBe(200);
  expect(await hit('/trpc/statistics.trackVisit', '1.1.1.1')).toBe(200);
  expect(await hit('/trpc/statistics.trackVisit', '1.1.1.1')).toBe(429);
  expect(await hit('/trpc/statistics.trackVisit', '2.2.2.2')).toBe(200);
  expect(await hit('/trpc/contact.create', '1.1.1.1')).toBe(200);
});
