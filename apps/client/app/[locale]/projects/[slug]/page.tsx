import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageCurtain from "@/components/facile/pageTransition";
import { locales } from "@/lib/i18n/locales";
import { localize } from "@/lib/i18n/localize";
import { getBaseMetadata, pageMetadata, resolveLocale, siteUrl } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getCaseStudyJsonLd } from "@/lib/seo/jsonld";
import { allProjects, findProject, projectIndex } from "@/lib/content/projects";
import ProjectStory from "../components/projectStory";

type PageProps = {
    params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
    return allProjects.flatMap((project) =>
        locales.map((locale) => ({
            locale,
            slug: project.slug,
        }))
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale: requested, slug } = await params;
    const locale = resolveLocale(requested);
    const path = `/projects/${slug}`;
    const project = findProject(slug);

    if (!project)
        return getBaseMetadata(locale, path);

    return pageMetadata(locale, path, {
        title: project.name,
        description: localize(project, locale).metaDescription,
        openGraph: { type: "article", title: `${project.name} | Facile Studio`, siteName: "Facile Studio" },
    });
}

export default async function LocaleProjectStoryPage({ params }: PageProps) {
    const { locale: requested, slug } = await params;
    const locale = resolveLocale(requested);
    const project = findProject(slug);

    if (!project)
        notFound();

    const t = await getTranslations({ locale, namespace: "seo.breadcrumb" });
    const url = `${siteUrl}/${locale}/projects/${slug}`;

    const jsonLd = getCaseStudyJsonLd({
        name: project.name,
        slug,
        description: localize(project, locale).metaDescription,
        techStack: project.techStack,
        url,
        locale,
    });

    const breadcrumbJsonLd = getBreadcrumbJsonLd([
        { name: t("home"), url: `${siteUrl}/${locale}` },
        { name: t("projects"), url: `${siteUrl}/${locale}/projects` },
        { name: project.name, url },
    ]);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <PageCurtain enter="dark" leave="dark" />

            <ProjectStory project={project} index={projectIndex(slug)} total={allProjects.length} locale={locale} />
        </>
    );
}
