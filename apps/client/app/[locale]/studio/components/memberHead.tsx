'use client'

import DitherReveal from "@/components/facile/ditherReveal";
import type { Member } from "./memberData";

// the dithered head, filling the viewport behind the copy. A phone gets a smaller
// model, a coarser grid and the head sat higher, where the copy is not
export default function MemberHead({ member, narrow }: { member: Member; narrow: boolean }) {
    return (
        <DitherReveal
            model={member.model}
            highlight={member.highlight}
            delay={0.15}
            className="absolute inset-0 h-full"
            dither={{
                gridSize: narrow ? 1.3 : 2,
                parallax: 1,
                parallaxSpeed: 0.02,
                intensity: 1.0,
                ambient: 0.9,
                scale: narrow ? 0.03 : 0.05,
                position: narrow ? [0, -0.2, 0] : [0, -1.1, 0],
                roughness: member.roughness,
                metalness: 1,
                rotation: [0, 0, 0],
                bloom: true,
                bloomIntensity: 1.5,
            }}
        />
    );
}
