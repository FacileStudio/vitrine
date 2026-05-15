import { getRequestConfig } from 'next-intl/server';
import { defineRouting } from "next-intl/routing";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/locales";

export const routing = defineRouting({
    locales,
    defaultLocale,
    localePrefix: 'always',
    localeDetection: true,
    alternateLinks: false,
});

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !isLocale(locale)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`./locales/${locale}.json`)).default
    };
});
