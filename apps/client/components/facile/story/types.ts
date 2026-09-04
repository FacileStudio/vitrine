// the single source of truth for the bento vocabulary: how many media each block
// eats and how many columns it spans by default. A backoffice can read this to
// know what a block needs before it lets an editor drop one in the track.
export const BLOCK_SPECS = {
    cover: { media: 1, cols: 3 },
    intro: { media: 0, cols: 2 },
    note: { media: 1, cols: 2 },
    col: { media: 3, cols: 1 },
    tiles: { media: 0, cols: 2 },
    typography: { media: 0, cols: 2 },
    typographyPair: { media: 0, cols: 2 },
    palette: { media: 0, cols: 2 },
    big: { media: 3, cols: 2 },
    mosaic: { media: 5, cols: 3 },
    collage: { media: 4, cols: 3 },
    full: { media: 1, cols: 2 },
    end: { media: 0, cols: 2 },
} as const;

export type BlockKind = keyof typeof BLOCK_SPECS;

// a one-off treatment for a cover's media — the googly eyes, the light pillar
export type CoverEffect = "marcel" | "projet-zero-pillar";

// a brand colour. Only the hex is authored: rgb, cmyk and hsv are derived from
// it unless the chart states its own, so the three notations can never drift
export interface Swatch {
    label: string;
    hex: string;
    note?: string;
    rgb?: string;
    cmyk?: string;
    hsv?: string;
    // for a hex that isn't a plain color (a CSS gradient) contrast can't be
    // derived, so the chart states its own readable text color
    textColor?: string;
}

export interface Person {
    name: string;
    role: string;
    avatar: string;
    highlight?: string;
    // the studio head, so a story shows the same dithered model as the studio
    // grid; a person without one falls back to the avatar image
    model?: string;
    scale?: number;
    roughness?: number;
    hair?: string | null;
}

export interface Tile {
    label: string;
    text?: string;
    icon?: string;
}

// what a story is authored as. Media entries are either an index into the
// gallery handed to buildStory or a raw src, so reordering a story never has to
// touch the asset list. Every other field is plain content: a block never reads
// a project or an app, so the same block serves both
export interface StoryBlock {
    type: BlockKind;
    media?: (string | number)[];
    eyebrow?: string;
    title?: string;
    text?: string;
    tags?: string[];
    logos?: string[];
    people?: Person[];
    tiles?: Tile[];
    link?: string;
    linkLabel?: string;
    effect?: CoverEffect;
    smalls?: "top" | "bottom";
    cols?: number;
    font?: string;
    fontFamily?: string;
    description?: string;
    secondFont?: string;
    secondFontFamily?: string;
    secondDescription?: string;
    swatches?: Swatch[];
}

// a story is a list of chapters, each holding its own blocks. The track breathes
// between chapters, so the break is spacing rather than a block of its own — and
// a backoffice gets a unit it can name, fold and drag as a whole
export interface StorySection {
    title?: string;
    /** studio slug, or slugs, of whoever owns the chapter — resolved to People by buildStory */
    by?: string | string[];
    blocks: StoryBlock[];
}

// what the grid renders: same block, media resolved, geometry filled in, and the
// chapter number and owner stamped on (0 when the chapter carries no title, and
// no owner when it credits nobody)
export interface Block extends StoryBlock {
    media: string[];
    cols: number;
    index: number;
    owners: Person[];
}

// a built chapter: the blocks the grid renders, plus whoever the chapter is
// credited to, so the track can sit their heads in front of the bento
export interface Chapter {
    owners: Person[];
    blocks: Block[];
}

// every renderer in story/blocks takes exactly this
export interface BlockProps {
    block: Block;
    onClose?: () => void;
}

const resolveMedia = (gallery: string[], refs: (string | number)[] = []) =>
    refs
        .map((r) => (typeof r === "number" ? gallery[r] : r))
        .filter((src): src is string => Boolean(src));

// a story is authored data, so it is validated rather than trusted: an unknown
// kind or a block starved of media is dropped instead of breaking the track, and
// a chapter left empty by that never opens a hole in the spacing
export function buildStory(
    sections: StorySection[],
    gallery: string[] = [],
    person: (slug: string) => Person | undefined = () => undefined,
): Chapter[] {
    // numbered here rather than in the json, so reordering chapters in a
    // backoffice renumbers them for free
    let chapter = 0;

    return sections
        .map((section) => {
            const index = section.title ? ++chapter : 0;
            const owners = [section.by ?? []].flat()
                .map(person)
                .filter((p): p is Person => Boolean(p));

            const blocks = section.blocks.flatMap<Block>((b) => {
                const spec = BLOCK_SPECS[b.type];
                if (!spec)
                    return [];

                const media = resolveMedia(gallery, b.media);
                if (media.length < spec.media)
                    return [];

                return [{
                    ...b,
                    media,
                    index,
                    owners,
                    cols: b.cols ?? spec.cols,
                }];
            });

            return { owners, blocks };
        })
        .filter((chapter) => chapter.blocks.length);
}
