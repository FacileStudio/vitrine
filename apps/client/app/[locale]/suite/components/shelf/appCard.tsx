'use client'

import type { KeyboardEvent, MouseEvent } from "react";
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
    onOpen: (app: SuiteApp) => void;
    onEnter: (e: MouseEvent<HTMLElement>) => void;
    onLeave: (e: MouseEvent<HTMLElement>) => void;
}

// one app of the suite: its mark on a paper-white plate to the left, its name and
// what it does to the right. The whole row opens the app's story; only the live
// link inside it stops the click from bubbling, so it can go its own way
export default function AppCard({ app, index, refs, onOpen, onEnter, onLeave }: AppCardProps) {
    const t = useTranslations("suite");

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen(app);
        }
    };

    const mark = (className: string) => (
        isLocalIcon(app.icon)
            ? <img src={app.icon} alt="" className={className} />
            : <Icon icon={app.icon} className={className} />
    );

    return (
        <div
            ref={refs.card(index)}
            role="button"
            tabIndex={0}
            aria-label={app.name}
            onClick={() => onOpen(app)}
            onKeyDown={onKeyDown}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="group/card cursor-pointer 3xl:w-[70vw] w-[80vw] shrink-0 flex items-start justify-between"
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
                    <span className="subtitle text-white">
                        {app.tagline}
                    </span>
                </div>
            </div>

            <div ref={refs.content(index)} className="flex flex-col items-end gap-12 max-w-sm text-right py-12">
                <div className="gap-y-6 flex flex-col items-end">
                    <TextReveal as="h2" cropClassName="z-10" className="subtitle text-foreground">
                        {app.name}
                    </TextReveal>

                    <SplitLines
                        as="p"
                        text={app.description}
                        justify
                        className="relative z-10 text-foreground/50"
                    />

                    {app.link && (
                        <TextReveal cropClassName="z-10 mt-2">
                            <a
                                href={app.link}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="group flex w-fit text-xl gap-1   text-foreground transition-colors duration-200 hover:text-accent-ink"
                            >
                                <span className="px-[2vh] py-[1vh] rounded-md bg-foreground/5">
                                    {t("visit")}
                                </span>
                                <span className="h-full px-[1.5vh] shrink-0 aspect-square  py-[1vh] rounded-md bg-foreground/5">
                                    <span className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                                </span>
                            </a>
                        </TextReveal>
                    )}
                </div>

                <TextReveal
                    cropClassName="relative z-10"
                    as="p"
                    className="text-[clamp(0.65rem,1.4vh,0.9rem)] tabular-nums text-foreground/35"
                >
                    {String(index + 1).padStart(2, "0")}
                </TextReveal>
            </div>
        </div>
    );
}
