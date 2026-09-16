import { defaultLocale, isLocale } from "@/lib/i18n/locales";
import { redirect } from "@/lib/i18n/navigation";

type PageProps = {
    params: Promise<{ locale: string }>;
};

export default async function LocaleUsPage({ params }: PageProps) {
    const { locale } = await params;

    redirect({ href: "/studio", locale: isLocale(locale) ? locale : defaultLocale });
}
