/*
 * Cloudflare's published edge ranges, fetched 2026-08-25 from
 * https://www.cloudflare.com/ips-v4 and https://www.cloudflare.com/ips-v6.
 *
 * Cloudflare adds ranges, so this list rots, and a stale entry fails in the
 * harmless direction: an unlisted POP reads as an untrusted peer, its
 * cf-connecting-ip is ignored and every visitor behind it shares one bucket.
 * That over-throttles, it never reopens the bypass. Re-fetch both URLs when a
 * real visitor reports being limited by traffic that is not theirs.
 */
const CLOUDFLARE_IPV4 = [
  '173.245.48.0/20',
  '103.21.244.0/22',
  '103.22.200.0/22',
  '103.31.4.0/22',
  '141.101.64.0/18',
  '108.162.192.0/18',
  '190.93.240.0/20',
  '188.114.96.0/20',
  '197.234.240.0/22',
  '198.41.128.0/17',
  '162.158.0.0/15',
  '104.16.0.0/13',
  '104.24.0.0/14',
  '172.64.0.0/13',
  '131.0.72.0/22',
];

const CLOUDFLARE_IPV6 = [
  '2400:cb00::/32',
  '2606:4700::/32',
  '2803:f800::/32',
  '2405:b500::/32',
  '2405:8100::/32',
  '2a06:98c0::/29',
  '2c0f:f248::/32',
];

const IPV4_OCTET = /^\d{1,3}$/;
const IPV6_GROUP = /^[0-9a-fA-F]{1,4}$/;

/* The ::ffff:0:0/96 tag, as the value of the 96 bits above the embedded IPv4. */
const IPV4_MAPPED_TAG = 0xffffn;

/*
 * Some proxies report a peer as host:port, and a source port is ephemeral: it
 * changes on every connection. Keeping it would hand each request its own
 * rate-limit bucket, which is the same bypass this module exists to close, just
 * arrived at by accident instead of on purpose.
 */
function stripPort(raw: string): string {
  const text = raw.trim();
  if (text.startsWith('[')) {
    const close = text.indexOf(']');
    return close > 0 ? text.slice(1, close) : text;
  }
  /* A bare IPv6 literal always carries at least two colons, so a lone colon is
     an IPv4 host:port pair and nothing else. */
  const colon = text.indexOf(':');
  return colon >= 0 && colon === text.lastIndexOf(':') ? text.slice(0, colon) : text;
}

function parseIpv4(text: string): number | undefined {
  const octets = text.split('.');
  if (octets.length !== 4) return undefined;

  let value = 0;
  for (const octet of octets) {
    if (!IPV4_OCTET.test(octet)) return undefined;
    const parsed = Number(octet);
    if (parsed > 255) return undefined;
    /* Arithmetic rather than shifts: 32-bit bit operations in JavaScript are
       signed, so anything at or above 128.0.0.0 would come back negative. */
    value = value * 256 + parsed;
  }
  return value;
}

/*
 * Rewrites the dotted tail of a form like ::ffff:1.2.3.4 into the two hex
 * groups it stands for, so the group parser below only ever sees hex.
 */
function expandEmbeddedIpv4(text: string): string | undefined {
  if (!text.includes('.')) return text;

  const cut = text.lastIndexOf(':');
  if (cut < 0) return undefined;

  const embedded = parseIpv4(text.slice(cut + 1));
  if (embedded === undefined) return undefined;

  const high = Math.floor(embedded / 0x10000).toString(16);
  const low = (embedded % 0x10000).toString(16);
  return `${text.slice(0, cut + 1)}${high}:${low}`;
}

function packGroups(groups: string[]): bigint | undefined {
  let value = 0n;
  for (const group of groups) {
    if (!IPV6_GROUP.test(group)) return undefined;
    value = (value << 16n) | BigInt(Number.parseInt(group, 16));
  }
  return value;
}

function parseIpv6(raw: string): bigint | undefined {
  const text = expandEmbeddedIpv4(raw);
  if (text === undefined) return undefined;

  /* :: may appear once. Twice is ambiguous and every parser must reject it,
     otherwise 1::2::3 expands differently depending on which one wins. */
  const marker = text.indexOf('::');
  if (marker !== text.lastIndexOf('::')) return undefined;

  const headText = marker < 0 ? text : text.slice(0, marker);
  const tailText = marker < 0 ? '' : text.slice(marker + 2);
  const head = headText === '' ? [] : headText.split(':');
  const tail = tailText === '' ? [] : tailText.split(':');

  const missing = 8 - head.length - tail.length;
  const wellFormed = marker < 0 ? missing === 0 : missing > 0;
  if (!wellFormed) return undefined;

  return packGroups([...head, ...Array<string>(missing).fill('0'), ...tail]);
}

function ipv4InCidr(value: number, cidr: string): boolean {
  const slash = cidr.indexOf('/');
  const base = parseIpv4(cidr.slice(0, slash));
  if (base === undefined) return false;

  const prefix = Number(cidr.slice(slash + 1));
  /* `x << 32` shifts by zero in JavaScript, so a /0 has to be spelled out. */
  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  return ((value & mask) >>> 0) === ((base & mask) >>> 0);
}

function ipv6InCidr(value: bigint, cidr: string): boolean {
  const slash = cidr.indexOf('/');
  const base = parseIpv6(cidr.slice(0, slash));
  if (base === undefined) return false;

  const prefix = BigInt(cidr.slice(slash + 1));
  const mask = ((1n << prefix) - 1n) << (128n - prefix);
  return (value & mask) === (base & mask);
}

/*
 * ::ffff:172.68.1.1 is how a dual-stack listener reports an IPv4 peer. Without
 * this unwrap, every IPv4 Cloudflare POP reads as untrusted on a host bound to
 * ::, and the header Cloudflare actually set gets thrown away.
 */
function mappedIpv4(value: bigint): number | undefined {
  if (value >> 32n !== IPV4_MAPPED_TAG) return undefined;
  return Number(value & 0xffffffffn);
}

/**
 * Reports whether an address sits inside a published Cloudflare edge range.
 *
 * Accepts IPv4, IPv6, IPv4-mapped IPv6 and any of those with a port suffix.
 * Anything unparseable answers false, because an address nobody can read is an
 * address nobody should trust.
 */
export function isCloudflareEdge(address: string): boolean {
  const text = stripPort(address);

  const ipv4 = parseIpv4(text);
  if (ipv4 !== undefined) return CLOUDFLARE_IPV4.some((cidr) => ipv4InCidr(ipv4, cidr));

  const ipv6 = parseIpv6(text);
  if (ipv6 === undefined) return false;

  const mapped = mappedIpv4(ipv6);
  if (mapped !== undefined) return CLOUDFLARE_IPV4.some((cidr) => ipv4InCidr(mapped, cidr));

  return CLOUDFLARE_IPV6.some((cidr) => ipv6InCidr(ipv6, cidr));
}

function isIpAddress(text: string): boolean {
  return parseIpv4(text) !== undefined || parseIpv6(text) !== undefined;
}

function rightmostHop(forwardedFor: string | null): string | undefined {
  const hops = (forwardedFor ?? '')
    .split(',')
    .map((hop) => stripPort(hop))
    .filter(Boolean);
  return hops.length > 0 ? hops[hops.length - 1] : undefined;
}

/**
 * Resolves the one address a caller cannot choose for itself, for use as a
 * rate-limit bucket and an audit trail.
 *
 * The rightmost x-forwarded-for entry is the trust anchor. Traefik appends the
 * address it read off the socket, so that last hop is the immediate peer and no
 * client can write it. Everything to its left is whatever the caller typed.
 *
 * cf-connecting-ip is believed only when that peer is a published Cloudflare
 * range, because that is the only case where Cloudflare set the header and
 * dropped the caller's copy of it. The origin here is directly reachable:
 * gfconseiletformation.fr and backoffice.gfconseiletformation.fr are unproxied
 * A records for 65.108.2.107, Traefik listens on 0.0.0.0:443 and routes on the
 * Host header, and its forwardedHeaders.trustedIPs is unset, so it forwards
 * client-supplied headers verbatim. Reading cf-connecting-ip unconditionally
 * therefore let anyone hit the origin, send a different value each request and
 * take a fresh login bucket every time, which is a limit that never binds.
 *
 * No x-forwarded-for at all means the request never passed Traefik, so nothing
 * observed the peer and there is no anchor. undefined is returned rather than
 * the caller's cf-connecting-ip: falling back to it would restore the same
 * rotate-the-header bypass behind a condition the attacker also controls, since
 * omitting a header is free.
 */
export function resolveClientIp(headers: Headers): string | undefined {
  const peer = rightmostHop(headers.get('x-forwarded-for'));
  if (peer === undefined) return undefined;
  if (!isCloudflareEdge(peer)) return peer;

  const claimed = stripPort(headers.get('cf-connecting-ip') ?? '');
  return isIpAddress(claimed) ? claimed : peer;
}
