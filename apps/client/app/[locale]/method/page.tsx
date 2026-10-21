import MethodPage from "./method";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ogTitle, pageLocale, pageMetadata, type LocaleParams } from "@/lib/seo/metadata";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
    const locale = await pageLocale(params);
    const t = await getTranslations({ locale, namespace: "method" });
    const title = t("meta.title");

    return pageMetadata(locale, "/method", {
        title,
        description: t("meta.description"),
        openGraph: { title: ogTitle(title) },
    });
}

export default function LocaleMethodPage() {
    return <MethodPage />;
}
