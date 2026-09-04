'use client';

import "./silence-three-deprecations";
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
    ambient?: number;
    gridTween?: number;
    background?: string | null;
    ditherAngle?: number;
    models?: DitherModelProps[];
    /**
     * a thumbnail-sized canvas pays the same price as a full-bleed one: five
     * shadow maps a frame, a 1024 cubemap bake and a 2x pixel ratio. `lite`
     * drops all three, which a head a few vh tall cannot tell apart once the
     * dither grid has been over it — and a story page can carry a dozen of them
     */
    lite?: boolean;
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
    bloom = false,
    bloomIntensity = 0.5,
    ambient = 0,
    gridTween = 0.8,
    background = "#000000",
    position = [0, -0.5, 0],
    ditherAngle = 45,
    models,
    lite = false,
    ...model
}: DitherViewProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(true);
    const [canvasKey, setCanvasKey] = useState(0);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => setActive(entry.isIntersecting),
            { rootMargin: "200px 0px" },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const items: DitherModelProps[] = models ?? [model];

    return (
        <div ref={containerRef} className={className}>
            <Canvas
                key={canvasKey}
                className=""
                dpr={lite ? 1 : [1, 2]}
                shadows={lite ? false : { type: THREE.PCFShadowMap }}
                frameloop={active ? "always" : "never"}
                gl={{ alpha: background === null, antialias: true }}
                camera={{ position: cameraPosition, fov }}
                onCreated={({ gl, invalidate }) => {
                    if (background === null) gl.setClearColor(0x000000, 0);
                    else gl.setClearColor(new THREE.Color(background), 1);

                    const canvas = gl.domElement;
                    let recover: ReturnType<typeof setTimeout> | undefined;
                    // a lost context that the browser never restores leaves a blank
                    // canvas forever, so give it a second then rebuild from scratch
                    const onLost = (e: Event) => {
                        e.preventDefault();
                        recover = setTimeout(() => setCanvasKey((k) => k + 1), 1000);
                    };
                    const onRestored = () => {
                        clearTimeout(recover);
                        invalidate();
                    };
                    canvas.addEventListener("webglcontextlost", onLost, false);
                    canvas.addEventListener("webglcontextrestored", onRestored, false);
                }}
            >
                <Suspense fallback={null}>
                    {ambient > 0 && <ambientLight intensity={ambient} />}
                    {items.map(({ position: itemPosition = position, ...m }, i) => (
                        <group key={i} position={itemPosition}>
                            <DitherModel {...m} />
                        </group>
                    ))}
                    <EnvironmentWrapper intensity={intensity} highlight={highlight} resolution={lite ? 256 : 1024} />
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
