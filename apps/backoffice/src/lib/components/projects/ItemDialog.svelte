<script lang="ts">
	import { onMount } from 'svelte';
	import { elementOf } from './elements';
	import { fillTexts } from './gridOps';
	import MediaFields from './MediaFields.svelte';
	import TextFields from './TextFields.svelte';
	import PaletteFields from './PaletteFields.svelte';
	import TypographyFields from './TypographyFields.svelte';
	import TilesFields from './TilesFields.svelte';
	import SizePicker from './SizePicker.svelte';
	import type { Project } from './types';

	type Item = Project['story'][number]['layout']['items'][number];

	let {
		item = $bindable(),
		gallery,
		inGrid,
		onclose,
		onbucket,
		onremove,
		fitsSize,
	}: {
		item: Item;
		gallery: string[];
		inGrid: boolean;
		onclose: () => void;
		onbucket: () => void;
		onremove: () => void;
		fitsSize: (w: number, h: number) => boolean;
	} = $props();

	let dialog: HTMLDialogElement;

	const element = $derived(elementOf(item.kind));

	onMount(() => {
		fillTexts(item);
		dialog.showModal();
	});
</script>

<dialog
	bind:this={dialog}
	onclose={onclose}
	onclick={(e) => {
		if (e.target === dialog)
			dialog.close();
	}}
	class="m-auto w-full max-w-2xl rounded-2xl bg-[#0d0d0d] text-white p-0 backdrop:bg-black/60 backdrop:backdrop-blur-sm"
>
	<div class="p-6 space-y-6 max-h-[85vh] overflow-y-auto">
		<header class="flex items-center justify-between gap-4">
			<span class="flex items-center gap-3">
				<iconify-icon icon={element?.icon} width="22" class="text-white/58"></iconify-icon>
				<span class="subtitle text-white">{element?.label ?? item.kind}</span>
				<span class="subtext text-white/45">{item.w}×{item.h}</span>
			</span>
			<button type="button" onclick={() => dialog.close()} aria-label="Fermer" class="text-white/45 hover:text-white">
				<iconify-icon icon="lucide:circle-x" width="26"></iconify-icon>
			</button>
		</header>

		{#if item.kind === 'image' || item.kind === 'video'}
			<SizePicker bind:w={item.w} bind:h={item.h} allowed={fitsSize} />
			<MediaFields bind:item {gallery} />
		{:else if item.kind === 'note' || item.kind === 'text'}
			<TextFields bind:item />
		{:else if item.kind === 'palette'}
			<PaletteFields bind:item />
		{:else if item.kind === 'typography'}
			<TypographyFields bind:item />
		{:else if item.kind === 'tiles'}
			<TilesFields bind:item />
		{/if}

		<footer class="flex items-center justify-between gap-2 pt-2">
			<button
				type="button"
				onclick={() => {
					onremove();
					dialog.close();
				}}
				class="p flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] text-white/58 hover:bg-red-500/10 hover:text-red-400"
			>
				<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
				Supprimer
			</button>

			<span class="flex gap-2">
				{#if inGrid}
					<button
						type="button"
						onclick={() => {
							onbucket();
							dialog.close();
						}}
						class="p px-4 py-2 rounded-xl bg-white/[0.05] text-white/80 hover:bg-white/10"
					>
						Mettre de côté
					</button>
				{/if}
				<button type="button" onclick={() => dialog.close()} class="lead px-5 py-2 rounded-xl bg-white text-black hover:bg-white/90">
					OK
				</button>
			</span>
		</footer>
	</div>
</dialog>
