<script lang="ts">
	import Section from './Section.svelte';
	import Field from './Field.svelte';
	import { inputClass, type StudioMember } from './types';

	let { member = $bindable() }: { member: StudioMember } = $props();

	const AXES = ['X', 'Y', 'Z'] as const;
</script>

<Section title="Tête 3D" description="Réglages du modèle affiché sur le site">
	<Field label="Modèle" hint="Chemin du .glb depuis /public">
		<input bind:value={member.model} class={inputClass} />
	</Field>

	<div class="grid gap-4 sm:grid-cols-3">
		<Field label="Échelle" hint="0.015 pour une tête Mii">
			<input type="number" step="any" min="0" bind:value={member.scale} class={inputClass} />
		</Field>

		<Field label="Rugosité">
			<input type="number" step="0.05" min="0" max="1" bind:value={member.roughness} class={inputClass} />
		</Field>

		<Field label="Métal">
			<input type="number" step="0.05" min="0" max="1" bind:value={member.metalness} class={inputClass} />
		</Field>
	</div>

	<div class="grid gap-4 sm:grid-cols-3">
		{#each AXES as axis, i (axis)}
			<Field label="Rotation {axis}" hint="En radians">
				<input type="number" step="0.01" bind:value={member.rotation[i]} class={inputClass} />
			</Field>
		{/each}
	</div>

	<div class="space-y-2">
		<label class="flex items-center gap-3">
			<input
				type="checkbox"
				checked={member.hair !== null}
				onchange={(e) => (member.hair = e.currentTarget.checked ? '#6E5A4E' : null)}
				class="w-4 h-4 accent-slate-900"
			/>
			<span class="p text-slate-700">Couleur de cheveux personnalisée</span>
		</label>

		{#if member.hair !== null}
			<div class="flex items-center gap-3 sm:w-1/3">
				<input type="color" bind:value={member.hair} class="w-10 h-10 rounded-xl bg-transparent shrink-0" />
				<input bind:value={member.hair} class={inputClass} />
			</div>
		{/if}
	</div>
</Section>
