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
	class="group w-full bg-card rounded-project overflow-hidden flex flex-col hover:bg-card-hover"
>
	<div class="relative aspect-[16/10] overflow-hidden bg-surface-hover">
		<iconify-icon icon="lucide:image-off" width="28" class="absolute inset-0 m-auto size-fit text-ink/20"></iconify-icon>
		<img
			use:zoom
            use:hoverTo={{ rest: {scale: 1}, hover: {scale: 1.05}}}
			src={siteAsset(project.image)}
			alt={project.name}
			class="relative w-full h-full object-cover"
			onerror={(e) => e.currentTarget.remove()}
		/>

        
		<span class="absolute top-3 left-3 subtext rounded-project bg-black/60 px-2 py-1 text-on-media/80 backdrop-blur-md">{project.date}</span>
		<button
			type="button"
			title="View on the site"
			aria-label="View {project.name} on the site"
			onclick={(e) => {
                e.preventDefault();
				window.open(siteAsset(`/en/projects/${project.slug}`), '_blank', 'noopener');
			}}
			class="absolute top-3 right-3 flex items-center p-2 rounded-project bg-black/60 text-on-media/80 backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-white hover:text-black"
		>
			<iconify-icon icon="lucide:external-link" width="14"></iconify-icon>
		</button>
	</div>
    
	<div class="relative isolate overflow-hidden p-5 flex flex-col gap-12 flex-1">
        <img
            use:hoverTo={{ rest: { opacity: 0.5, scale: 1 }, hover: { opacity: 0.85, scale: 1.25 } }}
            src={siteAsset(project.image)}
            alt=""
            aria-hidden="true"
            class="absolute -z-10 -top-25 left-0 pointer-events-none saturate-150 blur-[100px] w-full h-full object-cover"
            onerror={(e) => e.currentTarget.remove()}
        />
		<div class="flex items-baseline justify-between gap-3">
			<p class="subtitle text-ink truncate">{project.name}</p>
			<span class="subtext text-faint shrink-0">{project.weeks} week{project.weeks > 1 ? 's' : ''}</span>
		</div>
		<!-- <p class="p text-muted line-clamp-2">{project.description.fr}</p> -->
		<div class="mt-auto pt-2 flex items-center justify-between gap-3">
			<TechLogos stack={project.techStack} />
			<TeamDots team={project.team} {members} />
		</div>
	</div>
</a>
