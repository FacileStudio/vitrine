export const prerender = true;

const SITE_URL = "https://facile.studio";

const PAGES = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "projects", priority: "0.8", changefreq: "weekly" },
  { path: "contact", priority: "0.8", changefreq: "monthly" },
  { path: "projects/marcel", priority: "0.7", changefreq: "monthly" },
  { path: "projects/laura-herve", priority: "0.7", changefreq: "monthly" },
  { path: "projects/projet-zero", priority: "0.7", changefreq: "monthly" },
  { path: "projects/bulle", priority: "0.7", changefreq: "monthly" },
  { path: "projects/evelyne-crea", priority: "0.7", changefreq: "monthly" },
  { path: "projects/retro-festival", priority: "0.7", changefreq: "monthly" },
];

export function GET() {
  const lastmod = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
  (page) => `  <url>
    <loc>${SITE_URL}/${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=0, s-maxage=3600",
    },
  });
}
