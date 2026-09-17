"use client";

import { drawIn, useIconDraw } from "@/hooks/use-icon-draw";

const play = (svg: SVGSVGElement) => drawIn(svg.children);

export function InstagramIcon({ className, size = 28 }: { className?: string; size?: number }) {
    const { svg, onMouseEnter, onMouseLeave } = useIconDraw(play);

    return (
        <div className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <svg
                ref={svg}
                fill="none"
                height={size}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width={size}
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
        </div>
    );
}
