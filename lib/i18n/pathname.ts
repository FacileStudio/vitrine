import { isLocale, type Locale } from "./locales";

export function getLocalizedPathname(pathname: string, locale: Locale) {
    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] && isLocale(segments[0])) {
        segments.shift();
    }

    return segments.length > 0 ? `/${locale}/${segments.join("/")}` : `/${locale}`;
}
