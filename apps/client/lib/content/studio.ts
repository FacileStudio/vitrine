import { cache } from "react";
import type { RouterOutputs } from "@repo/trpc";
import type { Person } from "@/components/facile/story/types";
import { localize, type Resolved } from "@/lib/i18n/localize";
import type { Locale } from "@/lib/i18n/locales";
import { trpc } from "@/lib/trpc";
import { findProject, type Project } from "./projects";

export type AuthoredMember = RouterOutputs["studio"]["list"][number];

export type Member = Resolved<AuthoredMember>;

export type WorkedProject = Resolved<Project>;

// params, metadata and the page all ask for the list in one render, cache makes that one request
export const fetchMembers = cache((): Promise<AuthoredMember[]> => trpc.studio.list.query());

export const hasMember = (members: AuthoredMember[], slug: string) => members.some((m) => m.slug === slug);

export const crew = (members: AuthoredMember[], locale: Locale): Member[] => localize(members, locale);

export const findMember = (members: AuthoredMember[], slug: string, locale: Locale): Member | undefined =>
    crew(members, locale).find((m) => m.slug === slug);

const toPerson = (m: Member): Person => ({
    name: m.name,
    role: m.role,
    highlight: m.highlight,
    model: m.model,
    scale: m.scale,
    roughness: m.roughness,
    hair: m.hair,
});

export const findPerson = (members: AuthoredMember[], slug: string, locale: Locale): Person | undefined => {
    const m = findMember(members, slug, locale);
    return m ? toPerson(m) : undefined;
};

export const workedOn = (member: Member, projects: Project[], locale: Locale): WorkedProject[] =>
    member.projects
        .map((slug) => findProject(projects, slug))
        .filter((p): p is Project => Boolean(p))
        .map((p) => localize(p, locale));
