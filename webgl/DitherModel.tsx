'use client';

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Center, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export interface DitherModelProps {
    file: string;
    scale?: number;
    roughness?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
    parallax?: number;
    float?: boolean;
}

export function DitherModel({
    file,
    scale = 3,
    roughness = 0.15,
    position = [0, 0.8, 0],
    rotation = [0, -Math.PI / 3.5, -0.4],
    parallax = 0.15,
    float = true,
}: DitherModelProps) {
    const { scene } = useGLTF(file);
    const group = useRef<THREE.Group>(null);

    const model = useMemo(() => {
        const cloned = scene.clone(true);
        cloned.traverse((o) => {
            const mesh = o as THREE.Mesh;
            if (mesh.isMesh) {
                mesh.castShadow = true;
                const mat = mesh.material as THREE.MeshStandardMaterial;
                if (mat && "roughness" in mat) mat.roughness = roughness;
            }
        });
        return cloned;
    }, [scene, roughness]);

    useFrame((state) => {
        if (!group.current || !parallax) return;
        const { x, y } = state.pointer;
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * parallax, 0.05);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * parallax, 0.05);
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
