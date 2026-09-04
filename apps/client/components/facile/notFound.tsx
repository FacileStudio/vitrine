'use client';

import { useTranslations } from "next-intl";
import Link from "@/components/facile/transitionLink";

export default function NotFound() {
    const t = useTranslations("common.notFound");

    return (
        <div>
            <h2>{t("title")}</h2>
            <p>{t("message")}</p>
            <Link href="/">{t("goHome")}</Link>
        </div>
    );
}
