import members from "../studio.json";
import projects from "../../projects/projects.json";

export type Member = (typeof members)[number];

export type WorkedProject = (typeof projects)[number];

export type PanelTab = "details" | "projects" | "facts";

export const TABS: { id: PanelTab; label: string }[] = [
    { id: "details", label: "Details" },
    { id: "projects", label: "Worked on" },
    { id: "facts", label: "Facts" },
];

export const findMember = (slug: string): Member => members.find((m) => m.slug === slug) ?? members[0];

// a member's `projects` are slugs into projects.json, so the names and the links
// stay whatever the project data says they are
export const workedOn = (member: Member): WorkedProject[] =>
    member.projects
        .map((slug) => projects.find((p) => p.slug === slug))
        .filter((p): p is WorkedProject => Boolean(p));
