import { ReactNode } from "react";
import { locales, type Locale } from "@/lib/i18n/locales";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
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

    return children;
}
