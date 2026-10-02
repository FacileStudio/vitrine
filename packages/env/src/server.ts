import z from "zod";
import { baseSchema } from "./base";

const MinioEnvSchema = z.object({
  STORAGE_DRIVER: z.literal("s3"),
  MINIO_ROOT_USER: z.string(),
  MINIO_ROOT_PASSWORD: z.string(),
  MINIO_BUCKET_NAME: z.string(),
  MINIO_ENDPOINT: z.url(),
  MINIO_PUBLIC_URL: z.url(),
});

const FsEnvSchema = z.object({
  STORAGE_DRIVER: z.literal("fs"),
  STORAGE_PATH: z.string().default('./storage'),
  STORAGE_PUBLIC_URL: z.string().url().optional(),
});

export const storageEnvSchema = z.discriminatedUnion("STORAGE_DRIVER", [MinioEnvSchema, FsEnvSchema]);

export const serverEnvSchema = z.intersection(
  baseSchema.extend({
    PORT: z.coerce.number().default(3001),
    TRUSTED_ORIGINS: z.string().transform((s) => s.split(',').map((u) => u.trim())),

    ENCRYPTION_SECRET: z.string().min(32),

    // Domain the API sets the auth cookie on. Must cover both the API and the
    // frontend (e.g. "localhost" in dev, "example.com" for api.example.com + example.com).
    COOKIE_DOMAIN: z.string().min(1),

    BACKEND_URL: z.string().optional().default('http://localhost:3001'),

    CLIENT_CONTENT_DIR: z.string().default('../client/app/[locale]'),

    LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).optional(),
    LOGTAIL_TOKEN: z.string().optional(),
  }),
  storageEnvSchema,
);

export type ServerEnv = z.infer<typeof serverEnvSchema>;
