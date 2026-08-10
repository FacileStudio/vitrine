'use client'

import gsap from "gsap";
import Lenis from "lenis";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { EASE, hideRevealY, run, slideY } from "@/app/utils/animations";
import { buildStory, type Block, type Project } from "../lib/story";
import { Bento } from "./gridParts/bento";
import { PARTS } from "./gridParts";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

export interface DetailOrigin {
    box: HTMLElement | null;
    img: HTMLElement | null;
}

interface ProjectDetailProps {
    project: Project;
    index: number;
    total: number;
    origin: () => DetailOrigin;
    onExit: () => void;
    onClosed: () => void;
}

export default function ProjectDetail({ project, index, total, origin, onExit, onClosed }: ProjectDetailProps) {
    // dom refs
    const rootRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const coverRef = useRef<HTMLDivElement>(null);
    const coverImgRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLSpanElement>(null);

    const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

    const closing = useRef(false);

    // the callbacks are read from a ref so the open/close choreography never has
    // to re-subscribe when the parent re-renders (same idiom as use-scroll)
    const originRef = useRef(origin);
    const onExitRef = useRef(onExit);
    const onClosedRef = useRef(onClosed);

    useEffect(() => {
        originRef.current = origin;
        onExitRef.current = onExit;
        onClosedRef.current = onClosed;
    });

    const sections = useMemo(() => buildStory(project), [project]);

    // the refs stay one flat list across chapters: the flip and the stagger only
    // care about the order blocks appear in the track
    const starts = useMemo(
        () => sections.reduce<number[]>((acc, s) => [...acc, acc[acc.length - 1] + s.length], [0]),
        [sections],
    );

    // block 0 is the cover the list card flips into, so it doubles as the flip target
    const setBlockRef = (i: number) => (el: HTMLDivElement | null) => {
        blockRefs.current[i] = el;
        if (i === 0) coverRef.current = el;
    };

    const rest = () => blockRefs.current.filter((el, i) => el && i > 0) as HTMLElement[];

    const renderBlock = (b: Block, i: number) => {
        const Part = PARTS[b.type];

        return <Part key={i} ref={setBlockRef(i)} block={b} project={project} imgRef={i === 0 ? coverImgRef : undefined} />;
    };

    const chrome = () => Array.from(rootRef.current?.querySelectorAll<HTMLElement>("[data-chrome]") ?? []);



    // open: lock the page behind the overlay (keeping the scrollbar's width so
    // nothing shifts), then flip the list card into the cover block
    useLayoutEffect(() => {
        const html = document.documentElement;
        const gap = window.innerWidth - html.clientWidth;
        const prevOverflow = html.style.overflow;
        const prevPad = html.style.paddingRight;

        html.style.setProperty("overflow", "hidden");
        if (gap > 0)
            html.style.setProperty("padding-right", `${gap}px`);

        hideRevealY(chrome());

        const { box, img } = originRef.current();
        const cover = coverRef.current;
        const coverImg = coverImgRef.current;

        // measure the cover untransformed: React runs this effect twice in dev
        // and a killed timeline leaves the previous flip's transform behind,
        // which would make the card and the cover measure the same box.
        // only the transform goes — clearProps "all" wipes cssText, and with it
        // the inline grid span React put on the block
        if (cover) gsap.set(cover, { clearProps: "transform,opacity" });
        if (coverImg) gsap.set(coverImg, { clearProps: "transform,opacity" });

        const tl = gsap.timeline();
        tl.set(rootRef.current, { autoAlpha: 1 })
            .fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: EASE.out }, 0)
            .fromTo(rest(), { xPercent: 14, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.9, ease: EASE.out, stagger: 0.07 }, 0.3)
            .add(() => run(chrome(), slideY(true, false, { stagger: 0.06, duration: 0.6 })), 0.35);

        if (box && cover) {
            const first = box.getBoundingClientRect();
            const last = cover.getBoundingClientRect();

            gsap.set(cover, {
                x: first.left - last.left,
                y: first.top - last.top,
                scaleX: first.width / last.width,
                scaleY: first.height / last.height,
                transformOrigin: "top left",
            });
            tl.to(cover, { x: 0, y: 0, scaleX: 1, scaleY: 1, duration: 0.95, ease: EASE.inOut }, 0);
        }

        // the card's cover is parallaxed and scaled up by the list — start from
        // exactly that framing so the flip doesn't jump the image
        if (img && coverImg) {
            gsap.set(coverImg, {
                yPercent: Number(gsap.getProperty(img, "yPercent")) || 0,
                scale: Number(gsap.getProperty(img, "scale")) || 1,
            });
            tl.to(coverImg, { yPercent: 0, scale: 1, duration: 0.95, ease: EASE.inOut }, 0);
        }

        return () => {
            tl.kill();
            if (cover) gsap.killTweensOf(cover);
            if (coverImg) gsap.killTweensOf(coverImg);
            html.style.setProperty("overflow", prevOverflow);
            html.style.setProperty("padding-right", prevPad);
        };
    }, []);



    // close: flip back onto the card when it is still the block on screen,
    // otherwise dissolve — flying the cover in from far off-track reads as noise
    const close = useCallback(() => {
        if (closing.current)
            return;

        closing.current = true;
        onExitRef.current();

        const { box, img } = originRef.current();
        const cover = coverRef.current;
        const last = cover?.getBoundingClientRect();
        const flip = box && cover && last && last.right > 0 && last.left < window.innerWidth;

        run(chrome(), slideY(false, true, { stagger: 0.04, duration: 0.4 }));

        const tl = gsap.timeline({ onComplete: () => onClosedRef.current() });
        tl.to(rest(), { xPercent: 10, opacity: 0, duration: 0.5, ease: EASE.in, stagger: 0.04 }, 0);

        if (flip) {
            const first = box.getBoundingClientRect();

            // compose with whatever the cover already carries, so closing mid-open
            // still lands exactly on the card
            const x = Number(gsap.getProperty(cover, "x")) || 0;
            const y = Number(gsap.getProperty(cover, "y")) || 0;
            const sx = Number(gsap.getProperty(cover, "scaleX")) || 1;
            const sy = Number(gsap.getProperty(cover, "scaleY")) || 1;

            tl.to(cover, {
                x: x + (first.left - last.left),
                y: y + (first.top - last.top),
                scaleX: sx * (first.width / last.width),
                scaleY: sy * (first.height / last.height),
                transformOrigin: "top left",
                duration: 0.85,
                ease: EASE.inOut,
                overwrite: true,
            }, 0)
                .to(bgRef.current, { opacity: 0, duration: 0.5, ease: EASE.in }, 0.35);

            // land on the card's own framing, not on the story's
            if (img && coverImgRef.current) {
                tl.to(coverImgRef.current, {
                    yPercent: Number(gsap.getProperty(img, "yPercent")) || 0,
                    scale: Number(gsap.getProperty(img, "scale")) || 1,
                    duration: 0.85,
                    ease: EASE.inOut,
                }, 0);
            }
        } else {
            tl.to([cover, bgRef.current], { opacity: 0, duration: 0.6, ease: EASE.in }, 0);
        }
    }, []);



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



    // only play what is on screen, and reveal a block's copy as it arrives
    useEffect(() => {
        const el = scrollerRef.current;
        if (!el)
            return;

        // the band is cropped in from both edges before anything counts as arrived,
        // so a block plays once it is properly on screen rather than the instant a
        // sliver of it clears the right edge
        const arrival = { root: el, rootMargin: "0px -18% 0px -18%", threshold: 0.2 };

        const media = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                const v = e.target as HTMLVideoElement;
                if (e.isIntersecting) v.play().catch(() => {});
                else v.pause();
            });
        }, { root: el, threshold: 0.2 });
        el.querySelectorAll("video").forEach((v) => media.observe(v));

        // media waits in the wings zoomed in and drained of colour, then settles
        // into its natural framing as the band reaches it. Nothing is faded out —
        // a block half off screen still has to read. The parts that are not media
        // (palette chips) have no crop to hide an overflow and are colour
        // themselves, so those just grow in
        const stills = Array.from(el.querySelectorAll<HTMLElement>("[data-pop]"));
        const zoom = (m: HTMLElement) => m.dataset.pop === "zoom";
        const asleep = (m: HTMLElement) => zoom(m)
            ? { scale: 1.1, filter: "grayscale(1)" }
            : { scale: 0.88 };
        const awake = (m: HTMLElement) => zoom(m)
            ? { scale: 1, filter: "grayscale(0)" }
            : { scale: 1 };

        stills.forEach((m) => gsap.set(m, asleep(m)));

        const pop = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                const inView = e.isIntersecting;
                const m = e.target as HTMLElement;

                gsap.to(m, {
                    ...(inView ? awake(m) : asleep(m)),
                    duration: inView ? 1.1 : 0.45,
                    ease: inView ? EASE.out : EASE.in,
                    overwrite: true,
                });
            });
        }, arrival);
        stills.forEach((m) => pop.observe(m));

        // the copy rides up out of its own crop, so it has to start under it —
        // SplitLines pre-hides the lines it builds, the hand-written ones need it here
        const lines = (b: Element) => Array.from(b.querySelectorAll<HTMLElement>("[data-reveal]"));
        blockRefs.current.forEach((b) => b && hideRevealY(lines(b)));

        const copy = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                run(lines(e.target), slideY(e.isIntersecting, false, { stagger: 0.06, duration: 0.6 }));
            });
        }, arrival);
        blockRefs.current.forEach((b) => b && copy.observe(b));

        return () => { media.disconnect(); pop.disconnect(); copy.disconnect(); };
    }, []);



    return (
        <div
            ref={rootRef}
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
            className="fixed inset-0 z-120 text-white opacity-0"
        >
            <div ref={bgRef} className="absolute inset-0 bg-[#111]">
                <DitherView
                    className="absolute inset-0 h-full w-full opacity-50"
                    file="/models/manifesto.glb"
                    background={null}
                    highlight="#24E27A"
                    grayscaleOnly={false}
                    intensity={1.8}
                    parallax={0.5}
                    gridSize={3}
                    models={[
                        { file: "/models/manifesto.glb", position: [-3.5, -1.5, 0.5] },
                        { file: "/models/manifesto.glb", position: [3.5, 1, 0.5] },
                    ]}
                />
            </div>

            <div
                ref={scrollerRef}
                className="absolute inset-0 cursor-grab overflow-x-auto overflow-y-hidden overscroll-contain active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                <div ref={trackRef} className="flex h-full w-max items-center gap-128 px-[6vw]">
                    {sections.map((blocks, s) => (
                        <Bento key={s}>
                            {blocks.map((b, i) => renderBlock(b, starts[s] + i))}
                        </Bento>
                    ))}
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 md:p-10">
                <div className="flex items-start justify-between gap-8">
                    <span className="block overflow-hidden">
                        <button
                            data-chrome
                            type="button"
                            onClick={close}
                            className="pointer-events-auto block text-sm text-white/50 transition-colors hover:text-white"
                        >
                            ← Back to projects
                        </button>
                    </span>

                    <span className="block overflow-hidden">
                        <span data-chrome className="block text-sm tabular-nums text-white/40">
                            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                        </span>
                    </span>
                </div>

                <div className="flex items-end justify-between gap-8">
                    <span className="block overflow-hidden">
                        <span data-chrome className="block text-xs uppercase tracking-widest text-white/40">
                            {project.name}
                        </span>
                    </span>

                    <span className="block overflow-hidden">
                        <span data-chrome className="flex items-center gap-4">
                            <span className="text-xs uppercase tracking-widest text-white/40">scroll</span>
                            <span className="relative h-px w-32 bg-white/20 md:w-48">
                                <span ref={barRef} className="absolute inset-0 origin-left scale-x-0 bg-[#24E27A]" />
                            </span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}
