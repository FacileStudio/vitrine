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

        // *starred* words stay full strength and the rest fades, like Emphasis does for titles
        const emphasis = /\*(.+?)\*/.test(text);
        let strong = false;

        const words = text.trim().split(/\s+/).filter(Boolean).flatMap((word) => {
            const parts = word.split("*").map((part, i) => {
                if (i)
                    strong = !strong;

                return { part, strong };
            }).filter(({ part }) => part);
            const pieces = parts.flatMap(({ part, strong }) =>
                part.split(/(?<=-)(?=[^-])/).map((piece) => ({ piece, strong }))
            );

            return pieces.map((p, i) => ({ ...p, space: i === pieces.length - 1 }));
        });

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

            const lines: (typeof words)[] = [];
            let top: number | null = null;

            wordEls.forEach((s, i) => {
                if (top === null || s.offsetTop !== top) {
                    lines.push([]);
                    top = s.offsetTop;
                }
                lines[lines.length - 1].push(words[i]);
            });

            const textOf = (line: typeof words) =>
                line.map((w, i) => w.piece + (w.space && i < line.length - 1 ? " " : "")).join("");

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
                if (emphasis)
                    line.forEach((w, j) => {
                        const run = document.createElement("span");
                        run.textContent = w.piece + (w.space && j < line.length - 1 ? " " : "");
                        if (!w.strong)
                            run.className = "opacity-75";
                        inner.append(run);
                    });
                else
                    inner.textContent = textOf(line);
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

    return <Tag ref={ref as never} className={className} aria-label={text.replaceAll("*", "")} />;
});

export default SplitLines;
