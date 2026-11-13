'use client';

import { useEffect, useMemo, useRef, useState } from "react";
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
    offset?: { x: number; y: number; z: number };
    glow?: string;
    glowIntensity?: number;
    glowSpread?: number;
    follow?: { x: number; y: number };
    scaleTarget?: { current: number };
}

const SCALE_EASE = 0.3;

const headAt = new THREE.Vector3();
const headScale = new THREE.Vector3();

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
    offset,
    glow,
    glowIntensity = 10,
    glowSpread = 1.1,
    follow,
    scaleTarget,
}: DitherModelProps) {
    const { scene } = useGLTF(file, false, true, trackBytes);
    const canvas = useThree((state) => state.gl.domElement);
    const world = useThree((state) => state.scene);
    const shift = useRef<THREE.Group>(null);
    const head = useRef<THREE.Group>(null);
    const group = useRef<THREE.Group>(null);
    const cursor = useRef<{ x: number; y: number } | null>(null);
    const pointer = useRef({ x: 0, y: 0 });
    const moved = useRef(false);
    const [seed] = useState(() => Math.random() * 100);

    useEffect(() => {
        if (!parallax || follow) return;
        const onMove = (e: PointerEvent) => {
            cursor.current = { x: e.clientX, y: e.clientY };
            moved.current = true;
        };
        const onScroll = () => {
            moved.current = true;
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("scroll", onScroll);
        };
    }, [parallax, follow]);

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

    const radius = useMemo(() => new THREE.Box3().setFromObject(model).getBoundingSphere(new THREE.Sphere()).radius, [model]);

    const light = useRef<THREE.SpotLight | null>(null);

    useEffect(() => {
        if (!glow) return;

        const spot = new THREE.SpotLight(glow, glowIntensity, 0, 0.2, 1, 0);

        world.add(spot, spot.target);
        light.current = spot;

        return () => {
            world.remove(spot, spot.target);
            spot.dispose();
            light.current = null;
        };
    }, [glow, glowIntensity, world]);

    useFrame((state, delta) => {
        if (offset && shift.current)
            shift.current.position.set(offset.x, offset.y, offset.z);

        if (scaleTarget && head.current) {
            const now = head.current.scale.x;

            head.current.scale.setScalar(now + (scaleTarget.current - now) * (1 - Math.exp(-delta / SCALE_EASE)));
        }

        const spot = light.current;

        if (spot && head.current) {
            head.current.getWorldPosition(headAt);
            head.current.getWorldScale(headScale);
            spot.target.position.copy(headAt);
            spot.target.updateMatrixWorld();
            spot.angle = Math.min(Math.PI / 2, Math.atan((radius * headScale.x * glowSpread) / Math.max(0.001, headAt.length())));
        }

        if (!group.current || (!parallax && !idle)) return;

        // reading the canvas rect can force a layout, so it only happens after the pointer or the page moved
        if (parallax && cursor.current && moved.current) {
            moved.current = false;

            const rect = canvas.getBoundingClientRect();
            pointer.current.x = (cursor.current.x - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
            pointer.current.y = -(cursor.current.y - (rect.top + rect.height / 2)) / (window.innerHeight / 2);
        }

        const { x, y } = follow ?? pointer.current;
        const t = state.clock.elapsedTime + seed;
        const driftX = Math.sin(t * 0.23) * 0.6 + Math.sin(t * 0.13 + 2.1) * 0.4;
        const driftY = Math.sin(t * 0.31 + 1.3) * 0.6 + Math.sin(t * 0.17 + 0.7) * 0.4;

        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * parallax + driftX * idle, parallaxSpeed);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * parallax + driftY * idle * 0.6, parallaxSpeed);
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, driftY * idle * 0.5, parallaxSpeed);
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, driftX * idle * 0.35, parallaxSpeed);
    });

    const centered = (
        <Center ref={head} scale={scale} position={position} rotation={rotation}>
            <primitive object={model} />
        </Center>
    );

    return (
        <group ref={shift}>
            <group ref={group}>
                {float ? (
                    <Float floatIntensity={2} rotationIntensity={1} speed={2}>
                        {centered}
                    </Float>
                ) : (
                    centered
                )}
            </group>
        </group>
    );
}
