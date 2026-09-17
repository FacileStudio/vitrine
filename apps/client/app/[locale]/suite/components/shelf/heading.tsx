'use client'

import { useTranslations } from "next-intl";
import TextReveal from "@/components/facile/textReveal";
import ShelfHeading from "@/components/facile/shelf/shelfHeading";
import { ARRIVE } from "@/components/facile/pageTransition";

interface HeadingProps {
    eyebrow?: string;
    lines: string[];
    count: number;
    onExplain: () => void;
}

export default function Heading({ eyebrow, lines, count, onExplain }: HeadingProps) {
    const t = useTranslations("suite.shelf");
    const arrive = ARRIVE / 1000;

    return (
        <ShelfHeading
            tone="light"
            className="relative z-10 3xl:w-[70vw] w-[80vw] pb-[12vh] flex items-start justify-between gap-12 text-foreground"
            counterClassName="flex justify-end gap-3 w-full text-right tabular-nums"
            count={count}
            countLabel={t("apps", { count })}
            title={
                <div className="text-start">
                    {eyebrow && (
                        <TextReveal
                            open
                            duration={0.8}
                            delay={arrive}
                            cropClassName="mb-6"
                            as="p"
                            className="tracking-[0.2em] text-foreground/40"
                        >
                            {eyebrow}
                        </TextReveal>
                    )}

                    <h2>
                        {lines.map((line, i) => (
                            <TextReveal key={i} open duration={0.8} delay={arrive + (i + 1) * 0.12}>
                                {line}
                            </TextReveal>
                        ))}
                    </h2>
                </div>
            }
        >
            <div className="mt-6 flex justify-end overflow-hidden">
                <TextReveal open delay={arrive + 0.5}>
                    <button
                        type="button"
                        onClick={onExplain}
                        className="group flex w-fit shrink-0 items-center gap-3 whitespace-nowrap rounded-md bg-foreground/10 px-[2vh] py-[1vh] text-[clamp(0.65rem,1.4vh,0.9rem)] text-foreground/60 transition-colors duration-300 hover:bg-foreground/10 hover:text-foreground"
                    >
                        {t("explain")}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                </TextReveal>
            </div>
        </ShelfHeading>
    );
}
