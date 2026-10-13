import SuitePage from "./suite";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ogTitle, pageLocale, pageMetadata, type LocaleParams } from "@/lib/seo/metadata";
import { authoredApps } from "@/lib/content/suite";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
    const locale = await pageLocale(params);
    const t = await getTranslations({ locale, namespace: "suite.meta" });
    const title = t("title");

    return pageMetadata(locale, "/suite", {
        title,
        description: t("description", { count: authoredApps.length }),
        openGraph: { title: ogTitle(title) },
    });
}

export default function LocaleSuitePage() {
    return <SuitePage />;
}
