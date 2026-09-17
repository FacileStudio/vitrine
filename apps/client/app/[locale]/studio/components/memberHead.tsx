'use client'

import DitherReveal from "@/components/facile/ditherReveal";
import type { Member } from "@/lib/content/studio";

export default function MemberHead({ member, narrow }: { member: Member; narrow: boolean }) {
    return (
        <DitherReveal
            model={member.model}
            highlight={member.highlight}
            delay={0.15}
            className="absolute inset-0 h-full"
            dither={{
                gridSize: narrow ? 1.7 : 2,
                parallax: 1,
                parallaxSpeed: 0.01,
                intensity: 1.0,
                ambient: 0.9,
                scale: member.scale * (narrow ? 2 : 3),
                position: narrow ? [0, -0.6, 0] : [0, -1.1, 0],
                roughness: member.roughness,
                metalness: 1,
                rotation: [0, 0, 0],
                bloom: true,
                bloomIntensity: 1.5,
            }}
        />
    );
}
