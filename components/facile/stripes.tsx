"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const defaultEase = "cubic-bezier(0.7, 0, 0.3, 1)";

// covers that slide off toward `orientation` (deg) when open; split into columns/rows by the dominant axis.
// pass a static `open`, or `openWhen` to derive it from scroll (listener lives here, not the parent).
// tune the slide feel via `ease` (any CSS timing function, e.g. "ease-out") and `duration` (seconds).
export default function Stripes({
    orientation,
    count,
    open: openProp,
    openWhen,
    className = "bg-background",
    ease = defaultEase,
    duration = 0.8,
    stagger = 0.1,
    transition,
    children,
}: {
    orientation: number;
    count: number;
    open?: boolean;
    openWhen?: () => boolean;
    className?: string;
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

    openWhenRef.current = openWhen;

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

    const rad = (orientation * Math.PI) / 180;
    const dx = -Math.sin(rad);
    const dy = -Math.cos(rad);
    const away = `translate(${(dx * 110).toFixed(2)}%, ${(dy * 110).toFixed(2)}%)`;
    const vertical = Math.abs(Math.cos(rad)) >= Math.abs(Math.sin(rad));

    const stripStyle = (i: number): CSSProperties =>
        vertical
            ? {
                  left: `${(i * 100) / count}%`,
                  width: `${100 / count}%`,
                  top: 0,
                  height: "100%",
              }
            : {
                  top: `${(i * 100) / count}%`,
                  height: `${100 / count}%`,
                  left: 0,
                  width: "100%",
              };

    return (
        <>
            {Array.from({ length: count }, (_, i) => (
                <div
                    key={i}
                    className={`absolute z-40 pointer-events-none ${className}`}
                    style={{
                        ...stripStyle(i),
                        transform: open ? away : "translate(0%, 0%)",
                        transition: coverTransition,
                        transitionDelay: `${i * stagger}s`,
                    }}
                >
                    {children}
                </div>
            ))}
        </>
    );
}
