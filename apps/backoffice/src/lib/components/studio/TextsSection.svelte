<script lang="ts">
	import Section from './Section.svelte';
	import Field from './Field.svelte';
	import LinesInput from './LinesInput.svelte';
	import { LOCALES, inputClass, type Locale, type StudioMember } from './types';

	let { member = $bindable() }: { member: StudioMember } = $props();

	let locale = $state<Locale>('fr');
</script>

<Section title="Textes" description="Chaque langue du site a sa propre version">
	<div class="flex gap-2">
		{#each LOCALES as code (code)}
			<button
				type="button"
				onclick={() => (locale = code)}
				class="lead px-3 py-1.5 rounded-xl uppercase {locale === code
					? 'bg-white text-black'
					: 'bg-white/[0.05] text-white/58 hover:text-white'}"
			>
				{code}
			</button>
		{/each}
	</div>

	<Field label="Rôle">
		<input bind:value={member.role[locale]} class={inputClass} />
	</Field>

	<Field label="Description" hint="Le texte court de la page studio">
		<textarea bind:value={member.description[locale]} rows="3" class={inputClass}></textarea>
	</Field>

	<Field label="Bio" hint="Le texte long de la page du membre">
		<textarea bind:value={member.bio[locale]} rows="5" class={inputClass}></textarea>
	</Field>

	{#key locale}
		<div class="grid gap-4 sm:grid-cols-2">
			<Field label="Compétences" hint="Une par ligne">
				<LinesInput bind:value={member.labels[locale]} />
			</Field>

			<Field label="Anecdotes" hint="Une par ligne">
				<LinesInput bind:value={member.facts[locale]} />
			</Field>
		</div>
	{/key}
</Section>
