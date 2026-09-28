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
	class="group bg-stone-700/5 p-6 rounded-md flex items-center justify-between gap-6 hover:bg-white/[0.03]"
>
	<span class="flex items-baseline gap-3 min-w-0">
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
		<iconify-icon icon="lucide:chevron-right" width="18" class="text-white/30 group-hover:text-white"></iconify-icon>
	</span>
</a>
