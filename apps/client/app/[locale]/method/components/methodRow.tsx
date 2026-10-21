'use client'

import Arrow from "@/components/facile/arrow";
import TextReveal from "@/components/facile/textReveal";
import TransitionLink from "@/components/facile/transitionLink";
import type { ProcessStep } from "@/lib/content/process";
import { pad2 } from "@/lib/utils";

export default function ProcessRow({ step, index, open }: { step: ProcessStep; index: number; open: boolean }) {
    const delay = 0.2 + index * 0.06;

    return (
        <TransitionLink
            href={`/method#${step.slug}`}
            className="group glass rounded-fc w-full lg:w-[80vw] 3xl:w-[70vw] flex items-center justify-between gap-6 p-[3vh] text-foreground"
        >
            <div className="flex items-baseline gap-[3vh]">
                <TextReveal as="p" open={open} delay={delay} className="tabular-nums text-accent-ink">
                    {pad2(index + 1)}
                </TextReveal>

                <TextReveal as="h3" open={open} delay={delay} className="subtitle">
                    {step.title}
                </TextReveal>
            </div>

            <div className="flex items-center gap-[4vh]">
                <TextReveal as="p" open={open} delay={delay + 0.04} className="subtext text-current hidden md:block max-w-[40ch] text-right">
                    {step.tagline}
                </TextReveal>

                <TextReveal open={open} delay={delay + 0.08} className="subtitle">
                    <Arrow />
                </TextReveal>
            </div>
        </TransitionLink>
    );
}
