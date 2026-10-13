import type { MetadataRoute } from 'next'
import { defaultLocale, locales } from "@/lib/i18n/locales"
import { getLocalizedPath, hreflangLanguages, routePaths, siteUrl } from "@/lib/seo/metadata"
import { fetchProjects } from "@/lib/content/projects"
import { fetchMembers } from "@/lib/content/studio"

// the project and member lists come from the backend, so the sitemap is built per request like the pages
export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, members] = await Promise.all([fetchProjects(), fetchMembers()])
  const lastModified = new Date()

  const entries = (path: string, priority: number) => {
    const languages = Object.fromEntries(
      Object.entries(hreflangLanguages(path)).map(([locale, p]) => [locale, `${siteUrl}${p}`])
    )

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
  const storyEntries = projects.flatMap((project) => entries(`/projects/${project.slug}`, 0.7))
  const memberEntries = members.flatMap((member) => entries(`/studio/${member.slug}`, 0.6))

  return [...staticEntries, ...storyEntries, ...memberEntries]
}
