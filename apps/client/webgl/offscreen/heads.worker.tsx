import { Suspense, useSyncExternalStore } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { DitherModel } from "../DitherModel";
import { EnvironmentWrapper } from "../environment";
import { PostProcessing } from "../PostProcessing";
import { Ready } from "../ready";
import { follow, ready, serve } from "./serve";

type V = { x: number; y: number; z: number };

export type HeadModel = {
    file: string;
    position: [number, number, number];
    rotation: [number, number, number];
    scale: number;
    roughness?: number;
    hairColor?: string;
    glow?: string;
};

export type HeadsData = { models: HeadModel[]; away: V[]; on: boolean[]; swift: boolean; grid: number; fine: number };

export type HeadsMessage =
    | { type: "models"; models: HeadModel[]; away: V[] }
    | { type: "fly"; on: boolean[]; swift: boolean }
    | { type: "grid"; value: number };

const HEADS_SCENE = { camera: [0, -1, 4] as [number, number, number], fov: 60 };

const SETTLE_FRAMES = 30;

type Flight = { from: V; to: V; start: number; duration: number; ease: (t: number) => number };

const EASE = { in: gsap.parseEase("power3.in"), out: gsap.parseEase("power3.out"), glide: gsap.parseEase("power3.inOut") };

const grid = { current: 9 };
let models: HeadModel[] = [];
let away: V[] = [];
let offsets: V[] = [];
let flights: (Flight | null)[] = [];
let wasOn: boolean[] = [];
let warm = 0;
let loop: (mode: "always" | "never") => void = () => undefined;
const listeners = new Set<() => void>();

const subscribe = (fn: () => void) => {
    listeners.add(fn);
    return () => { listeners.delete(fn); };
};

const now = () => performance.now() / 1000;

function place(next: HeadModel[], nextAway: V[]) {
    const fresh = next.length !== offsets.length;

    models = next;
    away = nextAway;

    if (fresh) {
        offsets = next.map((_, i) => ({ ...away[i] }));
        flights = next.map(() => null);
    }

    offsets.forEach((o, i) => {
        if (!wasOn[i] && !flights[i])
            Object.assign(o, away[i]);
    });

    listeners.forEach((fn) => fn());
}

function fly(on: boolean[], swift: boolean) {
    const moving = on.flatMap((o, i) => (o === !!wasOn[i] ? [] : [i]));
    const t = now();

    wasOn = on;
    moving.forEach((i, k) => {
        if (!offsets[i])
            return;

        flights[i] = {
            from: { ...offsets[i] },
            to: on[i] ? { x: 0, y: 0, z: 0 } : { ...away[i] },
            start: t + (swift ? 0 : on[i] ? 0.2 + k * 0.12 : k * 0.05),
            duration: on[i] ? (swift ? 1.1 : 1.6) : (swift ? 1 : 0.9),
            ease: on[i] ? EASE.out : swift ? EASE.glide : EASE.in,
        };
    });
    loop("always");
}

function Flights() {
    useFrame(() => {
        const t = now();
        let moving = false;

        flights.forEach((f, i) => {
            if (!f)
                return;

            moving = true;

            const p = Math.min(1, Math.max(0, (t - f.start) / f.duration));
            const e = f.ease(p);
            const o = offsets[i];

            o.x = f.from.x + (f.to.x - f.from.x) * e;
            o.y = f.from.y + (f.to.y - f.from.y) * e;
            o.z = f.from.z + (f.to.z - f.from.z) * e;

            if (p >= 1)
                flights[i] = null;
        });

        warm += 1;

        if (!moving && !wasOn.some(Boolean) && warm > SETTLE_FRAMES)
            loop("never");
    });

    return null;
}

function HeadsScene({ nativeDpr, fine }: { nativeDpr: number; fine: number }) {
    const list = useSyncExternalStore(subscribe, () => models);

    return (
        <>
            <ambientLight intensity={1} color="#ffffff" />
            <Suspense fallback={null}>
                {list.map((m, i) => (
                    <group key={i} position={m.position}>
                        <DitherModel
                            file={m.file}
                            rotation={m.rotation}
                            scale={m.scale}
                            roughness={m.roughness}
                            metalness={0.6}
                            hairColor={m.hairColor}
                            parallax={0.2}
                            parallaxSpeed={0.02}
                            idle={0.12}
                            float={false}
                            offset={offsets[i]}
                            glow={m.glow}
                            follow={follow}
                        />
                    </group>
                ))}
                <EnvironmentWrapper intensity={0.8} highlight="#FFD9B0" />
                <Ready done={ready} />
            </Suspense>
            <Flights />
            <PostProcessing
                nativeDpr={nativeDpr}
                gridSize={fine}
                gridTarget={grid}
                pixelSizeRatio={10}
                rotation={Math.PI / 4}
                bloom
                bloomIntensity={0.5}
            />
        </>
    );
}

serve<HeadsData, HeadsMessage>(
    HEADS_SCENE,
    ({ nativeDpr, data }, controls) => {
        loop = controls.loop;
        grid.current = data.grid;
        place(data.models, data.away);
        fly(data.on, data.swift);

        return <HeadsScene nativeDpr={nativeDpr} fine={data.fine} />;
    },
    (message) => {
        if (message.type === "models")
            place(message.models, message.away);
        else if (message.type === "fly")
            fly(message.on, message.swift);
        else {
            grid.current = message.value;
            loop("always");
        }
    },
);
