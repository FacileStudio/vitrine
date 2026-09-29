<script lang="ts">
	import Section from './Section.svelte';
	import Field from './Field.svelte';
	import { inputClass, type StudioMember } from './types';

	let { member = $bindable() }: { member: StudioMember } = $props();
</script>

<Section title="Identité" icon="lucide:id-card">
	<div class="grid gap-4 sm:grid-cols-2">
		<Field label="Nom">
			<input bind:value={member.name} class={inputClass} />
		</Field>

		<Field label="Slug" hint="Utilisé dans l'URL et par les projets, non modifiable">
			<input value={member.slug} disabled class={inputClass} />
		</Field>

		<Field label="Couleur">
			<div class="flex items-center gap-3">
				<input type="color" bind:value={member.highlight} class="size-10 rounded-md bg-transparent shrink-0 cursor-pointer" />
				<input bind:value={member.highlight} class={inputClass} />
			</div>
		</Field>
	</div>

	<label class="flex items-center gap-3">
		<input type="checkbox" bind:checked={member.suite} class="w-4 h-4 accent-white" />
		<span class="p text-soft">Travaille sur la Facile Suite</span>
	</label>
</Section>
