'use client'

import { useEffect, useLayoutEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import gsap from "gsap";
import { blockSweep, blockSweepOut, hideBlockSweep, SWEEP_BLEED } from "@/app/utils/animations";
import { useSweep, type SweepTrigger } from "@/hooks/use-sweep";

// layout effect on the client, plain effect on the server so SSR doesn't warn
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface BlockRevealProps extends SweepTrigger {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    /** panel colour: light on dark surfaces, dark on light ones */
    blockColor?: "light" | "dark";
    duration?: number;
    /** stagger against the rest of its group, in seconds */
    delay?: number;
}

// The copy starts invisible and a solid panel wipes across it: in from the left,
// then out to the right, uncovering the text with its trailing edge. Nothing
// slides or fades — the panel is the whole reveal, so the copy simply isn't there
// until the panel has passed over it. A paragraph that wraps wants one panel per
// line instead: that's SplitLines' `sweep`, which staggers them down the block.
export default function BlockReveal({
    children,
    className = "",
    style,
    blockColor = "light",
    duration = 0.8,
    delay = 0,
    open,
    arrive,
    rootMargin,
}: BlockRevealProps) {
    const rootRef = useRef<HTMLSpanElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const blockRef = useRef<HTMLSpanElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const played = useRef(false);

    const { show, hold } = useSweep(rootRef, { open, arrive, rootMargin });

    // hide before first paint, or the copy flashes ahead of its own panel
    useIsoLayoutEffect(() => hideBlockSweep(blockRef.current, textRef.current), []);

    useEffect(() => {
        tlRef.current?.kill();

        const block = blockRef.current;
        const text = textRef.current;
        if (!block || !text) return;

        if (show) {
            hideBlockSweep(block, text);
            played.current = true;
            tlRef.current = blockSweep(block, text, { duration, delay: delay + hold() });
        } else if (played.current && Number(gsap.getProperty(text, "opacity")) > 0) {
            // it was on screen a moment ago, so it leaves rather than blinks out —
            // unless the panel never got round to uncovering it, which is nothing
            // to animate away
            gsap.set(block, { scaleX: 0 });
            tlRef.current = blockSweepOut(text, { duration: duration * 0.45 });
        } else {
            hideBlockSweep(block, text);
        }

        return () => { tlRef.current?.kill(); };
    }, [show, duration, delay, hold]);

    return (
        <span ref={rootRef} className={`relative block ${className}`} style={style}>
            <span ref={textRef} className="block">{children}</span>
            <span
                ref={blockRef}
                aria-hidden="true"
                style={SWEEP_BLEED}
                className={`pointer-events-none absolute will-change-transform ${blockColor === "dark" ? "bg-foreground" : "bg-background"}`}
            />
        </span>
    );
}
