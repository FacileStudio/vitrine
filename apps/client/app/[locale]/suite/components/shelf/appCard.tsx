'use client'

import type { MouseEvent } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import SplitLines from "@/components/facile/splitLines";
import TextReveal from "@/components/facile/textReveal";
import { isLocalIcon, type SuiteApp } from "../../lib/apps";

const wipeClass = "pointer-events-none absolute top-1/2 left-1/2 flex w-4/5 aspect-16/10 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-6 rounded-md bg-accent px-10 text-center will-change-[clip-path] [clip-path:inset(100%_0_0_0)]";

export type AppCardRefs = {
    card: (i: number) => (el: HTMLDivElement | null) => void;
    entry: (i: number) => (el: HTMLDivElement | null) => void;
    icon: (i: number) => (el: HTMLDivElement | null) => void;
    content: (i: number) => (el: HTMLDivElement | null) => void;
};

interface AppCardProps {
    app: SuiteApp;
    index: number;
    refs: AppCardRefs;
    onEnter: (e: MouseEvent<HTMLElement>) => void;
    onLeave: (e: MouseEvent<HTMLElement>) => void;
}

// one app of the suite: its mark on a paper-white plate to the left, its name and
// what it does to the right. The suite has no story pages, so the row is not a
// button — the only thing you can click is the live app, when there is one
export default function AppCard({ app, index, refs, onEnter, onLeave }: AppCardProps) {
    const t = useTranslations("suite");

    const mark = (className: string) => (
        isLocalIcon(app.icon)
            ? <img src={app.icon} alt="" className={className} />
            : <Icon icon={app.icon} className={className} />
    );

    return (
        <div
            ref={refs.card(index)}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="group/card 3xl:w-[70vw] w-[80vw] shrink-0 flex items-start justify-between"
        >
            <div
                ref={refs.entry(index)}
                className="relative 3xl:w-5xl w-[50vw] aspect-16/10 shrink-0 overflow-hidden rounded-md bg-white ring-1 ring-foreground/5"
            >
                <div ref={refs.icon(index)} className="absolute inset-0 flex items-center justify-center will-change-transform">
                    {mark("text-[16vh] text-foreground/80 transition-all duration-300 ease-out group-hover/card:opacity-40")}
                </div>

                <div data-media className={wipeClass}>
                    {mark("text-[9vh] text-white")}
                    <span className="text-[clamp(0.9rem,2.1vh,1.5rem)] font-medium leading-snug text-white">
                        {app.tagline}
                    </span>
                </div>
            </div>

            <div ref={refs.content(index)} className="flex flex-col items-end gap-12 max-w-sm text-right py-12">
                <div className="gap-y-6 flex flex-col items-end">
                    <TextReveal cropClassName="z-10" className="text-5xl font-medium text-foreground">
                        {app.name}
                    </TextReveal>

                    <SplitLines
                        text={app.description}
                        justify
                        className="relative z-10 text-md font-medium leading-relaxed text-foreground/50"
                    />

                    {app.link && (
                        <TextReveal cropClassName="z-10 mt-2">
                            <a
                                href={app.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex w-fit text-xl gap-2 rounded-md px-[2vh] py-[1vh] text-foreground transition-colors duration-200 hover:text-accent-ink"
                            >
                                {t("visit")}
                                <span className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                            </a>
                        </TextReveal>
                    )}
                </div>

                <TextReveal
                    cropClassName="relative z-10"
                    className="font-bb-mono text-[clamp(0.65rem,1.4vh,0.9rem)] tabular-nums text-foreground/35"
                >
                    {String(index + 1).padStart(2, "0")}
                </TextReveal>
            </div>
        </div>
    );
}
