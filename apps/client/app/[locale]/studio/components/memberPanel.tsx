'use client'

import { useTranslations } from "next-intl";
import TextReveal from "@/components/facile/textReveal";
import SplitLines from "@/components/facile/splitLines";
import InfoModal from "@/components/facile/infoModal";
import ArrowLink from "@/components/facile/arrowLink";
import type { Member, WorkedProject } from "@/lib/content/studio";
import { SocialRows } from "./socialLinks";

export type PanelTab = "details" | "projects" | "facts";

const TABS: PanelTab[] = ["details", "projects", "facts"];

// everything that does not fit on a phone, one tab at a time. Every string waits
// for the panel to finish sliding up before it reveals
export default function MemberPanel({
    member,
    worked,
    open,
    setOpen,
    tab,
    setTab,
}: {
    member: Member;
    worked: WorkedProject[];
    open: boolean;
    setOpen: (open: boolean) => void;
    tab: PanelTab;
    setTab: (tab: PanelTab) => void;
}) {
    const t = useTranslations("studio.panel");

    return (
        <InfoModal open={open} setOpen={setOpen} title={member.name} kicker={member.role} note={member.description}>
            {(entered) => (
                <>
                    <div className="flex flex-wrap gap-1">
                        {TABS.map((id, i) => (
                            <button
                                key={id}
                                type="button"
                                onClick={() => setTab(id)}
                                className={`rounded-md px-3 py-2 transition-colors ${
                                    tab === id ? "bg-foreground text-background" : "bg-foreground/5 text-foreground/50"
                                }`}
                            >
                                <TextReveal as="p" open={entered} delay={0.1 + i * 0.05}>{t(`tabs.${id}`)}</TextReveal>
                            </button>
                        ))}
                    </div>

                    {tab === "details" && (
                        <div className="flex flex-col gap-6">
                            <SplitLines
                                as="p"
                                text={member.bio}
                                gap="mb-1"
                                className="lead text-foreground/70"
                            />

                            {member.socials.length > 0 && <SocialRows socials={member.socials} entered={entered} />}
                        </div>
                    )}

                    {tab === "projects" && (
                        <div className="flex flex-col gap-6">
                            <ul className="flex flex-col gap-3">
                                {member.suite && (
                                    <>
                                        <li>
                                            <TextReveal open={entered} delay={0.22}>
                                                <ArrowLink
                                                    href="/suite"
                                                    className="subtitle group flex items-center gap-2 text-foreground/80 transition-colors hover:text-foreground"
                                                >
                                                    {t("suite")}
                                                </ArrowLink>
                                            </TextReveal>
                                        </li>
                                        <li aria-hidden="true" className="select-none text-foreground/30">
                                            <TextReveal open={entered} delay={0.24}>·</TextReveal>
                                        </li>
                                    </>
                                )}
                                {worked.map((project, i) => (
                                    <li key={project.slug}>
                                        <TextReveal open={entered} delay={0.28 + i * 0.06}>
                                            <ArrowLink
                                                href={`/projects/${project.slug}`}
                                                className="subtitle group flex items-center gap-2 text-foreground/80 transition-colors hover:text-foreground"
                                            >
                                                {project.name}
                                            </ArrowLink>
                                        </TextReveal>
                                    </li>
                                ))}
                            </ul>

                            {member.labels.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-6">
                                    {member.labels.map((label, i) => (
                                        <span key={label} className="rounded-md bg-foreground/5 px-3 py-2 text-foreground/60">
                                            <TextReveal as="p" open={entered} delay={0.36 + i * 0.05}>{label}</TextReveal>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {tab === "facts" && (
                        <ul className="flex flex-col gap-4">
                            {member.facts.map((fact, i) => (
                                <li key={fact} className="text-foreground/60">
                                    <TextReveal as="p" open={entered} delay={0.26 + i * 0.06}>{fact}</TextReveal>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </InfoModal>
    );
}
