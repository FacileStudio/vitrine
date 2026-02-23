import { Manrope } from "next/font/google";
import "../globals.css";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { setRequestLocale } from 'next-intl/server';
import LayoutWrapper from "@/components/facile/layoutWrapper";
import { baseMetadata } from "@/lib/seo/metadata";
import { Metadata } from "next";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-manrope",
});

const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
];

export function generateStaticParams() {
  return languages.map(lang => ({ locale: lang.code }));
}

export async function generateMetadata({ params } : { 
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;

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
};


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

export { viewport } from "@/lib/seo";
