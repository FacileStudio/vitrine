'use client'

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "@/components/facile/transitionLink";
import TextReveal from "@/components/facile/textReveal";
import { useInView } from "@/hooks/use-in-view";
import { useScroll } from "@/hooks/use-scroll";
import { useLocalized } from "@/lib/i18n/localize";
import { useMethod } from "@/components/facile/contentProvider";
import Heading from "../method/components/heading";
import MethodCard from "../method/components/methodCard";
import MethodSide from "./methodSide";
import MethodMirror from "./methodMirror";

// six tiles fill a 4-column grid in three rows: one big, one wide pair, three singles, one wide close
const SPANS = [
    "md:col-span-2 lg:col-span-2 lg:row-span-2",
    "lg:col-span-2",
    "",
    "",
    "",
    "md:col-span-2 lg:col-span-3",
];

// "sides": two mirrored views at the screen edges; "mirror": the manifesto backdrop flipped left to right
const BACKDROP: "sides" | "mirror" = "mirror";

export default function Method() {
    const t = useTranslations("method");
    const steps = useLocalized(useMethod());
    const ref = useRef<HTMLElement>(null);
    const open = useInView(ref, 0.6);
    const [arrived, setArrived] = useState(false);

    // like the shelf and story backdrops, the views only arrive once the section reaches the top of the screen
    useScroll(() => setArrived((ref.current?.getBoundingClientRect().top ?? 1) <= 0));

    return (
        <section
            ref={ref}
            id="method"
            className="relative w-full bg-background text-foreground flex flex-col items-center gap-fc px-3 lg:px-6 pt-[10vh] pb-[30vh]"
        >
            {/* the views stay on screen while the cards scroll past, behind the glass so its blur picks them up */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className={`sticky top-0 h-screen w-full transition-opacity duration-800 ease-[cubic-bezier(0.7,0,0.3,1)] ${arrived ? "opacity-100" : "opacity-0"}`}>
                    {BACKDROP === "sides" ? (
                        <>
                            <MethodSide open={arrived} />
                            <MethodSide open={arrived} mirrored />
                        </>
                    ) : (
                        <MethodMirror open={arrived} />
                    )}
                </div>
            </div>

            <Heading eyebrow={t("home.eyebrow")} lines={t.raw("home.lines") as string[]} open={open} />

            <div className="relative z-10 grid w-full lg:w-[80vw] 3xl:w-[70vw] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-fc">
                {steps.map((e, i) => (
                    <MethodCard key={e.slug} step={e} index={i} open={open} className={SPANS[i % SPANS.length]} />
                ))}
            </div>

            <div className="relative z-10 w-full lg:w-[80vw] 3xl:w-[70vw] pt-[6vh]">
                <TextReveal open={open} delay={0.7} cropClassName="w-fit">
                    <Link href="/method" className="button inline-block">
                        <p>{t("home.discover")}</p>
                    </Link>
                </TextReveal>
            </div>
        </section>
    );
}
