import type { StorySection } from "./story";
import projects from "../projects.json";
import studio from "../../studio/studio.json";

export interface Project {
    slug: string;
    name: string;
    tier: number;
    weeks: number;
    link?: string;
    image: string;
    video?: string;
    gallery: string[];
    description: string;
    techStack?: string[];
    date: string;
    challenge?: string;
    services: string[];
    team: string[];
    notes: string[];
    story?: StorySection[];
}

export type Member = (typeof studio)[number];

export const allProjects = projects as Project[];

export const findProject = (slug: string) => allProjects.find((p) => p.slug === slug);

// the shelf and the story agree on one order — projects.json order — so the
// "03 / 09" counter on a story page matches the card the visitor clicked
export const projectIndex = (slug: string) => allProjects.findIndex((p) => p.slug === slug);

// the list filter speaks in the four things we sell, while projects.json stays
// authored in finer-grained services — one map keeps the two vocabularies apart
export const CATEGORIES = {
    "App dev": ["App development", "Desktop development"],
    "Showcase website": ["Web development"],
    "Branding": ["Brand identity", "Art direction", "Photography"],
    "Web design": ["Product design", "UI/UX design", "Design system", "ReDesign"],
} as const;

export type Category = keyof typeof CATEGORIES;

export const categories = Object.keys(CATEGORIES) as Category[];

export const inCategory = (p: Project, c: Category) =>
    p.services.some((s) => (CATEGORIES[c] as readonly string[]).includes(s));

export const projectsIn = (c: Category | null) =>
    c ? allProjects.filter((p) => inCategory(p, c)) : allProjects;

export const isVideoFile = (src: string) => /\.(mp4|webm|ogg|mov)$/i.test(src);

export const team = (p: Project): Member[] =>
    p.team
        .map((slug) => studio.find((m) => m.slug === slug))
        .filter((m): m is Member => m != null);
