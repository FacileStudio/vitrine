'use client'

import { useRef, useState } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { useNarrow } from "@/hooks/use-narrow";
import { DitherView } from "@/webgl/lazy";

const MODEL = "/models/manifesto.glb";

const SHELF = {
    dark: { text: "text-white", canvas: "opacity-20", highlight: undefined, intensity: undefined, offset: 3.5 },
    light: { text: "text-foreground", canvas: "opacity-25 mix-blend-multiply", highlight: "#111111", intensity: 1.4, offset: 3 },
} as const;

export type BackdropVariant = keyof typeof SHELF | "story";

export default function DitherBackdrop({
    variant,
    sticky = false,
    arrive = true,
}: {
    variant: BackdropVariant;
    sticky?: boolean;
    arrive?: boolean;
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

    const on = !arrive || arrived;

    if (variant === "story") {
        const spread = arrive && narrow ? 2.2 : 3.5;

        return (
            <div
                ref={ref}
                className="absolute inset-0 h-full w-full"
                style={{ opacity: on ? 1 : 0, transition: "opacity 0.8s cubic-bezier(0.7, 0, 0.3, 1)" }}
            >
                <DitherView
                    className="absolute inset-0 h-full w-full opacity-60"
                    file={MODEL}
                    parallax={0.5}
                    gridSize={on ? 3 : 14}
                    scale={4}
                    models={[
                        { file: MODEL, position: [-spread, -1.5, 0.5], scale: 4 },
                        { file: MODEL, position: [spread, 1, 0.5], scale: 4 },
                    ]}
                />
            </div>
        );
    }

    const t = SHELF[variant];
    const near = sticky && narrow;
    const offset = near ? 2.2 : t.offset;
    const side = near ? 2 : 3;

    return (
        <div
            ref={ref}
            style={{
                opacity: on ? 1 : 0,
                transition: on
                    ? "opacity 0.8s cubic-bezier(0.7, 0, 0.3, 1)"
                    : "opacity 0.2s cubic-bezier(0.6, 0, 1, 1)",
            }}
            className={`h-screen w-full overflow-hidden ${t.text} ${sticky ? "sticky top-0 -mb-[100vh]" : "fixed top-0"}`}
        >
            <DitherView
                className={`absolute inset-0 w-full h-full z-0 ${t.canvas}`}
                highlight={t.highlight}
                intensity={t.intensity}
                parallax={0.7}
                gridSize={on ? 2 : 14}
                scale={4}
                file={MODEL}
                models={[
                    { file: MODEL, position: [side, -offset, 0], scale: 4 },
                    { file: MODEL, position: [-offset, 1, 0], scale: 4 },
                ]}
            />
        </div>
    );
}
