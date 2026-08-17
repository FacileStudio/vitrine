'use client'

import { useEffect, useLayoutEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { hideRevealY, slideY } from "@/app/utils/animations";
import { cn } from "@/app/utils";

// layout effect on the client, plain effect on the server so SSR doesn't warn
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface TextRevealProps {
    children: ReactNode;
    /** the revealing element's own classes: typography, and the layout of what it holds */
    className?: string;
    /** the crop's classes: whatever the surrounding layout cares about — width, margins, shrink */
    cropClassName?: string;
    style?: CSSProperties;
    /**
     * drive the reveal from the parent. Left out, the element is tagged `[data-reveal]`
     * instead and the nearest reveal observer (shelf, story, orbit) owns it
     */
    open?: boolean;
    /** on the way out the copy carries on upward instead of dropping back down */
    leaving?: boolean;
    duration?: number;
    delay?: number;
}

// One crop per line of copy: the content is parked below its own overflow-hidden box
// and rides up into it. The whole reveal vocabulary of the site is this one move, so
// this is the only component that should ever write the markup for it.
//
// Two ways to drive it, and nothing else:
//   <TextReveal open={show} leaving={leaving} delay={0.2}>  — the parent knows when
//   <TextReveal>                                            — an ancestor observer does
// The second renders `[data-reveal]` and no motion of its own: the markup is the
// contract, and whoever is watching the section pre-hides it and slides it in.
export default function TextReveal({
    children,
    className,
    cropClassName,
    style,
    open,
    leaving = false,
    duration = 0.6,
    delay = 0,
}: TextRevealProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const driven = open !== undefined;

    // hide before first paint, or the copy flashes above its crop
    useIsoLayoutEffect(() => {
        if (driven) hideRevealY([ref.current]);
    }, [driven]);

    useEffect(() => {
        const el = ref.current;
        if (!driven || !el) return;

        slideY(!!open, leaving, { duration, delay })(el, 0);
    }, [driven, open, leaving, duration, delay]);

    return (
        <span className={cn("block overflow-hidden", cropClassName)}>
            <span
                ref={ref}
                data-reveal={driven ? undefined : ""}
                style={style}
                className={cn("block", className)}
            >
                {children}
            </span>
        </span>
    );
}
