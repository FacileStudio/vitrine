'use client'

import TextReveal from "@/components/facile/textReveal";
import ShelfHeading from "@/components/facile/shelf/shelfHeading";
import Emphasis from "@/components/facile/emphasis";

interface HeadingProps {
    eyebrow: string;
    lines: string[];
    open: boolean;
    delay?: number;
    count?: number;
    countLabel?: string;
    as?: "h1" | "h2";
}

export default function Heading({ eyebrow, lines, open, delay = 0, count, countLabel, as: Title = "h2" }: HeadingProps) {
    return (
        <ShelfHeading
            tone="light"
            className="relative z-10 3xl:w-[70vw] w-full lg:w-[80vw] pb-[12vh] flex items-start justify-between gap-12 text-foreground"
            counterClassName="flex justify-end gap-3 w-full text-right tabular-nums"
            count={count}
            countLabel={countLabel}
            title={
                <div className="text-start">
                    <TextReveal
                        open={open}
                        duration={0.8}
                        delay={delay}
                        cropClassName="mb-6"
                        as="p"
                        className="text-foreground/40"
                    >
                        {eyebrow}
                    </TextReveal>

                    <Title>
                        {lines.map((line, i) => (
                            <TextReveal key={i} open={open} duration={0.8} delay={delay + (i + 1) * 0.12}>
                                <Emphasis text={line} />
                            </TextReveal>
                        ))}
                    </Title>
                </div>
            }
        />
    );
}
