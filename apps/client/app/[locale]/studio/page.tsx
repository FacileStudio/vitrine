import StudioPage from "./studio";
import { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/locales";
import { baseMetadata, getAlternates, getOpenGraphLocale, getLocalizedPath, siteUrl } from "@/lib/seo/metadata";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = locales.includes(locale as Locale) ? locale as Locale : "en";

    const description = "Meet the team behind Facile Studio. We specialize in design, branding, UI/UX, and web application development with a design-first, ecological approach.";

    return {
        ...baseMetadata,
        title: "Studio",
        description,
        alternates: getAlternates("/studio", validLocale),
        openGraph: {
            ...baseMetadata.openGraph,
            title: "Studio | Facile Studio",
            description,
            locale: getOpenGraphLocale(validLocale),
            url: `${siteUrl}${getLocalizedPath(validLocale, "/studio")}`,
        },
    };
}

export default function LocaleStudioPage() {
    return <StudioPage />;
}
