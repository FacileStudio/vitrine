'use client'

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const coverTransition = "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)";

// covers that slide off toward `orientation` (deg) when open; split into columns/rows by the dominant axis.
// pass a static `open`, or `openWhen` to derive it from scroll (listener lives here, not the parent).
export default function Stripes({
    orientation,
    count,
    open: openProp,
    openWhen,
    className = "bg-background",
    transition = coverTransition,
    children,
}: {
    orientation: number;
    count: number;
    open?: boolean;
    openWhen?: () => boolean;
    className?: string;
    transition?: string;
    children?: React.ReactNode;
}) {
    const [openState, setOpenState] = useState(false);
    const openWhenRef = useRef(openWhen);
    openWhenRef.current = openWhen;

    useEffect(() => {
        if (!openWhenRef.current) return;
        const update = () => setOpenState(openWhenRef.current!());
        window.addEventListener("scroll", update, { passive: true });
        update();
        return () => window.removeEventListener("scroll", update);
    }, []);

    const open = openWhen ? openState : !!openProp;

    const rad = (orientation * Math.PI) / 180;
    const dx = -Math.sin(rad);
    const dy = -Math.cos(rad);
    const away = `translate(${(dx * 110).toFixed(2)}%, ${(dy * 110).toFixed(2)}%)`;
    const vertical = Math.abs(Math.cos(rad)) >= Math.abs(Math.sin(rad));

    const stripStyle = (i: number): CSSProperties =>
        vertical
            ? { left: `${(i * 100) / count}%`, width: `${100 / count}%`, top: 0, height: "100%" }
            : { top: `${(i * 100) / count}%`, height: `${100 / count}%`, left: 0, width: "100%" };

    return (
        <>
            {Array.from({ length: count }, (_, i) => (
                <div
                    key={i}
                    className={`absolute z-40 pointer-events-none ${className}`}
                    style={{
                        ...stripStyle(i),
                        transform: open ? away : "translate(0%, 0%)",
                        transition,
                        transitionDelay: `${i * 0.1}s`,
                    }}
                >
                    {children}
                </div>
            ))}
        </>
    );
}
