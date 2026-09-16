import type { Person } from "@/components/facile/story/types";
import { localize, type Resolved } from "@/lib/i18n/localize";
import type { Locale } from "@/lib/i18n/locales";
import members from "@/app/[locale]/studio/studio.json";
import { allProjects, type Project } from "./projects";

export const authoredMembers = members;

export type Member = Resolved<(typeof members)[number]>;

export type WorkedProject = Resolved<Project>;

export const hasMember = (slug: string) => members.some((m) => m.slug === slug);

export const crew = (locale: Locale): Member[] => localize(members, locale);

export const findMember = (slug: string, locale: Locale): Member | undefined =>
    crew(locale).find((m) => m.slug === slug);

export const toPerson = (m: Member): Person => ({
    name: m.name,
    role: m.role,
    avatar: m.avatar,
    highlight: m.highlight,
    model: m.model,
    scale: m.scale,
    roughness: m.roughness,
    hair: m.hair,
});

export const findPerson = (slug: string, locale: Locale): Person | undefined => {
    const m = findMember(slug, locale);
    return m ? toPerson(m) : undefined;
};

export const workedOn = (member: Member, locale: Locale): WorkedProject[] =>
    member.projects
        .map((slug) => allProjects.find((p) => p.slug === slug))
        .filter((p): p is Project => Boolean(p))
        .map((p) => localize(p, locale));
