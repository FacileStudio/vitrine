"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export interface OrbitItem {
    subtitle: string;
    description: string;
    icon: string;
}

interface OrbitProps {
    items: OrbitItem[];
    // circle radius in px
    radius?: number;
    // seconds for one full revolution
    duration?: number;
}

// A ring of nodes spaced evenly around a circle's border, turning slowly. Hovering
// a node reveals its content (icon + title + description) at the fixed centre.
export default function Orbit({ items, radius = 480, duration = 160 }: OrbitProps) {
    // sticky selection: set on hover, kept on leave so the centre always shows one
    const [active, setActive] = useState(0);
    const current = items[active];

    // node coordinates on the ring, in the SVG's local space (origin = centre)
    const point = (i: number) => {
        const a = (i / items.length) * 2 * Math.PI;
        return { x: radius + Math.sin(a) * radius, y: radius - Math.cos(a) * radius };
    };
    const hub = items.findIndex((it) => it.subtitle === "Perception");
    const hubPt = point(hub < 0 ? 0 : hub);

    return (
        <div className="pointer-events-none absolute inset-0 z-20">
            {/* rotating ring */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className="relative animate-[orbit-spin_linear_infinite]"
                    style={{ width: radius * 2, height: radius * 2, animationDuration: `${duration}s` }}
                >
                    {/* spokes: everything links back to Perception, the hub */}
                    <svg
                        className="absolute inset-0 text-foreground/15"
                        width={radius * 2}
                        height={radius * 2}
                        fill="none"
                    >
                        {items.map((_, i) =>
                            i === hub ? null : (
                                <line
                                    key={i}
                                    x1={hubPt.x}
                                    y1={hubPt.y}
                                    x2={point(i).x}
                                    y2={point(i).y}
                                    stroke="currentColor"
                                    strokeWidth={1}
                                />
                            ),
                        )}
                    </svg>

                    {items.map((it, i) => {
                        const angle = (i / items.length) * 2 * Math.PI;
                        const x = Math.sin(angle) * radius;
                        const y = -Math.cos(angle) * radius;
                        return (
                            <div
                                key={i}
                                className="absolute left-1/2 top-1/2"
                                style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                            >
                                {/* counter-spin so each label stays upright while it orbits */}
                                <button
                                    type="button"
                                    onMouseEnter={() => setActive(i)}
                                    className={`pointer-events-auto block whitespace-nowrap text-base font-medium transition-colors animate-[orbit-spin-reverse_linear_infinite] ${i === active ? "text-foreground" : "text-foreground/50 hover:text-foreground"}`}
                                    style={{ animationDuration: `${duration}s` }}
                                >
                                    {it.subtitle}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* fixed centre panel — always shows the last hovered node's content */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                    {/* white disc masks the spokes so they never cross the text/icon */}
                    <div className="absolute h-[24rem] w-[24rem] rounded-full bg-white" />
                    <div className="relative w-[24rem] max-w-[80vw] text-center">
                        <Icon icon={current.icon} className="mx-auto mb-6 text-7xl text-foreground" />
                        <p className="text-4xl font-medium text-foreground">{current.subtitle}</p>
                        <p className="mt-4 text-lg text-foreground/60">{current.description}</p>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes orbit-spin { to { transform: rotate(360deg); } }
                @keyframes orbit-spin-reverse { to { transform: rotate(-360deg); } }
            `}</style>
        </div>
    );
}
