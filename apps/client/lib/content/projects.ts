import { cache } from "react";
import type { CoverEffect, StorySection } from "@/components/facile/story/types";
import type { Localized } from "@/lib/i18n/localize";
import { locales } from "@/lib/i18n/locales";
import { trpc } from "@/lib/trpc";

const SERVICES = [
    "appDevelopment",
    "webDevelopment",
    "desktopDevelopment",
    "frontendDevelopment",
    "brandIdentity",
    "artDirection",
    "photography",
    "productDesign",
    "uiUxDesign",
    "designSystem",
    "redesign",
    "motionDesign",
    "transformation",
] as const;

export type Service = (typeof SERVICES)[number];

export const SERVICE_ICONS: Record<Service, string> = {
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

const reachable = async (src: string) => {
    if (!/^https?:\/\//.test(src))
        return true;

    try {
        return (await fetch(src, { method: "HEAD", signal: AbortSignal.timeout(3000) })).ok;
    } catch {
        return false;
    }
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
