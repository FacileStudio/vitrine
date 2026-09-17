'use client';

import { useEffect, useState } from "react";

// module state, not context: the curtain is a sibling of the canvases, not an ancestor
let pending = 0;
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((l) => l());

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

function subscribeScenes(fn: () => void) {
    listeners.add(fn);
    return () => { listeners.delete(fn); };
}

const scenesPending = () => pending;

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
