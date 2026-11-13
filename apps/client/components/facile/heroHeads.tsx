"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { DitherView } from "@/webgl/lazy";
import { useAfter } from "@/hooks/use-after";
import { useNarrow } from "@/hooks/use-narrow";
import { useMembers } from "@/components/facile/contentProvider";
import { headScale } from "@/lib/content/studio";
import { EASE } from "@/lib/animations";

// dx/dy point out of the screen; turn (degrees, clockwise) lays the head on its side (top heads: crown toward the centre, bottom heads: torso toward the centre), so yaw (radians) looks up or down at the copy; bleed is the % of its box the head is pushed off-screen inside its canvas; zoom scales one head against the others; mobile overrides turn and bleed under 768px
const CORNERS = [
    { turn: 60, dx: -1, dy: -1, yaw: 0.9, pitch: -0.2, bleed: { x: 55, y: 35 }, zoom: 0.6, shift: { x: 0, y: 8 }, mobile: { turn: 20, bleed: { x: 60, y: 20 } } },
    { turn: -60, dx: 1, dy: -1, yaw: -0.9, pitch: -0.2, bleed: { x: 40, y: 20 }, zoom: 0.7, shift: { x: 10, y: -5 }, mobile: { turn: -20, bleed: { x: 30, y: 10 } } },
    { turn: -60, dx: -1, dy: 1, yaw: 0.9, pitch: 0.2, bleed: { x: 20, y: 50 }, zoom: 0.7, shift: { x: 8, y: 0 }, mobile: { turn: -20, bleed: { x: 60, y: 30 } } },
    { turn: 60, dx: 1, dy: 1, yaw: -0.9, pitch: 0.2, bleed: { x: 15, y: 40 }, zoom: 0.7, shift: { x: 0, y: 8 }, mobile: { turn: 20, bleed: { x: 25, y: 20 } } },
];

const OUT = 0.6;
const ROOM = 1.5;
const LIFT = 0.8;
const FOV = Math.PI / 3;
const DEPTH = Math.hypot(1, 4);
const BOX = (2 * Math.hypot(1.8, 4) * Math.tan(FOV / 2)) / ROOM;
const RIGHT = new THREE.Vector3(1, 0, 0);
const UP = new THREE.Vector3(0, 4, 1).normalize();
const TOWARD = new THREE.Vector3(0, -1, 4).normalize();

type Offset = { x: number; y: number; z: number };

const pxPerUnit = (height: number) => height / (2 * DEPTH * Math.tan(FOV / 2));

const side = (narrow: boolean, w: number, h: number) => (narrow ? 1.2 * w : Math.min(1.5 * h, 0.7 * w));

const toWorld = (x: number, y: number, h: number) => {
    const k = pxPerUnit(h);

    return RIGHT.clone().multiplyScalar(x / k).addScaledVector(UP, -y / k);
};

const placement = (i: number, narrow: boolean) => {
    const { bleed, turn } = narrow ? CORNERS[i].mobile : CORNERS[i];
    const sx = CORNERS[i].dx * ((bleed.x - 10) / 100) * BOX;
    const sy = CORNERS[i].dy * (bleed.y / 100) * BOX;
    const a = (turn * Math.PI) / 180;
    const up = Math.sin(a) * sx - Math.cos(a) * sy;

    return new THREE.Vector3(Math.cos(a) * sx + Math.sin(a) * sy, UP.y * up, UP.z * up);
};

function layout(i: number, narrow: boolean, w: number, h: number, slug: string) {
    const { turn } = narrow ? CORNERS[i].mobile : CORNERS[i];
    const { dx, dy, pitch, yaw, zoom, shift } = CORNERS[i];
    const s = side(narrow, w, h);
    const a = (turn * Math.PI) / 180;

    const local = placement(i, narrow).add(new THREE.Vector3(0, LIFT, 0));
    const k = pxPerUnit(s * ROOM);
    const ox = local.dot(RIGHT) * k;
    const oy = -local.dot(UP) * k;
    const x = dx * (w / 2 - s / 2) + (shift.x / 100) * s + ox * Math.cos(a) - oy * Math.sin(a);
    const y = dy * (h / 2 - s / 2) + (shift.y / 100) * s + ox * Math.sin(a) + oy * Math.cos(a);
    const position = toWorld(x, y, h).sub(new THREE.Vector3(0, LIFT, 0));

    const roll = new THREE.Quaternion().setFromAxisAngle(TOWARD, -a);
    const own = new THREE.Quaternion().setFromEuler(new THREE.Euler(pitch, yaw, 0));
    const rotation = new THREE.Euler().setFromQuaternion(roll.multiply(own));

    return {
        position: position.toArray() as [number, number, number],
        rotation: [rotation.x, rotation.y, rotation.z] as [number, number, number],
        scale: (headScale(slug) * 3 * zoom * s) / h,
    };
}

const away = (i: number, narrow: boolean): Offset => {
    const d = side(narrow, window.innerWidth, window.innerHeight) * OUT;
    const v = toWorld(CORNERS[i].dx * d, CORNERS[i].dy * d, window.innerHeight);

    return { x: v.x, y: v.y, z: v.z };
};

function useViewport() {
    const [view, setView] = useState({ w: 0, h: 0 });

    useEffect(() => {
        const sync = () => setView({ w: window.innerWidth, h: window.innerHeight });

        sync();
        window.addEventListener("resize", sync);

        return () => window.removeEventListener("resize", sync);
    }, []);

    return view;
}

// team narrows open to those member slugs; swift drops the landing pause and stagger, for heads that swap mid-scroll
export default function HeroHeads({ open, team, swift = false }: { open: boolean; team?: string[]; swift?: boolean }) {
    const sharp = useAfter(open, 1200);
    const members = useMembers();
    const heads = useMemo(() => members.slice(0, CORNERS.length), [members]);
    const narrow = useNarrow();
    const { w, h } = useViewport();
    const wasOn = useRef<boolean[]>([]);
    const [parked, setParked] = useState<boolean[]>([]);
    const offsets = useMemo<Offset[]>(() => heads.map(() => ({ x: 0, y: 0, z: 0 })), [heads]);

    useLayoutEffect(() => {
        offsets.forEach((o, i) => gsap.set(o, away(i, narrow)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offsets]);

    const on = heads.map((head) => open && (!team || team.includes(head.slug)));

    // only the heads whose state changed fly, so a head kept between two teams never moves or restarts
    useEffect(() => {
        const moving = on.flatMap((o, i) => (o === !!wasOn.current[i] ? [] : [i]));
        const park = (i: number, v: boolean) => setParked((p) => Object.assign([...p], { [i]: v }));

        wasOn.current = on;

        moving.forEach((i, k) => {
            gsap.to(offsets[i], {
                ...(on[i] ? { x: 0, y: 0, z: 0 } : away(i, narrow)),
                delay: swift ? 0 : on[i] ? 0.2 + k * 0.12 : k * 0.05,
                duration: on[i] ? (swift ? 1.1 : 1.6) : (swift ? 1 : 0.9),
                ease: on[i] ? EASE.out : swift ? EASE.glide : EASE.in,
                overwrite: true,
                onStart: on[i] ? () => park(i, false) : undefined,
                onComplete: on[i] ? undefined : () => park(i, true),
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [on.join(), swift]);

    useEffect(() => () => {
        gsap.killTweensOf(offsets);
    }, [offsets]);

    const models = useMemo(() => (h ? heads.map((head, i) => ({
        file: head.model!,
        ...layout(i, narrow, w, h, head.slug),
        roughness: head.roughness,
        metalness: 0.6,
        hairColor: head.hair ?? undefined,
        parallax: 0.2,
        parallaxSpeed: 0.02,
        idle: 0.12,
        float: false,
        offset: offsets[i],
        glow: head.highlight,
    })) : []), [heads, narrow, w, h, offsets]);

    return (
        // z-60 sits above the next section's layers, so the heads fly out over it instead of being covered; the hero copy is z-70
        <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden="true">
            {models.length > 0 && (
                <DitherView
                    file={models[0].file}
                    models={models}
                    className="absolute inset-0"
                    gridSize={sharp ? 2 : 9}
                    active={heads.some((_, i) => !parked[i])}
                    intensity={0.8}
                    highlight="#FFD9B0"
                    bloom
                    bloomIntensity={0.5}
                    ambient={1}
                />
            )}
        </div>
    );
}
