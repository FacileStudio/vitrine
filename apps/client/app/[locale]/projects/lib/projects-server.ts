import { cache } from "react";
import { createUniversalTrpcClient } from "@repo/trpc-client";
import type { AppRouter } from "@repo/trpc";
import type { BlockKind as ClientBlockKind, StoryBlock, StorySection } from "@/components/facile/story/types";
import type { Project } from "./projects";

// server-only: pulls from the tRPC backend, never import this from a
// 'use client' component. Consumers get the resolved list through
// projects-context.tsx (provided once in layout.tsx) or by calling
// getAllProjects() directly from a server component.
const trpc = createUniversalTrpcClient<AppRouter>({
    baseUrl: process.env.API_URL ?? "http://localhost:3001/trpc",
    getToken: () => null,
    onUnauthorized: () => {},
});

type DbProject = Awaited<ReturnType<typeof trpc.project.list.query>>[number];
type DbBlock = DbProject["sections"][number]["blocks"][number];

// the relational CoverEffect enum's runtime values are the camelCase Prisma
// identifiers (DB storage uses @map for the hyphenated form) — the client's
// CoverEffect type is the hyphenated string the CSS/asset code was authored
// against, so this is the one place that translates between the two
const EFFECT_TO_CLIENT: Record<string, string> = {
    marcel: "marcel",
    projetZeroPillar: "projet-zero-pillar",
};

const toClientBlock = (b: DbBlock): StoryBlock => ({
    type: b.type as unknown as ClientBlockKind,
    media: b.media,
    eyebrow: b.eyebrow ?? undefined,
    title: b.title ?? undefined,
    text: b.text ?? undefined,
    tags: b.tags,
    logos: b.logos,
    link: b.link ?? undefined,
    linkLabel: b.linkLabel ?? undefined,
    effect: b.effect ? (EFFECT_TO_CLIENT[b.effect] as StoryBlock["effect"]) : undefined,
    smalls: b.smalls ?? undefined,
    cols: b.cols ?? undefined,
    font: b.font ?? undefined,
    fontFamily: b.fontFamily ?? undefined,
    description: b.description ?? undefined,
    secondFont: b.secondFont ?? undefined,
    secondFontFamily: b.secondFontFamily ?? undefined,
    secondDescription: b.secondDescription ?? undefined,
    swatches: b.swatches.length
        ? b.swatches.map((s) => ({
              label: s.label,
              hex: s.hex,
              note: s.note ?? undefined,
              rgb: s.rgb ?? undefined,
              cmyk: s.cmyk ?? undefined,
              hsv: s.hsv ?? undefined,
              textColor: s.textColor ?? undefined,
          }))
        : undefined,
    tiles: b.tiles.length
        ? b.tiles.map((t) => ({ label: t.label, text: t.text ?? undefined, icon: t.icon ?? undefined }))
        : undefined,
    people: b.people.length
        ? b.people.map((p) => ({
              name: p.name,
              role: p.role,
              avatar: p.avatar,
              highlight: p.highlight ?? undefined,
              model: p.model ?? undefined,
              scale: p.scale ?? undefined,
              roughness: p.roughness ?? undefined,
              hair: p.hair ?? undefined,
          }))
        : undefined,
});

const toClientSection = (s: DbProject["sections"][number]): StorySection => ({
    title: s.title ?? undefined,
    by: s.by.length ? s.by : undefined,
    blocks: s.blocks.map(toClientBlock),
});

const toClientProject = (p: DbProject): Project => ({
    slug: p.slug,
    name: p.name,
    weeks: p.weeks,
    link: p.link ?? undefined,
    image: p.image,
    video: p.video ?? undefined,
    gallery: p.gallery,
    description: p.description,
    techStack: p.techStack,
    date: p.date,
    challenge: p.challenge ?? undefined,
    services: p.services,
    team: p.team,
    notes: p.notes,
    story: p.sections.length ? p.sections.map(toClientSection) : undefined,
    customCover: p.customCover as Project["customCover"],
});

// cache() dedupes this per request, so every server component that needs the
// list during the same render (layout, page, generateMetadata, sitemap) shares
// one call to the backend instead of one each
export const getAllProjects = cache(async (): Promise<Project[]> => {
    const projects = await trpc.project.list.query();
    return projects.map(toClientProject);
});

export const getProject = cache(async (slug: string): Promise<Project | undefined> => {
    try {
        const project = await trpc.project.get.query({ slug });
        return toClientProject(project);
    } catch {
        return undefined;
    }
});
