'use client'

import gsap from "gsap";
import Lenis from "lenis";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useEffectEvent, useLayoutEffect, useRef, useState } from "react";
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
    glass?: boolean;
    onClose: () => void;
    onNext?: () => void;
    onPrev?: () => void;
}

export default function Story({ sections, name, index, total, backLabel, delay = 0, glass = false, onClose, onNext, onPrev }: StoryProps) {
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

    // the parent passes fresh arrows each render, so reading them here keeps the scroller effect from rebuilding lenis
    const go = useEffectEvent((to: "next" | "prev") => {
        const move = to === "next" ? onNext : onPrev;

        if (!move || leaving.current)
            return false;

        leaving.current = true;
        move();

        return true;
    });



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

        const threshold = () => (narrow ? window.innerHeight : window.innerWidth) * 0.35;

        // 1 at the end, -1 at the start, 0 in between
        const edge = () => {
            const max = narrow ? el.scrollHeight - el.clientHeight : el.scrollWidth - el.clientWidth;
            const at = narrow ? el.scrollTop : el.scrollLeft;

            if (at >= max - 5)
                return 1;

            return at <= 5 ? -1 : 0;
        };

        let pull = 0;

        // lenis still reports input at its bounds, so pushing past an edge long enough switches project
        const onVirtual = ({ deltaX, deltaY }: { deltaX: number; deltaY: number }) => {
            const delta = narrow || Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
            const at = edge();

            pull = at !== 0 && Math.sign(delta) === at ? pull + Math.abs(delta) : 0;

            if (pull > threshold())
                go(at > 0 ? "next" : "prev");
        };

        const onScroll = () => {
            const max = narrow ? el.scrollHeight - el.clientHeight : el.scrollWidth - el.clientWidth;
            const at = narrow ? el.scrollTop : el.scrollLeft;
            gsap.set(barRef.current, { scaleX: max > 0 ? at / max : 1 });
        };

        const step = () => (narrow ? window.innerHeight : window.innerWidth) * 0.6;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            else if (e.key === (narrow ? "ArrowDown" : "ArrowRight")) {
                const max = narrow ? el.scrollHeight - el.clientHeight : el.scrollWidth - el.clientWidth;
                const at = narrow ? el.scrollTop : el.scrollLeft;

                if (at >= max - 5 && go("next"))
                    return;

                lenis.scrollTo(lenis.targetScroll + step(), { duration: 0.8 });
            } else if (e.key === (narrow ? "ArrowUp" : "ArrowLeft")) {
                const at = narrow ? el.scrollTop : el.scrollLeft;

                if (at <= 5 && go("prev"))
                    return;

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

            const target = startLeft - (e.clientX - startX);

            // how far the drag reaches past either end of the track
            const over = Math.max(target - lenis.limit, -target, 0);

            if (over > threshold() && go(target > 0 ? "next" : "prev"))
                return;

            lenis.scrollTo(target, { immediate: true, force: true });
        };

        const onUp = () => { dragging = false; };

        lenis.on("virtual-scroll", onVirtual);
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
            data-glass={glass || undefined}
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
