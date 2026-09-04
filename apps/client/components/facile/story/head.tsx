'use client'

import { memo, useEffect, useMemo, useState } from "react";
import DitherReveal from "@/components/facile/ditherReveal";
import TextReveal from "@/components/facile/textReveal";
import type { Person } from "./types";

// the canvas must never re-render on hover: a re-render walks the whole r3f tree
// and re-bakes the environment behind every head at once. Memoised, and handed
// props built once, so hovering only ever touches the label
const Head = memo(DitherReveal);

// the same dithered head the studio grid shows, at whatever size the caller
// asks for, and with the studio's hover treatment: the head sits dimmed until
// the pointer arrives, then lights up, lifts, and puts a name under itself.
// Memoised so a re-render never re-bakes the cubemap behind a row of canvases,
// and null without a model so an avatar-only person costs nothing
const PersonHead = memo(function PersonHead({ person, className = "", gridSize = 0.3, label = false }: {
    person: Person;
    className?: string;
    gridSize?: number;
    /** name and role, revealed under the head on hover — for a head with no copy beside it */
    label?: boolean;
}) {
    const [hovered, setHovered] = useState(false);
    const [coarse, setCoarse] = useState(false);

    // no cursor means no hover: the head stays lit and the name stays up, the
    // same bargain the studio grid strikes
    useEffect(() => {
        const mq = window.matchMedia("(hover: none)");
        const sync = () => setCoarse(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    // hover is CSS on the head and state only on the label, so the props the
    // canvas sees never change identity and `Head` bails out of the re-render
    const dither = useMemo(() => ({
        gridSize,
        intensity: 1.0,
        parallax: 0.6,
        parallaxSpeed: 0.05,
        idle: 0.12,
        ambient: 0.3,
        float: false,
        position: [0, -1, 0] as [number, number, number],
        scale: person.scale ? person.scale * 2 : undefined,
        roughness: person.roughness,
        metalness: 0,
        hairColor: person.hair ?? undefined,
        rotation: [0, 0, 0] as [number, number, number],
        bloom: true,
        bloomIntensity: 0.2,
    }), [gridSize, person.scale, person.roughness, person.hair]);

    const headClass = useMemo(() => `absolute inset-0 h-full w-full transition-all duration-200 ${coarse
        ? "opacity-100 brightness-100"
        : "opacity-100 brightness-50 group-hover:scale-105 group-hover:opacity-100 group-hover:brightness-100"}`, [coarse]);

    if (!person.model)
        return null;

    const on = coarse || hovered;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`group relative shrink-0 ${className}`}
        >
            <Head model={person.model} highlight={person.highlight} count={3} className={headClass} dither={dither} />

            {/* subtle darken under the head, so the name reads over it */}
            <div className="pointer-events-none absolute inset-0 " />

            {label ? (
                <div className="pointer-events-none absolute inset-x-0 top-full z-50 flex flex-col items-center gap-1 whitespace-nowrap text-center text-white">
                    <TextReveal open={on} duration={0.45} className="font-goga text-lg font-medium normal-case tracking-tight">
                        {person.name}
                    </TextReveal>
                    <TextReveal
                        open={on}
                        duration={0.45}
                        delay={on ? 0.08 : 0}
                        className="font-bb-mono text-[clamp(0.6rem,1.2vh,0.8rem)] font-medium uppercase tracking-tight text-white/60"
                    >
                        {person.role}
                    </TextReveal>
                </div>
            ) : null}
        </div>
    );
});

export default PersonHead;
