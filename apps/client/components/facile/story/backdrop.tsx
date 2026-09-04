'use client'

import dynamic from "next/dynamic";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

// the field a story is read on. `dark` is lit — a green glow on black, for the
// fullscreen reader. `light` is ink: the model multiplied into the mint canvas, for
// the band on the home page, which sits on white
const TONES = {
    dark: { canvas: "opacity-20", highlight: "#24E27A", intensity: 1.8 },
    light: { canvas: "opacity-25 mix-blend-multiply", highlight: "#111111", intensity: 1.4 },
} as const;

export default function Backdrop({ tone = "dark" }: { tone?: keyof typeof TONES }) {
    const t = TONES[tone];

    return (
        <DitherView
            className={`absolute inset-0 h-full w-full ${t.canvas}`}
            file="/models/manifesto.glb"
            background={null}
            highlight={t.highlight}
            grayscaleOnly={false}
            intensity={t.intensity}
            parallax={0.5}
            gridSize={3}
            scale={4}
            models={[
                { file: "/models/manifesto.glb", position: [-3.5, -1.5, 0.5], scale: 4 },
                { file: "/models/manifesto.glb", position: [3.5, 1, 0.5], scale: 4 },
            ]}
        />
    );
}
