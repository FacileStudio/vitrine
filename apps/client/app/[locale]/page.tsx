import HomePage from "./home";
import { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/locales";
import { baseMetadata, getAlternates, getOpenGraphLocale, getLocalizedPath, siteUrl } from "@/lib/seo/metadata";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = locales.includes(locale as Locale) ? locale as Locale : "en";

    const description = "Facile Studio is a creative agency specializing in design, branding, and web development. We build digital experiences that look exceptional and work flawlessly.";

    return {
        ...baseMetadata,
        title: {
            absolute: "Facile Studio - Design, branding et développement web",
        },
        description,
        alternates: getAlternates("", validLocale),
        openGraph: {
            ...baseMetadata.openGraph,
            description,
            locale: getOpenGraphLocale(validLocale),
            url: `${siteUrl}${getLocalizedPath(validLocale)}`,
        },
    };
}

export default function LocaleHomePage() {
    return <HomePage />;
}
