'use client'

import TextReveal from "@/components/facile/textReveal";
import { ARRIVE } from "@/components/facile/pageTransition";

interface HeadingProps {
    eyebrow?: string;
    lines: string[];
    count: number;
    onExplain: () => void;
}

// the projects shelf puts a category filter here; the suite has nothing to filter
// — every app is the same monorepo, the same stack, the same hands — so the slot
// holds the one thing worth saying instead: how the whole thing is wired together
export default function Heading({ eyebrow, lines, count, onExplain }: HeadingProps) {
    const arrive = ARRIVE / 1000;

    return (
        <div className="relative z-10 3xl:w-[70vw] w-[80vw] pb-[12vh] flex items-start justify-between gap-12 text-foreground">
            <div className="text-start">
                {eyebrow && (
                    <TextReveal
                        open
                        duration={0.8}
                        delay={arrive}
                        cropClassName="mb-6"
                        className="font-bb-mono text-sm tracking-[0.2em] text-foreground/40"
                    >
                        {eyebrow}
                    </TextReveal>
                )}

                <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                    {lines.map((line, i) => (
                        <TextReveal key={i} open duration={0.8} delay={arrive + (i + 1) * 0.12}>
                            {line}
                        </TextReveal>
                    ))}
                </h2>
            </div>

            <div className="w-fit shrink-0">
                <TextReveal
                    open
                    delay={arrive + 0.35}
                    className="flex justify-end gap-3 w-full text-right text-md capitalize font-medium tabular-nums"
                >
                    <span className="text-accent-ink">
                        {String(count).padStart(2, "0")}
                    </span>
                    <span className="text-foreground/30">
                        .
                    </span>
                    <span className="text-foreground">
                        {count === 1 ? "app" : "apps"}
                    </span>
                </TextReveal>

                <div className="mt-6 flex justify-end overflow-hidden">
                    <TextReveal open delay={arrive + 0.5}>
                        <button
                            type="button"
                            onClick={onExplain}
                            className="group flex w-fit shrink-0 items-center gap-3 whitespace-nowrap rounded-md bg-foreground/5 px-[2vh] py-[1vh] text-[clamp(0.65rem,1.4vh,0.9rem)] text-foreground/60 transition-colors duration-300 hover:bg-foreground/10 hover:text-foreground"
                        >
                            How the suite works
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                    </TextReveal>
                </div>
            </div>
        </div>
    );
}
