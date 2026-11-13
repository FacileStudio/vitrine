import { Suspense } from "react";
import { DitherModel } from "../DitherModel";
import { EnvironmentWrapper } from "../environment";
import { PostProcessing } from "../PostProcessing";
import { Ready } from "../ready";

export const GRID = { from: 16, to: 1.2, doneAt: 75 };

export const MODEL_SCALE = { from: 7, to: 17 };

export const LOGO = {
    file: "/models/F.glb",
    fov: 50,
    camera: [0, 0, 4] as [number, number, number],
    position: [0, -0.5, 0] as [number, number, number],
    rotation: [0, 0.35, 0] as [number, number, number],
    parallax: 0.7,
    parallaxSpeed: 0.05,
    pixelSizeRatio: 10,
    ditherAngle: 45,
    intensity: 1.8,
};

type Ref = { current: number };

export function LogoScene({ grid, scale, follow, nativeDpr, onReady }: { grid: Ref; scale: Ref; follow: { x: number; y: number }; nativeDpr: number; onReady: () => void }) {
    return (
        <>
            <Suspense fallback={null}>
                <group position={LOGO.position}>
                    <DitherModel
                        file={LOGO.file}
                        rotation={LOGO.rotation}
                        parallax={LOGO.parallax}
                        parallaxSpeed={LOGO.parallaxSpeed}
                        float={false}
                        scale={MODEL_SCALE.from}
                        scaleTarget={scale}
                        follow={follow}
                    />
                </group>
                <EnvironmentWrapper intensity={LOGO.intensity} highlight="#24E27A" />
                <Ready done={onReady} />
            </Suspense>
            <PostProcessing
                nativeDpr={nativeDpr}
                gridSize={GRID.to}
                gridTarget={grid}
                pixelSizeRatio={LOGO.pixelSizeRatio}
                rotation={(LOGO.ditherAngle * Math.PI) / 180}
                bloom={false}
            />
        </>
    );
}
