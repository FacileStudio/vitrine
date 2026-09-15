'use client'

import { useEffect, useRef } from "react";
import TextReveal from "@/components/facile/textReveal";
import SplitLines from "@/components/facile/splitLines";
import { ARRIVE } from "@/components/facile/pageTransition";
import { run, slideY } from "@/app/utils/animations";
import { useNarrow } from "@/hooks/use-narrow";
import { categories, type Category } from "../../lib/projects";

interface HeadingProps {
    lines: string[];
    filter?: Category | null;
    count?: number;
    onFilter?: (c: Category | null) => void;
}

// the intro copy above the shelf, revealed line by line on mount — everything here
// holds until the arriving curtain has cleared. The count and the category filter
// only appear where the shelf is filterable: the home page shows a fixed handful of
// projects, so it passes no `onFilter` and gets neither
export default function Heading({ lines, filter = null, count = 0, onFilter }: HeadingProps) {
    const arrive = ARRIVE / 1000;
    const narrow = useNarrow();
    const title = useRef<HTMLHeadingElement>(null);

    // a phone joins the authored lines into one run, so they wrap into each other
    // instead of each breaking inside its own crop. SplitLines parks them, this slides them
    useEffect(() => {
        if (!narrow || !title.current) return;
        const parked = Array.from(title.current.querySelectorAll<HTMLElement>("[data-reveal]"));
        run(parked, slideY(true, false, { stagger: 0.12, duration: 0.8, delay: arrive }));
    }, [narrow, lines, arrive]);

    const entries: { label: string; value: Category | null }[] = [
        { label: "All", value: null },
        ...categories.map((c) => ({ label: c, value: c })),
    ];

    return (
        <div className="relative z-10 3xl:w-[70vw] lg:w-[80vw] w-full pb-[12vh] flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 text-white">
            <h2 ref={title} className="text-start">
                {narrow ? (
                    <SplitLines text={lines.join(" ")} gap="mb-0" />
                ) : (
                    lines.map((line, i) => (
                        <TextReveal key={i} open duration={0.8} delay={arrive + i * 0.12}>
                            {line}
                        </TextReveal>
                    ))
                )}
            </h2>

            {onFilter && (
                <nav aria-label="Filter projects" className="w-fit shrink-0">
                    <TextReveal
                        open
                        delay={arrive + 0.35}
                        as="p"
                        className="flex lg:justify-end gap-3 w-full text-start lg:text-right tabular-nums"
                    >
                        <span className="text-[#24E27A]">
                            {String(count).padStart(2, "0")}
                        </span>
                        <span className="text-[#d0ebdc]">
                            .
                        </span>
                        <span className="text-white">
                            {count === 1 ? "project" : "projects"}
                        </span>
                    </TextReveal>

                    <ul className="mt-6 flex flex-wrap lg:flex-nowrap overflow-hidden gap-1">
                        {entries.map((e, i) => {
                            const on = filter === e.value;

                            return (
                                <li key={e.label} className="block shrink-0">
                                    <TextReveal open delay={arrive + 0.35 + (i + 1) * 0.07}>
                                        <button
                                            type="button"
                                            onClick={() => onFilter(e.value)}
                                            aria-pressed={on}
                                            className={`flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-md px-[2vh] py-[1vh] font-bb-mono tracking-tight font-medium text-[clamp(0.65rem,1.4vh,0.9rem)] uppercase transition-colors backdrop-blur-xl bg-[#212121]/20 duration-300 ${on ? "bg-white/15 text-white" : "text-white/60 hover:bg-white/10 hover:text-white"}`}
                                        >
                                            {e.label}
                                        </button>
                                    </TextReveal>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            )}
        </div>
    );
}
