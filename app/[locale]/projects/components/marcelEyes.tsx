'use client'

import gsap from "gsap";
import { useCallback, useEffect, useRef, type Ref } from "react";

// Marcel's cover carries a pair of googly eyes that follow the cursor, with two
// spheres trailing a beat behind. Every size is a share of the frame it sits in,
// so the same markup fits the list card and the far bigger cover block the card
// flips into — the gag keeps its proportions as the image grows.
export function useMarcelEyes() {
    const frame = useRef<HTMLDivElement>(null);
    const eyes = useRef<HTMLDivElement>(null);
    const spheres = useRef<HTMLDivElement>(null);
    const move = useRef<((e: PointerEvent) => void) | null>(null);

    const release = () => {
        if (move.current)
            window.removeEventListener("pointermove", move.current);

        move.current = null;
    };

    const start = useCallback(() => {
        const el = eyes.current;
        const box = frame.current;
        if (!el || !box)
            return;

        release();

        // measure the eyes' rest centre — offsets are relative to it
        gsap.set(el, { x: 0, y: 0 });
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;

        // the card's hand-tuned travel, kept as a share of the frame so a bigger
        // frame gets a proportionally bigger range
        const w = box.getBoundingClientRect().width;
        const maxX = w * (window.innerWidth >= 2000 ? 0.2 : 0.18);

        const clampX = gsap.utils.clamp(-maxX, maxX),
              clampY = gsap.utils.clamp(-w * 0.06, w * 0.02),
              setX = gsap.quickTo(el, "x", { duration: 1.4, ease: "power2.out" }),
              setY = gsap.quickTo(el, "y", { duration: 1.4, ease: "power2.out" }),
              setSphX = spheres.current ? gsap.quickTo(spheres.current, "x", { duration: 1.6, ease: "power2.out", delay: 0.2 }) : null;

        const onMove = (e: PointerEvent) => {
            const tx = clampX(e.clientX - cx);
            setX(tx);
            setY(clampY(e.clientY - cy));
            setSphX?.(tx);
        };

        move.current = onMove;
        window.addEventListener("pointermove", onMove, { passive: true });
    }, []);

    const stop = useCallback(() => {
        release();

        // overwrite:true kills the lingering quickTo tweens so they can't snap
        // back to the cursor
        if (eyes.current)
            gsap.to(eyes.current, { x: 0, y: 0, duration: 0.6, ease: "power2.out", overwrite: true });
        if (spheres.current)
            gsap.to(spheres.current, { x: 0, duration: 0.6, ease: "power2.out", overwrite: true });
    }, []);

    useEffect(() => release, []);

    return { frame, eyes, spheres, start, stop };
}

// the card keeps the hand-picked pixel sizes it shipped with; the detail cover
// states them as a share of the frame instead, so the gag grows with the image
// the card flips into
type Variant = "card" | "cover";

const EYE = {
    card: { anchor: "bottom-12", row: "gap-8", pill: "w-10 h-48 xl:w-16 xl:h-70" },
    cover: { anchor: "bottom-[6cqw]", row: "gap-[4cqw]", pill: "w-[8cqw] h-[35cqw]" },
};

const SPHERE = {
    card: { row: "gap-16", ball: "w-28 h-28 xl:w-40 xl:h-40" },
    cover: { row: "gap-[8cqw]", ball: "w-[20cqw] aspect-square" },
};

type PartProps = {
    variant?: Variant;
    frameRef?: Ref<HTMLDivElement>;
    ref?: Ref<HTMLDivElement>;
};

// the eyes ride the image, not the block: object-cover crops Marcel's frame in
// the bento, so the layer mirrors the rendered image box (4379x2742) and the
// cover's cqw sizes stay locked to the drawing rather than to the cell
export function MarcelEyes({ variant = "card", frameRef, ref }: PartProps) {
    const s = EYE[variant];

    return (
        <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
            <div ref={frameRef} className="relative h-full aspect-[1.597] [container-type:inline-size]">
                <div className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 ${s.anchor}`}>
                    <div ref={ref} className={`flex will-change-transform ${s.row}`}>
                        <div className={`rounded-full bg-black ${s.pill}`} />
                        <div className={`rounded-full bg-black ${s.pill}`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function MarcelSpheres({ variant = "card", ref }: { variant?: Variant; ref?: Ref<HTMLDivElement> }) {
    const s = SPHERE[variant];

    return (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center [container-type:inline-size]">
            <div ref={ref} className={`flex translate-y-1/2 will-change-transform ${s.row}`}>
                <div className={`rounded-full bg-[#95DFE9] shadow-3xl ${s.ball}`} />
                <div className={`rounded-full bg-[#95DFE9] shadow-3xl ${s.ball}`} />
            </div>
        </div>
    );
}
