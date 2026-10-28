'use client';

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, RenderPass, EffectPass, BloomEffect } from "postprocessing";
import gsap from "gsap";
import { DitheringEffect } from "./dithering-shader/DitheringEffect";

const MAX_FPS = 60;
const FRAME_SLACK = 0.002;

// the dither reads one scene texel near each cell centre, so a few texels per cell look the same as full resolution
const TEXELS_PER_CELL = 3;

// the scene and bloom only feed the per-cell sample, so they render at a fraction of css size while the pattern keeps device pixels
function fit(composer: EffectComposer, width: number, height: number, cellCss: number) {
    const scale = Math.min(1, TEXELS_PER_CELL / cellCss);
    const w = Math.max(1, Math.ceil(width * scale));
    const h = Math.max(1, Math.ceil(height * scale));

    composer.setSize(width, height);
    composer.inputBuffer.setSize(w, h);
    composer.outputBuffer.setSize(w, h);
    composer.passes.forEach((pass) => pass.setSize(w, h));
}

export interface PostProcessingProps {
    nativeDpr?: number;
    gridSize?: number;
    pixelSizeRatio?: number;
    grayscaleOnly?: boolean;
    rotation?: number;
    bloom?: boolean;
    bloomIntensity?: number;
    gridTween?: number;
}

export function PostProcessing({
    nativeDpr = 1,
    gridSize = 4,
    pixelSizeRatio = 1,
    grayscaleOnly = false,
    rotation = 0,
    bloom = true,
    bloomIntensity = 0.5,
    gridTween = 0.8,
}: PostProcessingProps) {
    const composerRef = useRef<EffectComposer | null>(null);
    const ditherRef = useRef<DitheringEffect | null>(null);
    const gridValue = useRef(gridSize);
    const [scene, setScene] = useState<THREE.Scene | null>(null);
    const [camera, setCamera] = useState<THREE.Camera | null>(null);
    const sinceRender = useRef(Infinity);
    const { size, gl, viewport } = useThree();
    // a lowered dpr would grow the dots, so the pattern is drawn in the device's own pixels scaled to the canvas
    const pixelScale = viewport.dpr / nativeDpr;
    const [cellGrid, setCellGrid] = useState(gridSize);
    // a cell's side in css px: gridSize × ratio device px at the device's own dpr
    const cellCss = (Math.max(1, cellGrid) * pixelSizeRatio) / nativeDpr;

    useEffect(() => {
        if (composerRef.current)
            fit(composerRef.current, size.width, size.height, cellCss);
    }, [size, viewport.dpr, cellCss]);

    useEffect(() => {
        ditherRef.current?.setPixelScale(pixelScale);
    }, [pixelScale]);

    useEffect(() => () => {
        composerRef.current?.dispose();
        composerRef.current = null;
        ditherRef.current = null;
    }, []);

    useEffect(() => {
        const canvas = gl.domElement;
        const onRestored = () => {
            composerRef.current?.dispose();
            composerRef.current = null;
            setScene(null);
            setCamera(null);
        };
        canvas.addEventListener("webglcontextrestored", onRestored, false);
        return () => canvas.removeEventListener("webglcontextrestored", onRestored);
    }, [gl]);

    // bloom must run before the dither: after it, the grain lights the whole frame
    useEffect(() => {
        if (!scene || !camera || !composerRef.current) return;
        const composer = composerRef.current;
        composer.removeAllPasses();

        composer.addPass(new RenderPass(scene, camera));

        if (bloom) {
            composer.addPass(
                new EffectPass(
                    camera,
                    new BloomEffect({ luminanceThreshold: 0.15, intensity: bloomIntensity, radius: 0.6, mipmapBlur: true }),
                ),
            );
        }

        const dither = new DitheringEffect({ gridSize: gridValue.current, pixelSizeRatio, grayscaleOnly, rotation });
        dither.setPixelScale(pixelScale);
        ditherRef.current = dither;
        composer.addPass(new EffectPass(camera, dither));
        fit(composer, size.width, size.height, cellCss);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scene, camera, pixelSizeRatio, grayscaleOnly, rotation, bloom, bloomIntensity]);

    // the scene buffer is sized for the finest grid of the tween, then follows the target once it lands
    useEffect(() => {
        const proxy = { v: gridValue.current };

        setCellGrid(Math.min(gridValue.current, gridSize));

        const tween = gsap.to(proxy, {
            v: gridSize,
            duration: gridTween,
            ease: "power2.out",
            onUpdate: () => {
                gridValue.current = proxy.v;
                ditherRef.current?.setGridSize(proxy.v);
            },
            onComplete: () => setCellGrid(gridSize),
        });
        return () => {
            tween.kill();
        };
    }, [gridSize, gridTween]);

    useFrame(({ gl, scene: currentScene, camera: currentCamera }, delta) => {
        if (!composerRef.current) {
            composerRef.current = new EffectComposer(gl);
            fit(composerRef.current, size.width, size.height, cellCss);
        }
        if (scene !== currentScene) setScene(currentScene);
        if (camera !== currentCamera) setCamera(currentCamera);

        sinceRender.current += delta;

        // a frame a hair early still counts, or display jitter would drop whole frames at the cap
        if (sinceRender.current < 1 / MAX_FPS - FRAME_SLACK)
            return;

        // carry the overshoot so 144Hz still averages the cap, but never bank more than one frame
        sinceRender.current = Math.min(sinceRender.current - 1 / MAX_FPS, 1 / MAX_FPS);
        composerRef.current.render();
    }, 1);

    return null;
}
