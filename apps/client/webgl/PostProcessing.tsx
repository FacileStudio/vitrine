'use client';

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, RenderPass, EffectPass, BloomEffect } from "postprocessing";
import gsap from "gsap";
import { DitheringEffect } from "./dithering-shader/DitheringEffect";

export interface PostProcessingProps {
    gridSize?: number;
    pixelSizeRatio?: number;
    grayscaleOnly?: boolean;
    rotation?: number;
    bloom?: boolean;
    bloomIntensity?: number;
    gridTween?: number;
}

export function PostProcessing({
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
    const { size, gl } = useThree();

    useEffect(() => {
        composerRef.current?.setSize(size.width, size.height);
    }, [size]);

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
        ditherRef.current = dither;
        composer.addPass(new EffectPass(camera, dither));
    }, [scene, camera, pixelSizeRatio, grayscaleOnly, rotation, bloom, bloomIntensity]);

    useEffect(() => {
        const proxy = { v: gridValue.current };
        const tween = gsap.to(proxy, {
            v: gridSize,
            duration: gridTween,
            ease: "power2.out",
            onUpdate: () => {
                gridValue.current = proxy.v;
                ditherRef.current?.setGridSize(proxy.v);
            },
        });
        return () => {
            tween.kill();
        };
    }, [gridSize, gridTween]);

    useFrame(({ gl, scene: currentScene, camera: currentCamera }) => {
        if (!composerRef.current) {
            composerRef.current = new EffectComposer(gl);
            composerRef.current.setSize(size.width, size.height);
        }
        if (scene !== currentScene) setScene(currentScene);
        if (camera !== currentCamera) setCamera(currentCamera);
        composerRef.current.render();
    }, 1);

    return null;
}
