import { Hono } from 'hono';
import { FsStorageService } from '@repo/storage';

const ALLOWED_IMAGE_TYPES = [
  {
    mime: 'image/png',
    ext: 'png',
    sig: (b: Uint8Array) =>
      b.length >= 8 &&
      b[0] === 0x89 &&
      b[1] === 0x50 &&
      b[2] === 0x4e &&
      b[3] === 0x47,
  },
  {
    mime: 'image/jpeg',
    ext: 'jpg',
    sig: (b: Uint8Array) => b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff,
  },
  {
    mime: 'image/gif',
    ext: 'gif',
    sig: (b: Uint8Array) =>
      b.length >= 4 && b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x38,
  },
  {
    mime: 'image/webp',
    ext: 'webp',
    sig: (b: Uint8Array) =>
      b.length >= 12 &&
      b[0] === 0x52 &&
      b[1] === 0x49 &&
      b[2] === 0x46 &&
      b[3] === 0x46 &&
      b[8] === 0x57 &&
      b[9] === 0x45 &&
      b[10] === 0x42 &&
      b[11] === 0x50,
  },
];

export function createStorageHandler(storage: FsStorageService, secret: string) {
  const app = new Hono();

  app.put('/upload/*', async (c) => {
    const key = c.req.path.slice('/storage/upload/'.length);
    const token = c.req.query('token');
    const expires = Number(c.req.query('expires'));

    if (!token || !expires || !key) {
      return c.json({ error: 'Missing token, expires, or key' }, 400);
    }

    const normalizedKey = FsStorageService.normalizeKey(key);

    if (!FsStorageService.verifyToken(normalizedKey, expires, token, secret)) {
      return c.json({ error: 'Invalid or expired token' }, 403);
    }

    const contentLength = Number(c.req.header('content-length') || 0);
    if (contentLength > storage.maxUploadSize) {
      return c.json({ error: `File too large (max ${storage.maxUploadSize} bytes)` }, 413);
    }

    const body = await c.req.arrayBuffer();
    if (body.byteLength > storage.maxUploadSize) {
      return c.json({ error: `File too large (max ${storage.maxUploadSize} bytes)` }, 413);
    }

    const bytes = new Uint8Array(body);
    const detected = ALLOWED_IMAGE_TYPES.find((t) => t.sig(bytes));
    if (!detected) {
      return c.json({ error: 'Only PNG, JPEG, GIF and WebP images are accepted' }, 415);
    }
    const keyExt = normalizedKey.split('.').pop()?.toLowerCase();
    if (keyExt !== detected.ext) {
      return c.json({ error: `File content does not match the .${keyExt} extension` }, 400);
    }

    const contentType = c.req.header('content-type');
    const url = await storage.handleUpload(normalizedKey, body, contentType);

    return c.json({ url }, 200);
  });

  app.get('/files/*', async (c) => {
    const key = c.req.path.slice('/storage/files/'.length);
    if (!key) return c.notFound();
    const res = await storage.serveFile(key);
    res.headers.set('X-Content-Type-Options', 'nosniff');
    return res;
  });

  return app;
}
