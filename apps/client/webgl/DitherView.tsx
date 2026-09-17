'use client';

import "./silence-three-deprecations";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { EnvironmentWrapper } from "./environment";
import { DitherModel, type DitherModelProps } from "./DitherModel";
import { PostProcessing } from "./PostProcessing";
import { registerScene } from "./sceneReady";

function Ready({ done }: { done: () => void }) {
    useEffect(() => { done(); }, [done]);
    return null;
}

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
    lite?: boolean;
    // an observer counts ancestor overflow as off-screen, so a canvas in a reveal crop never paints
    active?: boolean;
}

export function DitherView({
    className,
    gridSize = 1,
    pixelSizeRatio = 10,
    grayscaleOnly = false,
    intensity = 1.8,
    highlight = "#24E27A",
    fov = 60,
    cameraPosition = [0, -1, 4],
    bloom = false,
    bloomIntensity = 0.5,
    ambient = 0,
    gridTween = 0.8,
    background = null,
    position = [0, -0.5, 0],
    ditherAngle = 45,
    models,
    lite = false,
    active: activeOverride,
    ...model
}: DitherViewProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(true);
    const active = activeOverride ?? inView;
    const [canvasKey, setCanvasKey] = useState(0);
    const release = useRef<(() => void) | null>(null);

    useEffect(() => {
        release.current = registerScene();
        return () => release.current?.();
    }, []);

    const done = useCallback(() => release.current?.(), []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
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
                // the composer's last pass is one full-screen triangle, so MSAA on the canvas only costs memory
                gl={{ alpha: background === null, antialias: false }}
                camera={{ position: cameraPosition, fov }}
                onCreated={({ gl, invalidate }) => {
                    if (background === null) gl.setClearColor(0x000000, 0);
                    else gl.setClearColor(new THREE.Color(background), 1);

                    const canvas = gl.domElement;
                    let recover: ReturnType<typeof setTimeout> | undefined;
                    // a context the browser never restores stays blank, so rebuild after a second
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
                    <EnvironmentWrapper intensity={intensity} highlight={highlight} />
                    <Ready done={done} />
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
