import { useCallback, useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import { gsap } from "gsap";
import { bytesProgress } from "@/webgl/loadBytes";

// playback rate 1 plays a whole track in a second, so a rate reads as hundredths per second
const FILL_MS = 1000;
const CATCH_UP = 0.5;
const MIN_RATE = 0.12;
const MAX_RATE = 0.6;
const RATE_EASE = 0.25;

export function useLoadFill<K extends string>(tracks: Record<K, Keyframe[]>, onDone: () => void) {
    const [percent, setPercent] = useState(0);
    const { active, total } = useProgress();
    const targets = useRef({} as Record<K, HTMLElement | null>);
    const animations = useRef<Animation[]>([]);
    const goal = useRef(0);

    const bind = useCallback((key: K) => (el: HTMLElement | null) => {
        targets.current[key] = el;
    }, []);

    // compositor animations keep moving while parsing and shader compiles block the main thread
    useEffect(() => {
        const keys = Object.keys(tracks) as K[];
        const created = keys.flatMap((key) => targets.current[key]?.animate(tracks[key], { duration: FILL_MS, fill: "forwards" }) ?? []);

        created.forEach((anim) => {
            anim.playbackRate = 0;
        });
        animations.current = created;

        return () => created.forEach((anim) => anim.cancel());
    }, [tracks]);

    useEffect(() => {
        const tick = (_time: number, deltaMs: number) => {
            const [lead] = animations.current;

            // a rate change on a pending animation resolves against a stale start time and runs backwards
            if (!lead || animations.current.some((anim) => anim.pending))
                return;

            const loaded = total > 0 && !active;
            // elapsed animation time as a share of a whole track, in percent
            const shown = (Number(lead.currentTime ?? 0) / FILL_MS) * 100;

            // a file joining the queue grows the byte total, so only the high-water mark counts
            goal.current = loaded ? 100 : Math.max(goal.current, bytesProgress());

            const gap = goal.current - shown;
            // the rate that closes the gap in CATCH_UP seconds, held between the floor and the cap
            const wanted = gap > 0 ? Math.min(MAX_RATE, Math.max(MIN_RATE, gap / 100 / CATCH_UP)) : 0;
            // exponential ease of the rate toward wanted, the same at any frame rate
            const rate = lead.playbackRate + (wanted - lead.playbackRate) * (1 - Math.exp(-Math.min(deltaMs, 100) / 1000 / RATE_EASE));
            const rounded = Math.min(100, Math.round(shown));

            // every track gets the same rate in the same frame, so they never drift apart
            if (Math.abs(rate - lead.playbackRate) > 0.005)
                animations.current.forEach((anim) => {
                    anim.playbackRate = rate;
                });

            setPercent((prev) => (prev !== rounded ? rounded : prev));

            if (loaded && shown >= 99.5)
                onDone();
        };

        gsap.ticker.add(tick);

        return () => gsap.ticker.remove(tick);
    }, [active, total, onDone]);

    return { bind, percent };
}
