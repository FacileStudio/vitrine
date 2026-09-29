import { cache } from "react";
import type { CoverEffect, StorySection } from "@/components/facile/story/types";
import type { Localized } from "@/lib/i18n/localize";
import { trpc } from "@/lib/trpc";

export const SERVICES = [
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
export const fetchProjects = cache(async () => (await trpc.projects.list.query()) as unknown as Project[]);

export const findProject = (projects: Project[], slug: string) => projects.find((p) => p.slug === slug);

export const projectIndex = (projects: Project[], slug: string) => projects.findIndex((p) => p.slug === slug);

export const CATEGORIES = {
    appDev: ["appDevelopment", "desktopDevelopment"],
    showcaseWebsite: ["webDevelopment"],
    branding: ["brandIdentity", "artDirection", "photography"],
    webDesign: ["productDesign", "uiUxDesign", "designSystem", "redesign"],
} as const satisfies Record<string, readonly Service[]>;

export type Category = keyof typeof CATEGORIES;

export const categories = Object.keys(CATEGORIES) as Category[];

export const inCategory = (p: Project, c: Category) =>
    p.services.some((s) => (CATEGORIES[c] as readonly Service[]).includes(s));

export const projectsIn = (projects: Project[], c: Category | null) =>
    c ? projects.filter((p) => inCategory(p, c)) : projects;
