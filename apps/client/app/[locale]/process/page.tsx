import ProcessPage from "./process";
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
    const base = await getBaseMetadata(validLocale, "/process");
    const t = await getTranslations({ locale: validLocale, namespace: "process.meta" });

    const title = t("title");
    const description = t("description");

    return {
        ...base,
        title,
        description,
        openGraph: {
            ...base.openGraph,
            title: `${title} | Facile Studio`,
            description,
        },
    };
}

export default function LocaleProcessPage() {
    return <ProcessPage />;
}
