import StudioPage from "./studio";
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
    const base = await getBaseMetadata(validLocale, "/studio");
    const t = await getTranslations({ locale: validLocale, namespace: "studio.meta" });
    const description = t("description");

    return {
        ...base,
        title: t("title"),
        description,
        openGraph: {
            ...base.openGraph,
            title: t("ogTitle"),
            description,
        },
    };
}

export default function LocaleStudioPage() {
    return <StudioPage />;
}
