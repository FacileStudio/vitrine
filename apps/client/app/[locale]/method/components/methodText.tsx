'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitLines from "@/components/facile/splitLines";
import { EASE } from "@/lib/animations";

// -1 waits above its line crops, 0 is on screen, 1 waits below
export type Place = -1 | 0 | 1;

// every paragraph sits top-aligned in the same cell, so line r of the outgoing text and line r of the incoming one share a row and roll together, like the Laura hero
export default function MethodText({ text, place }: { text: string; place: Place }) {
    const ref = useRef<HTMLDivElement>(null);
    const was = useRef(place);

    useEffect(() => {
        const from = was.current;
        const lines = Array.from(ref.current?.querySelectorAll<HTMLElement>("[data-reveal]") ?? []);

        was.current = place;
        if (from === place)
            return;

        // a paragraph changing sides while hidden jumps, or it would sweep across the screen on its way
        if (from && place) {
            gsap.set(lines, { yPercent: 110 * place });
            return;
        }

        gsap.to(lines, {
            yPercent: 110 * place,
            duration: 0.9,
            stagger: 0.08,
            ease: EASE.glide,
            overwrite: true,
        });
    }, [place]);

    useEffect(() => {
        const el = ref.current;

        return () => {
            if (el)
                gsap.killTweensOf(el.querySelectorAll("[data-reveal]"));
        };
    }, []);

    return (
        <div ref={ref} aria-hidden={place !== 0} className="col-start-1 row-start-1 self-start">
            <SplitLines text={text} gap="mb-0" dimClassName="opacity-50" className="lead text-background" />
        </div>
    );
}
