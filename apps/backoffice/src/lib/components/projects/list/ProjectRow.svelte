<script lang="ts">
	import { siteAsset } from '$lib/site';
	import { hoverTo, zoom } from '$lib/motion';
	import TechLogos from '../ui/TechLogos.svelte';
	import TeamDots from '../ui/TeamDots.svelte';
	import type { ProjectSummary, StudioMemberSummary } from '../types';

	let { project, members }: { project: ProjectSummary; members: Map<string, StudioMemberSummary> } = $props();
</script>

<a
	href="/admin/projects/{project.slug}"
	class="group relative isolate overflow-hidden bg-surface rounded-project p-0 pr-12 grid grid-cols-[11em_minmax(0,1fr)_9em_9em_9em_9em_9em_1rem] items-center gap-12 hover:bg-surface-hover"
>
	<img
		use:hoverTo={{ rest: { opacity: 0.0, scale: 1 }, hover: { opacity: 0.35, scale: 1.3 } }}
		src={siteAsset(project.image)}
		alt=""
		aria-hidden="true"
		class="absolute -z-10 left-24 top-1/2 -translate-y-1/2 w-full pointer-events-none object-cover saturate-200 blur-3xl  [mask-image:linear-gradient(90deg,black_0%,transparent_66%)]"
		onerror={(e) => e.currentTarget.remove()}
	/>
	<span class="relative w-48 aspect-[16/10] rounded-project overflow-hidden bg-surface-hover flex items-center justify-center">
		<iconify-icon icon="lucide:image-off" width="18" class="text-ink/20"></iconify-icon>
		<img
			use:zoom
            use:hoverTo={{ rest: { scale: 1 }, hover: { scale: 1.2 } }}
			src={siteAsset(project.image)}
			alt=""
			class="absolute inset-0 w-full h-full object-cover"
			onerror={(e) => e.currentTarget.remove()}
		/>
	</span>
	<span class="min-w-0">
		<span class="block subtitle text-ink truncate">{project.name}</span>
	</span>
	<span class="p text-muted">{project.date}</span>
	<span class="p text-muted">{project.weeks} wk</span>
	<span class="p text-muted">{project.story.length} sections</span>
	<TechLogos stack={project.techStack} max={4} />
	<TeamDots team={project.team} {members} />
	<iconify-icon icon="lucide:chevron-right" width="16" class="text-ghost group-hover:text-ink"></iconify-icon>
</a>
