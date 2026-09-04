import type { MetadataRoute } from 'next'
import { locales, type Locale } from "@/lib/i18n/locales"
import { getLocalizedPath, routePaths, siteUrl, type RoutePath } from "@/lib/seo/metadata"
import { getAllProjects } from "@/app/[locale]/projects/lib/projects-server"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()
  const allProjects = await getAllProjects()

  const staticEntries = routePaths.flatMap((route) => {
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

  // every project has a story route now, so every project is listed
  const storyEntries = allProjects
    .flatMap((project) => {
      const languages = Object.fromEntries(
        locales.map((locale) => [locale, `${siteUrl}/${locale}/projects/${project.slug}`])
      ) as Record<Locale, string>

      return locales.map((locale) => ({
        url: `${siteUrl}/${locale}/projects/${project.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: {
            ...languages,
            "x-default": `${siteUrl}/en/projects/${project.slug}`,
          },
        },
      }))
    })

  return [...staticEntries, ...storyEntries]
}
