<script lang="ts">
	import Section from './Section.svelte';
	import { inputClass, type StudioMember } from './types';

	let { member = $bindable() }: { member: StudioMember } = $props();
</script>

<Section title="Réseaux" icon="lucide:link">
	{#each member.socials as social, i (i)}
		<div class="flex items-center gap-3">
			<input bind:value={social.label} placeholder="GitHub" class="{inputClass} sm:w-40 shrink-0" />
			<input bind:value={social.href} placeholder="https://" class={inputClass} />
			<button
				type="button"
				aria-label="Supprimer"
				onclick={() => member.socials.splice(i, 1)}
				class="btn-icon btn-icon-danger size-10 shrink-0"
			>
				<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
			</button>
		</div>
	{/each}

	<button
		type="button"
		onclick={() => member.socials.push({ label: '', href: '' })}
		class="btn w-fit"
	>
		<iconify-icon icon="lucide:circle-plus" width="16"></iconify-icon>
		Ajouter un réseau
	</button>
</Section>
