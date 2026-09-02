'use client';

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Center, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

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
    const { scene } = useGLTF(file);
    const canvas = useThree((state) => state.gl.domElement);
    const group = useRef<THREE.Group>(null);
    const pointer = useRef({ x: 0, y: 0 });
    const seed = useRef(Math.random() * 100);

    useEffect(() => {
        if (!parallax) return;
        const onMove = (e: PointerEvent) => {
            const rect = canvas.getBoundingClientRect();
            pointer.current.x = (e.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
            pointer.current.y = -(e.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2);
        };
        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
    }, [parallax, canvas]);

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
                const mat = mesh.material as THREE.MeshStandardMaterial;
                if (mat && "roughness" in mat) mat.roughness = roughness;
                if (mat && metalness !== undefined && "metalness" in mat) mat.metalness = metalness;
                if (mat && hairColor && (mat.name === "Material_OpaHair" || mat.name === "Material_OpaBeard")) {
                    mat.color.set(hairColor);
                }
                if (mat && mat.name.startsWith("Material_Opa") && mat.map) {
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

    // two sines per axis at unrelated frequencies: the pair never repeats on a
    // beat the eye can catch, so the head wanders instead of oscillating
    useFrame((state) => {
        if (!group.current || (!parallax && !idle)) return;
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
