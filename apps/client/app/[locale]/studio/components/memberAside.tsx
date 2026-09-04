'use client'

import Link from "@/components/facile/transitionLink";
import TextReveal from "@/components/facile/textReveal";
import SplitLines from "@/components/facile/splitLines";
import Arrow from "@/components/facile/arrow";
import type { Member, WorkedProject } from "./memberData";

// desktop, right edge: the projects at the top, the personal notes at the bottom
export default function MemberAside({
    member,
    worked,
    locale,
    shown,
}: {
    member: Member;
    worked: WorkedProject[];
    locale: string;
    shown: boolean;
}) {
    return (
        <div className="flex max-w-sm flex-col items-end justify-between gap-12 text-right">
            {worked.length > 0 && (
                <div className="flex flex-col items-end gap-3">
                    <TextReveal open={shown} cropClassName="relative z-10" delay={0.12} as="p" className="subtext text-white">
                        Worked on
                    </TextReveal>
                    <div className="flex flex-col items-end gap-2">
                        {member.suite && (
                            <>
                                <TextReveal open={shown} cropClassName="relative z-10" delay={0.18}>
                                    <Link
                                        href={`/${locale}/suite`}
                                        className="lead subtitle group pointer-events-auto flex items-center gap-2 transition-colors hover:text-white"
                                    >
                                        Facile Suite.
                                        <Arrow />
                                    </Link>
                                </TextReveal>
                                <TextReveal open={shown} cropClassName="relative z-10" delay={0.2} className="select-none text-white/30">
                                    <span aria-hidden="true">·</span>
                                </TextReveal>
                            </>
                        )}
                        {worked.map((project, i) => (
                            <TextReveal as="p" key={project.slug} open={shown} cropClassName="lead relative z-10" delay={0.24 + i * 0.06}>
                                <Link 
                                    href={`/${locale}/projects/${project.slug}`}
                                    className="lead group pointer-events-auto flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                                >
                                    {project.name}
                                    <Arrow />
                                </Link>
                            </TextReveal>
                        ))}
                    </div>
                </div>
            )}

            {member.facts.length > 0 && (
                <div className="flex flex-col items-end gap-3">
                    <TextReveal open={shown} cropClassName="relative z-10" delay={0.34} as="p" className="subtext text-white">
                        Facts
                    </TextReveal>
                    <div className="flex flex-col items-end gap-6">
                        {member.facts.map((fact) => (
                            <SplitLines
                                key={fact}
                                text={fact}
                                reveal={false}
                                as="p"
                                className="relative z-10 text-right text-white/66"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
