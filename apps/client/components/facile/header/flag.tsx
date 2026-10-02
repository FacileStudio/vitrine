import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/locales";

const FLAGS: Record<Locale, ReactNode> = {
    en: (
        <>
            <rect width="15" height="10" fill="#fff" />
            <rect x="6.25" width="2.5" height="10" fill="#ce1124" />
            <rect y="3.75" width="15" height="2.5" fill="#ce1124" />
        </>
    ),
    fr: (
        <>
            <rect width="5" height="10" fill="#002654" />
            <rect x="5" width="5" height="10" fill="#fff" />
            <rect x="10" width="5" height="10" fill="#ce1126" />
        </>
    ),
    es: (
        <>
            <rect width="15" height="10" fill="#aa151b" />
            <rect y="2.5" width="15" height="5" fill="#f1bf00" />
        </>
    ),
    de: (
        <>
            <rect width="15" height="3.34" fill="#000" />
            <rect y="3.33" width="15" height="3.34" fill="#dd0000" />
            <rect y="6.66" width="15" height="3.34" fill="#ffce00" />
        </>
    ),
};

export default function Flag({ locale }: { locale: Locale }) {
    return (
        <span aria-hidden="true" className="inline-flex shrink-0 rounded-[4px] p-[2px]">
            <span className="block overflow-hidden rounded-[2px]">
                <svg viewBox="0 0 15 10" className="block h-[8px] w-auto">
                    {FLAGS[locale]}
                </svg>
            </span>
        </span>
    );
}
