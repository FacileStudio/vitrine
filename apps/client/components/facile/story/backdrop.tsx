'use client'

import dynamic from "next/dynamic";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

// the field a story is read on, so the fullscreen one and the pinned one sit on
// the same dark ground
export default function Backdrop() {
    return (
        <DitherView
            className="absolute inset-0 h-full w-full opacity-20"
            file="/models/manifesto.glb"
            background={null}
            highlight="#24E27A"
            grayscaleOnly={false}
            intensity={1.8}
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
