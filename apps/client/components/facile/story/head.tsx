'use client'

import { memo, useMemo } from "react";
import DitherReveal from "@/components/facile/ditherReveal";
import type { Person } from "./types";

const Head = memo(DitherReveal);

const PersonHead = memo(function PersonHead({ person, className = "", gridSize = 0.43, scaleMultiplier = 2.5, active }: {
    person: Person;
    className?: string;
    gridSize?: number;
    scaleMultiplier?: number;
    active?: boolean;
}) {
    const dither = useMemo(() => ({
        active,
        lite: true,
        gridSize: gridSize,
        intensity: 1.0,
        parallax: 0.6,
        parallaxSpeed: 0.05,
        idle: 0.12,
        ambient: 0.3,
        float: false,
        position: [0, -1, 0] as [number, number, number],
        scale: person.scale ? person.scale * scaleMultiplier : undefined,
        roughness: person.roughness,
        metalness: 0,
        hairColor: person.hair ?? undefined,
        rotation: [0, 0, 0] as [number, number, number],
        bloom: true,
        bloomIntensity: 0.2,
    }), [active, gridSize, scaleMultiplier, person.scale, person.roughness, person.hair]);

    if (!person.model)
        return null;

    return (
        <div
            className={`group relative shrink-0 ${className}`}
        >
            <Head model={person.model} highlight={person.highlight} stripes={false} className={"absolute inset-0 h-full w-full transition-all duration-200 group-hover:scale-105"} dither={dither} />

            <div className="pointer-events-none absolute inset-0 " />
        </div>
    );
});

export default PersonHead;
