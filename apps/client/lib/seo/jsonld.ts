import { getTranslations } from "next-intl/server";
import { locales, type Locale } from "@/lib/i18n/locales";

export async function getOrganizationJsonLd(locale: Locale) {
    const t = await getTranslations({ locale, namespace: "seo.organization" });

    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Facile Studio",
        url: "https://facile.studio",
        logo: "https://facile.studio/F.svg",
        sameAs: [
            "https://github.com/FacileStudio",
            "https://www.dribbble.com/webbygian",
            "https://www.instagram.com/webbygian",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            url: "https://facile.studio",
        },
        founders: [
            {
                "@type": "Person",
                name: "Yann Thevenin",
                jobTitle: t("leadDeveloper"),
            },
            {
                "@type": "Person",
                name: "Noah Steiniger",
                jobTitle: t("designer"),
            },
        ],
    };
}

export function getWebSiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Facile Studio",
        url: "https://facile.studio",
        inLanguage: [...locales],
    };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function getCaseStudyJsonLd(project: {
    name: string;
    slug: string;
    description: string;
    techStack?: string[];
    url: string;
    locale: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        url: project.url,
        inLanguage: project.locale,
        creator: {
            "@type": "Organization",
            name: "Facile Studio",
            url: "https://facile.studio",
        },
        ...(project.techStack && {
            keywords: project.techStack.join(", "),
        }),
    };
}
