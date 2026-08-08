import CaseStudyPage from "../components/caseStudy";
import { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/locales";
import { baseMetadata, getOpenGraphLocale, siteUrl } from "@/lib/seo/metadata";
import data from "../projects.json";

type PageProps = {
    params: Promise<{ locale: string; slug: string }>;
};

const projectDescriptions: Record<string, string> = {
    capsule: "Capsule is a zero-knowledge encrypted sharing tool by Facile Studio. Client-side AES-256-GCM encryption, self-destructing pastes, built with Go and SvelteKit.",
    opus: "Opus is a minimalist project management platform by Facile Studio. Built with SvelteKit and Go, featuring real-time updates, OIDC SSO, and a Rust TUI client.",
    waves: "Waves is a cross-platform music player built in Rust by Facile Studio. Real-time FFT audio visualization, Miller Column browser, and vim keybindings.",
    glouton: "Glouton is an enterprise lead generation platform by Facile Studio. Intelligent web scraping with smart scoring, built with TypeScript, tRPC, and BullMQ.",
    marcel: "Marcel is a wellbeing application by Facile Studio. Gamified habit tracking and task management, built with Svelte and Go.",
    "solais-intra": "Custom intranet application built by Facile Studio for Solaïs. Vue.js and TypeScript platform for team collaboration and document management.",
    "laura-herve": "Artist portfolio designed and built by Facile Studio. Typography-focused design with smooth transitions and responsive layouts.",
    evelynecrea: "Portfolio redesign by Facile Studio for a creative professional. Custom visual identity, animations, and organic navigation flow.",
};

const navigableProjects = data.filter((p) => p.tier === 1 || p.tier === 2);

export const dynamicParams = false;

export function generateStaticParams() {
    return navigableProjects.flatMap((project) =>
        locales.map((locale) => ({
            locale,
            slug: project.slug,
        }))
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale, slug } = await params;
    const validLocale = locales.includes(locale as Locale) ? locale as Locale : "en";
    const project = data.find((p) => p.slug === slug);
    const projectName = project?.name ?? slug;
    const path = `/${validLocale}/projects/${slug}`;
    const description = projectDescriptions[slug] ?? `${projectName} — a project by Facile Studio.`;

    const languages = Object.fromEntries(
        locales.map((l) => [l, `/${l}/projects/${slug}`])
    ) as Record<Locale, string>;

    return {
        ...baseMetadata,
        title: projectName,
        description,
        alternates: {
            canonical: path,
            languages: {
                ...languages,
                "x-default": `/en/projects/${slug}`,
            },
        },
        openGraph: {
            type: "article",
            title: `${projectName} | Facile Studio`,
            description,
            locale: getOpenGraphLocale(validLocale),
            url: `${siteUrl}${path}`,
            siteName: "Facile Studio",
            images: baseMetadata.openGraph?.images,
        },
    };
}

export default async function LocaleCaseStudyPage({ params }: PageProps) {
    const { locale, slug } = await params;
    const validLocale = locales.includes(locale as Locale) ? locale as Locale : "en";
    const project = data.find((p) => p.slug === slug);
    const projectName = project?.name ?? slug;
    const description = projectDescriptions[slug] ?? `${projectName} — a project by Facile Studio.`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: projectName,
        description,
        url: `${siteUrl}/${validLocale}/projects/${slug}`,
        inLanguage: validLocale,
        creator: {
            "@type": "Organization",
            name: "Facile Studio",
            url: "https://facile.studio",
        },
        ...(project?.techStack && {
            keywords: project.techStack.join(", "),
        }),
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/${validLocale}` },
            { "@type": "ListItem", position: 2, name: "Projects", item: `${siteUrl}/${validLocale}/projects` },
            { "@type": "ListItem", position: 3, name: projectName, item: `${siteUrl}/${validLocale}/projects/${slug}` },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <CaseStudyPage />
        </>
    );
}
