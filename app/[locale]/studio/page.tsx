import StudioPage from "../../studio/page";
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
        title: "Studio",
        alternates: getAlternates("/studio", validLocale),
        openGraph: {
            ...baseMetadata.openGraph,
            title: "Studio | Facile Studio",
            locale: getOpenGraphLocale(validLocale),
            url: `${siteUrl}${getLocalizedPath(validLocale, "/studio")}`,
        },
    };
}

export default function LocaleStudioPage() {
    return <StudioPage />;
}
