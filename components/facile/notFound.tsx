'use client';

import { useTranslations } from "next-intl";

export default function NotFound() {
    const t = useTranslations("common.notFound");

    return (
        <div>
            <h1>{t("title")}</h1>
            <p>{t("message")}</p>
            <a href="/">{t("goHome")}</a>
        </div>
    );
}
