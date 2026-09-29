<script lang="ts">
	import ItemPreview from './ItemPreview.svelte';
	import { drag, endDrag, startDrag } from './drag.svelte';
	import { moveToBucket, removeItem } from './gridOps';
	import type { Project } from './types';

	type Layout = Project['story'][number]['layout'];
	type Bucket = Project['bucket'];

	let {
		layout,
		bucket = $bindable(),
		onedit,
	}: { layout: Layout; bucket: Bucket; onedit?: (id: string) => void } = $props();

	let over = $state(false);
	let overTrash = $state(false);

	const accepts = $derived(drag.current?.from === 'grid');

	// anything already in the section can be thrown away, a library chip has nothing to delete yet
	const trashable = $derived(drag.current !== null && drag.current.from !== 'library');
</script>

<section class="bg-raised rounded-md p-5 space-y-3">
	<header class="flex items-center gap-2 py-2">
		<iconify-icon icon="lucide:inbox" width="16" class="text-faint"></iconify-icon>
		<span class="lead text-ink">Bucket</span>
		<span class="subtext rounded-sm bg-white/10 px-1.5 py-0.5 text-white/70">{bucket.length}</span>
		<span class="subtext text-faint">Partagé entre les sections, rien n'est perdu</span>
	</header>

	<div class="flex gap-1">
	<div
		role="list"
		class="flex-1 min-h-28 rounded-md p-1 flex flex-wrap gap-1 {over && accepts ? 'bg-white/[0.07]' : accepts ? 'bg-white/[0.04]' : 'bg-white/[0.02]'}"
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
				moveToBucket(layout, bucket, drag.current.id);
			endDrag();
		}}
	>
		{#each bucket as item (item.id)}
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
				class="group relative w-32 aspect-[5/4] rounded-sm overflow-hidden bg-white/[0.05] cursor-grab"
			>
				<ItemPreview {item} />
				<span class="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 flex items-center justify-center">
					<iconify-icon icon="lucide:pencil" width="16" class="text-ink"></iconify-icon>
				</span>
				<span class="absolute bottom-1 right-1 subtext rounded bg-black/60 px-1.5 text-soft">{item.w}×{item.h}</span>
			</div>
		{:else}
			<span class="m-auto subtext text-ghost flex items-center gap-2">
				<iconify-icon icon="lucide:arrow-down-to-line" width="14"></iconify-icon>
				Glissez ici un élément de la grille pour le mettre de côté
			</span>
		{/each}
	</div>

	<div
		role="region"
		aria-label="Corbeille"
		class="w-28 shrink-0 rounded-md flex flex-col items-center justify-center gap-1 {overTrash && trashable
			? 'bg-red-500/20 text-danger'
			: 'bg-surface-hover text-ghost'}"
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
				removeItem(layout, bucket, drag.current.id);
			endDrag();
		}}
	>
		<iconify-icon icon="lucide:trash-2" width="24"></iconify-icon>
		<span class="subtext">Supprimer</span>
	</div>
	</div>
</section>
