'use client'

import { getLocalizedPathname } from "@/lib/i18n/pathname";
import type { Locale } from "@/lib/i18n/locales";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export function useLocaleSwitcher() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return React.useCallback((newLocale: Locale) => {
        const targetPathname = getLocalizedPathname(pathname || "/", newLocale);
        const queryString = searchParams.toString();
        const target = queryString ? `${targetPathname}?${queryString}` : targetPathname;

        document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
        window.location.assign(target);
    }, [pathname, searchParams]);
}
