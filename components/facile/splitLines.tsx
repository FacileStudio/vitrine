'use client'

import { memo, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { blockSweep, blockSweepOut, hideBlockSweep, hideRevealY, SWEEP_BLEED } from "@/app/utils/animations";
import { useSweep, type SweepTrigger } from "@/hooks/use-sweep";

// layout effect on the client, plain effect on the server so SSR doesn't warn
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface SweepOptions extends SweepTrigger {
    /** panel colour: light on dark surfaces, dark on light ones */
    blockColor?: "light" | "dark";
    duration?: number;
    /** before the first line's panel moves */
    delay?: number;
    /** between one line's panel and the next */
    stagger?: number;
}

interface SplitLinesProps {
    text: string;
    /** styles for the wrapping container (font/size/colour are inherited by every line) */
    className?: string;
    /** extra classes for each line's revealing inner span */
    lineClassName?: string;
    /** margin utility placed between lines (outside the crop, so the reveal can't peek) */
    gap?: string;
    /** mark each line `[data-reveal]` + pre-hide it, so an ancestor reveal observer slides it in */
    reveal?: boolean;
    /** wipe each line in behind its own panel, staggered down the block. Replaces `reveal` */
    sweep?: SweepOptions;
    /** flush both edges — every line but the last is justified in place */
    justify?: boolean;
}

// Splits a block of text into its actual on-screen lines and wraps each one in its
// own overflow-hidden crop, so a line that wraps is masked and animated per visual
// line (SplitText by lines). With `reveal` on, each line's inner span is tagged
// `[data-reveal]` and pre-hidden, plugging into the app's IntersectionObserver
// reveal pattern (see homeSections); with `sweep` it instead gets a panel of its
// own that wipes it in, one line after the next. Rebuilds on width changes; the
// imperative DOM is kept out of React's tree (empty render + aria-label) so
// re-renders never fight the measured markup.
const SplitLines = memo(function SplitLines({
    text,
    className,
    lineClassName,
    gap,
    reveal = true,
    sweep,
    justify = false,
}: SplitLinesProps) {
    const ref = useRef<HTMLDivElement>(null);

    // the panels and the spans they cover, paired by index and refreshed on rebuild
    const panels = useRef<HTMLElement[]>([]);
    const inners = useRef<HTMLElement[]>([]);
    const tweens = useRef<gsap.core.Timeline[]>([]);
    const played = useRef(false);

    const { open, arrive, rootMargin, blockColor = "light", duration = 0.8, delay = 0, stagger = 0.08 } = sweep ?? {};
    const sweeping = !!sweep;
    const { show, hold } = useSweep(ref, { open, arrive, rootMargin, enabled: sweeping });

    // the crop needs no breathing room once a panel covers the line instead of a
    // slide rising through it, so the lines can sit on their natural leading
    const lineGap = gap ?? (sweeping ? "" : "mb-2");

    // `animate` is off for a rebuild: a resize has to land the lines wherever the
    // reveal already left them rather than replay the whole block
    const paint = (animate: boolean) => {
        tweens.current.forEach((t) => t.kill());
        tweens.current = [];

        const pairs = panels.current.map((p, i) => [p, inners.current[i]] as const);

        if (show) {
            if (!animate) {
                pairs.forEach(([p, t]) => { gsap.set(p, { scaleX: 0 }); gsap.set(t, { autoAlpha: 1, yPercent: 0 }); });
                return;
            }
            const held = hold();
            pairs.forEach(([p, t], i) => {
                hideBlockSweep(p, t);
                tweens.current.push(blockSweep(p, t, { duration, delay: delay + held + i * stagger }));
            });
            played.current = true;
            return;
        }

        // lines that were on screen a moment ago lift away in the same order they
        // arrived in; ones that never played are simply parked
        if (!played.current || !animate) {
            pairs.forEach(([p, t]) => hideBlockSweep(p, t));
            return;
        }
        pairs.forEach(([p, t], i) => {
            gsap.set(p, { scaleX: 0 });
            // a line its panel never got round to uncovering has nothing to see off
            if (Number(gsap.getProperty(t, "opacity")) <= 0) return hideBlockSweep(p, t);
            tweens.current.push(blockSweepOut(t, { duration: duration * 0.45, delay: i * stagger * 0.5 }));
        });
    };

    // the build below reaches for the latest closure, so it is parked in a ref that
    // is refreshed after every render — never written during one
    const paintRef = useRef(paint);
    useIsoLayoutEffect(() => { paintRef.current = paint; });

    useIsoLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const words = text.trim().split(/\s+/).filter(Boolean);

        const build = () => {
            // a rebuild must not undo a reveal an ancestor already played, so carry
            // the current state over instead of blindly pre-hiding again
            const shown = el.querySelector<HTMLElement>("[data-reveal]");
            const revealed = shown ? gsap.getProperty(shown, "yPercent") === 0 : false;

            // phase 1: lay the words out inline and read where the browser wraps them
            el.innerHTML = "";
            const wordEls = words.map((w) => {
                const s = document.createElement("span");
                s.textContent = w;
                return s;
            });
            wordEls.forEach((s, i) => {
                el.append(s);
                if (i < wordEls.length - 1) el.append(document.createTextNode(" "));
            });

            const lines: string[][] = [];
            let top: number | null = null;
            wordEls.forEach((s, i) => {
                if (top === null || s.offsetTop !== top) { lines.push([]); top = s.offsetTop; }
                lines[lines.length - 1].push(words[i]);
            });

            // phase 2: one crop box per line, inner span carries the reveal
            el.innerHTML = "";
            const built: HTMLElement[] = [];
            const covers: HTMLElement[] = [];
            lines.forEach((lineWords, i) => {
                const outer = document.createElement("span");
                // a crop would cut the panel's bleed off, and a swept line has no
                // slide to hide anyway — it is the panel that does the covering
                outer.className = `block ${sweeping ? "relative" : "overflow-hidden"}${i < lines.length - 1 && lineGap ? ` ${lineGap}` : ""}`;
                const inner = document.createElement("span");
                inner.className = ("block " + (lineClassName ?? "")).trim();
                // each line is its own block, so justification has to be forced
                // per line — and never on the last one, which would stretch it
                if (justify && i < lines.length - 1) {
                    inner.style.textAlign = "justify";
                    inner.style.textAlignLast = "justify";
                }
                if (reveal && !sweeping) inner.setAttribute("data-reveal", "");
                inner.textContent = lineWords.join(" ");
                outer.append(inner);

                if (sweeping) {
                    const panel = document.createElement("span");
                    panel.setAttribute("aria-hidden", "true");
                    panel.className = `pointer-events-none absolute will-change-transform ${blockColor === "dark" ? "bg-foreground" : "bg-background"}`;
                    Object.assign(panel.style, SWEEP_BLEED);
                    outer.append(panel);
                    covers.push(panel);
                }

                el.append(outer);
                built.push(inner);
            });

            if (sweeping) {
                panels.current = covers;
                inners.current = built;
                paintRef.current(!played.current);
                return;
            }
            // pre-hide so the lines don't flash before the observer reveals them
            if (reveal && !revealed) hideRevealY(built);
        };

        build();

        // only rebuild when the width actually changes (rebuilding alters height,
        // which must not feed back into another rebuild)
        let width = el.clientWidth;
        let raf = 0;
        const ro = new ResizeObserver((entries) => {
            // contentRect is fractional while clientWidth is rounded, so compare
            // rounded — otherwise the observer's first call always looks like a resize
            const w = Math.round(entries[0].contentRect.width);
            if (w === width) return;
            width = w;
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(build);
        });
        ro.observe(el);

        return () => { ro.disconnect(); cancelAnimationFrame(raf); };
    }, [text, lineGap, lineClassName, reveal, justify, sweeping, blockColor]);

    useEffect(() => {
        if (sweeping) paintRef.current(true);
    }, [show, sweeping]);

    return <div ref={ref} className={className} aria-label={text} />;
});

export default SplitLines;
