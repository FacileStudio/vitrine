import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export const drawIn = (strokes: gsap.TweenTarget) =>
    gsap.timeline()
        .fromTo(strokes, {
            drawSVG: "100% 100%",
        }, {
            drawSVG: "0% 100%",
            duration: 0.6,
            ease: "none",
        }, 0)
        .fromTo(strokes, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.1,
        }, 0);

export function useIconDraw(play: (svg: SVGSVGElement) => gsap.core.Timeline) {
    const svg = useRef<SVGSVGElement>(null);
    const timeline = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => () => {
        timeline.current?.kill();
    }, []);

    const onMouseEnter = () => {
        if (!svg.current)
            return;

        timeline.current?.kill();
        timeline.current = play(svg.current);
    };

    const onMouseLeave = () => {
        if (!svg.current)
            return;

        timeline.current?.kill();
        timeline.current = gsap.timeline().to(svg.current.children, {
            drawSVG: "0% 100%",
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
            clearProps: "all",
        });
    };

    return { svg, onMouseEnter, onMouseLeave };
}
