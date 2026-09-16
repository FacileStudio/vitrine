import Portfolio from "./components/portfolio";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata, resolveLocale } from "@/lib/seo/metadata";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = resolveLocale((await params).locale);
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
