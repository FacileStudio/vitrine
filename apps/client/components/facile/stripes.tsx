"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { useScroll } from "@/hooks/use-scroll";

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
    children?: React.ReactNode;
}) {
    const [openState, setOpenState] = useState(false);
    const [ready, setReady] = useState(false);

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
                            transition: `transform ${duration}s ${ease}`,
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
