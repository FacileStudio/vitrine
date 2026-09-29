<script lang="ts">
	import Section from './Section.svelte';
	import LinesInput from './LinesInput.svelte';
	import { LOCALES, inputClass, type Locale, type StudioMember } from './types';

	let { member = $bindable() }: { member: StudioMember } = $props();

	let locale = $state<Locale>('fr');

	// a language counts as translated once both texts are filled
	const missing = (code: Locale) => ![member.description[code], member.bio[code]].every((text) => text?.trim());
</script>

<Section title="Textes" icon="lucide:languages">
	{#snippet actions()}
		<div class="segmented w-fit">
			{#each LOCALES as code (code)}
				<button
					type="button"
					onclick={() => (locale = code)}
					aria-pressed={locale === code}
					title={missing(code) ? 'Traduction incomplète' : undefined}
					class="segmented-item subtext uppercase px-3 gap-1.5"
				>
					{code}
					{#if missing(code)}
						<span class="size-1.5 rounded-full bg-warning"></span>
					{/if}
				</button>
			{/each}
		</div>
	{/snippet}

	<textarea
		bind:value={member.description[locale]}
		rows="3"
		placeholder="Description courte, affichée sur la page studio"
		title="Description"
		class="{inputClass} block resize-none"
	></textarea>
	<textarea
		bind:value={member.bio[locale]}
		rows="5"
		placeholder="Bio, affichée sur la page du membre"
		title="Bio"
		class="{inputClass} block resize-none"
	></textarea>

	{#key locale}
		<div class="grid gap-1 sm:grid-cols-2">
			<LinesInput bind:value={member.labels[locale]} placeholder="Compétences, une par ligne" />
			<LinesInput bind:value={member.facts[locale]} placeholder="Anecdotes, une par ligne" />
		</div>
	{/key}
</Section>
