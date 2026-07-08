import "./globals.css";
import { ReactNode } from "react";
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

export default async function RootLayout({ children }: { children: ReactNode }) {
    const locale = await getLocale();
    const messages = await getMessages({ locale });

    return (
        <html lang={locale}>
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
