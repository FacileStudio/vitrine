import "./globals.css";
import { ReactNode } from "react";
import { preload } from "react-dom";
import { Poppins, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/seo/jsonld";
import type { Locale } from "@/lib/i18n/locales";

// only story typography blocks use these three, so they must not preload on every route
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-poppins",
    display: "swap",
    preload: false,
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-dm-sans",
    display: "swap",
    preload: false,
});

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-ibm-plex-mono",
    display: "swap",
    preload: false,
});

const FONT_PRELOADS = [
    "/fonts/goga/GogaTest-Regular-BF6646d5d84f69b.woff2",
    "/fonts/goga/GogaTest-Medium-BF6646d5d84754e.woff2",
    "/fonts/bb-manual-mono/BBManualMonoProText-Medium.woff2",
];

// rendered under [locale]: a layout above it survives navigation and pins the first locale
export default async function Shell({ locale, children }: { locale: Locale; children: ReactNode }) {
    const messages = await getMessages({ locale });
    const organization = await getOrganizationJsonLd(locale);

    FONT_PRELOADS.forEach((href) => preload(href, { as: "font", type: "font/woff2", crossOrigin: "anonymous" }));

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
