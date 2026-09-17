'use client'

import type { Ref, RefObject } from "react";
import { Bento } from "./bento";
import { BLOCKS } from "./blocks";
import PersonHead from "./head";
import { useTrackReveal } from "./track";
import type { Chapter } from "./types";

interface VerticalTrackProps {
    sections: Chapter[];
    scrollerRef: RefObject<HTMLElement | null>;
    onClose?: () => void;
    ref?: Ref<HTMLDivElement>;
}

export default function VerticalTrack({ sections, scrollerRef, onClose, ref }: VerticalTrackProps) {
    useTrackReveal(scrollerRef, sections, "-18% 0px -18% 0px");

    return (
        <div ref={ref} className="flex w-full flex-col gap-32 px-3 pt-[14vh] pb-[20vh]">
            {sections.map((chapter, s) => (
                <div key={s} className="flex flex-col gap-4">
                    {chapter.owners.length > 0 && (
                        <div className="flex gap-2">
                            {chapter.owners.map((p) => (
                                <PersonHead key={p.name} person={p} className="h-[10vh] w-[10vh]" />
                            ))}
                        </div>
                    )}

                    <Bento vertical>
                        {chapter.blocks.map((b, i) => {
                            const Part = BLOCKS[b.type];

                            return <Part key={i} block={b} onClose={onClose} />;
                        })}
                    </Bento>
                </div>
            ))}
        </div>
    );
}
