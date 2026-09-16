import "./globals.css";
import { ReactNode } from "react";
import { Poppins, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/seo/jsonld";
import type { Locale } from "@/lib/i18n/locales";

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

/**
 * The html document and its translations. Rendered by `app/[locale]/layout.tsx` so it
 * re-renders when the locale segment changes; a layout above `[locale]` is kept across
 * client navigation and would pin the provider to the first locale the visitor loaded.
 */
export default async function Shell({ locale, children }: { locale: Locale; children: ReactNode }) {
    const messages = await getMessages({ locale });
    const organization = await getOrganizationJsonLd(locale);

    return (
        <html lang={locale} className={`${poppins.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteJsonLd()) }}
                />
            </head>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
