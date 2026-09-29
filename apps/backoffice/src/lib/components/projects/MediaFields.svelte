<script lang="ts">
	import { siteAsset } from '$lib/site';
	import ImageUpload from './ImageUpload.svelte';
	import { isVideo } from './media';
	import type { Project } from './types';

	type Item = Extract<Project['story'][number]['layout']['items'][number], { kind: 'image' | 'video' }>;

	let { item = $bindable(), gallery }: { item: Item; gallery: string[] } = $props();

	const choices = $derived(gallery.filter((src) => isVideo(src) === (item.kind === 'video')));
</script>

<div class="space-y-4">
	<ImageUpload
		bind:value={item.src}
		label={item.kind === 'video' ? 'Vidéo' : 'Image'}
		accept={item.kind === 'video' ? 'video/*' : 'image/*'}
	/>

	{#if choices.length}
		<div class="space-y-2">
			<span class="lead text-soft">Galerie du projet</span>
			<div class="grid grid-cols-4 gap-1">
				{#each choices as src (src)}
					<button
						type="button"
						onclick={() => (item.src = src)}
						class="relative aspect-[5/4] rounded-sm overflow-hidden {item.src === src ? 'outline-2 outline-white' : ''}"
					>
						{#if item.kind === 'video'}
							<video src={siteAsset(src)} muted class="absolute inset-0 w-full h-full object-cover"></video>
						{:else}
							<img src={siteAsset(src)} alt="" class="absolute inset-0 w-full h-full object-cover" />
						{/if}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
