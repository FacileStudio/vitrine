'use client'

import { DitherView } from "@/webgl/lazy";
import { useNarrow } from "@/hooks/use-narrow";

const MODEL = "/models/manifesto.glb";

// the manifesto backdrop flipped left to right: x positions and the y and z turns change sign, so the pair reads as its reflection
export default function MethodMirror({ open }: { open: boolean }) {
    const narrow = useNarrow();
    const x = narrow ? 0.75 : 1.5;

    return (
        <DitherView
            className="absolute inset-0 h-full w-full opacity-50"
            lite={narrow}
            parallax={1}
            scale={1.6}
            gridSize={open ? 2 : 9}
            file={MODEL}
            models={[
                { file: MODEL, position: [x, 0.5, 2], rotation: [0, -90, -90] },
                { file: MODEL, position: [-x, -3, 2] },
            ]}
        />
    );
}
