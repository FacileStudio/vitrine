'use client';

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Center, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { trackBytes } from "./loadBytes";

export interface DitherModelProps {
    file: string;
    scale?: number;
    roughness?: number;
    metalness?: number;
    hairColor?: string;
    position?: [number, number, number];
    rotation?: [number, number, number];
    parallax?: number;
    parallaxSpeed?: number;
    idle?: number;
    float?: boolean;
}

export function DitherModel({
    file,
    scale = 3,
    roughness = 0.15,
    metalness,
    hairColor,
    position = [0, 0.8, 0],
    rotation = [0, -Math.PI / 3.5, -0.4],
    parallax = 0.15,
    parallaxSpeed = 0.025,
    idle = 0,
    float = true,
}: DitherModelProps) {
    const { scene } = useGLTF(file, false, true, trackBytes);
    const canvas = useThree((state) => state.gl.domElement);
    const group = useRef<THREE.Group>(null);
    const cursor = useRef<{ x: number; y: number } | null>(null);
    const pointer = useRef({ x: 0, y: 0 });
    const seed = useRef(Math.random() * 100);

    useEffect(() => {
        if (!parallax) return;
        const onMove = (e: PointerEvent) => {
            cursor.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, [parallax]);

    const model = useMemo(() => {
        const cloned = scene.clone(true);

        let skin: THREE.Color | undefined;
        cloned.traverse((o) => {
            const mat = (o as THREE.Mesh).material as THREE.MeshStandardMaterial;
            if (mat && mat.name === "Material_OpaNose") skin = mat.color;
        });

        cloned.traverse((o) => {
            const mesh = o as THREE.Mesh;
            if (mesh.isMesh) {
                mesh.castShadow = true;

                // scene.clone() shares materials, so two canvases on one GLB would overwrite each other
                const source = mesh.material as THREE.MeshStandardMaterial;
                if (!source) return;

                const mat = source.clone();
                mesh.material = mat;

                if ("roughness" in mat) mat.roughness = roughness;
                if (metalness !== undefined && "metalness" in mat) mat.metalness = metalness;
                if (hairColor && (mat.name === "Material_OpaHair" || mat.name === "Material_OpaBeard")) {
                    mat.color.set(hairColor);
                }
                if (mat.name.startsWith("Material_Opa") && mat.map) {
                    mat.map = null;
                    mat.alphaTest = 0;
                    mat.transparent = false;
                    mat.depthWrite = true;
                    if (skin) mat.color.copy(skin);
                    mat.needsUpdate = true;
                }
            }
        });
        return cloned;
    }, [scene, roughness, metalness, hairColor]);

    // materials only: the geometry belongs to useGLTF's cache and other canvases still use it
    useEffect(() => () => {
        model.traverse((o) => {
            const mat = (o as THREE.Mesh).material;
            if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
            else mat?.dispose();
        });
    }, [model]);

    useFrame((state) => {
        if (!group.current || (!parallax && !idle)) return;

        if (parallax && cursor.current) {
            const rect = canvas.getBoundingClientRect();
            pointer.current.x = (cursor.current.x - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
            pointer.current.y = -(cursor.current.y - (rect.top + rect.height / 2)) / (window.innerHeight / 2);
        }

        const { x, y } = pointer.current;
        const t = state.clock.elapsedTime + seed.current;
        const driftX = Math.sin(t * 0.23) * 0.6 + Math.sin(t * 0.13 + 2.1) * 0.4;
        const driftY = Math.sin(t * 0.31 + 1.3) * 0.6 + Math.sin(t * 0.17 + 0.7) * 0.4;

        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * parallax + driftX * idle, parallaxSpeed);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * parallax + driftY * idle * 0.6, parallaxSpeed);
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, driftY * idle * 0.5, parallaxSpeed);
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, driftX * idle * 0.35, parallaxSpeed);
    });

    const centered = (
        <Center scale={scale} position={position} rotation={rotation}>
            <primitive object={model} />
        </Center>
    );

    return (
        <group ref={group}>
            {float ? (
                <Float floatIntensity={2} rotationIntensity={1} speed={2}>
                    {centered}
                </Float>
            ) : (
                centered
            )}
        </group>
    );
}
