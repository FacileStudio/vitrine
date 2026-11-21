import NoticePage from "./notice";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ogTitle, pageLocale, pageMetadata, type LocaleParams } from "@/lib/seo/metadata";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
    const locale = await pageLocale(params);
    const t = await getTranslations({ locale, namespace: "legal.notice.meta" });
    const title = t("title");

    return pageMetadata(locale, "/legal", {
        title,
        description: t("description"),
        openGraph: { title: ogTitle(title) },
    });
}

export default function LocaleNoticePage() {
    return <NoticePage />;
}
