<script lang="ts">
	import Section from './Section.svelte';
	import type { StudioMember } from './types';

	let { member = $bindable() }: { member: StudioMember } = $props();

	const AXES = ['X', 'Y', 'Z'] as const;

	const MATERIAL = [
		{ key: 'scale', icon: 'lucide:scaling', title: 'Scale (0.015 for a Mii head)', step: 'any', max: undefined },
		{ key: 'roughness', icon: 'lucide:droplet', title: 'Roughness, 0 to 1', step: '0.05', max: 1 },
		{ key: 'metalness', icon: 'lucide:gem', title: 'Metalness, 0 to 1', step: '0.05', max: 1 },
	] as const;
</script>

<Section title="3D head" icon="lucide:box" summary={member.model.split('/').at(-1)}>
	<label class="field" title="Path to the .glb from /public">
		<iconify-icon icon="lucide:file-box" width="14" class="text-faint"></iconify-icon>
		<input bind:value={member.model} placeholder="/models/tete.glb" class="field-input" />
	</label>

	<div class="grid gap-1 grid-cols-3">
		{#each MATERIAL as setting (setting.key)}
			<label class="field" title={setting.title}>
				<iconify-icon icon={setting.icon} width="14" class="text-faint"></iconify-icon>
				<input type="number" step={setting.step} min="0" max={setting.max} bind:value={member[setting.key]} class="field-input" />
			</label>
		{/each}
	</div>

	<div class="grid gap-1 grid-cols-3">
		{#each AXES as axis, i (axis)}
			<label class="field" title="Rotation {axis}, in radians">
				<span class="subtext text-faint w-3">{axis}</span>
				<input type="number" step="0.01" bind:value={member.rotation[i]} class="field-input" />
			</label>
		{/each}
	</div>

	<div class="grid gap-1 grid-cols-[auto_minmax(0,1fr)]">
		<button
			type="button"
			aria-pressed={member.hair !== null}
			onclick={() => (member.hair = member.hair === null ? '#6E5A4E' : null)}
			title="Custom hair colour"
			class="btn aria-pressed:bg-pressed aria-pressed:text-ink"
		>
			<iconify-icon icon="lucide:brush" width="14"></iconify-icon>
			Hair
		</button>
		{#if member.hair !== null}
			<label class="field" title="Hair colour">
				<input type="color" bind:value={member.hair} class="size-5 shrink-0 cursor-pointer rounded-project bg-transparent" />
				<input bind:value={member.hair} class="field-input uppercase" />
			</label>
		{/if}
	</div>
</Section>
