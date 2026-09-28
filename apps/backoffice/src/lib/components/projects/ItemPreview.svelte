<script lang="ts">
	import { siteAsset } from '$lib/site';
	import { elementOf } from './elements';
	import type { Project } from './types';

	type Item = Project['story'][number]['layout']['items'][number];

	let { item }: { item: Item } = $props();

	const element = $derived(elementOf(item.kind));
</script>

{#if (item.kind === 'image' || item.kind === 'video') && item.src}
	{#if item.kind === 'image'}
		<img src={siteAsset(item.src)} alt="" draggable="false" class="absolute inset-0 w-full h-full object-cover" />
	{:else}
		<video src={siteAsset(item.src)} muted loop playsinline class="absolute inset-0 w-full h-full object-cover"></video>
	{/if}
{:else}
	<div class="absolute bg-stone-700/20 inset-0 flex flex-col gap-1 p-3">
		<span class="flex items-center gap-2 text-white/80">
			<iconify-icon icon={element?.icon} width="18" class="text-white/58"></iconify-icon>
			<span class="lead">{element?.label ?? item.kind}</span>
		</span>
		{#if item.kind === 'note' && item.title?.en}
			<span class="subtext text-white/58 line-clamp-2">{item.title.en}</span>
		{:else if (item.kind === 'image' || item.kind === 'video') && !item.src}
			<span class="subtext text-white/45">Aucun fichier</span>
		{/if}
	</div>
{/if}
