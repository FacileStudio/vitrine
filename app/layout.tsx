import "./globals.css";
import { ReactNode } from "react";
import { Poppins, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { baseMetadata, getAlternates, getOpenGraphLocale, siteUrl } from "@/lib/seo/metadata";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/seo/jsonld";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();

    return {
        ...baseMetadata,
        alternates: getAlternates(),
        openGraph: {
            ...baseMetadata.openGraph,
            locale: getOpenGraphLocale(locale),
            url: siteUrl,
        }
    }
};

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-poppins",
    display: "swap",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-dm-sans",
    display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-ibm-plex-mono",
    display: "swap",
});

export default async function RootLayout({ children }: { children: ReactNode }) {
    const locale = await getLocale();
    const messages = await getMessages({ locale });

    return (
        <html lang={locale} className={`${poppins.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationJsonLd()) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteJsonLd()) }}
                />
            </head>
            <body>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export { viewport } from "@/lib/seo";
