import Portfolio from "./components/portfolio";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageLocale, pageMetadata, type LocaleParams } from "@/lib/seo/metadata";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
    const locale = await pageLocale(params);
    const t = await getTranslations({ locale, namespace: "seo.collection" });

    return pageMetadata(locale, "/projects", {
        title: { absolute: t("name") },
        description: t("description"),
        openGraph: { title: t("name") },
    });
}

export default function LocaleProjectsPage() {
    return <Portfolio />;
}
