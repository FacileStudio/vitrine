import type { Ref } from "react";
import projects from "../projects.json";
import studio from "../../studio/studio.json";

export interface Project {
    slug: string;
    name: string;
    tier: number;
    weeks: number;
    link?: string;
    image: string;
    video?: string;
    gallery: string[];
    description: string;
    techStack?: string[];
    date: string;
    challenge?: string;
    services: string[];
    team: string[];
    notes: string[];
    story?: StorySection[];
}

export type Member = (typeof studio)[number];

export const allProjects = projects as Project[];

// the single source of truth for the bento vocabulary: how many media each part
// eats and how many columns it spans by default. A backoffice can read this to
// know what a block needs before it lets an editor drop one in the track.
export const BLOCK_SPECS = {
    cover: { media: 1, cols: 3 },
    intro: { media: 0, cols: 2 },
    note: { media: 1, cols: 2 },
    col: { media: 3, cols: 1 },
    big: { media: 3, cols: 2 },
    mosaic: { media: 5, cols: 3 },
    full: { media: 1, cols: 2 },
    end: { media: 0, cols: 2 },
} as const;

export type BlockKind = keyof typeof BLOCK_SPECS;

// what projects.json (and later the backoffice) stores. Media entries are either
// an index into the project gallery or a raw src, so reordering a story never
// has to touch the asset list
export interface StoryBlock {
    type: BlockKind;
    media?: (string | number)[];
    title?: string;
    text?: string;
    smalls?: "top" | "bottom";
    cols?: number;
}

// a story is a list of chapters, each holding its own blocks. The track breathes
// between chapters, so the break is spacing rather than a block of its own — and
// a backoffice gets a unit it can name, fold and drag as a whole
export interface StorySection {
    title?: string;
    blocks: StoryBlock[];
}

// what the grid renders: same block, media resolved, geometry filled in and the
// chapter number stamped on (0 when the chapter carries no title)
export interface Block extends StoryBlock {
    media: string[];
    cols: number;
    index: number;
}

export interface PartProps {
    block: Block;
    project: Project;
    imgRef?: Ref<HTMLDivElement>;
    ref?: Ref<HTMLDivElement>;
}

export const isVideoFile = (src: string) => /\.(mp4|webm|ogg|mov)$/i.test(src);

export const team = (p: Project): Member[] =>
    p.team
        .map((slug) => studio.find((m) => m.slug === slug))
        .filter((m): m is Member => m != null);

const resolveMedia = (p: Project, refs: (string | number)[] = []) =>
    refs
        .map((r) => (typeof r === "number" ? p.gallery[r] : r))
        .filter((src): src is string => Boolean(src));

// a story is authored data, so it is validated rather than trusted: an unknown
// kind or a block starved of media is dropped instead of breaking the track, and
// a chapter left empty by that never opens a hole in the spacing
export function buildStory(p: Project): Block[][] {
    const story = p.story?.length ? p.story : autoStory(p);

    // numbered here rather than in the json, so reordering chapters in a
    // backoffice renumbers them for free
    let chapter = 0;

    return story
        .map((section) => {
            const index = section.title ? ++chapter : 0;

            return section.blocks.flatMap<Block>((b) => {
                const spec = BLOCK_SPECS[b.type];
                if (!spec)
                    return [];

                const media = resolveMedia(p, b.media);
                if (b.type === "cover" && !media.length)
                    media.push(p.image);
                if (media.length < spec.media)
                    return [];

                return [{
                    ...b,
                    media,
                    index,
                    cols: b.cols ?? spec.cols,
                }];
            });
        })
        .filter((blocks) => blocks.length);
}

// fallback for a project that has no story yet — one chapter per service, then a
// closing chapter with whatever media is left, laid out largest-first
function autoStory(p: Project): StorySection[] {
    const pool = [...new Set([p.video, ...p.gallery].filter(Boolean) as string[])];
    const take = (n: number) => pool.splice(0, n);

    const story: StorySection[] = [{ blocks: [{ type: "cover" }, { type: "intro" }] }];

    p.services.forEach((service, i) => {
        if (pool.length < 4)
            return;

        story.push({
            title: service,
            blocks: [
                { type: "note", title: service, text: p.notes[i] ?? p.description, media: take(1) },
                { type: "col", media: take(3) },
            ],
        });
    });

    const closing: StoryBlock[] = [];

    while (pool.length) {
        if (pool.length >= 5) closing.push({ type: "mosaic", media: take(5) });
        else if (pool.length >= 3) closing.push({ type: "col", media: take(3) });
        else closing.push({ type: "full", media: take(1) });
    }

    closing.push({ type: "end" });
    story.push({ blocks: closing });

    return story;
}
