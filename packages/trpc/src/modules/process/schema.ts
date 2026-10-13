import { z } from 'zod';

const localized = <T extends z.ZodType>(value: T) =>
  z.object({ en: value, fr: value, es: value, de: value });

type Localized<T> = { en: T; fr: T; es: T; de: T };

// written out rather than z.infer: inferred types turn every field optional in non-strict consumers like the backoffice
export interface ProcessStep {
  slug: string;
  image: string;
  title: Localized<string>;
  duration: Localized<string>;
  keywords: Localized<string>;
  tagline: Localized<string>;
  text: Localized<string>;
  items: Localized<string[]>;
  team: string[];
}

export const stepSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  image: z.string(),
  title: localized(z.string().min(1)),
  duration: localized(z.string()),
  keywords: localized(z.string()),
  tagline: localized(z.string()),
  text: localized(z.string()),
  items: localized(z.array(z.string().min(1))),
  team: z.array(z.string()),
});
