import { Manrope } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import LayoutWrapper from "@/components/facile/layoutWrapper";
import { baseMetadata } from "@/lib/seo/metadata";
import { Metadata } from "next";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-manrope",
});

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();

    return {
        ...baseMetadata,
        alternates: {
            canonical: `/`,
        },
        openGraph: {
            ...baseMetadata.openGraph,
            locale: locale === 'en' ? 'en_US' : `${locale}_${locale.toUpperCase()}`,
            url: `https://facile.studio`
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

export { viewport } from "@/lib/seo";
