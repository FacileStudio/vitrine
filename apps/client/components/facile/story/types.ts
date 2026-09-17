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

export type CoverEffect = "marcel" | "projet-zero-pillar";

export interface Swatch {
    label: string;
    hex: string;
    note?: string;
    rgb?: string;
    cmyk?: string;
    hsv?: string;
    textColor?: string;
}

export interface Person {
    name: string;
    role: string;
    avatar: string;
    highlight?: string;
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

export interface StorySection {
    title?: string;
    by?: string | string[];
    blocks: StoryBlock[];
}

export interface Block extends StoryBlock {
    media: string[];
    cols: number;
    index: number;
    owners: Person[];
}

export interface Chapter {
    owners: Person[];
    blocks: Block[];
}

export interface BlockProps {
    block: Block;
    onClose?: () => void;
}

const resolveMedia = (gallery: string[], refs: (string | number)[] = []) =>
    refs
        .map((r) => (typeof r === "number" ? gallery[r] : r))
        .filter((src): src is string => Boolean(src));

export function buildStory(
    sections: StorySection[],
    gallery: string[] = [],
    person: (slug: string) => Person | undefined = () => undefined,
): Chapter[] {
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
