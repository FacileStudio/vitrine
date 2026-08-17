'use client'

import gsap from "gsap";
import Lenis from "lenis";
import { useLenis } from "lenis/react";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { EASE, hideRevealY, run, slideY } from "@/app/utils/animations";
import Backdrop from "./backdrop";
import Chrome from "./chrome";
import Track from "./track";
import type { Block } from "./types";

interface StoryProps {
    sections: Block[][];
    name: string;
    index: number;
    total: number;
    backLabel?: string;
    /** ms to wait before the band slides in — the time an arriving curtain needs */
    delay?: number;
    onClose: () => void;
}

// a story that owns the whole viewport: a horizontal band of bento chapters with
// its own scroller. Whatever put it there — a route, a click on a shelf — hands
// it the blocks and a way out
export default function Story({ sections, name, index, total, backLabel = "Back", delay = 0, onClose }: StoryProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLSpanElement>(null);

    const leaving = useRef(false);

    // the page keeps its scroll behind the band, but it must not move while the
    // story is open — the overlay has a scroller of its own
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



    // open: lock the page behind the band (keeping the scrollbar's width so
    // nothing shifts), then slide the track in
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

        const tl = gsap.timeline({ delay: delay / 1000 });
        tl.set(rootRef.current, { autoAlpha: 1 })
            .fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: EASE.out }, 0)
            .fromTo(blocks, { xPercent: 14, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.9, ease: EASE.out, stagger: 0.07 }, 0.15)
            .add(() => run(chrome(), slideY(true, false, { stagger: 0.06, duration: 0.6 })), 0.35);

        return () => {
            tl.kill();
            html.style.setProperty("overflow", prevOverflow);
            html.style.setProperty("padding-right", prevPad);
        };
    }, [delay]);



    // horizontal scroll: Lenis owns the track, so a vertical wheel glides
    // sideways with the same inertia the rest of the site scrolls with
    useEffect(() => {
        const el = scrollerRef.current;
        const track = trackRef.current;
        if (!el || !track)
            return;

        const lenis = new Lenis({
            wrapper: el,
            content: track,
            orientation: "horizontal",
            gestureOrientation: "both",
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

        const onScroll = () => {
            const max = el.scrollWidth - el.clientWidth;
            gsap.set(barRef.current, { scaleX: max > 0 ? el.scrollLeft / max : 1 });
        };

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            else if (e.key === "ArrowRight") lenis.scrollTo(lenis.targetScroll + window.innerWidth * 0.6, { duration: 0.8 });
            else if (e.key === "ArrowLeft") lenis.scrollTo(lenis.targetScroll - window.innerWidth * 0.6, { duration: 0.8 });
        };

        // drag to pan, the way a contact sheet slides under the hand (mouse only —
        // touch is already handled by Lenis). No pointer capture: the links inside
        // the track have to keep their clicks
        let startX = 0, startLeft = 0, dragging = false;

        const onDown = (e: PointerEvent) => {
            if (e.pointerType !== "mouse" || e.button !== 0)
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
    }, [close]);



    return (
        <div
            ref={rootRef}
            aria-label={name}
            className="fixed inset-0 z-120 text-white opacity-0"
        >
            <div ref={bgRef} className="absolute inset-0 bg-foreground">
                <Backdrop />
            </div>

            <div
                ref={scrollerRef}
                className="absolute inset-0 cursor-grab overflow-x-auto overflow-y-hidden overscroll-contain active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                <Track ref={trackRef} sections={sections} scrollerRef={scrollerRef} onClose={close} />
            </div>

            <Chrome name={name} index={index} total={total} backLabel={backLabel} barRef={barRef} onBack={close} />
        </div>
    );
}
