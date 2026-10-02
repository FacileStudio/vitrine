'use client'

import gsap from "gsap";
import Lenis from "lenis";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { EASE, hideRevealY, run, slideY } from "@/lib/animations";
import { useNarrow } from "@/hooks/use-narrow";
import DitherBackdrop from "@/components/facile/ditherBackdrop";
import Chrome from "./chrome";
import Track from "./track";
import VerticalTrack from "./verticalTrack";
import type { Chapter } from "./types";

interface StoryProps {
    sections: Chapter[];
    name: string;
    index: number;
    total: number;
    backLabel: string;
    delay?: number;
    onClose: () => void;
    onNext?: () => void;
    onPrev?: () => void;
}

export default function Story({ sections, name, index, total, backLabel, delay = 0, onClose, onNext, onPrev }: StoryProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLSpanElement>(null);

    const leaving = useRef(false);
    const narrow = useNarrow();
    const [ready, setReady] = useState(false);

    const page = useLenis();

    useEffect(() => {
        page?.stop();

        return () => page?.start();
    }, [page]);

    const chrome = () => Array.from(rootRef.current?.querySelectorAll<HTMLElement>("[data-chrome]") ?? []);

    const close = useCallback(() => {
        if (leaving.current)
            return;

        leaving.current = true;
        onClose();
    }, [onClose]);



    useLayoutEffect(() => {
        const html = document.documentElement;
        const gap = window.innerWidth - html.clientWidth;
        const prevOverflow = html.style.overflow;
        const prevPad = html.style.paddingRight;

        html.style.setProperty("overflow", "hidden");
        if (gap > 0)
            html.style.setProperty("padding-right", `${gap}px`);

        hideRevealY(chrome());

        const blocks = Array.from(rootRef.current?.querySelectorAll<HTMLElement>("[data-block]") ?? []);
        const from = narrow ? { y: 40, opacity: 0 } : { xPercent: 14, opacity: 0 };
        const to = narrow ? { y: 0 } : { xPercent: 0 };

        const tl = gsap.timeline({ delay: delay / 1000 });
        tl.set(rootRef.current, { autoAlpha: 1 })
            .fromTo(bgRef.current, { opacity: 0 }, { opacity: 0.5, duration: 0.5, ease: EASE.out }, 0)
            .fromTo(blocks, from, { ...to, opacity: 1, duration: 0.9, ease: EASE.out, stagger: 0.07 }, 0.15)
            .add(() => run(chrome(), slideY(true, false, { stagger: 0.06, duration: 0.6 })), 0.35)
            .eventCallback("onComplete", () => setReady(true));

        return () => {
            tl.kill();
            html.style.setProperty("overflow", prevOverflow);
            html.style.setProperty("padding-right", prevPad);
        };
    }, [delay, narrow]);



    useEffect(() => {
        if (!ready)
            return;

        const el = scrollerRef.current;
        const track = trackRef.current;
        if (!el || !track)
            return;

        const lenis = new Lenis({
            wrapper: el,
            content: track,
            orientation: narrow ? "vertical" : "horizontal",
            gestureOrientation: narrow ? "vertical" : "both",
            smoothWheel: true,
            syncTouch: true,
            lerp: 0.09,
            wheelMultiplier: 2.4,
            touchMultiplier: 2,
            overscroll: false,
            autoRaf: false,
        });

        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);

        // skip past the left padding so the first section is visible immediately
        if (!narrow)
            lenis.scrollTo(window.innerWidth * 0.5, { immediate: true });

        let prevAt = 0;

        const onScroll = () => {
            const max = narrow ? el.scrollHeight - el.clientHeight : el.scrollWidth - el.clientWidth;
            const at = narrow ? el.scrollTop : el.scrollLeft;
            gsap.set(barRef.current, { scaleX: max > 0 ? at / max : 1 });

            if (leaving.current)
                return;

            // seamless transition to the next project when scrolling past the end
            if (max > 0 && at >= max - 5 && onNext) {
                leaving.current = true;
                onNext();
            }

            // reverse direction: scroll to the start to go to the previous project
            if (max > 0 && at <= 5 && at < prevAt && onPrev) {
                leaving.current = true;
                onPrev();
            }

            prevAt = at;
        };

        const step = () => (narrow ? window.innerHeight : window.innerWidth) * 0.6;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            else if (e.key === (narrow ? "ArrowDown" : "ArrowRight")) {
                if (onNext && !leaving.current) {
                    const max = narrow ? el.scrollHeight - el.clientHeight : el.scrollWidth - el.clientWidth;
                    const at = narrow ? el.scrollTop : el.scrollLeft;

                    if (at >= max - 5) {
                        leaving.current = true;
                        onNext();
                        return;
                    }
                }
                lenis.scrollTo(lenis.targetScroll + step(), { duration: 0.8 });
            } else if (e.key === (narrow ? "ArrowUp" : "ArrowLeft")) {
                if (onPrev && !leaving.current) {
                    const at = narrow ? el.scrollTop : el.scrollLeft;

                    if (at <= 5) {
                        leaving.current = true;
                        onPrev();
                        return;
                    }
                }
                lenis.scrollTo(lenis.targetScroll - step(), { duration: 0.8 });
            }
        };

        // no pointer capture: the links inside the track must keep their clicks
        let startX = 0, startLeft = 0, dragging = false;

        const onDown = (e: PointerEvent) => {
            if (narrow || e.pointerType !== "mouse" || e.button !== 0)
                return;

            dragging = true;
            startX = e.clientX;
            startLeft = lenis.targetScroll;
            e.preventDefault();
        };

        const onMove = (e: PointerEvent) => {
            if (!dragging)
                return;

            lenis.scrollTo(startLeft - (e.clientX - startX), { immediate: true, force: true });
        };

        const onUp = () => { dragging = false; };

        el.addEventListener("scroll", onScroll, { passive: true });
        el.addEventListener("pointerdown", onDown);
        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
        window.addEventListener("pointercancel", onUp);
        window.addEventListener("keydown", onKey);

        return () => {
            gsap.ticker.remove(tick);
            lenis.destroy();
            el.removeEventListener("scroll", onScroll);
            el.removeEventListener("pointerdown", onDown);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
            window.removeEventListener("pointercancel", onUp);
            window.removeEventListener("keydown", onKey);
        };
    }, [close, narrow, ready]);



    const scroller = narrow
        ? "overflow-y-auto overflow-x-hidden"
        : "cursor-grab overflow-x-auto overflow-y-hidden active:cursor-grabbing";

    return (
        <div
            ref={rootRef}
            aria-label={name}
            className="fixed inset-0 z-120 text-background opacity-0"
        >
            <div ref={bgRef} className="absolute inset-0 bg-foreground">
                <DitherBackdrop variant="dark" arrive={false} />
            </div>

            <div
                ref={scrollerRef}
                className={`absolute inset-0 overscroll-contain ${scroller} [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
            >
                {narrow ? (
                    <VerticalTrack ref={trackRef} sections={sections} scrollerRef={scrollerRef} onClose={close} />
                ) : (
                    <Track ref={trackRef} sections={sections} scrollerRef={scrollerRef} onClose={close} />
                )}
            </div>

            <Chrome name={name} index={index} total={total} backLabel={backLabel} barRef={barRef} onBack={close} />
        </div>
    );
}
