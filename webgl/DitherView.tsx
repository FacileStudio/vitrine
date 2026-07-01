'use client';

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { EnvironmentWrapper } from "./environment";
import { DitherModel, type DitherModelProps } from "./DitherModel";
import { PostProcessing } from "./PostProcessing";

export interface DitherViewProps extends DitherModelProps {
    className?: string;
    gridSize?: number;
    pixelSizeRatio?: number;
    grayscaleOnly?: boolean;
    intensity?: number;
    highlight?: string;
    fov?: number;
    cameraPosition?: [number, number, number];
    bloom?: boolean;
    bloomIntensity?: number;
    gridTween?: number;
    background?: string | null;
}

export function DitherView({
    className,
    gridSize = 1,
    pixelSizeRatio = 10,
    grayscaleOnly = false,
    intensity = 1.8,
    highlight = "#4ADE8E",
    fov = 50,
    cameraPosition = [0, -1, 4],
    bloom = true,
    bloomIntensity = 0.5,
    gridTween = 0.8,
    background = "#ffffff",
    position = [0, -0.5, 0],
    ...model
}: DitherViewProps) {
    return (
        <div className={className}>
            <Canvas
                className=""
                dpr={[1, 2]}
                shadows
                gl={{ alpha: background === null, antialias: true }}
                camera={{ position: cameraPosition, fov }}
                onCreated={({ gl }) => {
                    if (background === null) gl.setClearColor(0x000000, 0);
                    else gl.setClearColor(new THREE.Color(background), 1);
                }}
            >
                <Suspense fallback={null}>
                    <group position={position}>
                        <DitherModel {...model} />
                    </group>
                    <EnvironmentWrapper intensity={intensity} highlight={highlight} />
                </Suspense>
                <PostProcessing
                    gridSize={gridSize}
                    pixelSizeRatio={pixelSizeRatio}
                    grayscaleOnly={grayscaleOnly}
                    bloom={bloom}
                    bloomIntensity={bloomIntensity}
                    gridTween={gridTween}
                />
            </Canvas>
        </div>
    );
}
