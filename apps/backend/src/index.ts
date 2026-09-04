import { Hono } from 'hono';
import { loggerMiddleware } from './middleware/logger.middleware';
import env from './lib/env';
import { AuthManager } from '@repo/auth';
import { createStorage, FsStorageService } from '@repo/storage';
import corsHandler from './handlers/cors';
import { createStorageHandler } from './handlers/storage';
import trpcHandler from './handlers/trpc';
import { openApiHandler } from './handlers/openapi';
import { apiReference } from '@scalar/hono-api-reference';
import {
  createHealthCheckHandler,
  createLivenessHandler,
  createReadinessHandler,
} from './handlers/health';

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

app.use('*', corsHandler(env.TRUSTED_ORIGINS));
app.use('*', loggerMiddleware);

app.get('/openapi.json', openApiHandler);
app.get('/docs', apiReference({ url: '/openapi.json', pageTitle: 'Vitrine API' }));

if (storage instanceof FsStorageService) {
  app.route('/storage', createStorageHandler(storage, env.ENCRYPTION_SECRET));
}

app.get('/health', createHealthCheckHandler({ storage }));
app.get('/health/live', createLivenessHandler());
app.get('/health/ready', createReadinessHandler());

app.all(
  '/trpc/*',
  trpcHandler({
    authManager,
    storage,
    env,
  })
);

app.get('/', (c) => c.json({ message: 'Vitrine API' }));

const port = Number(env.PORT);

export default { port, fetch: app.fetch };
