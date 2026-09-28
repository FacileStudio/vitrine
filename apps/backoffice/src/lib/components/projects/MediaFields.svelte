<script lang="ts">
	import Field from '../studio/Field.svelte';
	import { siteAsset } from '$lib/site';
	import { isVideo } from './media';
	import { inputClass, type Project } from './types';

	type Item = Extract<Project['story'][number]['layout']['items'][number], { kind: 'image' | 'video' }>;

	let { item = $bindable(), gallery }: { item: Item; gallery: string[] } = $props();

	const choices = $derived(gallery.filter((src) => isVideo(src) === (item.kind === 'video')));
</script>

<div class="space-y-4">
	{#if item.src}
		{#if item.kind === 'video'}
			<video src={siteAsset(item.src)} muted loop playsinline controls class="w-full aspect-[5/4] rounded-md object-cover bg-white/[0.03]"></video>
		{:else}
			<img src={siteAsset(item.src)} alt="" class="w-full aspect-[5/4] rounded-md object-cover bg-white/[0.03]" />
		{/if}
	{/if}

	<Field label="Fichier" hint="Chemin depuis /public du site, ou une URL complète">
		<input bind:value={item.src} placeholder="/images/projects/…" class={inputClass} />
	</Field>

	{#if choices.length}
		<div class="space-y-2">
			<span class="lead text-white/80">Galerie du projet</span>
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
