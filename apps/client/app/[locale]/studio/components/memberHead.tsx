'use client'

import DitherReveal from "@/components/facile/ditherReveal";
import { useAfter } from "@/hooks/use-after";
import { headScale, type Member } from "@/lib/content/studio";

export default function MemberHead({ member, narrow }: { member: Member; narrow: boolean }) {
    const sharp = useAfter(true, 1200);

    return (
        <DitherReveal
            model={member.model}
            highlight={member.highlight}
            delay={0.15}
            className="absolute inset-0 h-full"
            dither={{
                gridSize: sharp ? 2 : 9,
                parallax: 1,
                parallaxSpeed: 0.01,
                intensity: 0.85,
                ambient: 2.1,
                ambientColor: "#ffd6a8",
                scale: headScale(member.slug) * (narrow ? 2 : 3),
                position: narrow ? [0, 0.6, 0] : [0, -0.7, 0],
                roughness: member.roughness,
                // below 1 so the ambient light reaches the diffuse term and lifts the shadows
                metalness: 0.4,
                rotation: [0, 0, 0],
                bloom: true,
                bloomIntensity: 0.7,
            }}
        />
    );
}
