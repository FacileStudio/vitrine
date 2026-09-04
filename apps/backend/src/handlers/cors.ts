import { cors } from 'hono/cors';

/*
 * Local and LAN development origins, matched on the parsed hostname and granted
 * only when NODE_ENV is explicitly 'development'.
 *
 * `origin.startsWith('http://localhost')` also accepts
 * `http://localhost.evil.example`, a domain anyone can register, and this
 * handler answers with `credentials: true`. Parsing the URL and comparing the
 * hostname removes the suffix trick.
 *
 * The NODE_ENV test is positive on purpose. Written as `!== 'production'`, an
 * unset or misspelled variable takes the development branch, and the API then
 * echoes back any localhost or 192.168.x origin with credentials on.
 * docker-compose.yml sets NODE_ENV: production for the backend today, so this
 * covers a future deploy that forgets the variable rather than a live hole. An
 * allowance this wide should need someone to ask for it, not merely the absence
 * of a denial.
 */
const isDevelopmentOrigin = (origin: string): boolean => {
  if (process.env.NODE_ENV !== 'development') return false;

  try {
    const { hostname } = new URL(origin);
    return hostname === 'localhost' || hostname.startsWith('192.168.');
  } catch {
    return false;
  }
};

const corsHandler = (trustedOrigins: string[]) =>
  cors({
    origin: (origin) => {
      if (!origin || isDevelopmentOrigin(origin)) {
        return origin;
      }

      /*
       * Full-origin equality, never a prefix. The old `origin.startsWith(trusted)`
       * turned every trusted origin into a prefix, so
       * `https://gfconseiletformation.fr.evil.example` was echoed back as its own
       * allowed origin with credentials on, which is a credentialed cross-origin
       * read of the whole API. Verified against production before this change.
       */
      for (const trusted of trustedOrigins) {
        if (origin === trusted) return origin;
      }

      return null;
    },
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'x-trpc-source'],
  });

export default corsHandler;
