import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { RefObject } from "react";

// layout effect on the client, plain effect on the server so SSR doesn't warn
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export interface SweepTrigger {
    /** drive it from the parent; leave it out and the element watches its own box */
    open?: boolean;
    /** seconds the first play holds off — the arriving curtain, mostly */
    arrive?: number;
    /** the band it watches while self-observing (same syntax as rootMargin) */
    rootMargin?: string;
    enabled?: boolean;
}

// When a panel-wiped element may play, and what is left of the hold it owes the
// arriving curtain. The hold is a deadline stamped at mount, not a duration: the
// first play waits it out, a replay half a minute later doesn't wait at all.
export function useSweep(
    ref: RefObject<HTMLElement | null>,
    { open, arrive = 0, rootMargin = "0px 0px -12% 0px", enabled = true }: SweepTrigger,
) {
    const [inView, setInView] = useState(false);
    const holdUntil = useRef(0);

    useIsoLayoutEffect(() => { holdUntil.current = performance.now() + arrive * 1000; }, []);

    useEffect(() => {
        if (!enabled || open !== undefined) return;
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin, threshold: 0 });
        io.observe(el);
        return () => io.disconnect();
    }, [ref, open, rootMargin, enabled]);

    const hold = useCallback(() => Math.max(0, holdUntil.current - performance.now()) / 1000, []);

    return { show: open ?? inView, hold };
}
