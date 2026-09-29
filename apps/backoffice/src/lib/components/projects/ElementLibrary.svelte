<script lang="ts">
	import { ELEMENTS } from './elements';
	import { endDrag, startDrag } from './drag.svelte';
	import { enter } from '$lib/motion';

	let { onadd }: { onadd?: (kind: string, w: number, h: number) => void } = $props();

	// these can be sized before they exist, the others use their default size
	const SIZED = ['image', 'video', 'note', 'text'];
	const ROWS = [1, 2, 3];
	const COLS = [1, 2, 3, 4];

	let open = $state<string | null>(null);
	let hover = $state<{ w: number; h: number } | null>(null);

	function pick(kind: string, w: number, h: number) {
		onadd?.(kind, w, h);
		open = null;
		hover = null;
	}

	function activate(kind: string, w: number, h: number) {
		if (SIZED.includes(kind))
			open = open === kind ? null : kind;
		else
			pick(kind, w, h);
	}
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape')
			open = null;
	}}
/>

<aside class="space-y-1">
	{#each ELEMENTS as element (element.kind)}
		{@const sized = SIZED.includes(element.kind)}
		<div class="rounded-md {open === element.kind ? 'bg-surface-hover' : ''}">
			<div
				role="button"
				tabindex="0"
				aria-expanded={sized ? open === element.kind : undefined}
				draggable="true"
				ondragstart={(e) => {
					open = null;
					startDrag(e, { from: 'library', kind: element.kind, w: element.w, h: element.h });
				}}
				ondragend={endDrag}
				onclick={() => activate(element.kind, element.w, element.h)}
				onkeydown={(e) => {
					if (e.key === 'Enter')
						activate(element.kind, element.w, element.h);
				}}
				class="group flex items-center gap-3 pr-6 rounded-md cursor-grab hover:bg-white/[0.04]"
			>
				<span class="size-16 shrink-0 rounded-md bg-raised-hover flex items-center justify-center text-muted group-hover:text-ink">
					<iconify-icon icon={element.icon} width="18"></iconify-icon>
				</span>
				<span class="flex-1 min-w-0">
					<span class="block p text-white/90">{element.label}</span>
				</span>
				<iconify-icon
					icon={sized ? 'lucide:chevron-down' : 'lucide:plus'}
					width="14"
					class="text-ghost group-hover:text-white/70 {open === element.kind ? 'rotate-180' : ''}"
				></iconify-icon>
			</div>

			{#if open === element.kind}
				<!-- a table-insert picker: hovering a cell previews that many columns and rows -->
				<div use:enter class="px-2 pb-3 pt-1 space-y-2">
					<div class="grid grid-cols-4 gap-1 w-max" role="grid" tabindex="-1" onmouseleave={() => (hover = null)}>
						{#each ROWS as rows (rows)}
							{#each COLS as cols (cols)}
								{@const lit = hover !== null && cols <= hover.w && rows <= hover.h}
								<button
									type="button"
									aria-label="{cols} columns × {rows} rows"
									onmouseenter={() => (hover = { w: cols, h: rows })}
									onfocus={() => (hover = { w: cols, h: rows })}
									onclick={() => pick(element.kind, cols, rows)}
									class="w-10 h-8 rounded-sm {lit ? 'bg-white' : 'bg-stone-700/25'}"
								></button>
							{/each}
						{/each}
					</div>
					<p class="subtext text-muted">
						{hover ? `${hover.w} column${hover.w > 1 ? 's' : ''} × ${hover.h} row${hover.h > 1 ? 's' : ''}` : 'Hover to pick a size'}
					</p>
				</div>
			{/if}
		</div>
	{/each}
</aside>
