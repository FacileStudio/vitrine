'use client'

import { useEffect, useState } from "react";

export function useAfter(when: boolean, ms: number) {
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!when) return;
        const timer = setTimeout(() => setDone(true), ms);
        return () => {
            clearTimeout(timer);
            setDone(false);
        };
    }, [when, ms]);

    return when && done;
}
