"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { slide } from "@/lib/animations";

const defaultEase = "cubic-bezier(0.7, 0, 0.3, 1)";

export default function Stripes({
    orientation,
    exitOrientation,
    count,
    open: openProp,
    openWhen,
    className = "bg-background",
    zIndex = 40,
    leadOpen = 0,
    leadClose = 0,
    reverseOnOpen = false,
    reverseOnClose = false,
    ease = defaultEase,
    duration = 0.8,
    stagger = 0.1,
}: {
    orientation: number;
    exitOrientation?: number;
    count: number;
    open?: boolean;
    openWhen?: () => boolean;
    className?: string;
    zIndex?: number;
    leadOpen?: number;
    leadClose?: number;
    reverseOnOpen?: boolean;
    reverseOnClose?: boolean;
    ease?: string;
    duration?: number;
    stagger?: number;
}) {
    const [openState, setOpenState] = useState(false);
    const [ready, setReady] = useState(false);
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    useScroll(() => {
        if (openWhen) setOpenState(openWhen());
    });

    useEffect(() => {
        const id = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(id);
    }, []);

    const open = ready && (openWhen ? openState : !!openProp);

    const rad = (orientation * Math.PI) / 180;
    const exitRad = ((exitOrientation ?? orientation) * Math.PI) / 180;
    const away = `translate(${(-Math.sin(exitRad) * 110).toFixed(2)}%, ${(-Math.cos(exitRad) * 110).toFixed(2)}%)`;
    const vertical = Math.abs(Math.cos(rad)) >= Math.abs(Math.sin(rad));

    useEffect(() => {
        refs.current.forEach((el, i) => {
            if (!el)
                return;

            const delay = open
                ? leadOpen + (reverseOnOpen ? count - 1 - i : i) * stagger
                : leadClose + (reverseOnClose ? count - 1 - i : i) * stagger;

            slide(el, open ? away : "translate(0%, 0%)", { duration, delay, easing: ease });
        });
    }, [open, away, count, leadOpen, leadClose, reverseOnOpen, reverseOnClose, stagger, duration, ease]);

    const stripStyle = (i: number): CSSProperties =>
        vertical
            ? {
                  left: `${(i * 100) / count}%`,
                  width: `calc(${100 / count}% + 1px)`,
                  top: 0,
                  height: "100%",
              }
            : {
                  top: `${(i * 100) / count}%`,
                  height: `calc(${100 / count}% + 1px)`,
                  left: 0,
                  width: "100%",
              };

    return (
        <>
            {Array.from({ length: count }, (_, i) => (
                <div
                    key={i}
                    ref={(el) => { refs.current[i] = el; }}
                    className={`absolute pointer-events-none ${className}`}
                    style={{
                        ...stripStyle(i),
                        zIndex,
                        transform: "translate(0%, 0%)",
                    }}
                />
            ))}
        </>
    );
}
