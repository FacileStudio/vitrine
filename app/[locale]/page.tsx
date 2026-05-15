import HomePage from "../page";
import { Metadata } from "next";
import { locales, type Locale } from "@/i18n";
import { baseMetadata, getAlternates, getOpenGraphLocale, getLocalizedPath, siteUrl } from "@/lib/seo/metadata";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = locales.includes(locale as Locale) ? locale as Locale : "en";

    return {
        ...baseMetadata,
        title: {
            absolute: "Facile Studio - Design, branding et développement web",
        },
        alternates: getAlternates("", validLocale),
        openGraph: {
            ...baseMetadata.openGraph,
            locale: getOpenGraphLocale(validLocale),
            url: `${siteUrl}${getLocalizedPath(validLocale)}`,
        },
    };
}

export default function LocaleHomePage() {
    return <HomePage />;
}
