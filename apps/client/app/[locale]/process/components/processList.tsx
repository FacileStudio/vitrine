'use client'

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { EASE } from "@/lib/animations";
import type { ProcessStep } from "@/lib/content/process";
import ProcessRowCard from "./processRowCard";

// three slots: previous, active, next; anything further sits outside the crop
const SLOTS = 3;

export default function ProcessList({ steps, active }: { steps: ProcessStep[]; active: number }) {
    const list = useRef<HTMLOListElement>(null);
    const rows = useRef<(HTMLLIElement | null)[]>([]);
    const names = useRef<(HTMLSpanElement | null)[]>([]);

    // set before paint and in gsap's own yPercent: a css translate would be read back as px and stacked on it
    useLayoutEffect(() => {
        gsap.set(list.current, { yPercent: 100 / steps.length });
    }, [steps.length]);

    useEffect(() => {
        // one row is 1/n of the list, and the active row must land in the middle slot
        gsap.to(list.current, {
            yPercent: ((1 - active) * 100) / steps.length,
            duration: 0.7,
            ease: EASE.glide,
            overwrite: true,
        });

        rows.current.forEach((row, i) => {
            const distance = Math.abs(i - active);

            gsap.to(row, {
                opacity: distance === 0 ? 1 : distance === 1 ? 0.3 : 0,
                duration: 0.7,
                ease: EASE.glide,
                overwrite: true,
            });

            // only the name shrinks: scaling the row would pull in its right columns
            gsap.to(names.current[i], {
                scale: distance ? 0.8 : 1,
                duration: 0.7,
                ease: EASE.glide,
                overwrite: true,
            });
        });
    }, [active, steps.length]);

    return (
        <nav aria-label={steps[active].title} className="-mx-6 overflow-hidden lg:-mx-12" style={{ height: `calc(${SLOTS} * 6vh)` }}>
            <ol ref={list}>
                {steps.map((e, i) => (
                    <li
                        key={e.slug}
                        ref={(el) => { rows.current[i] = el; }}
                        className="h-[6vh] px-12 py-[0.75vh]"
                        style={{ opacity: i === 0 ? 1 : i === 1 ? 0.3 : 0 }}
                    >
                        <ProcessRowCard
                            step={e}
                            index={i}
                            current={i === active}
                            name={(el) => { names.current[i] = el; }}
                        />
                    </li>
                ))}
            </ol>
        </nav>
    );
}
