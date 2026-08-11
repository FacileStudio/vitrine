'use client'

import gsap from "gsap";
import Lenis from "lenis";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { EASE, hideRevealY, run, slideY } from "@/app/utils/animations";
import { ARRIVE, TransitionOut } from "@/components/facile/pageTransition";
import type { Project } from "../../lib/projects";
import { buildStory, type Block } from "../../lib/story";
import { Bento } from "./blocks/Bento";
import { BLOCKS } from "./blocks";
import Chrome from "./chrome";

const DitherView = dynamic(() => import("@/webgl/DitherView").then((m) => m.DitherView), { ssr: false });

interface StoryProps {
    project: Project;
    index: number;
    total: number;
}

// one project's story: a horizontal band of bento chapters that owns the whole
// viewport. It is the /projects/[slug] route, so it can be linked to from
// anywhere — the shelf is one entry point among several, not its owner
export default function Story({ project, index, total }: StoryProps) {
    // dom refs
    const rootRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLSpanElement>(null);

    const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

    const leaving = useRef(false);

    const router = useRouter();
    const locale = useLocale();

    const sections = useMemo(() => buildStory(project), [project]);

    // the refs stay one flat list across chapters: the flip and the stagger only
    // care about the order blocks appear in the track
    const starts = useMemo(
        () => sections.reduce<number[]>((acc, s) => [...acc, acc[acc.length - 1] + s.length], [0]),
        [sections],
    );

    const setBlockRef = (i: number) => (el: HTMLDivElement | null) => { blockRefs.current[i] = el; };

    const blocks = () => blockRefs.current.filter((el): el is HTMLDivElement => el != null);

    const chrome = () => Array.from(rootRef.current?.querySelectorAll<HTMLElement>("[data-chrome]") ?? []);

    // leaving is a route change like any other: the curtain covers the band, the
    // shelf is pushed underneath it and lifts it on arrival
    const back = useCallback(() => {
        if (leaving.current)
            return;

        leaving.current = true;
        TransitionOut({ href: `/${locale}/projects`, router });
    }, [locale, router]);

    const renderBlock = (b: Block, i: number) => {
        const Part = BLOCKS[b.type];

        return <Part key={i} ref={setBlockRef(i)} block={b} project={project} onClose={back} />;
    };



    // open: lock the page behind the band (keeping the scrollbar's width so
    // nothing shifts), then slide the track in once the arriving curtain has
    // cleared most of the viewport
    useLayoutEffect(() => {
        const html = document.documentElement;
        const gap = window.innerWidth - html.clientWidth;
        const prevOverflow = html.style.overflow;
        const prevPad = html.style.paddingRight;

        html.style.setProperty("overflow", "hidden");
        if (gap > 0)
            html.style.setProperty("padding-right", `${gap}px`);

        hideRevealY(chrome());

        const tl = gsap.timeline({ delay: ARRIVE / 1000 });
        tl.set(rootRef.current, { autoAlpha: 1 })
            .fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: EASE.out }, 0)
            .fromTo(blocks(), { xPercent: 14, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 0.9, ease: EASE.out, stagger: 0.07 }, 0.15)
            .add(() => run(chrome(), slideY(true, false, { stagger: 0.06, duration: 0.6 })), 0.35);

        return () => {
            tl.kill();
            html.style.setProperty("overflow", prevOverflow);
            html.style.setProperty("padding-right", prevPad);
        };
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
            if (e.key === "Escape") back();
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
    }, [back]);



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

        // media waits in the wings zoomed in, then settles into its natural
        // framing as the band reaches it, cropped by its own cell the whole way.
        // Nothing is faded out — a block half off screen still has to read
        const stills = Array.from(el.querySelectorAll<HTMLElement>("[data-pop]"));

        gsap.set(stills, { scale: 1.1 });

        const pop = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                const inView = e.isIntersecting;

                gsap.to(e.target, {
                    scale: inView ? 1 : 1.1,
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
            aria-label={project.name}
            className="fixed inset-0 z-120 text-white opacity-0"
        >
            <div ref={bgRef} className="absolute inset-0 bg-[#111]">
                <DitherView
                    className="absolute inset-0 h-full w-full opacity-20"
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

            <Chrome name={project.name} index={index} total={total} barRef={barRef} onBack={back} />
        </div>
    );
}
