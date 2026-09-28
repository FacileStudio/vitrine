import { expect, test } from 'bun:test';
import { fits, moveToBucket, moveToGrid, shownCols, trimmed } from './gridOps';

const layout = () => ({
	cols: 4,
	items: [{ id: 'a', kind: 'image' as const, src: '/a.webp', x: 1, y: 1, w: 2, h: 2 }],
	bucket: [],
});

test('fits refuses overlaps and the grid edges, but not the moved item itself', () => {
	const l = layout();

	expect(fits(l, { x: 3, y: 1, w: 2, h: 3 })).toBe(true);
	expect(fits(l, { x: 2, y: 2, w: 1, h: 1 })).toBe(false);
	expect(fits(l, { x: 4, y: 1, w: 2, h: 1 })).toBe(true);
	expect(fits(l, { x: 5, y: 1, w: 2, h: 1 })).toBe(false);
	expect(fits(l, { x: 1, y: 3, w: 1, h: 2 })).toBe(false);
	expect(fits(l, { x: 2, y: 1, w: 2, h: 2 }, 'a')).toBe(true);
});

test('an item survives a trip to the bucket and back', () => {
	const l = layout();

	moveToBucket(l, 'a');
	expect(l.items).toHaveLength(0);
	expect(l.bucket[0]).toMatchObject({ id: 'a', w: 2, h: 2 });

	moveToGrid(l, 'bucket', 'a', 3, 2);
	expect(l.bucket).toHaveLength(0);
	expect(l.items[0]).toMatchObject({ id: 'a', x: 3, y: 2, src: '/a.webp' });
});

test('the grid keeps 3 spare columns while editing and drops them when saved', () => {
	const l = layout();

	expect(shownCols(l)).toBe(5);

	moveToGrid(l, 'grid', 'a', 4, 1);
	expect(l.cols).toBe(5);
	expect(shownCols(l)).toBe(8);
	expect(trimmed(l).cols).toBe(5);
});
