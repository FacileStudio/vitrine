'use client'

import dynamic from "next/dynamic";

const DitherView = dynamic(
    () => import("@/webgl/DitherView").then((m) => m.DitherView),
    { ssr: false },
);

// the light-theme twin of the projects backdrop: same dithered form, but printed
// rather than lit — `multiply` lets the mint canvas show through the halftone so
// the model reads as grey ink on paper instead of a glow on black
export default function Backdrop({ sticky = false }: { sticky?: boolean }) {
    return (
        <div
            data-no-shadow
            className={`h-screen w-full overflow-hidden text-foreground ${sticky ? "sticky top-0 -mb-[100vh]" : "fixed top-0"}`}
        >
            <DitherView
                className="absolute inset-0 w-full h-full z-0 opacity-25 mix-blend-multiply"
                background={null}
                highlight="#111111"
                grayscaleOnly
                intensity={1.4}
                parallax={0.7}
                gridSize={2}
                scale={4}
                file="/models/manifesto.glb"
                models={[
                    { file: "/models/manifesto.glb", position: [3, -3, 0], scale: 4 },
                    { file: "/models/manifesto.glb", position: [-3, 1, 0], scale: 4 },
                ]}
            />
        </div>
    );
}
