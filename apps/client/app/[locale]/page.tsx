import HomePage from "./home";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageLocale, pageMetadata, type LocaleParams } from "@/lib/seo/metadata";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
    const locale = await pageLocale(params);
    const t = await getTranslations({ locale, namespace: "seo.home" });

    return pageMetadata(locale, "", {
        title: { absolute: t("title") },
        description: t("description"),
    });
}

export default function LocaleHomePage() {
    return <HomePage />;
}
