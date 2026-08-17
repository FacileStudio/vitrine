import SuitePage from "./suite";
import { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/locales";
import { baseMetadata, getAlternates, getOpenGraphLocale, getLocalizedPath, siteUrl } from "@/lib/seo/metadata";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = locales.includes(locale as Locale) ? locale as Locale : "en";

    const description = "The Facile Studio product suite — Capsule, Opus, Glouton and Marcel. Tools we design, build, and run in-house.";

    return {
        ...baseMetadata,
        title: "Suite",
        description,
        alternates: getAlternates("/suite", validLocale),
        openGraph: {
            ...baseMetadata.openGraph,
            title: "Suite | Facile Studio",
            description,
            locale: getOpenGraphLocale(validLocale),
            url: `${siteUrl}${getLocalizedPath(validLocale, "/suite")}`,
        },
    };
}

export default function LocaleSuitePage() {
    return <SuitePage />;
}
