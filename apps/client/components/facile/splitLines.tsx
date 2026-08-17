'use client'

import { memo, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { hideRevealY } from "@/app/utils/animations";

// layout effect on the client, plain effect on the server so SSR doesn't warn
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

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
    /** flush both edges — every line but the last is justified in place */
    justify?: boolean;
}

// Splits a block of text into its actual on-screen lines and wraps each one in its
// own overflow-hidden crop, so a line that wraps is masked and animated per visual
// line (SplitText by lines). With `reveal` on, each line's inner span is tagged
// `[data-reveal]` and pre-hidden, plugging into the app's IntersectionObserver
// reveal pattern (see homeSections). Rebuilds on width changes; the imperative DOM
// is kept out of React's tree (empty render + aria-label) so re-renders never fight
// the measured markup.
const SplitLines = memo(function SplitLines({
    text,
    className,
    lineClassName,
    gap = "mb-2",
    reveal = true,
    justify = false,
}: SplitLinesProps) {
    const ref = useRef<HTMLDivElement>(null);

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
            const inners: HTMLElement[] = [];
            lines.forEach((lineWords, i) => {
                const outer = document.createElement("span");
                outer.className = "block overflow-hidden" + (i < lines.length - 1 ? ` ${gap}` : "");
                const inner = document.createElement("span");
                inner.className = ("block " + (lineClassName ?? "")).trim();
                // each line is its own block, so justification has to be forced
                // per line — and never on the last one, which would stretch it
                if (justify && i < lines.length - 1) {
                    inner.style.textAlign = "justify";
                    inner.style.textAlignLast = "justify";
                }
                if (reveal) inner.setAttribute("data-reveal", "");
                inner.textContent = lineWords.join(" ");
                outer.append(inner);
                el.append(outer);
                inners.push(inner);
            });
            // pre-hide so the lines don't flash before the observer reveals them
            if (reveal && !revealed) hideRevealY(inners);
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
    }, [text, gap, lineClassName, reveal, justify]);

    return <div ref={ref} className={className} aria-label={text} />;
});

export default SplitLines;
