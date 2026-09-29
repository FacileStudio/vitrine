<script lang="ts">
	import { siteAsset } from '$lib/site';
	import type { Project } from './types';

	type Section = Project['story'][number];

	let { slug, section, index }: { slug: string; section: Section; index: number } = $props();

	const thumbnails = $derived(
		section.layout.items.flatMap((item) => (item.kind === 'image' ? [siteAsset(item.src)] : [])).slice(0, 4)
	);
</script>

<a
	href="/admin/projects/{slug}/{index}"
	class="bg-stone-700/10 p-6 pl-3 pr-18 rounded-md cursor-grab active:cursor-grabbing flex items-center justify-between gap-6 hover:bg-white/[0.03]"
>
	<span class="flex items-baseline gap-1 min-w-0">
		<iconify-icon icon="lucide:grip-vertical" width="16" class="self-center text-white/30"></iconify-icon>
		<span class="subtext text-white/45">{index + 1}</span>
		<span class="subtitle text-white truncate">{section.title?.en ?? 'Sans titre'}</span>
		<span class="subtext text-white/45 shrink-0">
			{section.layout.cols} colonnes × 3 lignes · {section.layout.items.length} éléments
		</span>
	</span>

	<span class="flex items-center gap-4 shrink-0">
		<span class="flex gap-1">
			{#each thumbnails as src (src)}
				<img {src} alt="" class="w-12 aspect-[5/4] rounded-sm object-cover" />
			{/each}
		</span>
	</span>
</a>
