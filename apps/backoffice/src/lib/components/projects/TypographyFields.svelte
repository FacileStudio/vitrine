<script lang="ts">
	import Field from '../studio/Field.svelte';
	import LocaleTabs from './LocaleTabs.svelte';
	import { inputClass, type Locale, type Project } from './types';

	type Item = Extract<Project['story'][number]['layout']['items'][number], { kind: 'typography' }>;

	let { item = $bindable() }: { item: Item } = $props();

	let locale = $state<Locale>('fr');
</script>

<div class="space-y-4">
	<LocaleTabs bind:locale />

	<div class="grid gap-4 sm:grid-cols-2">
		<Field label="Police">
			<input bind:value={item.font} placeholder="Poppins" class={inputClass} />
		</Field>
		<Field label="Famille CSS" hint="Ce que le site applique au texte d'exemple">
			<input bind:value={item.fontFamily} placeholder="var(--font-poppins), sans-serif" class={inputClass} />
		</Field>
	</div>

	{#if item.description}
		<Field label="Description">
			<textarea bind:value={item.description[locale]} rows="3" class={inputClass}></textarea>
		</Field>
	{/if}

	<div class="grid gap-4 sm:grid-cols-2">
		<Field label="Seconde police" hint="Remplie, le site affiche une paire de polices">
			<input bind:value={item.secondFont} class={inputClass} />
		</Field>
		<Field label="Seconde famille CSS">
			<input bind:value={item.secondFontFamily} class={inputClass} />
		</Field>
	</div>

	{#if item.secondFont && item.secondDescription}
		<Field label="Seconde description">
			<textarea bind:value={item.secondDescription[locale]} rows="3" class={inputClass}></textarea>
		</Field>
	{/if}
</div>
