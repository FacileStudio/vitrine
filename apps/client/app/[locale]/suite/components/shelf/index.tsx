'use client'

import gsap from "gsap";
import { useRef, useState, useLayoutEffect, type MouseEvent } from "react";
import { usePinProgress } from "@/hooks/use-pin-progress";
import { EASE, run, slideY, hideRevealY } from "@/app/utils/animations";
import { ARRIVE } from "@/components/facile/pageTransition";
import Story from "@/components/facile/story";
import { allApps, type SuiteApp } from "../../lib/apps";
import { appStory } from "../../lib/story";
import Backdrop from "./backdrop";
import Heading from "./heading";
import AppCard, { type AppCardRefs } from "./appCard";
import ArchitectureModal from "../architectureModal";

const DEFAULT_LINES = ["Tools we build for ourselves,", "and run for you."];

interface ShelfProps {
    eyebrow?: string;
    lines?: string[];
    limit?: number;
    stickyBackdrop?: boolean;
}

// the suite's shelf: the projects shelf on paper. Same column, same centre-band
// reveal, same parallax — what changes is that an app has no route of its own, so
// a row opens its story over the shelf instead of navigating to it
export default function Shelf({
    eyebrow,
    lines = DEFAULT_LINES,
    limit,
    stickyBackdrop = false,
}: ShelfProps = {}) {
    const sectionRef = useRef<HTMLElement>(null);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
    const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [explain, setExplain] = useState(false);
    const [open, setOpen] = useState<SuiteApp | null>(null);

    const visible = limit ? allApps.slice(0, limit) : allApps;

    const refs: AppCardRefs = {
        card: (i) => (el) => { cardRefs.current[i] = el; },
        entry: (i) => (el) => { entryRefs.current[i] = el; },
        icon: (i) => (el) => { iconRefs.current[i] = el; },
        content: (i) => (el) => { contentRefs.current[i] = el; },
    };

    const cards = () => cardRefs.current.filter((el): el is HTMLDivElement => el != null);

    const mounted = useRef(0);


    // reveal each app's copy while its row sits in the centre band, then hide it
    // again on the way out. On arrival the cascade waits behind the curtain
    useLayoutEffect(() => {
        const targets = (el: Element) => Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));
        if (!mounted.current) mounted.current = performance.now();
        const wait = () => Math.max(0, ARRIVE - (performance.now() - mounted.current)) / 1000;

        gsap.set(iconRefs.current.filter(Boolean), { scale: 1.1 });

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
    }, []);



    usePinProgress(sectionRef, (_p, inView) => {
        if (!inView)
            return;

        const vh = window.innerHeight;
        iconRefs.current.forEach((el) => {
            const plate = el?.parentElement;
            if (!el || !plate)
                return;

            const r = plate.getBoundingClientRect();
            const progress = gsap.utils.clamp(0, 1, (vh - r.top) / (vh + r.height));

            gsap.set(el, { yPercent: gsap.utils.mapRange(0, 1, -8, 8, progress) });
        });
    });



    // hover: the accent plate wipes open from the bottom over the app's mark, and
    // drops back down on the way out — the projects shelf's media wipe, minus the video
    const onEnter = (e: MouseEvent<HTMLElement>) => {
        const m = e.currentTarget.querySelector<HTMLElement>("[data-media]");
        if (!m)
            return;

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
            overwrite: "auto"
        });
    };


    return (
        <section
            ref={sectionRef}
            id="suite-shelf"
            className="w-full relative h-full"
        >
            <div className="absolute inset-0 bg-background -z-10" aria-hidden="true" />

            <Backdrop sticky={stickyBackdrop} />

            <div className="w-full h-full pt-[20vh] flex flex-col gap-1 justify-start items-center px-6">
                <Heading
                    eyebrow={eyebrow}
                    lines={lines}
                    count={visible.length}
                    onExplain={() => setExplain(true)}
                />

                {visible.map((a, i) => (
                    <AppCard
                        key={a.slug}
                        app={a}
                        index={i}
                        refs={refs}
                        onOpen={setOpen}
                        onEnter={onEnter}
                        onLeave={onLeave}
                    />
                ))}
            </div>

            <ArchitectureModal open={explain} setOpen={setExplain} />

            {open ? (
                <Story
                    key={open.slug}
                    sections={appStory(open)}
                    name={open.name}
                    index={visible.indexOf(open)}
                    total={visible.length}
                    backLabel="Back to the suite"
                    onClose={() => setOpen(null)}
                />
            ) : null}
        </section>
    );
}
