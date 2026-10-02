import { z } from 'zod';

const localized = <T extends z.ZodType>(value: T) =>
  z.object({ en: value, fr: value, es: value, de: value });

const text = localized(z.string());

const swatchSchema = z.object({
  label: text,
  hex: z.string().min(1),
  note: text.optional(),
  rgb: z.string().optional(),
  cmyk: z.string().optional(),
  hsv: z.string().optional(),
  textColor: z.string().optional(),
});

const tileSchema = z.object({
  label: text,
  text: text.optional(),
  icon: z.string().optional(),
});

const blockSchema = z.object({
  type: z.string().min(1),
  media: z.array(z.union([z.string(), z.number()])).optional(),
  eyebrow: text.optional(),
  title: text.optional(),
  text: text.optional(),
  tags: z.array(text).optional(),
  logos: z.array(z.string()).optional(),
  tiles: z.array(tileSchema).optional(),
  link: z.string().optional(),
  linkLabel: text.optional(),
  effect: z.string().optional(),
  smalls: z.enum(['top', 'bottom']).optional(),
  cols: z.number().int().positive().optional(),
  font: z.string().optional(),
  fontFamily: z.string().optional(),
  description: text.optional(),
  secondFont: z.string().optional(),
  secondFontFamily: z.string().optional(),
  secondDescription: text.optional(),
  swatches: z.array(swatchSchema).optional(),
});

const sectionSchema = z.object({
  title: text.optional(),
  by: z.array(z.string()).optional(),
  blocks: z.array(blockSchema),
  layout: z.lazy(() => layoutSchema),
  hasLayout: z.boolean(),
});

const box = {
  id: z.string().min(1),
  x: z.number().int().min(0),
  y: z.number().int().min(0),
  w: z.number().int().min(1).max(4),
  h: z.number().int().min(1).max(3),
};

const gridItemSchema = z.discriminatedUnion('kind', [
  // empty until a file is picked, so a placeholder dropped from the library does not block the save
  z.object({ ...box, kind: z.enum(['image', 'video']), src: z.string() }),
  z.object({ ...box, kind: z.literal('note'), title: text.optional(), text: text.optional() }),
  z.object({ ...box, kind: z.literal('text'), text: text.optional() }),
  z.object({ ...box, kind: z.literal('palette'), swatches: z.array(swatchSchema) }),
  z.object({
    ...box,
    kind: z.literal('typography'),
    font: z.string().optional(),
    fontFamily: z.string().optional(),
    description: text.optional(),
    secondFont: z.string().optional(),
    secondFontFamily: z.string().optional(),
    secondDescription: text.optional(),
  }),
  z.object({ ...box, kind: z.literal('tiles'), tiles: z.array(tileSchema) }),
  z.object({ ...box, kind: z.enum(['cover', 'intro', 'end']) }),
]);

const layoutSchema = z.object({
  cols: z.number().int().min(1),
  items: z.array(gridItemSchema),
});

// every section changed since the last save, plus the shared bucket, written together
export const storyLayoutSchema = z.object({
  slug: z.string(),
  sections: z.array(
    z.object({
      position: z.number().int().min(0),
      layout: layoutSchema,
      by: z.array(z.string()),
    })
  ),
  bucket: z.array(gridItemSchema),
});

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  weeks: z.number().int().positive(),
  link: z.string().url().optional(),
  image: z.string(),
  video: z.string().optional(),
  coverEffect: z.string().optional(),
  gallery: z.array(z.string().min(1)),
  description: text,
  metaDescription: text,
  techStack: z.array(z.string()),
  date: z.string().min(1),
  services: z.array(z.string()),
  team: z.array(z.string()),
  notes: z.array(text),
  story: z.array(sectionSchema),
  bucket: z.array(gridItemSchema),
});

// the info card saves project fields only, the story and bucket are saved from the section pages
export const projectInfoSchema = projectSchema.omit({ story: true, bucket: true });
