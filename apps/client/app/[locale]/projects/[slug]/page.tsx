import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageCurtain from "@/components/facile/pageTransition";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/locales";
import { getBaseMetadata, siteUrl } from "@/lib/seo/metadata";
import ProjectStory from "../components/projectStory";
import { allProjects, findProject, projectIndex } from "../lib/projects";

type PageProps = {
    params: Promise<{ locale: string; slug: string }>;
};

const projectDescriptions: Record<string, string> = {
    waves: "Waves is a cross-platform music player built in Rust by Facile Studio. Real-time FFT audio visualization, Miller Column browser, and vim keybindings.",
    marcel: "Marcel is a wellbeing application by Facile Studio. Gamified habit tracking and task management, built with Svelte and Go.",
    "solais-intra": "Custom intranet application built by Facile Studio for Solaïs. Vue.js and TypeScript platform for team collaboration and document management.",
    "laura-herve": "Artist portfolio designed and built by Facile Studio. Typography-focused design with smooth transitions and responsive layouts.",
    evelynecrea: "Portfolio redesign by Facile Studio for a creative professional. Custom visual identity, animations, and organic navigation flow.",
    "projet-zero": "Projet Zero is a sci-fi RPG Minecraft server brand and showcase website by Facile Studio — a soldier-astronaut identity built around a single ancient blue energy, carried through the shop and battle-pass pages. Built with Next.js, React and TypeScript.",
    hottake: "Hottake is a community-driven music taste ranking platform by Facile Studio, with a curated, modern look built for music enthusiasts. Built with Next.js, React and GSAP.",
    "mont-k": "Mont-k is a UI/UX design exploration by Facile Studio — a clean, considered interface built to be handed straight to development.",
    "retro-festival": "RetroFestival is a retro-flavoured festival identity by Facile Studio, built around warm grain, vintage type and a poster-first attitude.",
    "Black&White": "A curated black and white photography showcase by Facile Studio.",
};

export const dynamicParams = false;

// every card on the shelf links here, so every project gets a route — the story
// builder falls back to an auto-laid-out one for projects with nothing authored
export function generateStaticParams() {
    return allProjects.flatMap((project) =>
        locales.map((locale) => ({
            locale,
            slug: project.slug,
        }))
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale, slug } = await params;
    const validLocale = isLocale(locale) ? locale : defaultLocale;
    const base = await getBaseMetadata(validLocale, `/projects/${slug}`);
    const project = findProject(slug);
    const projectName = project?.name ?? slug;
    const description = projectDescriptions[slug] ?? `${projectName} — a project by Facile Studio.`;

    return {
        ...base,
        title: projectName,
        description,
        openGraph: {
            ...base.openGraph,
            type: "article",
            title: `${projectName} | Facile Studio`,
            description,
            siteName: "Facile Studio",
        },
    };
}

export default async function LocaleProjectStoryPage({ params }: PageProps) {
    const { locale, slug } = await params;
    const validLocale = isLocale(locale) ? locale : defaultLocale;
    const project = findProject(slug);

    if (!project)
        notFound();

    const t = await getTranslations({ locale: validLocale, namespace: "seo.breadcrumb" });
    const description = projectDescriptions[slug] ?? `${project.name} — a project by Facile Studio.`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.name,
        description,
        url: `${siteUrl}/${validLocale}/projects/${slug}`,
        inLanguage: validLocale,
        creator: {
            "@type": "Organization",
            name: "Facile Studio",
            url: "https://facile.studio",
        },
        ...(project.techStack && {
            keywords: project.techStack.join(", "),
        }),
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: t("home"), item: `${siteUrl}/${validLocale}` },
            { "@type": "ListItem", position: 2, name: t("projects"), item: `${siteUrl}/${validLocale}/projects` },
            { "@type": "ListItem", position: 3, name: project.name, item: `${siteUrl}/${validLocale}/projects/${slug}` },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <PageCurtain enter="dark" leave="dark" />

            <ProjectStory project={project} index={projectIndex(slug)} total={allProjects.length} locale={validLocale} />
        </>
    );
}
