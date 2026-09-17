'use client'

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { hideRevealY, slideY } from "@/lib/animations";
import { cn } from "@/lib/utils";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface TextRevealProps {
    children: ReactNode;
    className?: string;
    cropClassName?: string;
    style?: CSSProperties;
    open?: boolean;
    leaving?: boolean;
    duration?: number;
    delay?: number;
    as?: "span" | "p" | "h1" | "h2" | "h3";
}

export default function TextReveal({
    children,
    className,
    cropClassName,
    style,
    open,
    leaving = false,
    duration = 0.6,
    delay = 0,
    as: Tag = "span",
}: TextRevealProps) {
    const ref = useRef<HTMLElement>(null);
    const driven = open !== undefined;

    // y is zeroed because gsap reads the server-rendered translate as px and would stack it on yPercent
    useIsoLayoutEffect(() => {
        if (!driven)
            return;

        gsap.set(ref.current, { y: 0 });
        hideRevealY([ref.current]);
    }, [driven]);

    useEffect(() => {
        const el = ref.current;
        if (!driven || !el) return;

        gsap.killTweensOf(el, "yPercent");
        slideY(!!open, leaving, { duration, delay })(el, 0);
    }, [driven, open, leaving, duration, delay]);

    return (
        <span className={cn("block overflow-hidden", cropClassName)}>
            <Tag
                ref={ref as never}
                data-reveal={driven ? undefined : ""}
                style={driven ? { transform: "translateY(110%)", ...style } : style}
                className={cn("block", className)}
            >
                {children}
            </Tag>
        </span>
    );
}
