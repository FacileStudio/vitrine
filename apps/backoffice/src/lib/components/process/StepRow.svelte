<script lang="ts">
	import { siteAsset } from '$lib/site';
	import { hoverTo, zoom } from '$lib/motion';
	import TeamDots from '$lib/components/projects/ui/TeamDots.svelte';
	import type { ProcessStep, StudioMemberSummary } from './types';

	let {
		step,
		index,
		members,
		onremove,
	}: { step: ProcessStep; index: number; members: Map<string, StudioMemberSummary>; onremove: (row: HTMLElement | null) => void } = $props();

	const video = $derived(/\.(mp4|webm|mov)$/i.test(step.image));
</script>

<a
	href="/admin/process/{step.slug}"
	class="group relative isolate overflow-hidden bg-surface rounded-project p-0 pr-12 grid grid-cols-[11em_3ch_minmax(0,1fr)_9em_16em_9em_9em_1rem] items-center gap-12 hover:bg-surface-hover"
>
	<span class="relative w-48 aspect-[16/10] rounded-project overflow-hidden bg-surface-hover flex items-center justify-center">
		<iconify-icon icon="iconoir:media-image-xmark" width="18" class="text-ink/20"></iconify-icon>
		{#if step.image && video}
			<video src={siteAsset(step.image)} muted loop playsinline autoplay class="absolute inset-0 w-full h-full object-cover"></video>
		{:else if step.image}
			<img
				use:zoom
				use:hoverTo={{ rest: { scale: 1 }, hover: { scale: 1.2 } }}
				src={siteAsset(step.image)}
				alt=""
				class="absolute inset-0 w-full h-full object-cover"
				onerror={(e) => e.currentTarget.remove()}
			/>
		{/if}
	</span>
	<span class="p text-faint tabular-nums">{String(index + 1).padStart(2, '0')}</span>
	<span class="min-w-0">
		<span class="block subtitle text-ink truncate">{step.title.fr}</span>
	</span>
	<span class="p text-muted truncate">{step.duration.fr}</span>
	<span class="p text-muted truncate">{step.keywords.fr}</span>
	<span class="p text-muted">{step.items.fr.length} items</span>
	<TeamDots team={step.team} {members} />
	<button
		type="button"
		title="Delete"
		aria-label="Delete {step.title.fr}"
		onclick={(e) => {
			e.preventDefault();
			onremove(e.currentTarget.closest('[role="listitem"]'));
		}}
		class="flex items-center p-2 -m-2 rounded-project text-ghost opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-red-500/20 hover:text-danger"
	>
		<iconify-icon icon="iconoir:trash" width="16"></iconify-icon>
	</button>
</a>
