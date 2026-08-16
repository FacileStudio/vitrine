'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import gsap from "gsap";
import { blockSweep, hideBlockSweep } from "@/app/utils/animations";

// layout effect on the client, plain effect on the server so SSR doesn't warn
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface BlockRevealProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    /** panel colour: light on dark surfaces, dark on light ones */
    blockColor?: "light" | "dark";
    duration?: number;
    /** stagger against the rest of its group, in seconds */
    delay?: number;
    /** seconds the first play holds off — the arriving curtain, mostly. A replay
     *  later on doesn't wait: the hold is a deadline, not a duration */
    arrive?: number;
    /** drive it from the parent; omit and it wipes itself in when it scrolls in */
    open?: boolean;
    /** the band it watches while self-observing (same syntax as rootMargin) */
    rootMargin?: string;
}

// The copy starts invisible and a solid panel wipes across it: in from the left,
// then out to the right, uncovering the text with its trailing edge. Nothing
// slides or fades — the panel is the whole reveal, so the copy simply isn't there
// until the panel has passed over it.
export default function BlockReveal({
    children,
    className = "",
    style,
    blockColor = "light",
    duration = 0.8,
    delay = 0,
    arrive = 0,
    open,
    rootMargin = "0px 0px -12% 0px",
}: BlockRevealProps) {
    const rootRef = useRef<HTMLSpanElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const blockRef = useRef<HTMLSpanElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const holdUntil = useRef(0);
    const [inView, setInView] = useState(false);

    const show = open ?? inView;

    // hide before first paint, or the copy flashes ahead of its own panel
    useIsoLayoutEffect(() => {
        // the hold is stamped once, on mount — a later `arrive` must not move it
        holdUntil.current = performance.now() + arrive * 1000;
        hideBlockSweep(blockRef.current, textRef.current);
    }, []);

    // a parent that already knows when its section arrives passes `open`; left to
    // itself the panel watches its own box, and replays if it comes back around
    useEffect(() => {
        if (open !== undefined) return;
        const el = rootRef.current;
        if (!el) return;

        const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin, threshold: 0 });
        io.observe(el);
        return () => io.disconnect();
    }, [open, rootMargin]);

    useEffect(() => {
        tlRef.current?.kill();

        const block = blockRef.current;
        const text = textRef.current;
        if (!show || !block || !text) {
            hideBlockSweep(block, text);
            return;
        }

        const hold = delay + Math.max(0, holdUntil.current - performance.now()) / 1000;
        tlRef.current = blockSweep(block, text, { duration, delay: hold });

        return () => { tlRef.current?.kill(); };
    }, [show, duration, delay]);

    return (
        <span ref={rootRef} className={`relative block ${className}`} style={style}>
            <span ref={textRef} className="block">{children}</span>
            <span
                ref={blockRef}
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 will-change-transform ${blockColor === "dark" ? "bg-foreground" : "bg-background"}`}
            />
        </span>
    );
}
