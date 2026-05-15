import { getRequestConfig } from 'next-intl/server';
import { defineRouting } from "next-intl/routing";

export const locales = ['en', 'fr', 'es', 'de'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
    locales,
    defaultLocale: 'en',
    localePrefix: 'always',
    localeDetection: true,
    alternateLinks: false,
});

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !locales.includes(locale as Locale)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`./locales/${locale}.json`)).default
    };
});
