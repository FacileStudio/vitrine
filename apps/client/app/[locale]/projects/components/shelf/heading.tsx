'use client'

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import TextReveal from "@/components/facile/textReveal";
import SplitLines from "@/components/facile/splitLines";
import ShelfHeading from "@/components/facile/shelf/shelfHeading";
import { ARRIVE } from "@/components/facile/pageTransition";
import { run, slideY } from "@/lib/animations";
import { useNarrow } from "@/hooks/use-narrow";
import { categories, type Category } from "@/lib/content/projects";

interface HeadingProps {
    lines: string[];
    filter?: Category | null;
    count?: number;
    onFilter?: (c: Category | null) => void;
}

export default function Heading({ lines, filter = null, count = 0, onFilter }: HeadingProps) {
    const t = useTranslations("projects");
    const arrive = ARRIVE / 1000;
    const narrow = useNarrow();
    const title = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!narrow || !title.current) return;
        const parked = Array.from(title.current.querySelectorAll<HTMLElement>("[data-reveal]"));
        run(parked, slideY(true, false, { stagger: 0.12, duration: 0.8, delay: arrive }));
    }, [narrow, lines, arrive]);

    const entries: { label: string; value: Category | null }[] = [
        { label: t("filterAll"), value: null },
        ...categories.map((c) => ({ label: t(`categories.${c}`), value: c })),
    ];

    return (
        <ShelfHeading
            tone="dark"
            className="relative z-10 3xl:w-[70vw] lg:w-[80vw] w-full pb-[12vh] flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 text-white"
            counterClassName="flex lg:justify-end gap-3 w-full text-start lg:text-right tabular-nums"
            count={onFilter ? count : undefined}
            countLabel={t("projectCount", { count })}
            asideLabel={t("filterLabel")}
            title={
                <h2 ref={title} className="text-start">
                    {narrow ? (
                        <SplitLines text={lines.join(" ")} gap="mb-0" />
                    ) : (
                        lines.map((line, i) => (
                            <TextReveal key={i} open duration={0.8} delay={arrive + i * 0.12}>
                                {line}
                            </TextReveal>
                        ))
                    )}
                </h2>
            }
        >
            {onFilter && (
                <ul className="mt-6 flex flex-wrap lg:flex-nowrap overflow-hidden gap-1">
                    {entries.map((e, i) => {
                        const on = filter === e.value;

                        return (
                            <li key={e.value ?? "all"} className="block shrink-0">
                                <TextReveal open delay={arrive + 0.35 + (i + 1) * 0.07}>
                                    <button
                                        type="button"
                                        onClick={() => onFilter(e.value)}
                                        aria-pressed={on}
                                        className={`chip flex w-fit shrink-0 items-center gap-2 whitespace-nowrap font-bb-mono tracking-tight font-medium uppercase transition-colors duration-300 ${on ? "bg-white/15 text-white" : "text-white/60 hover:bg-white/10 hover:text-white"}`}
                                    >
                                        {e.label}
                                    </button>
                                </TextReveal>
                            </li>
                        );
                    })}
                </ul>
            )}
        </ShelfHeading>
    );
}
