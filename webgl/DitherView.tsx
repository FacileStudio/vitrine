'use client';

import { Suspense, useEffect, useRef, useState } from "react";
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
    ditherAngle?: number;
    models?: DitherModelProps[];
}

export function DitherView({
    className,
    gridSize = 1,
    pixelSizeRatio = 10,
    grayscaleOnly = false,
    intensity = 1.8,
    highlight = "#4ADE8E",
    fov = 60,
    cameraPosition = [0, -1, 4],
    bloom = true,
    bloomIntensity = 0.5,
    gridTween = 0.8,
    background = "#000000",
    position = [0, -0.5, 0],
    ditherAngle = 45,
    models,
    ...model
}: DitherViewProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(true);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => setActive(entry.isIntersecting),
            { rootMargin: "200px" },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const items: DitherModelProps[] = models ?? [model];

    return (
        <div ref={containerRef} className={className}>
            <Canvas
                className=""
                dpr={[1, 2]}
                shadows
                frameloop={active ? "always" : "never"}
                gl={{ alpha: background === null, antialias: true }}
                camera={{ position: cameraPosition, fov }}
                onCreated={({ gl, invalidate }) => {
                    if (background === null) gl.setClearColor(0x000000, 0);
                    else gl.setClearColor(new THREE.Color(background), 1);

                    const canvas = gl.domElement;
                    const onLost = (e: Event) => e.preventDefault();
                    const onRestored = () => invalidate();
                    canvas.addEventListener("webglcontextlost", onLost, false);
                    canvas.addEventListener("webglcontextrestored", onRestored, false);
                }}
            >
                <Suspense fallback={null}>
                    {items.map(({ position: itemPosition = position, ...m }, i) => (
                        <group key={i} position={itemPosition}>
                            <DitherModel {...m} />
                        </group>
                    ))}
                    <EnvironmentWrapper intensity={intensity} highlight={highlight} />
                </Suspense>
                <PostProcessing
                    gridSize={gridSize}
                    pixelSizeRatio={pixelSizeRatio}
                    grayscaleOnly={grayscaleOnly}
                    rotation={(ditherAngle * Math.PI) / 180}
                    bloom={bloom}
                    bloomIntensity={bloomIntensity}
                    gridTween={gridTween}
                />
            </Canvas>
        </div>
    );
}
