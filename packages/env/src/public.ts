import z from "zod";
import { baseSchema } from "./base";

export const publicEnvSchema = baseSchema.extend({
  VITE_API_URL: z.string().url(),
  STRIPE_PRICE_ID: z.string().optional(),
});

export type PublicEnv = z.infer<typeof publicEnvSchema>;
