import { ReactNode } from "react";
import { Metadata } from "next";
import { baseMetadata, getAlternates, siteUrl } from "@/lib/seo/metadata";

export const metadata: Metadata = {
    ...baseMetadata,
    title: "Projets",
    alternates: getAlternates("/projects"),
    openGraph: {
        ...baseMetadata.openGraph,
        title: "Projets | Facile Studio",
        url: `${siteUrl}/en/projects`,
    },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
    return children;
}
