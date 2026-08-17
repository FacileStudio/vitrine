import z from "zod";
import { baseSchema } from "./base";

export const SMTPEnvSchema = baseSchema.extend({
    SMTP_HOST: z.string().nonempty(),
    SMTP_PORT: z.number().int().positive(),
    SMTP_USER: z.string().nonempty(),
    SMTP_PASS: z.string().nonempty(),
    SMTP_SECURE: z.boolean().optional().default(false),
    SMTP_DISPLAY_NAME: z.string().nonempty()
})

export type SMTPEnv = z.infer<typeof SMTPEnvSchema>;
