<script lang="ts">
	import Section from './Section.svelte';
	import Field from './Field.svelte';
	import { inputClass, type StudioMember } from './types';

	let { member = $bindable() }: { member: StudioMember } = $props();
</script>

<Section title="Identité">
	<div class="grid gap-4 sm:grid-cols-2">
		<Field label="Nom">
			<input bind:value={member.name} class={inputClass} />
		</Field>

		<Field label="Slug" hint="Utilisé dans l'URL et par les projets, non modifiable">
			<input value={member.slug} disabled class="{inputClass} text-slate-400" />
		</Field>

		<Field label="Couleur">
			<div class="flex items-center gap-3">
				<input type="color" bind:value={member.highlight} class="w-10 h-10 rounded-xl bg-transparent shrink-0" />
				<input bind:value={member.highlight} class={inputClass} />
			</div>
		</Field>
	</div>

	<label class="flex items-center gap-3">
		<input type="checkbox" bind:checked={member.suite} class="w-4 h-4 accent-slate-900" />
		<span class="p text-slate-700">Travaille sur la Facile Suite</span>
	</label>
</Section>
