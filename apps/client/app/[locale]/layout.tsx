import { ReactNode } from "react";
import { Metadata } from "next";
import { locales, isLocale, defaultLocale, type Locale } from "@/lib/i18n/locales";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getBaseMetadata } from "@/lib/seo/metadata";
import Shell from "../shell";

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

export async function generateMetadata({ params }: { params: Promise<{ locale?: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return getBaseMetadata(locale && isLocale(locale) ? locale : defaultLocale);
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ locale?: string }>;
}) {
    const { locale } = await params;

    if (!locales.includes(locale as Locale)) {
        notFound();
    }

    const validLocale = locale as Locale;

    setRequestLocale(validLocale);

    return <Shell locale={validLocale}>{children}</Shell>;
}
