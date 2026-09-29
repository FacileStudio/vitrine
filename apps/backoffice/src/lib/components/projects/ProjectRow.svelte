<script lang="ts">
	import { siteAsset } from '$lib/site';
	import TechLogos from './TechLogos.svelte';
	import TeamDots from './TeamDots.svelte';
	import type { ProjectSummary, StudioMemberSummary } from './types';

	let { project, members }: { project: ProjectSummary; members: Map<string, StudioMemberSummary> } = $props();
</script>

<a
	href="/admin/projects/{project.slug}"
	class="group bg-stone-700/5 rounded-md p-0 pr-12 grid grid-cols-[11em_minmax(0,1fr)_6em_6em_6em_6em_6em_1rem] items-center gap-12 hover:bg-white/[0.03]"
>
	<span class="relative w-48 aspect-[16/10] rounded-sm overflow-hidden bg-white/[0.03] flex items-center justify-center">
		<iconify-icon icon="lucide:image-off" width="18" class="text-white/20"></iconify-icon>
		<img
			src={siteAsset(project.image)}
			alt=""
			class="absolute inset-0 w-full h-full object-cover"
			onerror={(e) => e.currentTarget.remove()}
		/>
	</span>
	<span class="min-w-0">
		<span class="block lead text-white truncate">{project.name}</span>
	</span>
	<span class="p text-white/58">{project.date}</span>
	<span class="p text-white/58">{project.weeks} sem.</span>
	<span class="p text-white/58">{project.story.length} sections</span>
	<TechLogos stack={project.techStack} max={4} />
	<TeamDots team={project.team} {members} />
	<iconify-icon icon="lucide:chevron-right" width="16" class="text-white/30 group-hover:text-white"></iconify-icon>
</a>
