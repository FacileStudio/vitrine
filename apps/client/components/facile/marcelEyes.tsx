'use client'

import gsap from "gsap";
import { useCallback, useEffect, useRef, type Ref } from "react";

export function useMarcelEyes(variant: Variant = "card") {
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
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;

        const w = Math.min(
            box.getBoundingClientRect().width,
            box.parentElement?.getBoundingClientRect().width ?? Infinity,
        );
        const maxX = w * TRAVEL[variant] * (window.innerWidth >= 2000 ? 1.11 : 1);

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
    }, [variant, release]);

    const stop = useCallback(() => {
        release();

        if (eyes.current)
            gsap.to(eyes.current, { x: 0, y: 0, duration: 0.6, ease: "power2.out", overwrite: true });
        if (spheres.current)
            gsap.to(spheres.current, { x: 0, duration: 0.6, ease: "power2.out", overwrite: true });
    }, [release]);

    useEffect(() => release, [release]);

    return { frame, eyes, spheres, start, stop };
}

type Variant = "card" | "cover";

const TRAVEL: Record<Variant, number> = {
    card: 0.13,
    cover: 0.18,
};

const EYE = {
    card: { anchor: "bottom-[3.3cqw] lg:bottom-6", row: "gap-[4.4cqw] lg:gap-8", pill: "w-[6.1cqw] h-[26.7cqw] lg:w-10 lg:h-48 xl:w-12 xl:h-70" },
    cover: { anchor: "bottom-[-6cqw]", row: "gap-[3.3cqw]", pill: "w-[6.7cqw] h-[29cqw]" },
};

const SPHERE = {
    card: { row: "gap-[8.9cqw] lg:gap-16", ball: "w-[15.6cqw] h-[15.6cqw] lg:w-28 lg:h-28 xl:w-40 xl:h-40" },
    cover: { row: "gap-[6.7cqw]", ball: "w-[16.7cqw] aspect-square" },
};

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
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center @container">
            <div ref={ref} className={`flex translate-y-1/2 will-change-transform ${s.row}`}>
                <div className={`rounded-full bg-[#95DFE9] shadow-3xl ${s.ball}`} />
                <div className={`rounded-full bg-[#95DFE9] shadow-3xl ${s.ball}`} />
            </div>
        </div>
    );
}
