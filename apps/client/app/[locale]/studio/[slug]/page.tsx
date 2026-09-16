import MemberPage from "./member";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/locales";
import { getBaseMetadata } from "@/lib/seo/metadata";
import { localize } from "@/lib/i18n/localize";
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
    const validLocale = isLocale(locale) ? locale : defaultLocale;
    const base = await getBaseMetadata(validLocale, `/studio/${slug}`);
    const member = localize(members, validLocale).find((m) => m.slug === slug);
    const name = member?.name ?? slug;
    const description = member?.description ?? `${name} — Facile Studio.`;

    return {
        ...base,
        title: name,
        description,
        openGraph: {
            ...base.openGraph,
            type: "profile",
            title: `${name} | Facile Studio`,
            description,
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
