'use client'

import gsap from "gsap";
import { useRef, useState, useLayoutEffect, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { usePinProgress } from "@/hooks/use-pin-progress";
import { EASE, run, slideY, hideRevealY } from "@/app/utils/animations";
import { ARRIVE, TransitionOut } from "@/components/facile/pageTransition";
import { projectsIn, type Category } from "../../lib/projects";
import ShelfBackdrop from "@/components/facile/shelfBackdrop";
import Heading from "./heading";
import ShelfCard, { type ShelfCardRefs } from "./shelfCard";

const DEFAULT_LINES = ["A curated selection of", "our latest and best work."];

interface ShelfProps {
    lines?: string[];
    // the home page shows the newest handful and no filter; /projects shows the lot
    limit?: number;
    filterable?: boolean;
    stickyBackdrop?: boolean;
}

// the vertical shelf of project cards: the whole of /projects, and the projects
// section of the home page. Opening a card is a route change to /projects/<slug>,
// so a story is a place you can link to, bookmark and land on cold — not a state
// this component holds
export default function Shelf({
    lines = DEFAULT_LINES,
    limit,
    filterable = true,
    stickyBackdrop = false,
}: ShelfProps = {}) {
    const sectionRef = useRef<HTMLElement>(null);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
    const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [filter, setFilter] = useState<Category | null>(null);

    const router = useRouter();
    const locale = useLocale();

    const pool = projectsIn(filter);
    const visible = limit ? pool.slice(0, limit) : pool;

    // callback-ref setters: the refs are owned here, so the children just receive
    // a per-index setter instead of writing into a ref object passed as a prop
    const refs: ShelfCardRefs = {
        card: (i) => (el) => { cardRefs.current[i] = el; },
        entry: (i) => (el) => { entryRefs.current[i] = el; },
        img: (i) => (el) => { imgRefs.current[i] = el; },
        content: (i) => (el) => { contentRefs.current[i] = el; },
    };

    const cards = () => cardRefs.current.filter((el): el is HTMLDivElement => el != null);

    const mounted = useRef(0);

    // every ref array is indexed against the rendered list, so a filter change
    // drops them all and the remounted cards fill them back in
    const applyFilter = (c: Category | null) => {
        if (c === filter)
            return;

        cardRefs.current = [];
        entryRefs.current = [];
        imgRefs.current = [];
        contentRefs.current = [];
        setFilter(c);
    };


    // reveal each project's text + logos while its card sits in the centre band,
    // then hide it again as the card crosses out (media excluded). On arrival the
    // whole cascade waits behind the curtain, later ones fire straight away
    useLayoutEffect(() => {
        const targets = (el: Element) => Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));
        if (!mounted.current) mounted.current = performance.now();
        const wait = () => Math.max(0, ARRIVE - (performance.now() - mounted.current)) / 1000;

        // the cover images only ever move in y under the parallax, so their zoom is
        // set once here instead of being rewritten every frame
        gsap.set(imgRefs.current.filter(Boolean), { scale: 1.3 });

        contentRefs.current.forEach((el) => el && hideRevealY(targets(el)));
        gsap.fromTo(cards(), { opacity: 0 }, { opacity: 1, duration: 0.5, stagger: 0.06, delay: wait(), ease: EASE.out });

        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    run(targets(e.target), slideY(true, false, { stagger: 0.08, duration: 0.6, delay: wait() }));
                } else {
                    run(targets(e.target), slideY(false, true, { stagger: 0.04, duration: 0.4 }));
                }
            });
        }, { threshold: 0, rootMargin: "-40% 0px -40% 0px" });

        contentRefs.current.forEach((el) => el && io.observe(el));
        return () => io.disconnect();
    }, [filter]);



    usePinProgress(sectionRef, (_p, visible) => {
        if (!visible)
            return;

        const vh = window.innerHeight;
        imgRefs.current.forEach((el) => {
            const card = el?.parentElement;
            if (!el || !card)
                return;

            const r = card.getBoundingClientRect();
            const progress = gsap.utils.clamp(0, 1, (vh - r.top) / (vh + r.height));

            gsap.set(el, { yPercent: gsap.utils.mapRange(0, 1, -25, 25, progress) });
        });
    });



    // hover: wipe the centered media (video or image) open from the bottom up, then close it back down
    const onEnter = (e: MouseEvent<HTMLElement>) => {
        const m = e.currentTarget.querySelector<HTMLElement>("[data-media]");
        if (!m)
            return;

        if (m instanceof HTMLVideoElement) {
            m.currentTime = 0;
            m.play().catch(() => {});
        }
        gsap.to(m, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.55,
            ease: "power3.out",
            overwrite: "auto"
        });
    };

    const onLeave = (e: MouseEvent<HTMLElement>) => {
        const m = e.currentTarget.querySelector<HTMLElement>("[data-media]");
        if (!m)
            return;

        gsap.to(m, {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 0.4,
            ease: "power3.in",
            overwrite: "auto",
            onComplete: () => { if (m instanceof HTMLVideoElement) m.pause(); }
        });
    };



    // the story is a route of its own, so the curtain covers the shelf, the push
    // happens underneath it and the arriving page lifts it — the same wave the
    // Menu drops, and nothing has to be flown from the card into the story
    const open = (slug: string) => TransitionOut({ href: `/${locale}/projects/${slug}`, router });


    return (
        <section
            ref={sectionRef}
            id="projects"
            className="w-full relative h-full"
        >
            <div className="absolute inset-0 bg-foreground -z-10" aria-hidden="true" />

            <ShelfBackdrop tone="dark" sticky={stickyBackdrop} />

            <div className="w-full h-full pt-[20vh] flex flex-col gap-1 justify-start items-center px-6">
                <Heading
                    lines={lines}
                    filter={filter}
                    count={visible.length}
                    onFilter={filterable ? applyFilter : undefined}
                />

                {visible.map((p, i) => (
                    <ShelfCard
                        key={`${filter ?? "all"}-${p.slug}`}
                        project={p}
                        index={i}
                        refs={refs}
                        onOpen={open}
                        onEnter={onEnter}
                        onLeave={onLeave}
                    />
                ))}
            </div>
        </section>
    );
}
