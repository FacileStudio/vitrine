'use client'

import { DitherView } from "@/webgl/lazy";
import { useNarrow } from "@/hooks/use-narrow";
import { cn } from "@/lib/utils";

const MODEL = "/models/manifesto.glb";

const SCALE = 4;

// negative x pushes the model toward the canvas's outer edge, where it bleeds off the screen; the mirror carries it to the right edge too
const OUTWARD = -2;

// half a turn on y shows the model's back face instead of the front the other backdrops show
const TURN: [number, number, number] = [6, Math.PI + 0.9, 6];

// the right view is the left one flipped by css, so the pair mirrors exactly, dither pattern and pointer drift included
export default function MethodSide({ open, mirrored = false }: { open: boolean; mirrored?: boolean }) {
    const narrow = useNarrow();

    return (
        <DitherView
            className={cn("absolute top-0 h-full w-[60vw] lg:w-[45vw] opacity-50", mirrored ? "right-0 -scale-x-100" : "left-0")}
            lite={narrow}
            parallax={0.6}
            scale={SCALE}
            gridSize={open ? 2 : 9}
            file={MODEL}
            models={[{ file: MODEL, position: [OUTWARD, -0.5, 0], rotation: TURN, scale: SCALE }]}
        />
    );
}
