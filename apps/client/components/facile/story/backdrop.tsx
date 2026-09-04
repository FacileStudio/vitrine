'use client'

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { useScroll } from "@/hooks/use-scroll";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

// the field a story is read on. `dark` is lit — a green glow on black, for the
// fullscreen reader. `light` is ink: the model multiplied into the mint canvas, for
// the band on the home page, which sits on white
const TONES = {
    dark: { canvas: "opacity-20", highlight: "#24E27A", intensity: 1.8 },
    light: { canvas: "opacity-25 mix-blend-multiply", highlight: "#111111", intensity: 1.4 },
} as const;

// `arrive` makes it charge in as its section reaches the top of the window rather
// than being there already: a coarse grid at nothing, resolving as it fades up. The
// fade is inline because the tone already spends the class-level opacity, and two
// opacity utilities on one element resolve by stylesheet order rather than by intent.
// The fullscreen reader wants none of this — it is an overlay that is already there
// when it opens — so it stays off by default
export default function Backdrop({ tone = "dark", arrive = false }: { tone?: keyof typeof TONES; arrive?: boolean }) {
    const t = TONES[tone];
    const ref = useRef<HTMLDivElement>(null);
    const [arrived, setArrived] = useState(false);

    useScroll(() => {
        if (!arrive) return;

        const section = ref.current?.parentElement;
        if (!section) return;

        setArrived(section.getBoundingClientRect().top <= 0);
    });

    const on = !arrive || arrived;

    return (
        <div
            ref={ref}
            className="absolute inset-0 h-full w-full"
            style={{ opacity: on ? 1 : 0, transition: "opacity 0.8s cubic-bezier(0.7, 0, 0.3, 1)" }}
        >
            <DitherView
                className={`absolute inset-0 h-full w-full ${t.canvas}`}
                file="/models/manifesto.glb"
                background={null}
                highlight={t.highlight}
                grayscaleOnly={false}
                intensity={t.intensity}
                parallax={0.5}
                gridSize={on ? 3 : 14}
                scale={4}
                models={[
                    { file: "/models/manifesto.glb", position: [-3.5, -1.5, 0.5], scale: 4 },
                    { file: "/models/manifesto.glb", position: [3.5, 1, 0.5], scale: 4 },
                ]}
            />
        </div>
    );
}
