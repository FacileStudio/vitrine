import { Metadata } from "next";

export const baseMetadata: Metadata = {
    title: {
        default: "Facile. Studio",
        template: "%s | Facile. Studio"
    },
    description: "Facile. Studio - Agence digitale créative spécialisée dans le design et le développement web",
    keywords: ["design", "développement web", "studio créatif", "agence digitale", "UX/UI"],
    authors: [{ name: "Facile. Studio" }],
    creator: "Facile. Studio",
    publisher: "Facile. Studio",
    metadataBase: new URL('https://facile.studio'),
    alternates: {
        canonical: '/',
        languages: {
            'en': '/en',
            'fr': '/fr',
            'es': '/es',
            'de': '/de'
        },
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://facile.studio",
        title: "Facile. Studio",
        description: "Facile. Studio - Agence digitale créative spécialisée dans le design et le développement web",
        siteName: "Facile. Studio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Facile. Studio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Facile. Studio",
        description: "Facile. Studio - Agence digitale créative spécialisée dans le design et le développement web",
        images: ["/og-image.png"],
        creator: "@facilestudio",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon.png", type: "image/png", sizes: "32x32" },
        ],
    }
};
