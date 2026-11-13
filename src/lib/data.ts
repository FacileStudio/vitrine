import type { Messages } from "$lib/i18n/fr";

export type ServiceId = keyof Messages["services"];
export type ProjectSlug = keyof Messages["projects"];
export type ToolId = keyof Messages["tools"];
export type ProjectCategory = Exclude<keyof Messages["projectCategories"], "all">;
export type SuiteCategory = Exclude<keyof Messages["suiteCategories"], "all">;

export interface ServiceItem {
  id: ServiceId;
  icon: string;
}

export interface ProjectGalleryImage {
  src: string;
  featured?: boolean;
}

export interface ClientProject {
  slug: ProjectSlug;
  name: string;
  client: string;
  categories: ProjectCategory[];
  year: string;
  cover: string;
  stack: string[];
  link?: string;
  gallery: ProjectGalleryImage[];
}

export interface ToolItem {
  id: ToolId;
  name: string;
  icon: string;
  category: SuiteCategory;
  url?: string;
  githubUrl?: string;
  isNew?: boolean;
}

export const STUDIO_SERVICES: ServiceItem[] = [
  { id: "showcase", icon: "solar:monitor-bold-duotone" },
  { id: "apps", icon: "solar:code-square-bold-duotone" },
  { id: "branding", icon: "solar:palette-bold-duotone" },
  { id: "devops", icon: "solar:server-square-bold-duotone" },
];

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    slug: "marcel",
    name: "Marcel",
    client: "Marcel Productivity",
    categories: ["apps", "branding"],
    year: "2025",
    cover: "/images/projects/Marcel 3x3 dashboard.png",
    stack: ["SvelteKit", "Go", "PostgreSQL", "Tailwind CSS", "Figma"],
    link: "https://marcel.my/",
    gallery: [
      { src: "/images/projects/Marcel 3x3 dashboard.png", featured: true },
      { src: "/images/projects/Marcel 2x3 rebranding.png" },
      { src: "/images/projects/Marcel_1x2_phone.png" },
      { src: "/images/projects/Marcel 2x2 logo.png" },
      { src: "/images/projects/Marcel_2x1_onboarding.png" },
      { src: "/images/projects/Marcel_2x2_calendar.png" },
    ],
  },
  {
    slug: "laura-herve",
    name: "Laura Hervé",
    client: "Laura Hervé Scénographie",
    categories: ["showcase"],
    year: "2025",
    cover: "/images/projects/LauraHerve.webp",
    stack: ["SvelteKit", "GSAP", "Tailwind CSS", "TypeScript"],
    gallery: [
      { src: "/images/projects/LauraHerve.webp", featured: true },
      { src: "/images/projects/LauraHerve_desktop.webp" },
      { src: "/images/projects/LauraHerve_mobile.webp" },
      { src: "/images/projects/LauraHerve_facade.webp" },
      { src: "/images/projects/Laura.webp" },
    ],
  },
  {
    slug: "projet-zero",
    name: "Projet Zéro",
    client: "Collectif Zéro",
    categories: ["3d", "showcase"],
    year: "2025",
    cover: "/images/projects/ProjetZero_cover.png",
    stack: ["SvelteKit", "Three.js", "GLSL Shaders", "PostgreSQL"],
    gallery: [
      { src: "/images/projects/ProjetZero_cover.png", featured: true },
      { src: "/images/projects/ProjetZero_reveal.webp" },
      { src: "/images/projects/Brain.h.webp" },
      { src: "/images/projects/bubbles.webp" },
      { src: "/images/projects/zap.webp" },
    ],
  },
  {
    slug: "bulle",
    name: "Bulle",
    client: "Facile Studio R&D",
    categories: ["apps"],
    year: "2025",
    cover: "/images/projects/Bulle.webp",
    stack: ["SvelteKit", "Go", "Docker", "WebAssembly", "Matrix E2EE"],
    link: "https://bulle.facile.studio",
    gallery: [
      { src: "/images/projects/Bulle.webp", featured: true },
      { src: "/images/projects/Brain.h.webp" },
      { src: "/images/projects/bubbles.webp" },
    ],
  },
  {
    slug: "evelyne-crea",
    name: "Évelyne Création",
    client: "Atelier Évelyne",
    categories: ["showcase", "branding"],
    year: "2024",
    cover: "/images/projects/EvelyneCrea.webp",
    stack: ["SvelteKit", "Tailwind CSS", "TypeScript"],
    gallery: [
      { src: "/images/projects/EvelyneCrea.webp", featured: true },
      { src: "/images/projects/Pavements.webp" },
      { src: "/images/projects/Green.webp" },
      { src: "/images/projects/EvelyneCrea_harmonie.webp" },
      { src: "/images/projects/EvelyneCrea_temple.webp" },
      { src: "/images/projects/EvelyneCrea_escaliers.webp" },
    ],
  },
  {
    slug: "retro-festival",
    name: "Rétro Festival",
    client: "Association Rétro Culture",
    categories: ["branding", "showcase"],
    year: "2024",
    cover: "/images/projects/RetroFestival.webp",
    stack: ["SvelteKit", "Tailwind CSS", "Go", "Stripe"],
    gallery: [
      { src: "/images/projects/RetroFestival.webp", featured: true },
      { src: "/images/projects/painting.webp" },
      { src: "/images/projects/Black&White.webp" },
      { src: "/images/projects/Mont-k.webp" },
      { src: "/images/projects/Gian.webp" },
    ],
  },
];

export const SUITE_TOOLS: ToolItem[] = [
  {
    id: "bulle",
    name: "Bulle",
    icon: "solar:smile-circle-bold-duotone",
    category: "agent",
    url: "https://bulle.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Bulle",
    isNew: true,
  },
  {
    id: "prisme",
    name: "Prisme",
    icon: "solar:chat-round-bold-duotone",
    category: "productivity",
    url: "https://prisme.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Prisme",
    isNew: true,
  },
  {
    id: "courrier",
    name: "Courrier",
    icon: "solar:letter-opened-bold-duotone",
    category: "productivity",
    url: "https://courrier.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Courrier",
  },
  {
    id: "agenda",
    name: "Agenda",
    icon: "solar:calendar-add-bold-duotone",
    category: "productivity",
    url: "https://agenda.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Agenda",
  },
  {
    id: "echo",
    name: "Echo",
    icon: "solar:videocamera-record-bold-duotone",
    category: "productivity",
    url: "https://echo.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Echo",
  },
  {
    id: "feuilles",
    name: "Feuilles",
    icon: "solar:table-minimalistic-bold-duotone",
    category: "productivity",
    url: "https://feuilles.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Feuilles",
    isNew: true,
  },
  {
    id: "docs",
    name: "Docs",
    icon: "solar:documents-bold-duotone",
    category: "productivity",
    url: "https://docs.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Docs",
    isNew: true,
  },
  {
    id: "toile",
    name: "Toile",
    icon: "solar:tablet-bold-duotone",
    category: "productivity",
    url: "https://toile.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Toile",
    isNew: true,
  },
  {
    id: "nuage",
    name: "Nuage",
    icon: "solar:cloud-bold-duotone",
    category: "infra",
    url: "https://nuage.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Nuage",
  },
  {
    id: "opus",
    name: "Opus",
    icon: "solar:slider-vertical-minimalistic-bold-duotone",
    category: "productivity",
    url: "https://opus.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Opus",
  },
  {
    id: "sablier",
    name: "Sablier",
    icon: "solar:hourglass-bold-duotone",
    category: "productivity",
    url: "https://sablier.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Sablier",
  },
  {
    id: "pastille",
    name: "Pastille",
    icon: "solar:circle-dot-bold-duotone",
    category: "hardware",
    url: "https://pastille.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Pastille",
    isNew: true,
  },
  {
    id: "fusible",
    name: "Fusible",
    icon: "solar:cpu-bolt-bold-duotone",
    category: "hardware",
    url: "https://fusible.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Fusible",
    isNew: true,
  },
  {
    id: "vision",
    name: "Vision",
    icon: "solar:panorama-bold-duotone",
    category: "business",
    url: "https://vision.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Vision",
  },
  {
    id: "glouton",
    name: "Glouton",
    icon: "solar:magnet-wave-bold-duotone",
    category: "business",
    url: "https://glouton.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Glouton",
  },
  {
    id: "ardoise",
    name: "Ardoise",
    icon: "solar:bill-list-bold-duotone",
    category: "business",
    url: "https://ardoise.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Ardoise",
  },
  {
    id: "plume",
    name: "Plume",
    icon: "solar:pen-new-square-bold-duotone",
    category: "business",
    url: "https://plume.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Plume",
  },
  {
    id: "casier",
    name: "Casier",
    icon: "solar:key-minimalistic-square-bold-duotone",
    category: "infra",
    url: "https://casier.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Casier",
  },
  {
    id: "capsule",
    name: "Capsule",
    icon: "solar:pill-bold-duotone",
    category: "infra",
    url: "https://capsule.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Capsule",
  },
  {
    id: "scribe",
    name: "Scribe",
    icon: "solar:microphone-2-bold-duotone",
    category: "agent",
    url: "https://scribe.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Scribe",
  },
  {
    id: "journal",
    name: "Journal",
    icon: "solar:notebook-bold-duotone",
    category: "infra",
    url: "https://journal.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Journal",
  },
  {
    id: "sonde",
    name: "Sonde",
    icon: "solar:radar-bold-duotone",
    category: "infra",
    url: "https://sonde.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Sonde",
  },
  {
    id: "registre",
    name: "Registre",
    icon: "solar:key-square-bold-duotone",
    category: "infra",
    url: "https://sso.facile.studio",
    githubUrl: "https://github.com/FacileStudio/Registre",
  },
  {
    id: "boite",
    name: "Boîte",
    icon: "solar:box-minimalistic-bold-duotone",
    category: "infra",
    url: "https://boite.facile.studio",
    githubUrl: "https://github.com/FacileStudio/boite",
  },
  {
    id: "place",
    name: "Place",
    icon: "solar:cup-hot-bold-duotone",
    category: "productivity",
    url: "https://place.facile.studio",
    isNew: true,
  },
];

export const SUITE_CATEGORIES = ["all", "agent", "hardware", "business", "productivity", "infra"] as const;

export const PROJECT_CATEGORIES = ["all", "showcase", "apps", "branding", "3d"] as const;

export const NAV_LINKS = [
  { id: "services", icon: "solar:ruler-cross-pen-bold-duotone" },
  { id: "projets", icon: "solar:panorama-bold-duotone" },
  { id: "suite", icon: "solar:widget-2-bold-duotone" },
  { id: "ecosystem", icon: "solar:structure-bold-duotone" },
  { id: "bulle", icon: "solar:smile-circle-bold-duotone" },
  { id: "hardware", icon: "solar:circle-dot-bold-duotone" },
] as const;

export const SUITE_SECTIONS: readonly string[] = ["suite", "ecosystem", "bulle"];

export const ACCOUNT_URL = "https://sso.facile.studio/spaces";

/**
 * The studio services with their copy in the given catalog.
 */
export function localizeServices(t: Messages) {
  return STUDIO_SERVICES.map((service) => ({ ...service, ...t.services[service.id] }));
}

/**
 * A client project with its copy, gallery captions and alt texts in the given catalog.
 */
export function localizeProject(project: ClientProject, t: Messages) {
  const text = t.projects[project.slug];
  return {
    ...project,
    ...text,
    gallery: project.gallery.map((image, index) => ({ ...image, ...text.gallery[index] })),
  };
}

/**
 * The Suite tools with their copy in the given catalog.
 */
export function localizeTools(t: Messages) {
  return SUITE_TOOLS.map((tool) => ({ ...tool, ...t.tools[tool.id] }));
}
