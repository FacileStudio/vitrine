'use client'

import { useEffect } from "react";
import type { RefObject } from "react";
import { hideRevealY, run, slideY } from "@/lib/animations";

export function useLineReveal(scope: RefObject<HTMLElement | null>, shown: boolean, deps: unknown[] = []) {
    useEffect(() => {
        const el = scope.current;
        if (!el) return;
        const lines = Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));
        if (!lines.length) return;
        if (!shown) {
            hideRevealY(lines);
            return;
        }
        run(lines, slideY(true, false, { stagger: 0.05, duration: 0.55, delay: 0.1 }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scope, shown, ...deps]);
}
