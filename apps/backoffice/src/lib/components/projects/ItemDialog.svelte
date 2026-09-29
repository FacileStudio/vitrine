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
	class="m-auto w-full max-w-2xl rounded-2xl bg-[#0d0d0d] text-ink p-0 backdrop:bg-black/60 backdrop:backdrop-blur-sm"
>
	<div class="p-6 space-y-6 max-h-[85vh] overflow-y-auto">
		<header class="flex items-center justify-between gap-4">
			<span class="flex items-center gap-3">
				<iconify-icon icon={element?.icon} width="22" class="text-muted"></iconify-icon>
				<span class="subtitle text-ink">{element?.label ?? item.kind}</span>
				<span class="subtext text-faint">{item.w}×{item.h}</span>
			</span>
			<button type="button" onclick={() => dialog.close()} aria-label="Close" class="text-faint hover:text-ink">
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
				class="btn btn-danger"
			>
				<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
				Delete
			</button>

			<span class="flex gap-2">
				{#if inGrid}
					<button
						type="button"
						onclick={() => {
							onbucket();
							dialog.close();
						}}
						class="btn"
					>
						Set aside
					</button>
				{/if}
				<button type="button" onclick={() => dialog.close()} class="btn btn-primary px-6">
					OK
				</button>
			</span>
		</footer>
	</div>
</dialog>
