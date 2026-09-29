<script lang="ts">
	import ItemPreview from './ItemPreview.svelte';
	import { drag, endDrag, startDrag } from './drag.svelte';
	import { ROWS, addToGrid, fits, moveToGrid, shownCols } from './gridOps';
	import { LOCKED_ELEMENTS, elementOf } from './elements';
	import type { Project } from '../types';

	type Layout = Project['story'][number]['layout'];
	type Bucket = Project['bucket'];

	let {
		layout = $bindable(),
		bucket,
		onedit,
	}: { layout: Layout; bucket: Bucket; onedit?: (id: string) => void } = $props();

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
			moveToGrid(layout, bucket, current.from, current.id, col, row);

		hover = null;
		endDrag();
	}
</script>

<section class="bg-raised rounded-project overflow-hidden">
	<header class="flex items-center justify-between gap-4 px-5 py-5">
		<span class="flex items-center gap-2">
			<iconify-icon icon="lucide:layout-dashboard" width="16" class="text-faint"></iconify-icon>
			<span class="lead text-ink">Grid</span>
		</span>

	</header>

	<div
		class="overflow-x-auto p-5 pt-3"
	>
	<div class="grid gap-1 w-max mb-1" style:grid-template-columns="repeat({cols}, 12rem)">
		{#each Array.from({ length: cols }, (_, i) => i + 1) as col (col)}
			<span class="subtext text-center {col > layout.cols ? 'text-ink/15' : 'text-ink/35'}">{col}</span>
		{/each}
	</div>

	<div
		class="grid gap-1 w-max"
		style:grid-template-columns="repeat({cols}, 12rem)"
		style:grid-template-rows="repeat({ROWS}, 9.6rem)"
	>
		{#each cells as { col, row } (`${col}:${row}`)}
			{#if !covered.has(`${col}:${row}`)}
				<div
					class="rounded-project backdrop-blur-2xl {col > layout.cols ? 'bg-ink/[0.015]' : 'bg-surface-hover'}"
					style:grid-column={col}
					style:grid-row={row}
				></div>
			{/if}
		{/each}

		{#each layout.items as item (item.id)}
			<!-- svelte-ignore a11y_no_noninteractive_tabindex: the role is a button exactly when the item is focusable, the check cannot read a conditional role -->
			<div
				role={locked(item.kind) ? 'listitem' : 'button'}
				aria-label={locked(item.kind) ? undefined : `Edit ${item.kind}`}
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
				class="group relative rounded-project overflow-hidden bg-raised {locked(item.kind) ? '' : 'cursor-grab'}"
				style:grid-column="{item.x} / span {item.w}"
				style:grid-row="{item.y} / span {item.h}"
			>
				<ItemPreview {item} />
				{#if !locked(item.kind)}
					<span class="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 flex flex-col justify-between p-2">
						<span class="flex items-center justify-end">
							<span class="subtext rounded-project bg-black/60 px-1.5 py-1 text-on-media/70">{item.w}×{item.h}</span>
						</span>
						<span class="self-center flex items-center gap-1.5 rounded-project bg-ink text-page px-3 py-1.5 subtext">
							<iconify-icon icon="lucide:pencil" width="12"></iconify-icon>
							Edit
						</span>
						<span></span>
					</span>
				{/if}
			</div>
		{/each}

		{#if drag.current}
			<!-- above the items while dragging, so an element can be dropped over its own old spot -->
			{#each cells as { col, row } (`drop-${col}:${row}`)}
				<div
					role="gridcell"
					tabindex="-1"
					class="z-10 rounded-project {inPreview(col, row) ? (valid ? 'bg-green-500/35' : 'bg-red-500/30') : ''}"
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
</section>
