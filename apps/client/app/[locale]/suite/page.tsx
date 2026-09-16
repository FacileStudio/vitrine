import SuitePage from "./suite";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata, resolveLocale } from "@/lib/seo/metadata";
import { authoredApps } from "@/lib/content/suite";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = resolveLocale((await params).locale);
    const t = await getTranslations({ locale, namespace: "suite.meta" });
    const title = t("title");

    return pageMetadata(locale, "/suite", {
        title,
        description: t("description", { count: authoredApps.length }),
        openGraph: { title: `${title} | Facile Studio` },
    });
}

export default function LocaleSuitePage() {
    return <SuitePage />;
}
