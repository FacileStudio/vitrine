'use client'

import { useLayoutEffect, useRef } from "react";
import { run, slideY, hideRevealY } from "@/app/utils/animations";
import { ARRIVE } from "@/components/facile/pageTransition";
import { categories, type Category } from "../../lib/projects";

interface HeadingProps {
    lines: string[];
    filter?: Category | null;
    count?: number;
    onFilter?: (c: Category | null) => void;
}

// the intro copy above the shelf, revealed line by line on mount. The count and
// the category filter only appear where the shelf is filterable — the home page
// shows a fixed handful of projects, so it passes no `onFilter` and gets neither
export default function Heading({ lines, filter = null, count = 0, onFilter }: HeadingProps) {
    const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const menuRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useLayoutEffect(() => {
        hideRevealY(lineRefs.current);
        hideRevealY(menuRefs.current);
        run(lineRefs.current, slideY(true, false, { stagger: 0.12, duration: 0.8, delay: ARRIVE / 1000 }));
        run(menuRefs.current, slideY(true, false, { stagger: 0.07, duration: 0.6, delay: ARRIVE / 1000 + 0.35 }));
    }, []);

    const entries: { label: string; value: Category | null }[] = [
        { label: "All", value: null },
        ...categories.map((c) => ({ label: c, value: c })),
    ];

    return (
        <div className="relative z-10 3xl:w-[70vw] w-[80vw] pb-[12vh] flex items-start justify-between gap-12 text-white">
            <h2 className="text-start text-4xl md:text-5xl font-medium leading-tight">
                {lines.map((line, i) => (
                    <span key={i} className="block overflow-hidden">
                        <span ref={(el) => { lineRefs.current[i] = el; }} className="block">
                            {line}
                        </span>
                    </span>
                ))}
            </h2>

            {onFilter && (
                <nav aria-label="Filter projects" className="w-fit shrink-0">
                    <span className="block overflow-hidden">
                        <span
                            ref={(el) => { menuRefs.current[0] = el; }}
                            className="flex justify-end gap-3 w-full text-right text-md capitalize font-medium tabular-nums"
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
                        </span>
                    </span>

                    <ul className="mt-6 flex justify-end gap-1">
                        {entries.map((e, i) => {
                            const on = filter === e.value;

                            return (
                                <li key={e.label} className="block shrink-0">
                                    <span ref={(el) => { menuRefs.current[i + 1] = el; }} className="block">
                                        <button
                                            type="button"
                                            onClick={() => onFilter(e.value)}
                                            aria-pressed={on}
                                            className={`flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-md px-[2vh] py-[1vh] text-[clamp(0.65rem,1.4vh,0.9rem)] transition-colors duration-300 ${on ? "bg-white/15 text-white" : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"}`}
                                        >
                                            {e.label}
                                        </button>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            )}
        </div>
    );
}
