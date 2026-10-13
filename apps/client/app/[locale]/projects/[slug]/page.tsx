import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageCurtain from "@/components/facile/pageTransition";
import { localize } from "@/lib/i18n/localize";
import { getBaseMetadata, ogTitle, pageMetadata, resolveLocale, siteName, siteUrl } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getCaseStudyJsonLd } from "@/lib/seo/jsonld";
import { fetchProjects, findProject, projectIndex } from "@/lib/content/projects";
import ProjectStory from "../components/projectStory";

type PageProps = {
    params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale: requested, slug } = await params;
    const locale = resolveLocale(requested);
    const path = `/projects/${slug}`;
    const project = findProject(await fetchProjects(), slug);

    if (!project)
        return getBaseMetadata(locale, path);

    return pageMetadata(locale, path, {
        title: project.name,
        description: localize(project, locale).metaDescription,
        openGraph: { type: "article", title: ogTitle(project.name), siteName },
    });
}

export default async function LocaleProjectStoryPage({ params }: PageProps) {
    const { locale: requested, slug } = await params;
    const locale = resolveLocale(requested);
    const projects = await fetchProjects();
    const project = findProject(projects, slug);

    if (!project)
        notFound();

    const t = await getTranslations({ locale, namespace: "seo.breadcrumb" });
    const url = `${siteUrl}/${locale}/projects/${slug}`;
    const index = projectIndex(projects, slug);

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

            <ProjectStory project={project} index={index} total={projects.length} locale={locale} nextSlug={projects[index + 1]?.slug ?? null} prevSlug={projects[index - 1]?.slug ?? null} firstSlug={projects[0]?.slug ?? null} />
        </>
    );
}
