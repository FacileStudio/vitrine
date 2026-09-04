import { Manrope } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import AppShell from "@/components/facile/appShell";
import { JournalTelemetry } from "@/components/journal-telemetry";
import { baseMetadata, getAlternates, getOpenGraphLocale, siteUrl } from "@/lib/seo/metadata";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/seo/jsonld";
import { Metadata } from "next";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-manrope",
    preload: false,
});

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

export default async function RootLayout({ children }: { children: ReactNode }) {
    const locale = await getLocale();
    const messages = await getMessages({ locale });

    return (
        <html lang={locale} className="bg-background">
        <head>
            <script defer src="https://vision.facile.studio/s.js"></script>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationJsonLd()) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteJsonLd()) }}
            />
        </head>
        <body className={manrope.variable}>
        <JournalTelemetry />
        <NextIntlClientProvider messages={messages} locale={locale}>
            <AppShell>
                {children}
            </AppShell>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

export { viewport } from "@/lib/seo";
