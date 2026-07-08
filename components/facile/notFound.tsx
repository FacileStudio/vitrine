'use client';

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
    const t = useTranslations("common.notFound");

    return (
        <div>
            <h1>{t("title")}</h1>
            <p>{t("message")}</p>
            <Link href="/">{t("goHome")}</Link>
        </div>
    );
}
