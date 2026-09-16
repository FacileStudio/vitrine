import ProcessPage from "./process";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { pageMetadata, resolveLocale } from "@/lib/seo/metadata";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const locale = resolveLocale((await params).locale);
    const t = await getTranslations({ locale, namespace: "process.meta" });
    const title = t("title");

    return pageMetadata(locale, "/process", {
        title,
        description: t("description"),
        openGraph: { title: `${title} | Facile Studio` },
    });
}

export default function LocaleProcessPage() {
    return <ProcessPage />;
}
