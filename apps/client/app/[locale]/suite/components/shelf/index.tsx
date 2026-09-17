'use client'

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocalized } from "@/lib/i18n/localize";
import { useShelfMotion } from "@/hooks/use-shelf-motion";
import Story from "@/components/facile/story";
import Shelf from "@/components/facile/shelf/shelf";
import { authoredApps, type SuiteApp } from "@/lib/content/suite";
import { appStory } from "../../lib/story";
import Heading from "./heading";
import AppCard from "./appCard";
import ArchitectureModal from "../architectureModal";

interface ShelfProps {
    eyebrow?: string;
    lines: string[];
    limit?: number;
    stickyBackdrop?: boolean;
}

export default function SuiteShelf({
    eyebrow,
    lines,
    limit,
    stickyBackdrop = false,
}: ShelfProps) {
    const tStory = useTranslations("suite.story");
    const tShelf = useTranslations("suite.shelf");
    const allApps = useLocalized(authoredApps);
    const { sectionRef, refs, onEnter, onLeave } = useShelfMotion({ zoom: 1.1, range: 8 });

    const [explain, setExplain] = useState(false);
    const [open, setOpen] = useState<SuiteApp | null>(null);

    const visible = limit ? allApps.slice(0, limit) : allApps;

    return (
        <Shelf
            ref={sectionRef}
            id="suite-shelf"
            tone="light"
            stickyBackdrop={stickyBackdrop}
            columnClassName="w-full h-full pt-[20vh] flex flex-col gap-1 justify-start items-center px-6"
            after={
                <>
                    <ArchitectureModal open={explain} setOpen={setExplain} />

                    {open ? (
                        <Story
                            key={open.slug}
                            sections={appStory(open, allApps, tStory)}
                            name={open.name}
                            index={visible.indexOf(open)}
                            total={visible.length}
                            backLabel={tShelf("back")}
                            onClose={() => setOpen(null)}
                        />
                    ) : null}
                </>
            }
        >
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
        </Shelf>
    );
}
