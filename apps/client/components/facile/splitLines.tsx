'use client'

import { memo, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { hideRevealY } from "@/lib/animations";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface SplitLinesProps {
    text: string;
    className?: string;
    lineClassName?: string;
    gap?: string;
    reveal?: boolean;
    justify?: boolean;
    as?: "div" | "p";
}

// the DOM is built imperatively outside React's tree, so re-renders never fight the measured markup
const SplitLines = memo(function SplitLines({
    text,
    className,
    lineClassName,
    gap = "mb-2",
    reveal = true,
    justify = false,
    as: Tag = "div",
}: SplitLinesProps) {
    const ref = useRef<HTMLDivElement>(null);

    useIsoLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const words = text.trim().split(/\s+/).filter(Boolean).flatMap((word) =>
            word.split(/(?<=-)(?=[^-])/).map((piece, i, pieces) => ({ piece, space: i === pieces.length - 1 }))
        );

        const build = () => {
            const shown = el.querySelector<HTMLElement>("[data-reveal]");
            const revealed = shown
                ? gsap.getProperty(shown, "yPercent") === 0 || gsap.getTweensOf(shown).some((t) => t.vars.yPercent === 0)
                : false;

            el.innerHTML = "";
            const wordEls = words.map(({ piece }) => {
                const s = document.createElement("span");
                s.textContent = piece;
                return s;
            });
            wordEls.forEach((s, i) => {
                el.append(s);
                if (words[i].space && i < wordEls.length - 1)
                    el.append(document.createTextNode(" "));
            });

            const lines: string[] = [];
            let top: number | null = null;

            wordEls.forEach((s, i) => {
                if (top === null || s.offsetTop !== top) {
                    if (lines.length) lines[lines.length - 1] = lines[lines.length - 1].trimEnd();
                    lines.push("");
                    top = s.offsetTop;
                }
                lines[lines.length - 1] += words[i].piece + (words[i].space ? " " : "");
            });

            if (lines.length)
                lines[lines.length - 1] = lines[lines.length - 1].trimEnd();

            el.innerHTML = "";
            const inners: HTMLElement[] = [];

            lines.forEach((line, i) => {
                const outer = document.createElement("span");
                outer.className = "block overflow-hidden" + (i < lines.length - 1 ? ` ${gap}` : "");

                const inner = document.createElement("span");
                inner.className = ("block " + (lineClassName ?? "")).trim();

                if (justify && i < lines.length - 1) {
                    inner.style.textAlign = "justify";
                    inner.style.textAlignLast = "justify";
                }
                if (reveal)
                    inner.setAttribute("data-reveal", "");
                inner.textContent = line;
                outer.append(inner);
                el.append(outer);
                inners.push(inner);
            });
            if (reveal && !revealed) hideRevealY(inners);
        };

        build();

        let width = el.clientWidth;
        let raf = 0;
        const ro = new ResizeObserver((entries) => {
            const w = Math.round(entries[0].contentRect.width);
            if (w === width) return;
            width = w;
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(build);
        });
        ro.observe(el);

        const onFonts = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(build);
        };
        document.fonts.addEventListener("loadingdone", onFonts);

        return () => {
            ro.disconnect();
            cancelAnimationFrame(raf);
            document.fonts.removeEventListener("loadingdone", onFonts);
        };
    }, [text, gap, lineClassName, reveal, justify]);

    return <Tag ref={ref as never} className={className} aria-label={text} />;
});

export default SplitLines;
