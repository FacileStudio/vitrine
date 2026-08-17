import z from "zod";
import { baseSchema } from "./base";

export const serverEnvSchema = baseSchema
  .extend({
    PORT: z.coerce.number().default(3001),
    FRONTEND_URL: z.string().url(),
    TRUSTED_ORIGINS: z.string().transform((s) => s.split(',').map((u) => u.trim())),

    ENCRYPTION_SECRET: z.string().min(32),

    STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
    STRIPE_WEBHOOK_SECRET: z.string().startsWith('whsec_'),

    STORAGE_DRIVER: z.enum(['s3', 'fs']).default('fs'),
    STORAGE_PATH: z.string().default('./storage'),
    STORAGE_PUBLIC_URL: z.string().url().optional(),

    MINIO_ROOT_USER: z.string().optional(),
    MINIO_ROOT_PASSWORD: z.string().optional(),
    MINIO_BUCKET_NAME: z.string().optional(),
    MINIO_ENDPOINT: z.string().url().optional(),
    MINIO_PUBLIC_URL: z.string().url().optional(),

    DISCORD_WEBHOOK_URL: z.string().url().optional(),

    BACKEND_URL: z.string().optional().default('http://localhost:3001'),

    LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).optional(),
    LOGTAIL_TOKEN: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.STORAGE_DRIVER === 's3') {
      const required = ['MINIO_ROOT_USER', 'MINIO_ROOT_PASSWORD', 'MINIO_BUCKET_NAME', 'MINIO_ENDPOINT'] as const;
      for (const key of required) {
        if (!data[key]) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `${key} is required when STORAGE_DRIVER=s3`,
            path: [key],
          });
        }
      }
    }
  });

export type ServerEnv = z.infer<typeof serverEnvSchema>;
