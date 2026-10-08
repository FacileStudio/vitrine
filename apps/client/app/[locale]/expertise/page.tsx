import ExpertisePage from "./expertise";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata, resolveLocale } from "@/lib/seo/metadata";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = resolveLocale((await params).locale);
    const t = await getTranslations({ locale, namespace: "expertise" });
    const title = t("meta.title");

    return pageMetadata(locale, "/expertise", {
        title,
        description: t("meta.description"),
        openGraph: { title: `${title} | Facile Studio` },
    });
}

export default function LocaleExpertisePage() {
    return <ExpertisePage />;
}
