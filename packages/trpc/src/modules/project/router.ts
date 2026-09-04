import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { BlockKind, CoverEffect, BlockSmalls } from '@repo/database';
import { router, publicProcedure, adminProcedure } from '../../trpc';
import projectService from './service';

const swatchSchema = z.object({
  label: z.string(),
  hex: z.string(),
  note: z.string().optional(),
  rgb: z.string().optional(),
  cmyk: z.string().optional(),
  hsv: z.string().optional(),
  textColor: z.string().optional(),
});

const tileSchema = z.object({
  label: z.string(),
  text: z.string().optional(),
  icon: z.string().optional(),
});

const personSchema = z.object({
  name: z.string(),
  role: z.string(),
  avatar: z.string(),
  highlight: z.string().optional(),
  model: z.string().optional(),
  scale: z.number().optional(),
  roughness: z.number().optional(),
  hair: z.string().optional(),
});

const blockSchema = z.object({
  type: z.nativeEnum(BlockKind),
  media: z.array(z.string()).default([]),
  eyebrow: z.string().optional(),
  title: z.string().optional(),
  text: z.string().optional(),
  tags: z.array(z.string()).default([]),
  logos: z.array(z.string()).default([]),
  link: z.string().optional(),
  linkLabel: z.string().optional(),
  effect: z.nativeEnum(CoverEffect).optional(),
  smalls: z.nativeEnum(BlockSmalls).optional(),
  cols: z.number().int().optional(),
  font: z.string().optional(),
  fontFamily: z.string().optional(),
  description: z.string().optional(),
  secondFont: z.string().optional(),
  secondFontFamily: z.string().optional(),
  secondDescription: z.string().optional(),
  swatches: z.array(swatchSchema).default([]),
  tiles: z.array(tileSchema).default([]),
  people: z.array(personSchema).default([]),
});

const sectionSchema = z.object({
  title: z.string().optional(),
  by: z.array(z.string()).default([]),
  blocks: z.array(blockSchema).default([]),
});

const projectFieldsSchema = z.object({
  slug: z.string(),
  customCover: z.string().optional(),
  name: z.string(),
  weeks: z.number().int(),
  tier: z.number().int().optional(),
  link: z.string().optional(),
  image: z.string(),
  video: z.string().optional(),
  gallery: z.array(z.string()).default([]),
  description: z.string(),
  techStack: z.array(z.string()).default([]),
  date: z.string(),
  challenge: z.string().optional(),
  services: z.array(z.string()).default([]),
  team: z.array(z.string()).default([]),
  notes: z.array(z.string()).default([]),
});

const createProjectSchema = projectFieldsSchema.extend({
  sections: z.array(sectionSchema).default([]),
});

const updateProjectSchema = z.object({
  slug: z.string(),
  data: projectFieldsSchema.partial().extend({
    sections: z.array(sectionSchema).optional(),
  }),
});

const slugSchema = z.object({ slug: z.string() });

export const projectRouter = router({
  list: publicProcedure.query(({ ctx }) => projectService.list(ctx.db)),

  get: publicProcedure.input(slugSchema).query(async ({ ctx, input }) => {
    const project = await projectService.getBySlug(ctx.db, input.slug);
    if (!project) {
      throw new TRPCError({ code: 'NOT_FOUND', message: `Project "${input.slug}" not found` });
    }
    return project;
  }),

  create: adminProcedure
    .input(createProjectSchema)
    .mutation(({ ctx, input }) => projectService.create(ctx.db, input)),

  update: adminProcedure
    .input(updateProjectSchema)
    .mutation(({ ctx, input }) => projectService.update(ctx.db, input.slug, input.data)),

  delete: adminProcedure
    .input(slugSchema)
    .mutation(({ ctx, input }) => projectService.remove(ctx.db, input.slug)),
});

export default projectRouter;
