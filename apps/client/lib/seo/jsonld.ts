export function getOrganizationJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Facile Studio",
        url: "https://facile.studio",
        logo: "https://facile.studio/icons/F..svg",
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
                jobTitle: "Lead Developer & Co-Founder",
            },
            {
                "@type": "Person",
                name: "Noah Steiniger",
                jobTitle: "UI/Web Designer & Co-Founder",
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
        inLanguage: ["en", "fr", "de", "es"],
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

export function getCollectionPageJsonLd(locale: string) {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Projects | Facile Studio",
        description:
            "A selection of projects by Facile Studio — design, branding, and web development.",
        url: `https://facile.studio/${locale}/projects`,
        inLanguage: locale,
        isPartOf: {
            "@type": "WebSite",
            name: "Facile Studio",
            url: "https://facile.studio",
        },
    };
}
