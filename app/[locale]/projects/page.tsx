import Portfolio from "./components/portfolio";
import { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/locales";
import { baseMetadata, getAlternates, getOpenGraphLocale, getLocalizedPath, siteUrl } from "@/lib/seo/metadata";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = locales.includes(locale as Locale) ? locale as Locale : "en";

    const description = "Explore our portfolio of design, branding, and web development projects. From encrypted sharing tools to wellness apps — each project tells a story.";

    return {
        ...baseMetadata,
        title: "Projets",
        description,
        alternates: getAlternates("/projects", validLocale),
        openGraph: {
            ...baseMetadata.openGraph,
            title: "Projets | Facile Studio",
            description,
            locale: getOpenGraphLocale(validLocale),
            url: `${siteUrl}${getLocalizedPath(validLocale, "/projects")}`,
        },
    };
}

export default function LocaleProjectsPage() {
    return <Portfolio />;
}
