'use client';

import { useEffect, useRef, type RefObject } from "react";
import { queueBoot, type Boot } from "../boot";
import { registerScene } from "../sceneReady";

// device pixels one canvas may draw; a 1512px hero head at dpr 2 is 9.1M
const PIXEL_BUDGET = 4_000_000;
// a gpu that cannot hold the frame rate may go below 1
const MIN_DPR = 0.75;

// the largest ratio whose canvas fits the pixel budget (area is css px², so the ratio is a square root), scaled down by the frame-rate monitor
export const canvasDpr = (nativeDpr: number, area: number, quality = 1) =>
    Math.round(Math.max(MIN_DPR, Math.min(nativeDpr, Math.sqrt(PIXEL_BUDGET / Math.max(1, area))) * quality) * 100) / 100;

export const offscreen = (() => {
    try {
        return typeof OffscreenCanvas !== "undefined"
            && typeof HTMLCanvasElement.prototype.transferControlToOffscreen === "function"
            && !!new OffscreenCanvas(1, 1).getContext("webgl2");
    } catch {
        return false;
    }
})();

type Options<T> = { create: () => Worker; data: T; lite: boolean; stage: Boot; onReady?: () => void; onFail: () => void };

export function useWorkerCanvas<T>(box: RefObject<HTMLDivElement | null>, { create, data, lite, stage, onReady, onFail }: Options<T>) {
    const worker = useRef<Worker | null>(null);
    const latest = useRef({ data, onReady, onFail });

    useEffect(() => {
        latest.current = { data, onReady, onFail };
    }, [data, onReady, onFail]);

    useEffect(() => {
        const el = box.current;

        if (!el)
            return;

        const canvas = document.createElement("canvas");
        const nativeDpr = lite ? 1 : Math.min(window.devicePixelRatio || 1, 2);
        const release = registerScene();
        const send = (message: object, transfer: Transferable[] = []) => worker.current?.postMessage(message, transfer);
        const measure = () => {
            const { width, height } = el.getBoundingClientRect();

            return { width, height, dpr: canvasDpr(nativeDpr, width * height) };
        };
        let slot: ReturnType<typeof queueBoot> | null = null;
        let finished = false;

        const settle = (failed: boolean) => {
            if (finished)
                return;

            finished = true;
            release();
            slot?.done();

            if (failed)
                latest.current.onFail();
            else
                latest.current.onReady?.();
        };

        canvas.style.display = "block";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        el.appendChild(canvas);

        const onMove = (e: PointerEvent) => send({
            type: "pointer",
            x: (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2),
            y: -(e.clientY - window.innerHeight / 2) / (window.innerHeight / 2),
        });
        const ro = new ResizeObserver(() => send({ type: "size", ...measure() }));

        const start = () => {
            let target: OffscreenCanvas;

            try {
                target = canvas.transferControlToOffscreen();
                worker.current = create();
            } catch {
                settle(true);
                return;
            }

            worker.current.onmessage = ({ data: message }: MessageEvent<{ type: string }>) => {
                if (message.type === "ready")
                    settle(false);

                if (message.type === "error")
                    settle(true);
            };
            worker.current.onerror = () => settle(true);

            send({ type: "init", canvas: target, ...measure(), nativeDpr, lite, data: latest.current.data }, [target]);
            ro.observe(el);
            window.addEventListener("pointermove", onMove, { passive: true });
        };

        slot = queueBoot(stage, start);

        return () => {
            slot?.cancel();
            ro.disconnect();
            window.removeEventListener("pointermove", onMove);
            worker.current?.terminate();
            worker.current = null;
            canvas.remove();
            release();
        };
    }, [box, create, lite, stage]);

    return worker;
}
