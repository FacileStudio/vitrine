import type { ReactNode } from "react";
import { createRoot, extend, invalidate, type ReconcilerRoot } from "@react-three/fiber";
import * as THREE from "three";

extend(THREE as unknown as Parameters<typeof extend>[0]);

class WorkerImage {
    height = 0;
    onload: (() => void) | null = null;
    onerror: (() => void) | null = null;

    set src(url: string) {
        fetch(url)
            .then((res) => res.blob())
            .then((blob) => createImageBitmap(blob))
            .then((bitmap) => {
                this.height = bitmap.height;
                bitmap.close();
                this.onload?.();
            }, () => this.onerror?.());
    }
}

if (typeof Image === "undefined")
    Object.assign(self, { Image: WorkerImage });

export type Frame = { width: number; height: number; dpr: number };

export type Init<T> = Frame & { type: "init"; canvas: OffscreenCanvas; nativeDpr: number; lite: boolean; data: T };

export type Base<T> = Init<T> | (Frame & { type: "size" }) | { type: "pointer"; x: number; y: number };

export type Scene = { camera: [number, number, number]; fov: number };

type Loop = "always" | "never";

export const follow = { x: 0, y: 0 };

export const ready = () => self.postMessage({ type: "ready" });

const GL = { alpha: true, antialias: false, depth: false, stencil: false, powerPreference: "high-performance" } as const;

const size = ({ width, height }: Frame) => ({ width, height, top: 0, left: 0, updateStyle: false });

export type Controls = { loop: (mode: Loop) => void };

export function serve<T, M extends { type: string }>(scene: Scene, draw: (init: Init<T>, controls: Controls) => ReactNode, handle: (message: M, controls: Controls) => void) {
    let root: ReconcilerRoot<OffscreenCanvas> | null = null;
    let options: Parameters<ReconcilerRoot<OffscreenCanvas>["configure"]>[0] = {};
    let frame: Frame = { width: 1, height: 1, dpr: 1 };
    let mode: Loop = "always";

    const apply = () => root?.configure({ ...options, frameloop: mode, size: size(frame), dpr: frame.dpr });

    const loop = (next: Loop) => {
        if (next === mode)
            return;

        mode = next;
        apply()?.then(() => invalidate());
    };

    async function init(data: Init<T>) {
        const { canvas, lite } = data;

        root = createRoot(canvas);
        frame = data;
        options = {
            shadows: lite ? false : { type: THREE.BasicShadowMap },
            camera: { position: scene.camera, fov: scene.fov },
            gl: (defaults) => {
                const gl = new THREE.WebGLRenderer({ ...defaults, ...GL, canvas });

                gl.setClearColor(0x000000, 0);
                return gl;
            },
        };

        await apply();
        root.render(draw(data, { loop }));
    }

    self.onmessage = ({ data }: MessageEvent<Base<T> | M>) => {
        if (data.type === "init")
            init(data as Init<T>).catch((error) => self.postMessage({ type: "error", message: String(error) }));
        else if (data.type === "size") {
            frame = data as Frame;
            apply();
        } else if (data.type === "pointer") {
            const { x, y } = data as { x: number; y: number };

            follow.x = x;
            follow.y = y;
        } else
            handle(data as M, { loop });
    };
}
