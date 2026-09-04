'use client';

import { useEffect, useState } from "react";

// How many canvases are still fetching or parsing a model. A page curtain waits
// on this so it never sweeps off an empty grid and leaves the heads to pop in
// afterwards. Module state rather than context: the curtain is a sibling of the
// canvases, not an ancestor, and nothing here belongs in a render tree.
let pending = 0;
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((l) => l());

// Call on mount, call the returned release once the scene is on screen. The
// release is idempotent, so an unmount before that can call it safely.
export function registerScene() {
    pending += 1;
    emit();

    let released = false;

    return () => {
        if (released)
            return;

        released = true;
        pending -= 1;
        emit();
    };
}

export function subscribeScenes(fn: () => void) {
    listeners.add(fn);
    return () => { listeners.delete(fn); };
}

export const scenesPending = () => pending;

/**
 * True once every canvas on the page has its model. Two timers guard it: a grace
 * period, because a page with no 3D at all starts at zero pending and would
 * otherwise be declared ready before its canvases mount; and a ceiling, because
 * a model that 404s must not leave the viewer stuck behind a curtain forever.
 */
export function useScenesReady({ grace = 250, ceiling = 8000 } = {}) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let settled = false;
        let waited = false;

        const settle = () => {
            if (settled)
                return;

            settled = true;
            setReady(true);
        };

        const check = () => {
            if (waited && scenesPending() === 0)
                settle();
        };

        const unsubscribe = subscribeScenes(check);
        const graceTimer = setTimeout(() => { waited = true; check(); }, grace);
        const ceilingTimer = setTimeout(settle, ceiling);

        return () => {
            unsubscribe();
            clearTimeout(graceTimer);
            clearTimeout(ceilingTimer);
        };
    }, [grace, ceiling]);

    return ready;
}
