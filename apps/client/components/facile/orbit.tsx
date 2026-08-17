"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { usePinProgress } from "@/hooks/use-pin-progress";
import { EASE, run, slideY } from "@/app/utils/animations";
import SplitLines from "@/components/facile/splitLines";

export interface OrbitItem {
    subtitle: string;
    description: string;
    icon: string;
}

interface OrbitProps {
    items: OrbitItem[];
    // the tall pinned section the ring reads its scroll progress from
    sectionRef: RefObject<HTMLElement | null>;
    // circle radius in px
    radius?: number;
}

// the node at the centre snaps up to ACTIVE, everything else drops back to REST
const SCALE_ACTIVE = 1.3;
const SCALE_REST = 0.88;

// A ring centred on the left edge of the screen, so only its right half is visible.
// Scroll turns it: whichever node reaches the 3 o'clock point sits at the viewport's
// vertical centre, scales up, and drives the copy in the right-hand column.
export default function Orbit({ items, sectionRef, radius = 620 }: OrbitProps) {
    const [active, setActive] = useState(0);

    const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
    const copyRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef(0);
    const activeRef = useRef(0);

    const current = items[active];

    // place every node on the ring for a given progress: item 0 holds the 3 o'clock
    // point at p = 0, the last item at p = 1. Only position and opacity are driven
    // per frame — scale is left to the tween below so it pops instead of easing in.
    const layout = useCallback((p: number) => {
        const step = (2 * Math.PI) / items.length;
        const head = p * (items.length - 1);
        const vh = window.innerHeight;

        nodeRefs.current.forEach((el, i) => {
            if (!el)
                return;

            const a = (i - head) * step;
            const y = Math.sin(a) * radius;
            const near = gsap.utils.clamp(0, 1, Math.abs(y) / (vh * 0.5));

            gsap.set(el, {
                x: Math.cos(a) * radius,
                y,
                yPercent: -50,
                transformOrigin: "0% 50%",
                opacity: gsap.utils.mapRange(0, 1, 1, 0.35, near),
            });
        });

        const next = Math.round(gsap.utils.clamp(0, items.length - 1, head));
        if (next !== activeRef.current) {
            activeRef.current = next;
            setActive(next);
        }
    }, [items.length, radius]);

    usePinProgress(sectionRef, (p, visible) => {
        progressRef.current = p;
        if (visible)
            layout(p);
    });

    // the scroll handler only fires on scroll, so lay the ring out once on mount or
    // the nodes stay stacked on the origin until the user moves
    useEffect(() => {
        layout(progressRef.current);
    }, [layout]);

    // the jump: whichever node just took the centre overshoots up to size while the
    // one it replaced drops straight back down
    useEffect(() => {
        nodeRefs.current.forEach((el, i) => {
            if (!el)
                return;

            const on = i === active;
            gsap.to(el, {
                scale: on ? SCALE_ACTIVE : SCALE_REST,
                duration: on ? 0.3 : 0.2,
                ease: on ? "back.out(2.6)" : EASE.out,
                overwrite: "auto",
            });
        });
    }, [active]);

    // the logo fades across, the copy underneath it slides up line by line out of
    // its crop. SplitLines rebuilt and pre-hid those lines in its layout effect,
    // so by the time this runs they are already waiting below the fold.
    useEffect(() => {
        gsap.fromTo(
            iconRef.current,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.28, ease: EASE.out, overwrite: "auto" },
        );

        const lines = copyRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
        run(Array.from(lines ?? []), slideY(true, false, { stagger: 0.07, duration: 0.55 }));
    }, [active]);

    return (
        <div className="pointer-events-none absolute inset-0 z-20">
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-110">
                <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/[0.07]"
                    style={{ width: radius * 1.72, height: radius * 1.72 }}
                />
            </div>

            <div className="absolute left-0 top-1/2">
                {items.map((it, i) => (
                    <div
                        key={i}
                        ref={(el) => { nodeRefs.current[i] = el; }}
                        className="absolute left-0 top-0 flex flex-row items-center gap-3 whitespace-nowrap rounded-full px-5 py-3 will-change-transform"
                    >
                        {it.icon.startsWith("/")
                            ? <img src={it.icon} alt="" className="h-8 opacity-80 w-8" />
                            : <Icon icon={it.icon} className="text-3xl text-foreground font-bold" />}
                        <span className="text-lg font-medium text-foreground">{it.subtitle}</span>
                    </div>
                ))}
            </div>

            {/* the copy the ring used to carry at its centre, now its own column */}
            <div
                ref={copyRef}
                className="absolute right-[20vw] top-1/2 z-18 w-[28vw] max-w-lg -translate-y-1/2 text-left"
            >
                <div ref={iconRef}>
                    {current.icon.startsWith("/")
                        ? <img src={current.icon} alt="" className="mx-auto mb-6 opacity-80 h-20 w-20" />
                        : <Icon icon={current.icon} className="mx-auto mb-6 block text-7xl text-foreground" />}
                </div>
                <SplitLines
                    key={`title-${active}`}
                    text={current.subtitle}
                    className="text-5xl font-bold text-center text-foreground"
                    gap="mb-1"
                />
                <SplitLines
                    key={`description-${active}`}
                    text={current.description}
                    className="mt-5 text-xl font-medium leading-relaxed text-center text-foreground/60"
                    gap="mb-1"
                />
            </div>
        </div>
    );
}
