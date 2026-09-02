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
    float = true,
}: DitherModelProps) {
    const { scene } = useGLTF(file);
    const canvas = useThree((state) => state.gl.domElement);
    const group = useRef<THREE.Group>(null);
    const pointer = useRef({ x: 0, y: 0 });

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

    useFrame(() => {
        if (!group.current || !parallax) return;
        const { x, y } = pointer.current;
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * parallax, parallaxSpeed);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * parallax, parallaxSpeed);
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
