import MemberPage from "./member";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { locales } from "@/lib/i18n/locales";
import { getBaseMetadata, pageMetadata, resolveLocale } from "@/lib/seo/metadata";
import { authoredMembers, findMember, hasMember } from "@/lib/content/studio";

type PageProps = {
    params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
    return authoredMembers.flatMap((member) =>
        locales.map((locale) => ({ locale, slug: member.slug }))
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale: requested, slug } = await params;
    const locale = resolveLocale(requested);
    const path = `/studio/${slug}`;
    const member = findMember(slug, locale);

    if (!member)
        return getBaseMetadata(locale, path);

    return pageMetadata(locale, path, {
        title: member.name,
        description: member.description,
        openGraph: { type: "profile", title: `${member.name} | Facile Studio` },
    });
}

export default async function LocaleMemberPage({ params }: PageProps) {
    const { slug } = await params;
    if (!hasMember(slug)) {
        notFound();
    }
    return <MemberPage />;
}
