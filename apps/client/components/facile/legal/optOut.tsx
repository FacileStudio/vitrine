'use client'

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { isOptedOut, setOptedOut, subscribeOptOut } from "@/lib/visitor";

export default function OptOut() {
    const t = useTranslations("legal.privacy.optOut");
    const optedOut = useSyncExternalStore(subscribeOptOut, isOptedOut, () => false);

    return (
        <div className="flex flex-col items-start gap-4">
            <p className="lead" aria-live="polite">{optedOut ? t("off") : t("on")}</p>
            <button type="button" onClick={() => setOptedOut(!optedOut)} className="button button-dark">
                <p>{optedOut ? t("enable") : t("disable")}</p>
            </button>
        </div>
    );
}
