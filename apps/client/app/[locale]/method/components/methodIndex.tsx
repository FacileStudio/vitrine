'use client'

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import TextReveal from "@/components/facile/textReveal";
import { EASE } from "@/lib/animations";
import { pad2 } from "@/lib/utils";

const DIM = 0.4;
const DRAW = 0.6;
// the active row's indent, and the room above and below it, as shares of the viewport height like the vh spacing around it
const PAD = 0.015;
const PAD_Y = 0.005;

// one list for the whole page, so it stays put while the slides swap around it; a line draws in beside the active part, in room every row keeps so nothing reflows
export default function MethodIndex({ parts, active, open }: { parts: { key: string; title: string }[]; active: number; open: boolean }) {
    const rows = useRef<(HTMLLIElement | null)[]>([]);
    const marks = useRef<(HTMLSpanElement | null)[]>([]);
    const labels = useRef<(HTMLSpanElement | null)[]>([]);
    const count = parts.length;

    useLayoutEffect(() => {
        gsap.set(marks.current, { scaleX: 0 });
    }, []);

    useEffect(() => {
        rows.current.slice(0, count).forEach((row, i) => {
            const on = i === active;

            gsap.to(row, {
                x: on ? window.innerHeight * PAD : 0,
                duration: DRAW,
                ease: EASE.glide,
                overwrite: true,
            });

            gsap.to(marks.current[i], {
                scaleX: on ? 1 : 0,
                transformOrigin: on ? "left center" : "right center",
                duration: DRAW,
                ease: EASE.glide,
                overwrite: true,
            });

            gsap.to(labels.current[i], {
                opacity: on ? 1 : DIM,
                duration: DRAW,
                ease: EASE.glide,
                overwrite: true,
            });
        });
    }, [active, count]);

    useEffect(() => {
        const nodes = [...rows.current, ...marks.current, ...labels.current];

        return () => {
            gsap.killTweensOf(nodes);
        };
    }, []);

    return (
        <ol className="pointer-events-none fixed inset-y-0 left-0 z-[70] hidden flex-col justify-center gap-1 pl-2 lg:flex">
            {parts.map((p, i) => (
                <li key={p.key} ref={(el) => { rows.current[i] = el; }}>
                    <TextReveal as="p" open={open} delay={i * 0.03} className="flex items-center gap-3 text-background">
                        <span ref={(el) => { marks.current[i] = el; }} className="h-px w-[2vh] bg-background" />
                        <span ref={(el) => { labels.current[i] = el; }} className="flex gap-3" style={{ opacity: DIM }}>
                            {/* <span className="tabular-nums">{pad2(i + 1)}</span> */}
                            <span>{p.title}</span>
                        </span>
                    </TextReveal>
                </li>
            ))}
        </ol>
    );
}
