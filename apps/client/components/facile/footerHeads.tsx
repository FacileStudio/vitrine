"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { DitherView } from "@/webgl/lazy";
import { useAfter } from "@/hooks/use-after";
import { useMembers } from "@/components/facile/contentProvider";
import { HEAD_SCALE } from "@/lib/content/studio";

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
        // phones line the heads up in the gap between the links and the contact block, so none sits on a link
        <div className="absolute bottom-0 left-0 mb-40 h-[20vh] w-screen pointer-events-none grid grid-cols-4 place-content-center place-items-center md:mb-60 md:h-1/2 md:grid-cols-2 md:grid-rows-2 lg:flex lg:items-end lg:justify-center">
            {heads.map((head, i) => (
                <div
                    key={head.slug}
                    ref={(el) => { refs.current[i] = el; }}
                    className="relative h-[20vh] w-full md:h-[50vh] md:w-[22vw] shrink-0"
                >
                    <DitherView
                        file={head.model!}
                        className="absolute inset-0 h-full w-full"
                        active={active}
                        gridSize={sharp ? 1 : 9}
                        position={[0, -1, 0]}
                        rotation={[0, 0, 0]}
                        scale={HEAD_SCALE * 1.7}
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
