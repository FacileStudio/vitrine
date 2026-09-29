<script lang="ts">
	import LocaleTabs from './LocaleTabs.svelte';
	import { inputClass, type Locale, type Project } from './types';

	type Item = Extract<Project['story'][number]['layout']['items'][number], { kind: 'palette' }>;

	let { item = $bindable() }: { item: Item } = $props();

	let locale = $state<Locale>('fr');

	const empty = () => ({ en: '', fr: '', es: '', de: '' });
</script>

<div class="space-y-4">
	<LocaleTabs bind:locale />

	{#each item.swatches as swatch, i (i)}
		<div class="flex items-center gap-2">
			<input type="color" bind:value={swatch.hex} class="size-10 rounded-md bg-transparent shrink-0 cursor-pointer" />
			<input bind:value={swatch.hex} placeholder="#000000" class="{inputClass} w-28 shrink-0" />
			<input bind:value={swatch.label[locale]} placeholder="Nom" class={inputClass} />
			<input
				value={swatch.note?.[locale] ?? ''}
				oninput={(e) => {
					swatch.note ??= empty();
					swatch.note[locale] = e.currentTarget.value;
				}}
				placeholder="Note"
				class={inputClass}
			/>
			<button
				type="button"
				aria-label="Supprimer la couleur"
				onclick={() => item.swatches.splice(i, 1)}
				class="btn-icon btn-icon-danger size-10 shrink-0"
			>
				<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
			</button>
		</div>
	{/each}

	<button
		type="button"
		onclick={() => item.swatches.push({ label: empty(), hex: '#000000' })}
		class="btn w-fit"
	>
		<iconify-icon icon="lucide:circle-plus" width="16"></iconify-icon>
		Ajouter une couleur
	</button>
</div>
