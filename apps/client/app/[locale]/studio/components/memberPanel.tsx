'use client'

import Link from "@/components/facile/transitionLink";
import TextReveal from "@/components/facile/textReveal";
import SplitLines from "@/components/facile/splitLines";
import InfoModal from "@/components/facile/infoModal";
import Arrow from "@/components/facile/arrow";
import { TABS, type Member, type PanelTab, type WorkedProject } from "./memberData";
import { SocialRows } from "./socialLinks";

// everything that does not fit on a phone, one tab at a time. Every string waits
// for the panel to finish sliding up before it reveals
export default function MemberPanel({
    member,
    worked,
    locale,
    open,
    setOpen,
    tab,
    setTab,
}: {
    member: Member;
    worked: WorkedProject[];
    locale: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    tab: PanelTab;
    setTab: (tab: PanelTab) => void;
}) {
    return (
        <InfoModal open={open} setOpen={setOpen} title={member.name} kicker={member.role} note={member.description}>
            {(entered) => (
                <>
                    <div className="flex flex-wrap gap-1">
                        {TABS.map(({ id, label }, i) => (
                            <button
                                key={id}
                                type="button"
                                onClick={() => setTab(id)}
                                className={`rounded-md px-3 py-2 transition-colors ${
                                    tab === id ? "bg-foreground text-background" : "bg-foreground/5 text-foreground/50"
                                }`}
                            >
                                <TextReveal as="p" open={entered} delay={0.1 + i * 0.05}>{label}</TextReveal>
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
                                            <Link
                                                href={`/${locale}/suite`}
                                                className="subtitle group text-foreground/80 transition-colors hover:text-foreground"
                                            >
                                                <TextReveal open={entered} delay={0.22} className="flex items-center gap-2">
                                                    The Suite
                                                    <Arrow />
                                                </TextReveal>
                                            </Link>
                                        </li>
                                        <li aria-hidden="true" className="select-none text-foreground/30">
                                            <TextReveal open={entered} delay={0.24}>·</TextReveal>
                                        </li>
                                    </>
                                )}
                                {worked.map((project, i) => (
                                    <li key={project.slug}>
                                        <Link
                                            href={`/${locale}/projects/${project.slug}`}
                                            className="subtitle group text-foreground/80 transition-colors hover:text-foreground"
                                        >
                                            <TextReveal open={entered} delay={0.28 + i * 0.06} className="flex items-center gap-2">
                                                {project.name}
                                                <Arrow />
                                            </TextReveal>
                                        </Link>
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
