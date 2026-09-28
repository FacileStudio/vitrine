<script lang="ts">
	import ItemPreview from './ItemPreview.svelte';
	import { drag, endDrag, startDrag } from './drag.svelte';
	import { moveToBucket, removeItem } from './gridOps';
	import type { Project } from './types';

	type Layout = Project['story'][number]['layout'];

	let { layout = $bindable(), onedit }: { layout: Layout; onedit?: (id: string) => void } = $props();

	let over = $state(false);
	let overTrash = $state(false);

	const accepts = $derived(drag.current?.from === 'grid');

	// anything already in the section can be thrown away, a library chip has nothing to delete yet
	const trashable = $derived(drag.current !== null && drag.current.from !== 'library');
</script>

<div class="space-y-3">
	<div class="flex items-baseline gap-3">
		<span class="lead text-white">Bucket</span>
		<span class="subtext text-white/45">Les éléments sans place attendent ici, rien n'est perdu</span>
	</div>

	<div class="flex gap-1">
	<div
		role="list"
		class="flex-1 min-h-24 rounded-md p-1 flex flex-wrap gap-1 duration-75 transition-border {over && accepts ? 'border border-2 border-stone-700/50' : 'border border-stone-700/20'}"
		ondragover={(e) => {
			if (!accepts)
				return;
			over = true;
			e.preventDefault();
		}}
		ondragleave={() => (over = false)}
		ondrop={(e) => {
			e.preventDefault();
			over = false;
			if (drag.current?.from === 'grid')
				moveToBucket(layout, drag.current.id);
			endDrag();
		}}
	>
		{#each layout.bucket as item (item.id)}
			<div
				role="button"
				aria-label="Modifier {item.kind}"
				draggable="true"
				ondragstart={(e) => startDrag(e, { from: 'bucket', id: item.id, w: item.w, h: item.h })}
				ondragend={endDrag}
				onclick={() => onedit?.(item.id)}
				onkeydown={(e) => {
					if (e.key === 'Enter')
						onedit?.(item.id);
				}}
				tabindex="0"
				class="relative w-32 aspect-[5/4] rounded-sm overflow-hidden bg-white/[0.05] cursor-grab"
			>
				<ItemPreview {item} />
				<span class="absolute bottom-1 right-1 subtext rounded bg-black/60 px-1.5 text-white/80">{item.w}×{item.h}</span>
			</div>
		{:else}
			<span class="m-auto subtext text-white/30">Glissez ici un élément de la grille pour le mettre de côté</span>
		{/each}
	</div>

	<div
		role="region"
		aria-label="Corbeille"
		class="w-28 shrink-0 rounded-md flex flex-col items-center justify-center gap-1 {overTrash && trashable
			? 'bg-red-500/20 text-red-300'
			: 'bg-white/[0.03] text-white/30'}"
		ondragover={(e) => {
			if (!trashable)
				return;
			overTrash = true;
			e.preventDefault();
		}}
		ondragleave={() => (overTrash = false)}
		ondrop={(e) => {
			e.preventDefault();
			overTrash = false;
			if (drag.current && drag.current.from !== 'library')
				removeItem(layout, drag.current.id);
			endDrag();
		}}
	>
		<iconify-icon icon="lucide:trash-2" width="24"></iconify-icon>
		<span class="subtext">Supprimer</span>
	</div>
	</div>
</div>
