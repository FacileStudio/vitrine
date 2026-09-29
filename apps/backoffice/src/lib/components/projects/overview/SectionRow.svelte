<script lang="ts">
	import { siteAsset } from '$lib/site';
	import { trimmed, ROWS } from '../editor/gridOps';
	import TeamDots from '../ui/TeamDots.svelte';
	import type { Project, StudioMemberSummary } from '../types';

	type Section = Project['story'][number];

	let {
		slug,
		section,
		index,
		members,
	}: { slug: string; section: Section; index: number; members: Map<string, StudioMemberSummary> } = $props();

	const thumbnails = $derived(
		section.layout.items.flatMap((item) => (item.kind === 'image' && item.src ? [siteAsset(item.src)] : [])).slice(0, 4)
	);
</script>

<a
	href="/admin/projects/{slug}/{index}"
	class="panel-link cursor-grab active:cursor-grabbing grid grid-cols-[1rem_1.5rem_minmax(0,1fr)] lg:grid-cols-[1rem_1.5rem_minmax(0,1fr)_4rem_7rem_8rem_13rem] items-center gap-x-4 gap-y-3 px-4 py-5 pr-14 lg:px-8 lg:py-8 lg:pr-18"
>
	<iconify-icon icon="lucide:grip-vertical" width="16" class="text-ghost"></iconify-icon>
	<span class="subtext text-faint tabular-nums">{index + 1}</span>
	<span class="subtitle text-ink truncate">{section.title?.en ?? 'Untitled'}</span>

	<!-- one wrapped line under the title on small screens, its own columns from lg up -->
	<span class="col-start-3 flex flex-wrap items-center gap-1 lg:contents">
		<span class="chip w-fit tabular-nums" title="Columns × rows">{trimmed(section.layout).cols}×{ROWS}</span>
		<span class="chip w-fit">
			<iconify-icon icon="lucide:layers" width="12"></iconify-icon>
			{section.layout.items.length} item{section.layout.items.length > 1 ? 's' : ''}
		</span>
		<TeamDots team={section.by ?? []} {members} />
		<span class="hidden sm:flex justify-end gap-1 lg:ml-0 ml-auto">
			{#each thumbnails as src (src)}
				<img {src} alt="" class="w-12 aspect-[5/4] rounded-project object-cover" />
			{/each}
		</span>
	</span>
</a>
