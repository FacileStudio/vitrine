<script lang="ts">
	import LocaleTabs from './LocaleTabs.svelte';
	import { inputClass, type Locale, type Project } from './types';

	type Item = Extract<Project['story'][number]['layout']['items'][number], { kind: 'tiles' }>;

	let { item = $bindable() }: { item: Item } = $props();

	let locale = $state<Locale>('fr');

	const empty = () => ({ en: '', fr: '', es: '', de: '' });
</script>

<div class="space-y-4">
	<LocaleTabs bind:locale />

	{#each item.tiles as tile, i (i)}
		<div class="flex items-center gap-2">
			<input bind:value={tile.label[locale]} placeholder="Titre" class={inputClass} />
			<input
				value={tile.text?.[locale] ?? ''}
				oninput={(e) => {
					tile.text ??= empty();
					tile.text[locale] = e.currentTarget.value;
				}}
				placeholder="Texte"
				class={inputClass}
			/>
			<input bind:value={tile.icon} placeholder="Icône" class="{inputClass} w-40 shrink-0" />
			<button
				type="button"
				aria-label="Supprimer la tuile"
				onclick={() => item.tiles.splice(i, 1)}
				class="btn-icon btn-icon-danger size-10 shrink-0"
			>
				<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
			</button>
		</div>
	{/each}

	<button
		type="button"
		onclick={() => item.tiles.push({ label: empty() })}
		class="btn w-fit"
	>
		<iconify-icon icon="lucide:circle-plus" width="16"></iconify-icon>
		Ajouter une tuile
	</button>
</div>
