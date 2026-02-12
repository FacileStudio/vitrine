import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { setRequestLocale } from 'next-intl/server';
import LayoutWrapper from "@/components/facile/layoutWrapper";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-manrope",
});

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
    },
    // manifest: "/site.webmanifest",
    // verification: {
    //     google: "ton-code-de-verification-google", // Ajoute ton code Google Search Console
    //     // yandex: "ton-code-yandex",
    //     // bing: "ton-code-bing",
    // },
};

export const viewport: Viewport = {
  themeColor: '#CAE6D8', 
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  viewportFit: 'cover',
}

const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
];

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const { locale } = params;
    return {
        ...baseMetadata,
        alternates: {
            canonical: `/${locale}`,
            languages: {
                'en': '/en',
                'fr': '/fr',
                'es': '/es',
                'de': '/de'
            },
        },
         openGraph: {
            ...baseMetadata.openGraph,
            locale: locale === 'en' ? 'en_US' : `${locale}_${locale.toUpperCase()}`,
            url: `https://facile.studio/${locale}`
        }
    }
}

export default async function RootLayout({
                                             children,
                                             params
                                         }: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    setRequestLocale(locale);

    const messages = await getMessages({ locale });

    return (
        <html lang={locale} className="bg-background">
        <head>
            <script defer src="https://stats.facile.studio/script.js" data-website-id="34bb792f-b7ac-444a-b1e3-0a521383629d"></script>
        </head>
        <body className={manrope.variable}>
        <NextIntlClientProvider messages={messages} locale={locale}>
            <LayoutWrapper>
                {children}
            </LayoutWrapper>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
