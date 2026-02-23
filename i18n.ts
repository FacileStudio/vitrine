import { getRequestConfig } from 'next-intl/server';
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ['en', 'fr', 'es', 'de'],
    defaultLocale: 'en',
    localeDetection: true,
});

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as typeof routing.locales[number])) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`./locales/${locale}.json`)).default
    };
});
