import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'fr', 'es', 'de']
  const baseUrl = 'https://facile.studio'
  
  const routes = ['', '/portfolio', '/us']
  
  return locales.flatMap(locale =>
    routes.map(route => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )
}
