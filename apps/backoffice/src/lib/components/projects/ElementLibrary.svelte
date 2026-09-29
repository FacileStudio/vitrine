<script lang="ts">
	import { ELEMENTS } from './elements';
	import { endDrag, startDrag } from './drag.svelte';
	import { enter } from '$lib/motion';

	let { onadd }: { onadd?: (kind: string, w: number, h: number) => void } = $props();

	// these can be sized before they exist, the others use their default size
	const SIZED = ['image', 'video', 'note', 'text'];
	const SIZES = [1, 2, 3];

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

<aside class="bg-stone-700/10 rounded-md p-3 space-y-1">
	<div class="px-2 pt-1 pb-2">
		<p class="lead text-white">Insérer</p>
	</div>

	{#each ELEMENTS as element (element.kind)}
		{@const sized = SIZED.includes(element.kind)}
		<div class="rounded-md {open === element.kind ? 'bg-white/[0.03]' : ''}">
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
				class="group flex items-center gap-3 p-2 rounded-md cursor-grab hover:bg-white/[0.04]"
			>
				<span class="size-9 shrink-0 rounded-md bg-stone-700/20 flex items-center justify-center text-white/58 group-hover:text-white">
					<iconify-icon icon={element.icon} width="18"></iconify-icon>
				</span>
				<span class="flex-1 min-w-0">
					<span class="block p text-white/90">{element.label}</span>
				</span>
				<iconify-icon
					icon={sized ? 'lucide:chevron-down' : 'lucide:plus'}
					width="14"
					class="text-white/30 group-hover:text-white/70 {open === element.kind ? 'rotate-180' : ''}"
				></iconify-icon>
			</div>

			{#if open === element.kind}
				<!-- a table-insert picker: hovering a cell previews that many columns and rows -->
				<div use:enter class="px-2 pb-3 pt-1 space-y-2">
					<div class="grid grid-cols-3 gap-1 w-max" role="grid" tabindex="-1" onmouseleave={() => (hover = null)}>
						{#each SIZES as rows (rows)}
							{#each SIZES as cols (cols)}
								{@const lit = hover !== null && cols <= hover.w && rows <= hover.h}
								<button
									type="button"
									aria-label="{cols} colonnes × {rows} lignes"
									onmouseenter={() => (hover = { w: cols, h: rows })}
									onfocus={() => (hover = { w: cols, h: rows })}
									onclick={() => pick(element.kind, cols, rows)}
									class="w-10 h-8 rounded-sm {lit ? 'bg-white' : 'bg-stone-700/25'}"
								></button>
							{/each}
						{/each}
					</div>
					<p class="subtext text-white/58">
						{hover ? `${hover.w} colonne${hover.w > 1 ? 's' : ''} × ${hover.h} ligne${hover.h > 1 ? 's' : ''}` : 'Survolez pour choisir la taille'}
					</p>
				</div>
			{/if}
		</div>
	{/each}
</aside>
