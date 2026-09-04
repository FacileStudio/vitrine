'use client'

import TextReveal from "@/components/facile/textReveal";
import { ARRIVE } from "@/components/facile/pageTransition";
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

    const entries: { label: string; value: Category | null }[] = [
        { label: "All", value: null },
        ...categories.map((c) => ({ label: c, value: c })),
    ];

    return (
        <div className="relative z-10 3xl:w-[70vw] w-[80vw] pb-[12vh] flex items-start justify-between gap-12 text-white">
            <h2 className="text-start">
                {lines.map((line, i) => (
                    <TextReveal key={i} open duration={0.8} delay={arrive + i * 0.12}>
                        {line}
                    </TextReveal>
                ))}
            </h2>

            {onFilter && (
                <nav aria-label="Filter projects" className="w-fit shrink-0">
                    <TextReveal
                        open
                        delay={arrive + 0.35}
                        as="p"
                        className="flex justify-end gap-3 w-full text-right tabular-nums"
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

                    <ul className="mt-6 flex overflow-hidden gap-1">
                        {entries.map((e, i) => {
                            const on = filter === e.value;

                            return (
                                <li key={e.label} className="block shrink-0">
                                    <TextReveal open delay={arrive + 0.35 + (i + 1) * 0.07}>
                                        <button
                                            type="button"
                                            onClick={() => onFilter(e.value)}
                                            aria-pressed={on}
                                            className={`flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-md px-[2vh] py-[1vh] font-bb-mono tracking-tight font-medium text-[clamp(0.65rem,1.4vh,0.9rem)] uppercase transition-colors duration-300 ${on ? "bg-white/15 text-white" : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"}`}
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
