import ProcessPage from "./process";
import { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/locales";
import { baseMetadata, getAlternates, getOpenGraphLocale, getLocalizedPath, siteUrl } from "@/lib/seo/metadata";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : "en";

    const description = "How Facile Studio works — our process from discovery to launch, step by step.";

    return {
        ...baseMetadata,
        title: "Process",
        description,
        alternates: getAlternates("/process", validLocale),
        openGraph: {
            ...baseMetadata.openGraph,
            title: "Process | Facile Studio",
            description,
            locale: getOpenGraphLocale(validLocale),
            url: `${siteUrl}${getLocalizedPath(validLocale, "/process")}`,
        },
    };
}

export default function LocaleProcessPage() {
    return <ProcessPage />;
}
