import { Metadata } from "next";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/locales";

export const siteUrl = "https://facile.studio";

export const routePaths = ["", "/projects", "/studio", "/suite"] as const;
export type RoutePath = (typeof routePaths)[number];

export function getLocalizedPath(locale: Locale, route: RoutePath = "") {
    return route ? `/${locale}${route}` : `/${locale}`;
}

export function getAlternates(route: RoutePath = "", canonicalLocale: Locale = defaultLocale) {
    const languages = Object.fromEntries(
        locales.map((locale) => [locale, getLocalizedPath(locale, route)])
    ) as Record<Locale, string>;

    return {
        canonical: getLocalizedPath(canonicalLocale, route),
        languages: {
            ...languages,
            "x-default": getLocalizedPath(defaultLocale, route),
        },
    };
}

export function getOpenGraphLocale(locale: string) {
    const localesMap: Record<string, string> = {
        en: "en_US",
        fr: "fr_FR",
        es: "es_ES",
        de: "de_DE",
    };

    return isLocale(locale) ? localesMap[locale] : "en_US";
}

export const baseMetadata: Metadata = {
    title: {
        default: "Facile Studio - Design, branding et développement web",
        template: "%s | Facile Studio"
    },
    description: "Facile. Studio - Agence digitale créative spécialisée dans le design et le développement web",
    keywords: ["design", "développement web", "studio créatif", "agence digitale", "UX/UI"],
    authors: [{ name: "Facile. Studio" }],
    creator: "Facile. Studio",
    publisher: "Facile. Studio",
    metadataBase: new URL(siteUrl),
    alternates: getAlternates(),
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: siteUrl,
        title: "Facile Studio - Design, branding et développement web",
        description: "Facile. Studio - Agence digitale créative spécialisée dans le design et le développement web",
        siteName: "Facile. Studio",
        images: [
            {
                url: "/images/og.webp",
                width: 1200,
                height: 630,
                alt: "Facile. Studio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Facile Studio - Design, branding et développement web",
        description: "Facile. Studio - Agence digitale créative spécialisée dans le design et le développement web",
        images: ["/images/og.webp"],
        creator: "@facilestudio",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon.png", type: "image/png", sizes: "32x32" },
        ],
    }
};
