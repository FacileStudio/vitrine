'use client'

import { memo, useEffect, useMemo, useState } from "react";
import DitherReveal from "@/components/facile/ditherReveal";
import TextReveal from "@/components/facile/textReveal";
import type { Person } from "./types";

const Head = memo(DitherReveal);

const PersonHead = memo(function PersonHead({ person, className = "", gridSize = 0.5, scaleMultiplier = 2, label = false }: {
    person: Person;
    className?: string;
    gridSize?: number;
    label?: boolean;
    scaleMultiplier?: number;
}) {
  

    const dither = useMemo(() => ({
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
    }), [gridSize, scaleMultiplier, person.scale, person.roughness, person.hair]);

    if (!person.model)
        return null;

    return (
        <div
            className={`group relative shrink-0 ${className}`}
        >
            <Head model={person.model} highlight={person.highlight} stripes={false} className={"absolute inset-0 h-full w-full transition-all duration-200 group-hover:scale-105"} dither={dither} />

            <div className="pointer-events-none absolute inset-0 " />

            {label ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 flex flex-col items-center gap-1 whitespace-nowrap text-center text-white">
                    <TextReveal duration={0.45} className="font-goga text-2xl normal-case tracking-tight">
                        {person.name}
                    </TextReveal>
                </div>
            ) : null}
        </div>
    );
});

export default PersonHead;
