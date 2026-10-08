'use client'

import { useRef } from "react";
import TextReveal from "@/components/facile/textReveal";
import { useInView } from "@/hooks/use-in-view";
import type { Expertise } from "@/lib/content/expertise";
import { pad2 } from "@/lib/utils";

export default function ExpertiseBlock({ expertise, index }: { expertise: Expertise; index: number }) {
    const ref = useRef<HTMLElement>(null);
    const open = useInView(ref);

    return (
        <article
            ref={ref}
            id={expertise.id}
            className="glass rounded-fc w-full lg:w-[80vw] 3xl:w-[70vw] scroll-mt-[20vh] flex flex-col lg:flex-row justify-between gap-[4vh] p-[5vh] text-foreground"
        >
            <div className="flex flex-col gap-6 lg:w-1/2">
                <TextReveal as="p" open={open} className="tabular-nums text-accent-ink">
                    {pad2(index + 1)}
                </TextReveal>

                <TextReveal as="h2" open={open} delay={0.06}>
                    {expertise.title}
                </TextReveal>

                <TextReveal as="p" open={open} delay={0.12} className="lead text-current">
                    {expertise.tagline}
                </TextReveal>

                <TextReveal as="p" open={open} delay={0.18} className="max-w-[48ch]">
                    {expertise.text}
                </TextReveal>
            </div>

            <ul className="flex flex-col gap-[1.5vh] lg:w-2/5 lg:pt-[6vh]">
                {expertise.items.map((item, i) => (
                    <li key={item}>
                        <TextReveal as="p" open={open} delay={0.2 + i * 0.05}>
                            <span className="text-accent-ink">+ </span>
                            {item}
                        </TextReveal>
                    </li>
                ))}
            </ul>
        </article>
    );
}
