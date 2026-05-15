import type { MetadataRoute } from 'next'
import { locales, type Locale } from "@/lib/i18n/locales"
import { getLocalizedPath, routePaths, siteUrl, type RoutePath } from "@/lib/seo/metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routePaths.flatMap((route) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${siteUrl}${getLocalizedPath(locale, route as RoutePath)}`])
    ) as Record<Locale, string>

    return locales.map((locale) => ({
      url: `${siteUrl}${getLocalizedPath(locale, route as RoutePath)}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          ...languages,
          "x-default": `${siteUrl}${getLocalizedPath("en", route as RoutePath)}`,
        },
      },
    }))
  })
}
