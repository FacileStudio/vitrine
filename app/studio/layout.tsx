import { ReactNode } from "react";
import { Metadata } from "next";
import { baseMetadata, getAlternates, siteUrl } from "@/lib/seo/metadata";

export const metadata: Metadata = {
    ...baseMetadata,
    title: "Studio",
    alternates: getAlternates("/studio"),
    openGraph: {
        ...baseMetadata.openGraph,
        title: "Studio | Facile Studio",
        url: `${siteUrl}/en/studio`,
    },
};

export default function StudioLayout({ children }: { children: ReactNode }) {
    return children;
}
