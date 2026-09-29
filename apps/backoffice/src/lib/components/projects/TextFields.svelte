<script lang="ts">
	import Field from '../studio/Field.svelte';
	import LocaleTabs from './LocaleTabs.svelte';
	import { inputClass, type Locale, type Project } from './types';

	type Item = Extract<Project['story'][number]['layout']['items'][number], { kind: 'note' | 'text' }>;

	let { item = $bindable() }: { item: Item } = $props();

	let locale = $state<Locale>('fr');
</script>

<div class="space-y-4">
	<LocaleTabs bind:locale />

	{#if item.kind === 'note' && item.title}
		<Field label="Title">
			<input bind:value={item.title[locale]} class={inputClass} />
		</Field>
	{/if}

	{#if item.text}
		<Field label="Text">
			<textarea bind:value={item.text[locale]} rows="5" class={inputClass}></textarea>
		</Field>
	{/if}
</div>
