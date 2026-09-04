'use client'

import dynamic from "next/dynamic";

const DitherView = dynamic(
    () => import("@/webgl/DitherView").then((m) => m.DitherView),
    { ssr: false },
);

// the same dithered form behind both shelves, printed two ways. `dark` is lit — a
// green glow on black. `light` is ink: the model multiplied into the mint canvas so
// it reads as a halftone on paper rather than a light source.
const TONES = {
    dark: { text: "text-white", canvas: "opacity-20", highlight: "#24E27A", intensity: 1.8, offset: 3.5 },
    light: { text: "text-foreground", canvas: "opacity-25 mix-blend-multiply", highlight: "#111111", intensity: 1.4, offset: 3 },
} as const;

// On its own page the shelf is everything, so the backdrop is fixed. Inside the home
// page it has to let go once the section scrolls past, which is what `sticky` buys —
// pinned to the section, out of the flow via the negative margin so the cards still
// start at the top
export default function ShelfBackdrop({ tone = "dark", sticky = false }: { tone?: keyof typeof TONES; sticky?: boolean }) {
    const t = TONES[tone];

    return (
        <div
            data-no-shadow
            className={`h-screen w-full overflow-hidden ${t.text} ${sticky ? "sticky top-0 -mb-[100vh]" : "fixed top-0"}`}
        >
            <DitherView
                className={`absolute inset-0 w-full h-full z-0 ${t.canvas}`}
                background={null}
                highlight={t.highlight}
                grayscaleOnly={false}
                intensity={t.intensity}
                parallax={0.7}
                gridSize={2}
                scale={4}
                file="/models/manifesto.glb"
                models={[
                    { file: "/models/manifesto.glb", position: [3, -t.offset, 0], scale: 4 },
                    { file: "/models/manifesto.glb", position: [-t.offset, 1, 0], scale: 4 },
                ]}
            />
        </div>
    );
}
