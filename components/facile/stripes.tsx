import type { CSSProperties } from "react";

const coverTransition = "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)";

// covers that slide off toward `orientation` (deg) when open; split into columns/rows by the dominant axis
export default function Stripes({
    orientation,
    count,
    open,
    className = "bg-background",
    transition = coverTransition,
}: {
    orientation: number;
    count: number;
    open: boolean;
    className?: string;
    transition?: string;
}) {
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
                />
            ))}
        </>
    );
}
