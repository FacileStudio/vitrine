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
				class="shrink-0 w-10 h-10 rounded-xl bg-white/[0.05] text-white/58 hover:bg-red-500/10 hover:text-red-400 flex items-center justify-center"
			>
				<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
			</button>
		</div>
	{/each}

	<button
		type="button"
		onclick={() => member.socials.push({ label: '', href: '' })}
		class="p flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] text-white/80 hover:bg-stone-700/5"
	>
		<iconify-icon icon="lucide:circle-plus" width="16"></iconify-icon>
		Ajouter un réseau
	</button>
</Section>
