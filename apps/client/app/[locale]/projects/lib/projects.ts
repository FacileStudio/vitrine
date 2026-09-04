import type { StorySection } from "@/components/facile/story/types";
import studio from "../../studio/studio.json";
import type { CustomCoverId } from "../components/CustomCoverFactory";

export interface Project {
    slug: string;
    name: string;
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
    customCover?: CustomCoverId;
}

export type Member = (typeof studio)[number];

// projects now come from the database (see lib/projects-server.ts) rather than
// a static import, so every helper below takes the resolved list explicitly
// instead of closing over a module-level constant
export const findProject = (projects: Project[], slug: string) =>
    projects.find((p) => p.slug === slug);

// the shelf and the story agree on one order — DB insertion order, which the
// seed writes in projects.json order — so the "03 / 09" counter on a story
// page matches the card the visitor clicked
export const projectIndex = (projects: Project[], slug: string) =>
    projects.findIndex((p) => p.slug === slug);

// the list filter speaks in the four things we sell, while projects stay
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

export const projectsIn = (projects: Project[], c: Category | null) =>
    c ? projects.filter((p) => inCategory(p, c)) : projects;

export const member = (slug: string): Member | undefined => studio.find((m) => m.slug === slug);

export const team = (p: Project): Member[] =>
    p.team
        .map((slug) => studio.find((m) => m.slug === slug))
        .filter((m): m is Member => m != null);
