import type { MetadataRoute } from 'next'
import { defaultLocale, locales, type Locale } from "@/lib/i18n/locales"
import { getLocalizedPath, routePaths, siteUrl } from "@/lib/seo/metadata"
import { allProjects } from "@/lib/content/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const entries = (path: string, priority: number) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${siteUrl}${getLocalizedPath(locale, path)}`])
    ) as Record<Locale, string>

    return locales.map((locale) => ({
      url: `${siteUrl}${getLocalizedPath(locale, path)}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority,
      alternates: {
        languages: {
          ...languages,
          "x-default": `${siteUrl}${getLocalizedPath(defaultLocale, path)}`,
        },
      },
    }))
  }

  const staticEntries = routePaths.flatMap((route) => entries(route, route === '' ? 1 : 0.8))
  const storyEntries = allProjects.flatMap((project) => entries(`/projects/${project.slug}`, 0.7))

  return [...staticEntries, ...storyEntries]
}
