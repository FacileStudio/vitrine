"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { DitherView } from "@/webgl/lazy";
import { useAfter } from "@/hooks/use-after";
import { useMembers } from "@/components/facile/contentProvider";
import { headScale } from "@/lib/content/studio";

const ANGLES = [220, 200, 160, 140];
const LAUNCH = 0.9;
const GRID_DELAY = 1000;

// launch direction of head i in radians, with 0deg pointing up on screen
const angle = (i: number) => (ANGLES[i % ANGLES.length] - 90) * Math.PI / 180;

function launched() {
    // launch distance as a share of the viewport height
    const R = window.innerHeight * LAUNCH;

    return {
        x: (i: number) => Math.cos(angle(i)) * R,
        y: (i: number) => Math.sin(angle(i)) * R,
    };
}

export default function FooterHeads({ open, active }: { open: boolean; active: boolean }) {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const sharp = useAfter(open, GRID_DELAY);
    const heads = useMembers();

    useLayoutEffect(() => {
        gsap.set(refs.current, launched());
    }, []);

    useEffect(() => {
        const heads = refs.current;

        gsap.to(heads, {
            ...(open ? { x: 0, y: 0 } : launched()),
            delay: 0.6,
            duration: open ? 1.5 : 1,
            stagger: open ? 0.15 : 0.1,
            ease: open ? "power3.out" : "power3.in",
            overwrite: true,
        });

        return () => {
            gsap.killTweensOf(heads);
        };
    }, [open]);

    return (
        <div className="absolute bottom-0 left-0 mb-60 h-1/2 w-screen pointer-events-none grid grid-cols-2 grid-rows-2 place-content-center place-items-center lg:flex lg:items-end lg:justify-center">
            {heads.map((head, i) => (
                <div
                    key={head.slug}
                    ref={(el) => { refs.current[i] = el; }}
                    className="relative h-[30vh] w-full md:h-[50vh] md:w-[22vw] shrink-0"
                >
                    <DitherView
                        file={head.model!}
                        className="absolute inset-0 h-full w-full"
                        active={active}
                        gridSize={sharp ? 1 : 9}
                        position={[0, -1, 0]}
                        rotation={[0, 0, 0]}
                        scale={headScale(head.slug) * 1.7}
                        roughness={head.roughness}
                        highlight={head.highlight}
                        hairColor={head.hair ?? undefined}
                        parallax={0.6}
                        parallaxSpeed={0.05}
                        idle={0.12}
                        ambient={0}
                        float={false}
                    />
                </div>
            ))}
        </div>
    );
}
