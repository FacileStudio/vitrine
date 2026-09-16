import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "./locales";

// every route carries its locale, so a shared link opens in the language it was sent in.
// Alternates are written by each page's metadata, not by the middleware
export const routing = defineRouting({
    locales,
    defaultLocale,
    localePrefix: "always",
    localeDetection: true,
    alternateLinks: false,
});
