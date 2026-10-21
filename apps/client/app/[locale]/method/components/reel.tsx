'use client'

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { EASE } from "@/lib/animations";
import { cn } from "@/lib/utils";

// every item shares one crop and sits a whole crop height from its neighbours, so one roll swaps them in a single motion, like the Laura hero
export default function Reel({ items, position, delay = 0, className }: {
    items: ReactNode[];
    position: number;
    delay?: number;
    className?: string;
}) {
    const crop = useRef<HTMLDivElement>(null);
    const at = useRef(position);

    // item i sits (i - position) crop heights below the window: the crop is as tall as the tallest item, so the others clear it entirely
    const offset = (pos: number) => (i: number) => (i - pos) * (crop.current?.offsetHeight ?? 0);

    // a resize changes the crop height, so the parked items are spaced again from where the reel stands
    useLayoutEffect(() => {
        const el = crop.current;

        if (!el)
            return;

        const place = () => gsap.set(el.children, { y: offset(at.current) });
        const ro = new ResizeObserver(place);

        place();
        gsap.set(el, { visibility: "visible" });
        ro.observe(el);

        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        const el = crop.current;

        if (!el || at.current === position)
            return;

        at.current = position;
        gsap.to(el.children, {
            y: offset(position),
            duration: 0.9,
            delay,
            ease: EASE.glide,
            overwrite: true,
        });
    }, [position, delay]);

    useEffect(() => {
        const el = crop.current;

        return () => {
            if (el)
                gsap.killTweensOf(el.children);
        };
    }, []);

    return (
        <div ref={crop} className={cn("invisible grid overflow-hidden", className)}>
            {items.map((item, i) => (
                <div key={i} aria-hidden={i !== position} className="col-start-1 row-start-1">
                    {item}
                </div>
            ))}
        </div>
    );
}
