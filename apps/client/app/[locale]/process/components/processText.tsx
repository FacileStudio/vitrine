'use client'

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import SplitLines from "@/components/facile/splitLines";
import { hideRevealY, run, slideY } from "@/lib/animations";
import type { ProcessStep } from "@/lib/content/process";
import { pad2 } from "@/lib/utils";

// every block sits in the same grid cell, so the outgoing lines slide away while the next block's lines slide in on top
export default function ProcessText({ step, state }: { step: ProcessStep; state: "past" | "active" | "next" }) {
    const ref = useRef<HTMLDivElement>(null);
    const entries = useRef<(HTMLSpanElement | null)[]>([]);
    const open = state === "active";
    const leaving = state === "past";

    // hidden in gsap's own yPercent before paint: a css translate would be read back as px and stacked on it
    useLayoutEffect(() => {
        hideRevealY(entries.current);
    }, []);

    useEffect(() => {
        const lines = Array.from(ref.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? []);

        // a delayed reveal that has not started yet survives overwrite "auto" and would replay after a fast scroll past
        gsap.killTweensOf(lines);

        // the incoming lines wait for the outgoing ones to clear
        run(lines, slideY(open, leaving, { stagger: 0.04, duration: 0.6, delay: open ? 0.25 : 0 }));
    }, [open, leaving]);

    return (
        <div ref={ref} aria-hidden={!open} className="col-start-1 row-start-1 flex flex-col gap-[3vh]">
            <SplitLines as="p" text={step.text} gap="mb-0" className="lead text-foreground" />

            {/* a two-column index fills down then across, so the items read in order like a table of contents */}
            <ol
                className="grid grid-flow-col gap-x-[4vh] gap-y-[1.2vh]"
                style={{ gridTemplateRows: `repeat(${Math.ceil(step.items.length / 2)}, auto)` }}
            >
                {step.items.map((item, i) => (
                    // the crop must hug its own item: a row stretched by a two-line neighbour would leave room for a hidden one to show
                    <li key={item} className="self-start overflow-hidden">
                        <span
                            ref={(el) => { entries.current[i] = el; }}
                            data-reveal
                            className="flex items-baseline gap-[1.5vh]"
                        >
                            <span className="subtext tabular-nums">{pad2(i + 1)}</span>
                            <p className="description text-foreground">{item}</p>
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
