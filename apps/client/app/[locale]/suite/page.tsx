import SuitePage from "./suite";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { defaultLocale, isLocale } from "@/lib/i18n/locales";
import { getBaseMetadata } from "@/lib/seo/metadata";
import { authoredApps } from "./lib/apps";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const validLocale = isLocale(locale) ? locale : defaultLocale;
    const base = await getBaseMetadata(validLocale, "/suite");
    const t = await getTranslations({ locale: validLocale, namespace: "suite.meta" });

    const title = t("title");
    const description = t("description", { count: authoredApps.length });

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

export default function LocaleSuitePage() {
    return <SuitePage />;
}
