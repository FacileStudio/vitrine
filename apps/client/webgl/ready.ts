import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

// compiling here keeps the shader stall inside the loader instead of the first reveal frame
export function Ready({ done }: { done: () => void }) {
    const gl = useThree((s) => s.gl);
    const scene = useThree((s) => s.scene);
    const camera = useThree((s) => s.camera);

    useEffect(() => {
        scene.traverse((o) => {
            const material = (o as THREE.Mesh).material;

            (Array.isArray(material) ? material : material ? [material] : []).forEach((m) =>
                Object.values(m).forEach((v) => {
                    if (v instanceof THREE.Texture)
                        gl.initTexture(v);
                }));
        });
        gl.compileAsync(scene, camera).catch(() => undefined).finally(done);
    }, [gl, scene, camera, done]);

    return null;
}
