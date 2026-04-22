import { ReactNode } from "react";
import { locales, type Locale } from "@/i18n";
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
    params: Promise<any>;
}) {
    const { locale } = await params as { locale?: string };

    if (!locales.includes(locale as Locale)) {
        notFound();
    }

    const validLocale = locale as Locale;

    setRequestLocale(validLocale);

    return children;
}
