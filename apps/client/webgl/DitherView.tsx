'use client';

import "./silence-three-deprecations";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import * as THREE from "three";
import { CanvasBoundary } from "./canvasBoundary";
import { EnvironmentWrapper } from "./environment";
import { DitherModel, type DitherModelProps } from "./DitherModel";
import { PostProcessing } from "./PostProcessing";
import { registerScene } from "./sceneReady";

// device pixels one canvas may draw; a 1512px hero head at dpr 2 is 9.1M
const PIXEL_BUDGET = 4_000_000;
// a gpu that cannot hold the frame rate may go below 1
const MIN_DPR = 0.75;

// three dropped webgl1, so without webgl2 the canvas can only throw
const webgl2 = typeof window !== "undefined" && typeof window.WebGL2RenderingContext !== "undefined";

// compiling here keeps the shader stall inside the loader instead of the first reveal frame
function Ready({ done }: { done: () => void }) {
    const gl = useThree((s) => s.gl);
    const scene = useThree((s) => s.scene);
    const camera = useThree((s) => s.camera);

    useEffect(() => {
        gl.compileAsync(scene, camera).catch(() => undefined).finally(done);
    }, [gl, scene, camera, done]);

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
    ambientColor?: string;
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
    ambientColor = "#ffffff",
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
    const [area, setArea] = useState(0);
    const [quality, setQuality] = useState(1);
    const [failed, setFailed] = useState(!webgl2);

    useEffect(() => {
        release.current = registerScene();
        return () => release.current?.();
    }, []);

    const done = useCallback(() => release.current?.(), []);

    useEffect(() => {
        const el = containerRef.current;

        if (!el)
            return;

        const ro = new ResizeObserver(([entry]) => setArea(entry.contentRect.width * entry.contentRect.height));

        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        if (failed)
            release.current?.();
    }, [failed]);

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
    const nativeDpr = lite ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    // the largest ratio whose canvas fits the pixel budget (area is css px², so the ratio is a square root), scaled down by the frame-rate monitor
    const dpr = Math.round(Math.max(MIN_DPR, Math.min(nativeDpr, Math.sqrt(PIXEL_BUDGET / Math.max(1, area))) * quality) * 100) / 100;

    if (failed)
        return <div ref={containerRef} className={className} />;

    return (
        <div ref={containerRef} className={className}>
                <CanvasBoundary onFail={() => setFailed(true)}>
                <Canvas
                    key={canvasKey}
                    className=""
                    // r3f puts pointer-events: auto inline on its wrapper, which let a giant hero canvas swallow the footer links
                    style={{ pointerEvents: "none" }}
                    dpr={dpr}
                    // shadows only exist in the 64px environment bake; pcf's linear depth compare makes firefox warn once per canvas
                    shadows={lite ? false : { type: THREE.BasicShadowMap }}
                    frameloop={active ? "always" : "never"}
                    // the composer's last pass is one full-screen triangle, so MSAA on the canvas only costs memory
                    // the composer renders the scene into its own buffers, so the canvas needs no depth or stencil of its own
                    gl={{ alpha: background === null, antialias: false, depth: false, stencil: false, powerPreference: "high-performance" }}
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
                        {ambient > 0 && <ambientLight intensity={ambient} color={ambientColor} />}
                        {items.map(({ position: itemPosition = position, ...m }, i) => (
                            <group key={i} position={itemPosition}>
                                <DitherModel {...m} />
                            </group>
                        ))}
                        <EnvironmentWrapper intensity={intensity} highlight={highlight} />
                        <Ready done={done} />
                    </Suspense>
                    <PerformanceMonitor factor={1} flipflops={3} onChange={({ factor }) => setQuality(0.5 + factor / 2)} />
                    <PostProcessing
                        nativeDpr={nativeDpr}
                        gridSize={gridSize}
                        pixelSizeRatio={pixelSizeRatio}
                        grayscaleOnly={grayscaleOnly}
                        rotation={(ditherAngle * Math.PI) / 180}
                        bloom={bloom}
                        bloomIntensity={bloomIntensity}
                        gridTween={gridTween}
                    />
                </Canvas>
            </CanvasBoundary>
        </div>
    );
}
