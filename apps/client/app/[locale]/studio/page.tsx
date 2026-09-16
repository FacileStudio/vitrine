import StudioPage from "./studio";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata, resolveLocale } from "@/lib/seo/metadata";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = resolveLocale((await params).locale);
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
