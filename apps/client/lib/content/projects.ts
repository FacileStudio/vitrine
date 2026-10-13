import { cache } from "react";
import type { CoverEffect, StorySection } from "@/components/facile/story/types";
import type { Localized } from "@/lib/i18n/localize";
import { locales } from "@/lib/i18n/locales";
import { trpc } from "@/lib/trpc";

export const SERVICE_ICONS = {
    appDevelopment: "iconoir:smartphone-device",
    webDevelopment: "iconoir:globe",
    desktopDevelopment: "iconoir:computer",
    frontendDevelopment: "iconoir:code",
    brandIdentity: "iconoir:medal",
    artDirection: "iconoir:palette",
    photography: "iconoir:camera",
    productDesign: "iconoir:package",
    uiUxDesign: "iconoir:web-window",
    designSystem: "iconoir:component",
    redesign: "iconoir:refresh",
    motionDesign: "iconoir:cinema-old",
    transformation: "iconoir:rocket",
};

export type Service = keyof typeof SERVICE_ICONS;

export interface Project {
    slug: string;
    name: string;
    weeks: number;
    link?: string;
    image: string;
    video?: string;
    gallery: string[];
    description: Localized<string>;
    metaDescription: Localized<string>;
    techStack?: string[];
    date: string;
    services: Service[];
    team: string[];
    notes: Localized<string>[];
    story?: StorySection[];
    coverEffect?: CoverEffect;
}

// Project narrows services and block kinds to the site's own unions, which the API only knows as strings
const filled = (text: string | undefined) => Boolean(text?.trim());

// reachability of an image changes rarely, but every force-dynamic request used to HEAD every one of them; keep the verdict for a while
const REACHABLE_TTL = 10 * 60 * 1000;
const reachability = new Map<string, { ok: boolean; at: number }>();

const reachable = async (src: string) => {
    if (!/^https?:\/\//.test(src))
        return true;

    const hit = reachability.get(src);

    if (hit && Date.now() - hit.at < REACHABLE_TTL)
        return hit.ok;

    let ok = false;

    try {
        ok = (await fetch(src, { method: "HEAD", signal: AbortSignal.timeout(3000) })).ok;
    } catch {
        ok = false;
    }

    reachability.set(src, { ok, at: Date.now() });

    return ok;
};

const complete = async (p: Project) =>
    [p.name, p.image, p.date, ...locales.map((l) => p.description?.[l])].every(filled) && (await reachable(p.image));

export const fetchProjects = cache(async () => {
    const projects = (await trpc.projects.list.query()) as unknown as Project[];
    const shown = await Promise.all(projects.map(complete));

    return projects.filter((_, i) => shown[i]);
});

export const findProject = (projects: Project[], slug: string) => projects.find((p) => p.slug === slug);

export const projectIndex = (projects: Project[], slug: string) => projects.findIndex((p) => p.slug === slug);

const CATEGORIES = {
    appDev: ["appDevelopment", "desktopDevelopment"],
    showcaseWebsite: ["webDevelopment"],
    branding: ["brandIdentity", "artDirection", "photography"],
    webDesign: ["productDesign", "uiUxDesign", "designSystem", "redesign"],
} as const satisfies Record<string, readonly Service[]>;

export type Category = keyof typeof CATEGORIES;

export const categories = Object.keys(CATEGORIES) as Category[];

const inCategory = (p: Project, c: Category) =>
    p.services.some((s) => (CATEGORIES[c] as readonly Service[]).includes(s));

export const projectsIn = (projects: Project[], c: Category | null) =>
    c ? projects.filter((p) => inCategory(p, c)) : projects;
