<script lang="ts">
	import Section from './Section.svelte';
	import { inputClass, type StudioMember } from './types';

	let { member = $bindable() }: { member: StudioMember } = $props();
</script>

<Section title="Réseaux">
	{#each member.socials as social, i (i)}
		<div class="flex items-center gap-3">
			<input bind:value={social.label} placeholder="GitHub" class="{inputClass} sm:w-40 shrink-0" />
			<input bind:value={social.href} placeholder="https://" class={inputClass} />
			<button
				type="button"
				aria-label="Supprimer"
				onclick={() => member.socials.splice(i, 1)}
				class="shrink-0 w-10 h-10 rounded-xl bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-600 flex items-center justify-center"
			>
				<iconify-icon icon="solar:trash-bin-trash-bold" width="16"></iconify-icon>
			</button>
		</div>
	{/each}

	<button
		type="button"
		onclick={() => member.socials.push({ label: '', href: '' })}
		class="p flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
	>
		<iconify-icon icon="solar:add-circle-bold" width="16"></iconify-icon>
		Ajouter un réseau
	</button>
</Section>
