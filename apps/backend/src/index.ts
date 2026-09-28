import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { trpcServer } from '@hono/trpc-server';
import { appRouter, createContext } from '@repo/trpc';
import { AuthManager } from '@repo/auth';
import { createStorage } from '@repo/storage';
import { serverEnvSchema } from '@repo/env';
import { logger } from '@/lib/logger';
import { loggerMiddleware } from './middleware/logger.middleware';
import { rateLimit } from './middleware/rate-limit.middleware';

const env = serverEnvSchema.parse(process.env);

const app = new Hono();

const authManager = new AuthManager({
  encryptionSecret: env.ENCRYPTION_SECRET,
});

const storage =
  env.STORAGE_DRIVER === 's3'
    ? createStorage({
        driver: 's3',
        endpoint: env.MINIO_ENDPOINT,
        accessKeyId: env.MINIO_ROOT_USER,
        secretAccessKey: env.MINIO_ROOT_PASSWORD,
        bucket: env.MINIO_BUCKET_NAME,
        publicUrl: env.MINIO_PUBLIC_URL,
      })
    : createStorage({
        driver: 'fs',
        storagePath: env.STORAGE_PATH,
        publicUrl: env.STORAGE_PUBLIC_URL ?? `http://localhost:${env.PORT}`,
        encryptionSecret: env.ENCRYPTION_SECRET,
      });

app.use(
  '*',
  cors({
    origin: env.TRUSTED_ORIGINS,
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'x-trpc-source'],
  })
);
app.use('*', loggerMiddleware);
// one visit per page load is normal, anything far above that is someone inflating the stats
app.use('/trpc/*', rateLimit({ procedure: 'statistics.trackVisit', max: 30, windowMs: 10 * 60 * 1000 }));

app.use(
  '/trpc/*',
  trpcServer({
    router: appRouter,
    createContext: async (opts) =>
      createContext({
        ...opts,
        authManager,
        storage,
        env,
        logger,
      }),
  })
);

app.get('/', (c) => c.json({ message: 'tRPC Backend' }));

const port = env.PORT;
logger.info({ message: `tRPC Server running`, url: `http://localhost:${port}/trpc` });

export default { port, fetch: app.fetch };
