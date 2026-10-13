'use client'

import gsap from "gsap";
import { useCallback, useEffect, useRef, type Ref } from "react";

type Variant = "card" | "cover";

// how far the eyes may wander, as a fraction of the frame: sideways, then up and down
const REACH = { x: 0.13, up: 0.05, down: 0.05 };

// every size is in cqw of the frame, so the eyes scale with the card and the screen
const EYE: Record<Variant, { anchor: string; row: string; pill: string }> = {
    card: { anchor: "bottom-[3.3cqw]", row: "gap-[3.5cqw]", pill: "w-[5.5cqw] h-[25cqw]" },
    cover: { anchor: "bottom-[-6cqw]", row: "gap-[3.5cqw]", pill: "w-[6.7cqw] h-[29cqw]" },
};

const SPHERE: Record<Variant, { row: string; ball: string }> = {
    card: { row: "gap-[8.9cqw]", ball: "w-[12.5cqw]" },
    cover: { row: "gap-[6.7cqw]", ball: "w-[16.7cqw]" },
};

const follow = (el: HTMLElement, prop: "x" | "y", duration = 1.4, delay = 0) =>
    gsap.quickTo(el, prop, {
        duration,
        delay,
        ease: "power2.out",
    });

export function useMarcelEyes() {
    const frame = useRef<HTMLDivElement>(null);
    const eyes = useRef<HTMLDivElement>(null);
    const spheres = useRef<HTMLDivElement>(null);
    const move = useRef<((e: PointerEvent) => void) | null>(null);

    const release = useCallback(() => {
        if (move.current)
            window.removeEventListener("pointermove", move.current);

        move.current = null;
    }, []);

    const start = useCallback(() => {
        const el = eyes.current;
        const box = frame.current;
        if (!el || !box)
            return;

        release();
        gsap.set(el, { x: 0, y: 0 });

        const r = el.getBoundingClientRect();
        const f = box.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const clampX = gsap.utils.clamp(-f.width * REACH.x, f.width * REACH.x);
        const clampY = gsap.utils.clamp(-f.height * REACH.up, f.height * REACH.down);
        const setX = follow(el, "x");
        const setY = follow(el, "y");
        const setBalls = spheres.current ? follow(spheres.current, "x", 1.6, 0.2) : null;

        const onMove = (e: PointerEvent) => {
            const x = clampX(e.clientX - cx);

            setX(x);
            setY(clampY(e.clientY - cy));
            setBalls?.(x);
        };

        move.current = onMove;
        window.addEventListener("pointermove", onMove, { passive: true });
    }, [release]);

    const stop = useCallback(() => {
        release();

        const home = {
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            overwrite: true,
        };

        if (eyes.current)
            gsap.to(eyes.current, { ...home, y: 0 });
        if (spheres.current)
            gsap.to(spheres.current, home);
    }, [release]);

    // quickTo keeps its own tween alive on the element, so unmounting has to stop it as well as the listener
    useEffect(() => () => {
        release();
        gsap.killTweensOf([eyes.current, spheres.current].filter(Boolean));
    }, [release]);

    return { frame, eyes, spheres, start, stop };
}

type EyesProps = {
    variant?: Variant;
    frameRef?: Ref<HTMLDivElement>;
    ref?: Ref<HTMLDivElement>;
};

export function MarcelEyes({ variant = "card", frameRef, ref }: EyesProps) {
    const s = EYE[variant];

    return (
        <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
            <div ref={frameRef} className="relative h-full aspect-[1.597] @container">
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

export function MarcelSpheres({ variant = "card", ref }: Omit<EyesProps, "frameRef">) {
    const s = SPHERE[variant];

    return (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 flex justify-center @container">
            <div ref={ref} className={`flex translate-y-1/2 will-change-transform ${s.row}`}>
                <div className={`aspect-square rounded-full bg-[#95DFE9] shadow-3xl ${s.ball}`} />
                <div className={`aspect-square rounded-full bg-[#95DFE9] shadow-3xl ${s.ball}`} />
            </div>
        </div>
    );
}
