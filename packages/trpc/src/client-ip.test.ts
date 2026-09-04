import { expect, test } from 'bun:test';
import { isCloudflareEdge, resolveClientIp } from './client-ip';

/*
 * The header shapes this deployment actually produces, not invented ones.
 * Traefik appends the address it read off the socket to x-forwarded-for, so the
 * rightmost entry in every fixture below is the immediate peer.
 *
 * If this file goes red, either a real Cloudflare visitor is being bucketed
 * with everyone behind their POP, or the login limiter can be rotated away by a
 * caller who hits the origin directly and picks its own cf-connecting-ip.
 */
function headers(values: Record<string, string>): Headers {
  return new Headers(values);
}

test('behind Cloudflare, cf-connecting-ip wins because the peer is a real POP', () => {
  const resolved = resolveClientIp(
    headers({
      'x-forwarded-for': '203.0.113.5, 172.68.1.1',
      'cf-connecting-ip': '203.0.113.5',
    }),
  );

  expect(resolved).toBe('203.0.113.5');
});

test('direct to the origin, a forged cf-connecting-ip is ignored', () => {
  const resolved = resolveClientIp(
    headers({
      'x-forwarded-for': '1.2.3.4',
      'cf-connecting-ip': '9.9.9.9',
    }),
  );

  expect(resolved).toBe('1.2.3.4');
  expect(resolved).not.toBe('9.9.9.9');
});

test('rotating the forged header does not move the bucket', () => {
  const forged = ['9.9.9.9', '203.0.113.77', '198.51.100.1', '172.68.1.1'].map((value) =>
    resolveClientIp(headers({ 'x-forwarded-for': '1.2.3.4', 'cf-connecting-ip': value })),
  );

  expect(new Set(forged).size).toBe(1);
  expect(forged[0]).toBe('1.2.3.4');
});

test('rotating the source port does not move the bucket either', () => {
  const first = resolveClientIp(headers({ 'x-forwarded-for': '1.2.3.4:51234' }));
  const second = resolveClientIp(headers({ 'x-forwarded-for': '1.2.3.4:60001' }));

  expect(first).toBe('1.2.3.4');
  expect(second).toBe(first);
});

test('a forged hop to the left of the real peer is ignored', () => {
  const resolved = resolveClientIp(
    headers({
      'x-forwarded-for': '203.0.113.5, 172.68.1.1, 1.2.3.4',
      'cf-connecting-ip': '203.0.113.5',
    }),
  );

  expect(resolved).toBe('1.2.3.4');
});

test('no x-forwarded-for leaves no anchor, so nothing is trusted', () => {
  expect(resolveClientIp(headers({ 'cf-connecting-ip': '9.9.9.9' }))).toBeUndefined();
  expect(resolveClientIp(headers({}))).toBeUndefined();
});

test('an IPv6 Cloudflare peer is recognised', () => {
  expect(isCloudflareEdge('2606:4700:0:0:0:0:0:1')).toBe(true);
  expect(isCloudflareEdge('2606:4700::1')).toBe(true);
  expect(isCloudflareEdge('[2606:4700::1]:443')).toBe(true);
  expect(isCloudflareEdge('2a06:98c7::1')).toBe(true);
  expect(isCloudflareEdge('2606:4701::1')).toBe(false);
  expect(isCloudflareEdge('2001:db8::1')).toBe(false);

  const resolved = resolveClientIp(
    headers({
      'x-forwarded-for': '2001:db8::99, 2606:4700::1',
      'cf-connecting-ip': '2001:db8::99',
    }),
  );
  expect(resolved).toBe('2001:db8::99');
});

test('an IPv4-mapped IPv6 peer is recognised as Cloudflare', () => {
  expect(isCloudflareEdge('::ffff:172.68.1.1')).toBe(true);
  expect(isCloudflareEdge('::ffff:1.2.3.4')).toBe(false);

  const resolved = resolveClientIp(
    headers({
      'x-forwarded-for': '203.0.113.5, ::ffff:172.68.1.1',
      'cf-connecting-ip': '203.0.113.5',
    }),
  );
  expect(resolved).toBe('203.0.113.5');
});

test('range edges are respected in both directions', () => {
  expect(isCloudflareEdge('103.21.243.255')).toBe(false);
  expect(isCloudflareEdge('103.21.244.0')).toBe(true);
  expect(isCloudflareEdge('103.21.247.255')).toBe(true);
  expect(isCloudflareEdge('103.21.248.0')).toBe(false);

  /* 104.16.0.0/13 stops at 104.23.255.255, so 104.24.0.1 only matches because
     104.24.0.0/14 is listed separately. Drop that entry and this line fails. */
  expect(isCloudflareEdge('104.23.255.255')).toBe(true);
  expect(isCloudflareEdge('104.24.0.1')).toBe(true);
  expect(isCloudflareEdge('104.28.0.0')).toBe(false);

  /* 198.41.128.0/17 is the widest IPv4 entry, and its first octet is above 127,
     which is where 32-bit sign handling goes wrong. A signed accumulator stays
     self-consistent here and only breaks once it meets the unsigned number the
     IPv4-mapped test produces, so that test is what catches it. */
  expect(isCloudflareEdge('198.41.255.255')).toBe(true);
  expect(isCloudflareEdge('198.42.0.0')).toBe(false);
  expect(isCloudflareEdge('172.64.0.0')).toBe(true);
  expect(isCloudflareEdge('172.72.0.0')).toBe(false);
});

test('junk never reads as a trusted peer', () => {
  for (const junk of ['', 'localhost', '1.2.3', '1.2.3.4.5', '256.1.1.1', '1::2::3', 'not-an-ip']) {
    expect(isCloudflareEdge(junk)).toBe(false);
  }

  /* An unparseable cf-connecting-ip behind a real POP falls back to the POP,
     which over-throttles rather than keying on a value nobody can read. */
  expect(
    resolveClientIp(headers({ 'x-forwarded-for': '172.68.1.1', 'cf-connecting-ip': 'nonsense' })),
  ).toBe('172.68.1.1');
});
