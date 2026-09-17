import type { CoverEffect, StorySection } from "@/components/facile/story/types";
import type { Localized } from "@/lib/i18n/localize";
import projects from "@/app/[locale]/projects/projects.json";

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
    challenge?: Localized<string>;
    services: Service[];
    team: string[];
    notes: Localized<string>[];
    story?: StorySection[];
    coverEffect?: CoverEffect;
}

export const allProjects = projects as Project[];

export const findProject = (slug: string) => allProjects.find((p) => p.slug === slug);

export const projectIndex = (slug: string) => allProjects.findIndex((p) => p.slug === slug);

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

export const projectsIn = (c: Category | null) =>
    c ? allProjects.filter((p) => inCategory(p, c)) : allProjects;
