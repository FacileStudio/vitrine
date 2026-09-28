import type { GridItem, ProjectStoryBlock, SectionLayout } from './types';

// default widths from the site's BLOCK_SPECS in apps/client/components/facile/story/types.ts
const BLOCK_COLS: Record<string, number> = {
  cover: 3,
  intro: 2,
  note: 2,
  col: 1,
  tiles: 2,
  typography: 2,
  typographyPair: 2,
  palette: 2,
  big: 2,
  mosaic: 3,
  collage: 3,
  full: 2,
  end: 2,
};

// Omit on a union keeps only the shared keys, this applies it to each member instead
type WithoutId<T> = T extends unknown ? Omit<T, 'id'> : never;

const isVideo = (src: string) => /\.(mp4|webm|mov)(\?|$)/i.test(src);

const resolveMedia = (gallery: string[], refs: (string | number)[] = []) =>
  refs
    .map((ref) => (typeof ref === 'number' ? gallery[ref] : ref))
    .filter((src): src is string => Boolean(src));

export const blockCols = (block: ProjectStoryBlock) => block.cols ?? BLOCK_COLS[block.type] ?? 1;

// each block becomes the items it draws on the site, at the cells its component in story/blocks/ uses
export function blocksToLayout(blocks: ProjectStoryBlock[], gallery: string[]): SectionLayout {
  const items: GridItem[] = [];
  let x = 1;

  blocks.forEach((block, b) => {
    const w = blockCols(block);
    const media = resolveMedia(gallery, block.media);
    let n = 0;

    const id = () => `b${b}-${n++}`;
    const add = (item: WithoutId<GridItem>) => items.push({ id: id(), ...item } as GridItem);
    const mediaAt = (src: string | undefined, col: number, row: number, cw: number, ch: number) => {
      if (src)
        add({ kind: isVideo(src) ? 'video' : 'image', src, x: x + col, y: row, w: cw, h: ch });
    };
    const whole = { x, y: 1, w, h: 3 };

    switch (block.type) {
      case 'cover':
      case 'intro':
      case 'end':
        add({ kind: block.type, ...whole });
        break;

      case 'full':
        mediaAt(media[0], 0, 1, w, 3);
        break;

      case 'note':
        add({ kind: 'note', title: block.title, text: block.text, x, y: 1, w, h: 1 });
        mediaAt(media[0], 0, 2, w, 2);
        break;

      case 'col':
        media.slice(0, 3).forEach((src, i) => mediaAt(src, 0, i + 1, 1, 1));
        break;

      case 'big': {
        // smalls "top" puts the strip on row 1 and the hero on rows 2-3, otherwise the reverse
        const top = block.smalls === 'top';

        mediaAt(media[0], 0, top ? 2 : 1, w, 2);
        media.slice(1, 3).forEach((src, i) => mediaAt(src, i, top ? 1 : 3, 1, 1));
        break;
      }

      case 'mosaic':
        mediaAt(media[0], 0, 1, 2, 1);
        mediaAt(media[1], 2, 1, 1, 1);
        mediaAt(media[2], 0, 2, 1, 1);
        mediaAt(media[3], 0, 3, 1, 1);
        mediaAt(media[4], 1, 2, 2, 2);
        break;

      case 'collage':
        mediaAt(media[0], 0, 1, 2, 1);
        mediaAt(media[1], 2, 1, 1, 1);
        mediaAt(media[2], 0, 2, 1, 2);
        mediaAt(media[3], 1, 2, 2, 2);
        break;

      case 'palette':
        add({ kind: 'palette', swatches: block.swatches ?? [], ...whole });
        break;

      case 'typography':
      case 'typographyPair':
        add({
          kind: 'typography',
          font: block.font,
          fontFamily: block.fontFamily,
          description: block.description,
          secondFont: block.secondFont,
          secondFontFamily: block.secondFontFamily,
          secondDescription: block.secondDescription,
          ...whole,
        });
        break;

      case 'tiles':
        add({ kind: 'tiles', tiles: block.tiles ?? [], ...whole });
        break;
    }

    x += w;
  });

  return { cols: Math.max(1, x - 1), items, bucket: [] };
}
