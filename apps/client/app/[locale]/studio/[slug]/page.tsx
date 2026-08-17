import MemberPage from "./member";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/locales";
import { baseMetadata, getOpenGraphLocale, siteUrl } from "@/lib/seo/metadata";
import members from "../studio.json";

type PageProps = {
    params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
    return members.flatMap((member) =>
        locales.map((locale) => ({ locale, slug: member.slug }))
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale, slug } = await params;
    const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : "en";
    const member = members.find((m) => m.slug === slug);
    const name = member?.name ?? slug;
    const path = `/${validLocale}/studio/${slug}`;
    const description = member?.description ?? `${name} — Facile Studio.`;

    return {
        ...baseMetadata,
        title: name,
        description,
        alternates: { canonical: path },
        openGraph: {
            ...baseMetadata.openGraph,
            type: "profile",
            title: `${name} | Facile Studio`,
            description,
            locale: getOpenGraphLocale(validLocale),
            url: `${siteUrl}${path}`,
        },
    };
}

export default async function LocaleMemberPage({ params }: PageProps) {
    const { slug } = await params;
    if (!members.some((m) => m.slug === slug)) {
        notFound();
    }
    return <MemberPage />;
}
