<script lang="ts">
	import Section from './Section.svelte';
	import type { StudioMember } from './types';

	let { member = $bindable() }: { member: StudioMember } = $props();
</script>

<Section title="Réseaux" icon="lucide:link" summary="{member.socials.length} réseau{member.socials.length > 1 ? 'x' : ''}">
	{#each member.socials as social, i (i)}
		<div class="grid gap-1 grid-cols-[10rem_minmax(0,1fr)_auto]">
			<input bind:value={social.label} placeholder="GitHub" title="Nom du réseau" class="input" />
			<label class="field" title="Lien">
				<iconify-icon icon="lucide:link" width="14" class="text-faint"></iconify-icon>
				<input bind:value={social.href} placeholder="https://" class="field-input" />
			</label>
			<button type="button" aria-label="Supprimer" onclick={() => member.socials.splice(i, 1)} class="btn-icon btn-icon-danger size-10">
				<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
			</button>
		</div>
	{/each}

	<button type="button" onclick={() => member.socials.push({ label: '', href: '' })} class="btn w-full">
		<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
		Ajouter un réseau
	</button>
</Section>
