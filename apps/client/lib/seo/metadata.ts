import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/locales";

export const siteUrl = "https://facile.studio";

export const routePaths = ["", "/projects", "/studio", "/suite"] as const;

export const resolveLocale = (locale: string): Locale => (isLocale(locale) ? locale : defaultLocale);

/** `path` is locale-less: "" for the home page, "/projects/marcel" for a story. */
export function getLocalizedPath(locale: Locale, path: string = "") {
    return path ? `/${locale}${path}` : `/${locale}`;
}

/**
 * Every locale of one page, for `hreflang`. The canonical is the locale being rendered,
 * so search engines index each translation instead of folding it into the English one.
 */
export function getAlternates(path: string, locale: Locale) {
    const languages = Object.fromEntries(
        locales.map((l) => [l, getLocalizedPath(l, path)])
    ) as Record<Locale, string>;

    return {
        canonical: getLocalizedPath(locale, path),
        languages: {
            ...languages,
            "x-default": getLocalizedPath(defaultLocale, path),
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

/**
 * The site-wide metadata for one page in `locale`: titles and descriptions from the `seo`
 * messages, alternates and Open Graph URL for `path`. Pages spread it and override their
 * own title and description.
 */
export async function getBaseMetadata(locale: Locale, path: string = ""): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: "seo.site" });
    const title = t("title");
    const description = t("description");

    return {
        title: {
            default: title,
            template: "%s | Facile Studio"
        },
        description,
        keywords: t("keywords").split(",").map((keyword) => keyword.trim()),
        authors: [{ name: "Facile. Studio" }],
        creator: "Facile. Studio",
        publisher: "Facile. Studio",
        metadataBase: new URL(siteUrl),
        alternates: getAlternates(path, locale),
        openGraph: {
            type: "website",
            locale: getOpenGraphLocale(locale),
            url: `${siteUrl}${getLocalizedPath(locale, path)}`,
            title,
            description,
            siteName: "Facile. Studio",
            images: [
                {
                    url: "/images/og.webp",
                    width: 1200,
                    height: 630,
                    alt: t("ogAlt"),
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
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
}

/**
 * One page's metadata: the base for `locale` and `path` with the page's own title and
 * description, which also lands in Open Graph. `openGraph` overrides the rest of it.
 */
export async function pageMetadata(
    locale: Locale,
    path: string,
    { title, description, openGraph }: { title: Metadata["title"]; description: string; openGraph?: { type?: "article" | "profile"; title?: string; siteName?: string } },
): Promise<Metadata> {
    const base = await getBaseMetadata(locale, path);

    return {
        ...base,
        title,
        description,
        openGraph: {
            ...base.openGraph,
            description,
            ...openGraph,
        } as Metadata["openGraph"],
    };
}
