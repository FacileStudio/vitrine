import type { RefObject } from "react";
import { useScroll } from "@/hooks/use-scroll";

export function usePinProgress(
    ref: RefObject<HTMLElement | null>,
    onFrame: (progress: number, visible: boolean) => void,
) {
    useScroll(() => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const visible = rect.bottom > 0 && rect.top < vh;

        const total = rect.height - vh;
        const denom = total > 0 ? total : vh;
        const progress = Math.min(1, Math.max(0, -rect.top / denom));

        onFrame(progress, visible);
    });
}
