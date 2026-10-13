<script lang="ts">
	import Section from './Section.svelte';
	import type { StudioMember } from './types';

	let { member = $bindable() }: { member: StudioMember } = $props();
</script>

<Section title="Links" icon="iconoir:link" summary="{member.socials.length} link{member.socials.length > 1 ? 's' : ''}">
	{#each member.socials as social, i (i)}
		<div class="grid gap-1 grid-cols-[10rem_minmax(0,1fr)_auto]">
			<input bind:value={social.label} placeholder="GitHub" title="Network name" class="input" />
			<label class="field" title="Link">
				<iconify-icon icon="iconoir:link" width="14" class="text-faint"></iconify-icon>
				<input bind:value={social.href} placeholder="https://" class="field-input" />
			</label>
			<button type="button" aria-label="Delete" onclick={() => member.socials.splice(i, 1)} class="btn-icon btn-icon-danger size-10">
				<iconify-icon icon="iconoir:trash" width="16"></iconify-icon>
			</button>
		</div>
	{/each}

	<button type="button" onclick={() => member.socials.push({ label: '', href: '' })} class="btn w-full">
		<iconify-icon icon="iconoir:plus" width="16"></iconify-icon>
		Add a link
	</button>
</Section>
