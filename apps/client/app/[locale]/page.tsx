import HomePage from "./home";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata, resolveLocale } from "@/lib/seo/metadata";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = resolveLocale((await params).locale);
    const t = await getTranslations({ locale, namespace: "seo.home" });

    return pageMetadata(locale, "", {
        title: { absolute: t("title") },
        description: t("description"),
    });
}

export default function LocaleHomePage() {
    return <HomePage />;
}
