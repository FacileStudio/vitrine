"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const defaultEase = "cubic-bezier(0.7, 0, 0.3, 1)";

// covers that slide off toward `orientation` (deg) when open; split into columns/rows by the dominant axis.
// pass a static `open`, or `openWhen` to derive it from scroll (listener lives here, not the parent).
// tune the slide feel via `ease` (any CSS timing function, e.g. "ease-out") and `duration` (seconds).
// stack two colours (different `zIndex`, `leadOpen`/`leadClose`) to race one another across, same
// trick as the Menu curtain — one layer's smaller lead value arrives/leaves first. `reverseOnOpen`
// and `reverseOnClose` flip the per-index stagger on that transition: set one to bounce the wave
// back the way it came, set both to keep it sweeping the same way on arrival and departure.
// `exitOrientation` sends the covers off toward a different heading than the one they arrived
// from — give it the opposite of `orientation` and the wave carries straight on through the
// viewport instead of retreating back out the side it came in.
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
    transition,
    children,
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
    transition?: string;
    children?: React.ReactNode;
}) {
    const coverTransition = transition ?? `transform ${duration}s ${ease}`;
    const [openState, setOpenState] = useState(false);
    const openWhenRef = useRef(openWhen);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        openWhenRef.current = openWhen;
    });

    useEffect(() => {
        if (!openWhenRef.current) return;
        const update = () => setOpenState(openWhenRef.current!());
        window.addEventListener("scroll", update, { passive: true });
        update();
        return () => window.removeEventListener("scroll", update);
    }, []);

    useEffect(() => {
        const id = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(id);
    }, []);

    const open = ready && (openWhen ? openState : !!openProp);

    // the split into rows or columns follows `orientation`; only the heading the
    // covers leave on is allowed to differ from the one they arrived from
    const rad = (orientation * Math.PI) / 180;
    const exitRad = ((exitOrientation ?? orientation) * Math.PI) / 180;
    const away = `translate(${(-Math.sin(exitRad) * 110).toFixed(2)}%, ${(-Math.cos(exitRad) * 110).toFixed(2)}%)`;
    const vertical = Math.abs(Math.cos(rad)) >= Math.abs(Math.sin(rad));

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
            {Array.from({ length: count }, (_, i) => {
                const delay = open
                    ? leadOpen + (reverseOnOpen ? count - 1 - i : i) * stagger
                    : leadClose + (reverseOnClose ? count - 1 - i : i) * stagger;
                return (
                    <div
                        key={i}
                        className={`absolute pointer-events-none ${className}`}
                        style={{
                            ...stripStyle(i),
                            zIndex,
                            transform: open ? away : "translate(0%, 0%)",
                            transition: coverTransition,
                            transitionDelay: `${delay}s`,
                        }}
                    >
                        {children}
                    </div>
                );
            })}
        </>
    );
}
