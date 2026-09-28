import type { Project } from './types';

type Layout = Project['story'][number]['layout'];
type Item = Layout['items'][number];

export const ROWS = 3;

// empty columns kept after the last filled one, a free 3x3 area for the next blocks
export const SPARE_COLS = 3;

const localized = () => ({ en: '', fr: '', es: '', de: '' });

// the right edge of the rightmost item, 0 for an empty grid
export const lastUsedCol = (layout: Layout) => Math.max(0, ...layout.items.map((item) => item.x + item.w - 1));

export const shownCols = (layout: Layout) => Math.max(layout.cols, lastUsedCol(layout) + SPARE_COLS);

// a box fits when it stays inside the shown grid and covers no cell of another item, the moved item itself excluded
export function fits(layout: Layout, box: { x: number; y: number; w: number; h: number }, ignoreId?: string) {
	if (box.x < 1 || box.y < 1 || box.x + box.w - 1 > shownCols(layout) || box.y + box.h - 1 > ROWS)
		return false;

	return layout.items.every(
		(item) =>
			item.id === ignoreId ||
			box.x + box.w <= item.x ||
			item.x + item.w <= box.x ||
			box.y + box.h <= item.y ||
			item.y + item.h <= box.y
	);
}

const take = (list: Item[], id: string) => {
	const index = list.findIndex((item) => item.id === id);

	return index === -1 ? undefined : list.splice(index, 1)[0];
};

export function moveToGrid(layout: Layout, from: 'grid' | 'bucket', id: string, x: number, y: number) {
	const item = take(from === 'grid' ? layout.items : layout.bucket, id);

	if (item) {
		layout.items.push({ ...item, x, y });
		layout.cols = Math.max(layout.cols, x + item.w - 1);
	}
}

export function moveToBucket(layout: Layout, id: string) {
	const item = take(layout.items, id);

	if (item)
		layout.bucket.push({ ...item, x: 0, y: 0 });
}

// a fresh element of that kind, empty until its dialog fills it
function newItem(kind: string, x: number, y: number, w: number, h: number) {
	const content: Record<string, unknown> = {
		image: { src: '' },
		video: { src: '' },
		note: { title: localized(), text: localized() },
		text: { text: localized() },
		palette: { swatches: [] },
		typography: {},
		tiles: { tiles: [] },
	};

	return { id: crypto.randomUUID(), x, y, w, h, kind, ...(content[kind] as object) } as Item;
}

export function addToGrid(layout: Layout, kind: string, x: number, y: number, w: number, h: number) {
	layout.items.push(newItem(kind, x, y, w, h));
	layout.cols = Math.max(layout.cols, x + w - 1);
}

export function addToBucket(layout: Layout, kind: string, w: number, h: number) {
	layout.bucket.push(newItem(kind, 0, 0, w, h));
}

export function removeItem(layout: Layout, id: string) {
	take(layout.items, id) ?? take(layout.bucket, id);
}

// optional multilingual fields may be missing, the dialog's inputs need an object to bind to
export function fillTexts(item: Item) {
	const texts: Record<string, string[]> = {
		note: ['title', 'text'],
		text: ['text'],
		typography: ['description', 'secondDescription'],
	};
	const record = item as Record<string, unknown>;

	for (const key of texts[item.kind] ?? [])
		record[key] ??= localized();
}

// the spare columns are for editing only, the site would render them as empty space after the section
export const trimmed = (layout: Layout): Layout => ({ ...layout, cols: Math.max(1, lastUsedCol(layout)) });
