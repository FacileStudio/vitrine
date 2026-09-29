<script lang="ts">
	import Field from '../../../studio/Field.svelte';
	import LocaleTabs from '../../ui/LocaleTabs.svelte';
	import { inputClass, type Locale, type Project } from '../../types';

	type Item = Extract<Project['story'][number]['layout']['items'][number], { kind: 'typography' }>;

	let { item = $bindable() }: { item: Item } = $props();

	let locale = $state<Locale>('fr');
</script>

<div class="space-y-4">
	<LocaleTabs bind:locale />

	<div class="grid gap-4 sm:grid-cols-2">
		<Field label="Font">
			<input bind:value={item.font} placeholder="Poppins" class={inputClass} />
		</Field>
		<Field label="CSS family" hint="What the site applies to the sample text">
			<input bind:value={item.fontFamily} placeholder="var(--font-poppins), sans-serif" class={inputClass} />
		</Field>
	</div>

	{#if item.description}
		<Field label="Description">
			<textarea bind:value={item.description[locale]} rows="3" class={inputClass}></textarea>
		</Field>
	{/if}

	<div class="grid gap-4 sm:grid-cols-2">
		<Field label="Second font" hint="When filled, the site shows a font pair">
			<input bind:value={item.secondFont} class={inputClass} />
		</Field>
		<Field label="Second CSS family">
			<input bind:value={item.secondFontFamily} class={inputClass} />
		</Field>
	</div>

	{#if item.secondFont && item.secondDescription}
		<Field label="Second description">
			<textarea bind:value={item.secondDescription[locale]} rows="3" class={inputClass}></textarea>
		</Field>
	{/if}
</div>
