'use client'

import type { MouseEvent } from "react";
import { useTranslations } from "next-intl";
import SplitLines from "@/components/facile/splitLines";
import TextReveal from "@/components/facile/textReveal";
import ArrowLink from "@/components/facile/arrowLink";
import AppMark from "@/components/facile/appMark";
import ShelfRow from "@/components/facile/shelf/shelfRow";
import { pad2 } from "@/lib/utils";
import type { SuiteApp } from "@/lib/content/suite";
import type { ShelfRefs } from "@/hooks/use-shelf-motion";

const wipeClass = "pointer-events-none absolute top-1/2 left-1/2 flex w-4/5 aspect-16/10 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-6 rounded-md bg-accent px-10 text-center will-change-[clip-path] [clip-path:inset(100%_0_0_0)]";

interface AppCardProps {
    app: SuiteApp;
    index: number;
    refs: ShelfRefs;
    onOpen: (app: SuiteApp) => void;
    onEnter: (e: MouseEvent<HTMLElement>) => void;
    onLeave: (e: MouseEvent<HTMLElement>) => void;
}

// One suite app row: its mark on a white plate, name and description beside it
export default function AppCard({ app, index, refs, onOpen, onEnter, onLeave }: AppCardProps) {
    const t = useTranslations("suite");

    return (
        <ShelfRow
            ref={refs.card(index)}
            label={app.name}
            onOpen={() => onOpen(app)}
            onEnter={onEnter}
            onLeave={onLeave}
            className="group/card cursor-pointer 3xl:w-[70vw] w-[80vw] shrink-0 flex items-start justify-between"
        >
            <div className="relative 3xl:w-5xl w-[50vw] aspect-16/10 shrink-0 overflow-hidden rounded-md bg-white ring-1 ring-foreground/5">
                <div ref={refs.media(index)} className="absolute inset-0 flex items-center justify-center will-change-transform">
                    <AppMark
                        icon={app.icon}
                        className="text-[16vh] text-foreground/80 transition-all duration-300 ease-out group-hover/card:opacity-40"
                        fileClassName="h-[1em] w-[1em] text-[16vh] transition-all duration-300 ease-out group-hover/card:opacity-40"
                    />
                </div>

                <div data-media className={wipeClass}>
                    <AppMark icon={app.icon} className="text-[9vh] text-white" fileClassName="h-[1em] w-[1em] text-[9vh]" />
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
                            <ArrowLink
                                href={app.link}
                                isolated
                                arrowClassName="h-full px-[1.5vh] shrink-0 aspect-square  py-[1vh] rounded-md bg-foreground/5"
                                className="group flex w-fit text-xl gap-1   text-foreground transition-colors duration-200 hover:text-accent-ink"
                            >
                                <span className="px-[2vh] py-[1vh] rounded-md bg-foreground/5">
                                    {t("visit")}
                                </span>
                            </ArrowLink>
                        </TextReveal>
                    )}
                </div>

                <TextReveal
                    cropClassName="relative z-10"
                    as="p"
                    className="text-[clamp(0.65rem,1.4vh,0.9rem)] tabular-nums text-foreground/35"
                >
                    {pad2(index + 1)}
                </TextReveal>
            </div>
        </ShelfRow>
    );
}
