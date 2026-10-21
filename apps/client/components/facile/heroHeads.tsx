"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DitherView } from "@/webgl/lazy";
import { useAfter } from "@/hooks/use-after";
import { useNarrow } from "@/hooks/use-narrow";
import { useMembers } from "@/components/facile/contentProvider";
import { headScale } from "@/lib/content/studio";
import { EASE } from "@/lib/animations";

// dx/dy point out of the screen; turn (degrees, clockwise) lays the head on its side (top heads: crown toward the centre, bottom heads: torso toward the centre), so yaw (radians) looks up or down at the copy; bleed is the % of its box the head is pushed off-screen inside its canvas; zoom scales one head against the others; mobile overrides turn and bleed under 768px
const CORNERS = [
    { box: "top-0 left-0", turn: 60, dx: -1, dy: -1, yaw: 0.9, pitch: -0.2, bleed: { x: 40, y: 50 }, zoom: 0.6, mobile: { turn: 20, bleed: { x: 60, y: 20 } } },
    { box: "top-0 right-0", turn: -60, dx: 1, dy: -1, yaw: -0.9, pitch: -0.2, bleed: { x: 25, y: 15 }, zoom: 0.7, mobile: { turn: -20, bleed: { x: 30, y: 10 } } },
    { box: "bottom-0 left-0", turn: -60, dx: -1, dy: 1, yaw: 0.9, pitch: 0.2, bleed: { x: 40, y: 50 }, zoom: 0.7, mobile: { turn: -20, bleed: { x: 60, y: 30 } } },
    { box: "bottom-0 right-0", turn: 60, dx: 1, dy: 1, yaw: -0.9, pitch: 0.2, bleed: { x: 20, y: 15 }, zoom: 0.7, mobile: { turn: 20, bleed: { x: 25, y: 20 } } },
];

const OUT = 0.6;
// the canvas overhangs its box by this factor so a big head is not cropped at the canvas edge; model size follows canvas height, so the scale is divided by it
const ROOM = 1.5;
// world units one box side spans at the head's depth: the camera sits sqrt(1.8² + 4²) from the head and sees 2·depth·tan(30°) across ROOM boxes
const BOX = (2 * Math.hypot(1.8, 4) * Math.tan(Math.PI / 6)) / ROOM;
// the camera looks up at the origin from (0, -1, 4), so its screen-up axis leans toward it: (0, 4, 1) normalised
const UP = { y: 4 / Math.hypot(4, 1), z: 1 / Math.hypot(4, 1) };

// the bleed as a model position: a screen push, turned back through the css turn, laid on the camera's right and up axes
const placement = (i: number, narrow: boolean): [number, number, number] => {
    const { bleed, turn } = narrow ? CORNERS[i].mobile : CORNERS[i];
    const sx = CORNERS[i].dx * ((bleed.x - 10) / 100) * BOX;
    const sy = CORNERS[i].dy * (bleed.y / 100) * BOX;
    const a = (turn * Math.PI) / 180;
    // screen y points down, the camera's up points up
    const up = Math.sin(a) * sx - Math.cos(a) * sy;

    return [Math.cos(a) * sx + Math.sin(a) * sy, UP.y * up, UP.z * up];
};

// pushes a corner box out along its diagonal by a share of its own size
const away = (el: HTMLElement | null, i: number) => {
    const d = (el?.offsetWidth ?? 0) * OUT;

    return { x: CORNERS[i].dx * d, y: CORNERS[i].dy * d };
};

export default function HeroHeads({ open }: { open: boolean }) {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const sharp = useAfter(open, 1200);
    const heads = useMembers().slice(0, CORNERS.length);
    const narrow = useNarrow();
    const wasOpen = useRef(false);
    const [parked, setParked] = useState(false);

    useLayoutEffect(() => {
        refs.current.forEach((el, i) => gsap.set(el, away(el, i)));
    }, [heads.length]);

    // the fixed layer always intersects the viewport, so the canvases only stop once the heads have flown out; never before the first open, or the models compile mid-intro
    useEffect(() => {
        const park = !open && wasOpen.current;
        const heads = refs.current;

        wasOpen.current = open;

        heads.forEach((el, i) => {
            gsap.to(el, {
                ...(open ? { x: 0, y: 0 } : away(el, i)),
                delay: open ? 0.2 + i * 0.12 : i * 0.05,
                duration: open ? 1.6 : 0.9,
                ease: open ? EASE.out : EASE.in,
                overwrite: true,
                onStart: open && i === 0 ? () => setParked(false) : undefined,
                onComplete: park && i === heads.length - 1 ? () => setParked(true) : undefined,
            });
        });

        return () => {
            gsap.killTweensOf(heads);
        };
    }, [open, heads.length]);

    return (
        // z-60 sits above the next section's layers, so the heads fly out over it instead of being covered; the hero copy is z-70
        <div className="pointer-events-none fixed inset-0 z-[60] opacity-80 overflow-hidden" aria-hidden="true">
            {heads.map((head, i) => (
                <div
                    key={head.slug}
                    ref={(el) => { refs.current[i] = el; }}
                    className={`absolute size-[120vw] md:size-[min(150vh,70vw)] ${CORNERS[i].box}`}
                >
                    {/* the turn sits on a wrapper: gsap moves the box and would fold a css rotate into its transform */}
                    <div className="absolute inset-0" style={{ rotate: `${narrow ? CORNERS[i].mobile.turn : CORNERS[i].turn}deg` }}>
                        <DitherView
                            file={head.model!}
                            className="absolute -inset-1/4"
                            gridSize={sharp ? 2 : 9}
                            active={!parked}
                            position={placement(i, narrow)}
                            rotation={[CORNERS[i].pitch, CORNERS[i].yaw, 0]}
                            scale={(headScale(head.slug) * 3 * CORNERS[i].zoom) / ROOM}
                            roughness={head.roughness}
                            metalness={0.6}
                            highlight={head.highlight}
                            intensity={0.8}
                            bloom
                            bloomIntensity={0.5}
                            hairColor={head.hair ?? undefined}
                            parallax={0.2}
                            parallaxSpeed={0.02}
                            idle={0.12}
                            ambient={1}
                            float={false}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
