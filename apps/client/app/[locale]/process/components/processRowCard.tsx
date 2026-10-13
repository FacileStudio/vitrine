'use client'

import type { Ref } from "react";
import { useMembers } from "@/components/facile/contentProvider";
import type { ProcessStep } from "@/lib/content/process";
import { pad2 } from "@/lib/utils";

// the backoffice project row, retold: fixed columns so every step lines up with the next, like a dashboard table
export default function ProcessRowCard({ step, index, current, name }: {
    step: ProcessStep;
    index: number;
    current: boolean;
    name: Ref<HTMLSpanElement>;
}) {
    const members = useMembers();

    return (
        <a
            href={`#${step.slug}`}
            aria-current={current ? "step" : undefined}
            className="grid h-full grid-cols-[3ch_minmax(0,1fr)_auto] items-center gap-[1vh] text-foreground md:grid-cols-[3ch_minmax(0,1fr)_9em_12em_7em]"
        >
            <span className="subtext tabular-nums text-foreground/40">{pad2(index + 1)}</span>

            <span ref={name} className="lead origin-left truncate" style={{ transform: index ? "scale(0.8)" : undefined }}>
                {step.title}
            </span>

            <span className="subtext text-end hidden truncate text-foreground/50 md:block">{step.duration}</span>
            <span className="subtext text-end hidden truncate text-foreground/50 md:block">{step.keywords}</span>

            <span className="flex items-center justify-end gap-1">
                {step.team.map((slug) => {
                    const member = members.find((m) => m.slug === slug);
                    const tint = member?.highlight ?? "#777777";

                    return (
                        <span
                            key={slug}
                            title={member?.name ?? slug}
                            className="subtext flex size-6 items-center justify-center rounded-fc"
                            style={{ backgroundColor: `${tint}20`, color: `color-mix(in srgb, ${tint}, var(--foreground) 20%)` }}
                        >
                            {(member?.name ?? slug).charAt(0).toUpperCase()}
                        </span>
                    );
                })}
            </span>
        </a>
    );
}
