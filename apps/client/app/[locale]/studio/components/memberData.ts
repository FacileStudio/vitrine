import members from "../studio.json";
import projects from "../../projects/projects.json";
import { localize, type Resolved } from "@/lib/i18n/localize";
import type { Locale } from "@/lib/i18n/locales";

export type Member = Resolved<(typeof members)[number]>;

export type WorkedProject = Resolved<(typeof projects)[number]>;

export type PanelTab = "details" | "projects" | "facts";

export const TABS: PanelTab[] = ["details", "projects", "facts"];

export const findMember = (slug: string, locale: Locale): Member => {
    const crew = localize(members, locale);
    return crew.find((m) => m.slug === slug) ?? crew[0];
};

// a member's `projects` are slugs into projects.json, so the names and the links
// stay whatever the project data says they are
export const workedOn = (member: Member, locale: Locale): WorkedProject[] => {
    const all = localize(projects, locale);
    return member.projects
        .map((slug) => all.find((p) => p.slug === slug))
        .filter((p): p is WorkedProject => Boolean(p));
};
