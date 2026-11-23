'use client'

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import TextReveal from "@/components/facile/textReveal";
import TransitionLink from "@/components/facile/transitionLink";
import HoverFlood from "@/components/facile/hoverFlood";
import { HIDDEN, SHOWN, useHoverCard, type Swap } from "@/hooks/use-hover-card";
import type { MethodStep } from "@/lib/content/method";
import { EASE } from "@/lib/animations";
import { cn, pad2 } from "@/lib/utils";

const MAX_ITEMS = 4;

type Line = "rest" | "more" | "name" | "tag";

const lines = (card: HTMLElement | null, kind: Line) => card?.querySelectorAll(`[data-line="${kind}"]`) ?? [];

// keywords swap for deliverables and the title for its tagline, each rolling through its own crop
const textSwap: Swap = (entering, speed, card) => {
    gsap.to(lines(card, "rest"), {
        yPercent: entering ? -110 : 0,
        duration: 0.45 * speed,
        stagger: 0.04 * speed,
        ease: EASE.glide,
        overwrite: true,
    });
    gsap.to(lines(card, "more"), {
        yPercent: entering ? 0 : 110,
        duration: 0.5 * speed,
        delay: entering ? 0.06 : 0,
        stagger: 0.05 * speed,
        ease: EASE.out,
        overwrite: true,
    });
    gsap.to(lines(card, "name"), {
        yPercent: entering ? -110 : 0,
        duration: 0.45 * speed,
        ease: EASE.glide,
        overwrite: true,
    });
    gsap.to(lines(card, "tag"), {
        yPercent: entering ? 0 : 110,
        duration: 0.5 * speed,
        delay: entering ? 0.06 : 0,
        ease: EASE.out,
        overwrite: true,
    });
};

export default function MethodCard({ step, index, open, className }: { step: MethodStep; index: number; open: boolean; className?: string }) {
    const opened = useRef(false);
    const keywords = step.keywords.split(",").map((k) => k.trim()).filter(Boolean);
    const items = step.items.slice(0, MAX_ITEMS);
    // non-uniform stagger: the first cards follow each other closely, later ones settle in
    const delay = 0.2 + Math.sqrt(index) * 0.12;

    const { card, flood, handlers } = useHoverCard<HTMLAnchorElement>(textSwap);

    useLayoutEffect(() => {
        gsap.set([...lines(card.current, "more"), ...lines(card.current, "tag")], {
            yPercent: 110,
        });
    }, [card]);

    // a clip-path left on the card stops Safari drawing its backdrop blur, so it is cleared once the card stands whole
    useEffect(() => {
        if (!open && !opened.current)
            return;

        opened.current = open;
        gsap.fromTo(card.current, {
            clipPath: open ? HIDDEN : SHOWN,
        }, {
            clipPath: open ? SHOWN : HIDDEN,
            duration: open ? 0.9 : 0.4,
            delay: open ? delay : 0,
            ease: open ? EASE.cover : EASE.in,
            overwrite: "auto",
            clearProps: open ? "clipPath" : undefined,
        });
    }, [open, delay, card]);

    useEffect(() => {
        const el = card.current;

        return () => el?.querySelectorAll("[data-line]").forEach((line) => gsap.killTweensOf(line));
    }, [card]);

    return (
        <TransitionLink
            ref={card}
            href={`/method#${step.slug}`}
            {...handlers}
            style={{ clipPath: HIDDEN }}
            className={cn("glass relative isolate overflow-hidden rounded-fc flex flex-col gap-[3vh] p-[2.5vh] min-h-[32vh] text-foreground [--glass-blur:48px]", className)}
        >
            <HoverFlood ref={flood} className="bg-accent-muted/70" />

            <TextReveal as="p" open={open} delay={delay + 0.2} className="text-current">
                {step.duration}
            </TextReveal>

            <div className="relative flex-1">
                <div className="flex flex-col">
                    {keywords.map((k) => (
                        <span key={k} className="block overflow-hidden">
                            <span data-line="rest" className="subtitle block text-end opacity-50">
                                {k}
                            </span>
                        </span>
                    ))}
                </div>

                <ul className="absolute inset-0 flex flex-col gap-[0.5vh]" aria-hidden="true">
                    {items.map((item) => (
                        <li key={item} className="overflow-hidden">
                            <span data-line="more" className="block">
                                <p>{item}</p>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col">
                <TextReveal open={open} delay={delay + 0.22} className="title tabular-nums">
                    {pad2(index + 1)}
                </TextReveal>

                {/* the title and the tagline share one crop: hover rolls the title out and the tagline in */}
                <div className="grid overflow-hidden">
                    <div data-line="name" className="col-start-1 row-start-1">
                        <TextReveal as="h3" open={open} delay={delay + 0.26} className="subtitle">
                            {step.title}
                        </TextReveal>
                    </div>

                    <p data-line="tag" className="subtext text-current col-start-1 row-start-1 max-w-[40ch]">
                        {step.tagline}
                    </p>
                </div>
            </div>
        </TransitionLink>
    );
}
