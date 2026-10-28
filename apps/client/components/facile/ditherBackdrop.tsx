'use client'

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useScroll } from "@/hooks/use-scroll";
import { EASE } from "@/lib/animations";
import { useNarrow } from "@/hooks/use-narrow";
import { DitherView } from "@/webgl/lazy";

const MODEL = "/models/manifesto.glb";

const SHELF = {
    dark: { text: "text-background", canvas: "opacity-20", highlight: undefined, intensity: undefined, offset: 3.5 },
    light: { text: "text-foreground", canvas: "opacity-20", highlight: undefined, intensity: undefined, offset: 3.5 },
} as const;

export type BackdropVariant = keyof typeof SHELF | "story";

export default function DitherBackdrop({
    variant,
    sticky = false,
    arrive = true,
    leaving = false,
    placement = "corners",
}: {
    variant: BackdropVariant;
    sticky?: boolean;
    arrive?: boolean;
    leaving?: boolean;
    placement?: "corners" | "top";
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [arrived, setArrived] = useState(false);
    const narrow = useNarrow();

    useScroll(() => {
        if (!arrive) return;

        const section = ref.current?.parentElement;
        if (!section) return;

        setArrived(section.getBoundingClientRect().top <= 0);
    });

    const on = (!arrive || arrived) && !leaving;
    const shown = useRef<boolean | null>(null);

    // the first pass only sets the opacity, so a backdrop never fades in on load
    useLayoutEffect(() => {
        const el = ref.current;
        const first = shown.current === null;

        shown.current = on;
        if (!el)
            return;

        if (first) {
            gsap.set(el, { opacity: on ? 1 : 0 });
            return;
        }

        // the shelf backdrop drops out fast, the story one keeps the slow fade both ways
        const fast = !on && variant !== "story";

        gsap.to(el, {
            opacity: on ? 1 : 0,
            duration: fast ? 0.2 : 0.8,
            ease: fast ? EASE.drop : EASE.cover,
            overwrite: true,
        });
    }, [on, variant]);

    useLayoutEffect(() => {
        const el = ref.current;

        return () => {
            gsap.killTweensOf(el);
        };
    }, []);
    // iOS Safari reloaded the tab under one full canvas per section, so phones render at pixel ratio 1 with no shadows
    // a portrait screen shows far less width, so phones pull each model halfway to the centre
    const x = (v: number) => (narrow ? v / 2 : v);

    if (variant === "story") {
        return (
            <div
                ref={ref}
                className="absolute inset-0 h-full w-full"
            >
                <DitherView
                    className="absolute inset-0 h-full w-full opacity-20"
                    file={MODEL}
                    parallax={0.5}
                    gridSize={on ? 3 : 14}
                    lite={narrow}
                    scale={4}
                    models={[
                        { file: MODEL, position: [x(-3.5), -1.5, 0.5], scale: 4 },
                        { file: MODEL, position: [x(3.5), 1, 0.5], scale: 4 },
                    ]}
                />
            </div>
        );
    }

    const t = SHELF[variant];

    return (
        <div
            ref={ref}
            className={`h-screen w-full overflow-hidden ${t.text} ${sticky ? "sticky top-0 -mb-[100vh]" : "fixed top-0"}`}
        >
            <DitherView
                className={`absolute inset-0 w-full h-full z-0 ${t.canvas}`}
                highlight={t.highlight}
                intensity={t.intensity}
                parallax={0.7}
                gridSize={on ? 2 : 14}
                lite={narrow}
                scale={4}
                file={MODEL}
                models={placement === "top"
                    ? [{ file: MODEL, position: [0, 2.2, 0], scale: 4 }]
                    : [
                        { file: MODEL, position: [x(3), -t.offset, 0], scale: 4 },
                        { file: MODEL, position: [x(-t.offset), 1, 0], scale: 4 },
                    ]}
            />
        </div>
    );
}
