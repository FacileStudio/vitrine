import { getRequestConfig } from 'next-intl/server';
import { isLocale } from "@/lib/i18n/locales";
import { routing } from "@/lib/i18n/routing";

// one file per namespace per locale (locales/<locale>/<namespace>.json), so each area
// of the site is translated in its own file. Keep in step with global.d.ts
export const namespaces = ["common", "seo", "home", "projects", "story", "studio", "suite", "process"] as const;

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = requested && isLocale(requested) ? requested : routing.defaultLocale;

    const loaded = await Promise.all(
        namespaces.map(async (ns) => [ns, (await import(`./locales/${locale}/${ns}.json`)).default] as const)
    );

    return {
        locale,
        messages: Object.fromEntries(loaded),
    };
});
