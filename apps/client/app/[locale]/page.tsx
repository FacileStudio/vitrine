import HomePage from "./home";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { defaultLocale, isLocale } from "@/lib/i18n/locales";
import { getBaseMetadata } from "@/lib/seo/metadata";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = isLocale(locale) ? locale : defaultLocale;
    const base = await getBaseMetadata(validLocale);
    const t = await getTranslations({ locale: validLocale, namespace: "seo.home" });
    const description = t("description");

    return {
        ...base,
        title: {
            absolute: t("title"),
        },
        description,
        openGraph: {
            ...base.openGraph,
            description,
        },
    };
}

export default function LocaleHomePage() {
    return <HomePage />;
}
