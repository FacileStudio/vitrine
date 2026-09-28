<script lang="ts">
	import ItemPreview from './ItemPreview.svelte';
	import { drag, endDrag, startDrag } from './drag.svelte';
	import { ROWS, addToGrid, fits, moveToGrid, shownCols } from './gridOps';
	import { LOCKED_ELEMENTS } from './elements';
	import type { Project } from './types';

	type Layout = Project['story'][number]['layout'];

	let { layout = $bindable(), onedit }: { layout: Layout; onedit?: (id: string) => void } = $props();

	let hover = $state<{ x: number; y: number } | null>(null);

	const locked = (kind: string) => LOCKED_ELEMENTS.some((element) => element.kind === kind);

	const cols = $derived(shownCols(layout));

	const cells = $derived(
		Array.from({ length: cols * ROWS }, (_, i) => ({ col: Math.floor(i / ROWS) + 1, row: (i % ROWS) + 1 }))
	);

	// every "col:row" an item covers, so the empty cell underneath is not drawn through a translucent item
	const covered = $derived(
		new Set(
			layout.items.flatMap((item) =>
				Array.from({ length: item.w * item.h }, (_, i) => `${item.x + (i % item.w)}:${item.y + Math.floor(i / item.w)}`)
			)
		)
	);

	// the dragged element anchored by its top-left corner on the hovered cell
	const preview = $derived(
		drag.current && hover ? { x: hover.x, y: hover.y, w: drag.current.w, h: drag.current.h } : null
	);

	const valid = $derived(
		preview !== null &&
			fits(layout, preview, drag.current && drag.current.from !== 'library' ? drag.current.id : undefined)
	);

	const inPreview = (col: number, row: number) =>
		preview !== null &&
		col >= preview.x &&
		col < preview.x + preview.w &&
		row >= preview.y &&
		row < preview.y + preview.h;

	function drop(col: number, row: number) {
		const current = drag.current;

		if (!current || !valid)
			return;

		if (current.from === 'library')
			addToGrid(layout, current.kind, col, row, current.w, current.h);
		else
			moveToGrid(layout, current.from, current.id, col, row);

		hover = null;
		endDrag();
	}
</script>

<div class="overflow-x-auto">
	<div
		class="grid gap-1 w-max"
		style:grid-template-columns="repeat({cols}, 8rem)"
		style:grid-template-rows="repeat({ROWS}, 6.4rem)"
	>
		{#each cells as { col, row } (`${col}:${row}`)}
			{#if !covered.has(`${col}:${row}`)}
				<div
					class="rounded-sm bg-white/[0.03] flex items-start justify-start p-1.5"
					style:grid-column={col}
					style:grid-row={row}
				>
					<span class="subtext text-white/20">{col}·{row}</span>
				</div>
			{/if}
		{/each}

		{#each layout.items as item (item.id)}
			<!-- svelte-ignore a11y_no_noninteractive_tabindex: the role is a button exactly when the item is focusable, the check cannot read a conditional role -->
			<div
				role={locked(item.kind) ? 'listitem' : 'button'}
				aria-label={locked(item.kind) ? undefined : `Modifier ${item.kind}`}
				draggable={!locked(item.kind)}
				ondragstart={(e) => startDrag(e, { from: 'grid', id: item.id, w: item.w, h: item.h })}
				ondragend={endDrag}
				onclick={() => {
					if (!locked(item.kind))
						onedit?.(item.id);
				}}
				onkeydown={(e) => {
					if (e.key === 'Enter' && !locked(item.kind))
						onedit?.(item.id);
				}}
				tabindex={locked(item.kind) ? -1 : 0}
				class="relative rounded-sm overflow-hidden bg-stone-700/10 {locked(item.kind) ? '' : 'cursor-grab'}"
				style:grid-column="{item.x} / span {item.w}"
				style:grid-row="{item.y} / span {item.h}"
			>
				<ItemPreview {item} />
			</div>
		{/each}

		{#if drag.current}
			<!-- above the items while dragging, so an element can be dropped over its own old spot -->
			{#each cells as { col, row } (`drop-${col}:${row}`)}
				<div
					role="gridcell"
					tabindex="-1"
					class="z-10 rounded-sm {inPreview(col, row) ? (valid ? 'bg-green-500/35' : 'bg-red-500/30') : ''}"
					style:grid-column={col}
					style:grid-row={row}
					ondragover={(e) => {
						hover = { x: col, y: row };
						if (valid)
							e.preventDefault();
					}}
					ondragleave={() => (hover = null)}
					ondrop={(e) => {
						e.preventDefault();
						drop(col, row);
					}}
				></div>
			{/each}
		{/if}
	</div>
</div>
