'use client';

import { useEffect, useRef, useState } from "react";
import { DitherView } from "./DitherView";
import { GRID, LOGO, MODEL_SCALE } from "./offscreen/logoScene";
import { offscreen, useWorkerCanvas } from "./offscreen/useWorkerCanvas";
import type { LogoMessage } from "./offscreen/logo.worker";

type Props = { grid: number; scale: number; lite: boolean; className?: string };

const createLogo = () => new Worker(new URL("./offscreen/logo.worker.tsx", import.meta.url), { type: "module" });

function Fallback({ grid, scale, lite, className }: Props) {
    const gridRef = useRef(GRID.from);
    const scaleRef = useRef(MODEL_SCALE.from);

    useEffect(() => {
        gridRef.current = grid;
        scaleRef.current = scale;
    }, [grid, scale]);

    return (
        <DitherView
            file={LOGO.file}
            className={className}
            boot="now"
            lite={lite}
            gridSize={GRID.to}
            gridTarget={gridRef}
            scale={MODEL_SCALE.from}
            scaleTarget={scaleRef}
            position={LOGO.position}
            cameraPosition={LOGO.camera}
            rotation={LOGO.rotation}
            parallax={LOGO.parallax}
            parallaxSpeed={LOGO.parallaxSpeed}
            pixelSizeRatio={LOGO.pixelSizeRatio}
            ditherAngle={LOGO.ditherAngle}
            intensity={LOGO.intensity}
            float={false}
            fov={LOGO.fov}
        />
    );
}

function Offscreen({ grid, scale, lite, className, onFail }: Props & { onFail: () => void }) {
    const box = useRef<HTMLDivElement>(null);
    const worker = useWorkerCanvas(box, { create: createLogo, data: null, lite, stage: "now", onFail });

    useEffect(() => {
        worker.current?.postMessage({ type: "grid", value: grid } satisfies LogoMessage);
    }, [worker, grid]);

    useEffect(() => {
        worker.current?.postMessage({ type: "scale", value: scale } satisfies LogoMessage);
    }, [worker, scale]);

    return <div ref={box} className={className} />;
}

export function LoaderLogo(props: Props) {
    const [failed, setFailed] = useState(!offscreen);
    const [fail] = useState(() => () => setFailed(true));

    return failed ? <Fallback {...props} /> : <Offscreen {...props} onFail={fail} />;
}
