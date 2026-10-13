import StudioPage from "./studio";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageLocale, pageMetadata, type LocaleParams } from "@/lib/seo/metadata";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
    const locale = await pageLocale(params);
    const t = await getTranslations({ locale, namespace: "studio.meta" });

    return pageMetadata(locale, "/studio", {
        title: t("title"),
        description: t("description"),
        openGraph: { title: t("ogTitle") },
    });
}

export default function LocaleStudioPage() {
    return <StudioPage />;
}
