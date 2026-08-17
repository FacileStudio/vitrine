import type { RefObject } from "react";
import { useScroll } from "@/hooks/use-scroll";

// Normalized progress through a scroll section, driven off its own geometry so it
// never has to be re-tuned when the section's height changes.
//   progress 0 = the section's top reaches the top of the viewport
//   progress 1 = the section's bottom reaches the bottom of the viewport (pin end)
// For a tall pinned section (min-h-[Nvh] + a sticky child) this maps 1:1 to the
// pinned scroll distance. For a single-screen section it falls back to one
// viewport of travel. `visible` is false while the section is fully off-screen so
// callers can skip per-frame work (parallax loops, reel tracking, marquees).
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
