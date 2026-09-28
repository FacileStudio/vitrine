import { z } from 'zod';

const localized = <T extends z.ZodType>(value: T) =>
  z.object({ en: value, fr: value, es: value, de: value });

const hexColor = z.string().regex(/^#[0-9a-fA-F]{6}$/);

type Localized<T> = { en: T; fr: T; es: T; de: T };

// written out rather than z.infer: inferred types turn every field optional in non-strict consumers like the backoffice
export interface StudioMember {
  slug: string;
  name: string;
  role: Localized<string>;
  description: Localized<string>;
  bio: Localized<string>;
  model: string;
  scale: number;
  roughness: number;
  metalness: number;
  hair: string | null;
  rotation: [number, number, number];
  highlight: string;
  socials: Array<{ label: string; href: string }>;
  labels: Localized<string[]>;
  projects: string[];
  suite: boolean;
  facts: Localized<string[]>;
}

export const memberSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  role: localized(z.string().min(1)),
  description: localized(z.string()),
  bio: localized(z.string()),
  model: z.string().min(1),
  scale: z.number().positive(),
  roughness: z.number().min(0).max(1),
  metalness: z.number().min(0).max(1),
  hair: hexColor.nullable(),
  rotation: z.tuple([z.number(), z.number(), z.number()]),
  highlight: hexColor,
  socials: z.array(z.object({ label: z.string().min(1), href: z.string().url() })),
  labels: localized(z.array(z.string().min(1))),
  projects: z.array(z.string()),
  suite: z.boolean(),
  facts: localized(z.array(z.string().min(1))),
});
