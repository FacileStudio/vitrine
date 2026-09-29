<script lang="ts">
	import { siteAsset } from '$lib/site';
	import { zoom } from '$lib/motion';
	import TechLogos from './TechLogos.svelte';
	import TeamDots from './TeamDots.svelte';
	import type { ProjectSummary, StudioMemberSummary } from './types';

	let { project, members }: { project: ProjectSummary; members: Map<string, StudioMemberSummary> } = $props();
</script>

<a href="/admin/projects/{project.slug}" class="group w-full bg-stone-700/10 rounded-md overflow-hidden flex flex-col hover:bg-white/[0.03]">
	<div class="relative aspect-[16/10] overflow-hidden bg-white/[0.03]">
		<iconify-icon icon="lucide:image-off" width="28" class="absolute inset-0 m-auto size-fit text-white/20"></iconify-icon>
		<img
			use:zoom
			src={siteAsset(project.image)}
			alt={project.name}
			class="relative w-full h-full object-cover"
			onerror={(e) => e.currentTarget.remove()}
		/>

        
		<span class="absolute top-3 left-3 subtext rounded-sm bg-black/60 px-2 py-1 text-white/80 backdrop-blur-md">{project.date}</span>
		<button
			type="button"
			title="Voir sur le site"
			aria-label="Voir {project.name} sur le site"
			onclick={(e) => {
                e.preventDefault();
				window.open(siteAsset(`/en/projects/${project.slug}`), '_blank', 'noopener');
			}}
			class="absolute top-3 right-3 flex items-center p-2 rounded-md bg-black/60 text-white/80 backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-white hover:text-black"
		>
			<iconify-icon icon="lucide:external-link" width="14"></iconify-icon>
		</button>
	</div>
    
	<div class="relative overflow-hidden p-5 flex flex-col gap-12 flex-1">
        <img
            use:zoom
            src={siteAsset(project.image)}
            alt={project.name}
            class="absolute -top-25 saturate-150 opacity-50 blur-[100px] w-full h-full object-cover"
            onerror={(e) => e.currentTarget.remove()}
        />
		<div class="flex items-baseline justify-between gap-3">
			<p class="subtitle text-white truncate">{project.name}</p>
			<span class="subtext text-white/45 shrink-0">{project.weeks} semaine{project.weeks > 1 ? 's' : ''}</span>
		</div>
		<!-- <p class="p text-white/58 line-clamp-2">{project.description.fr}</p> -->
		<div class="mt-auto pt-2 flex items-center justify-between gap-3">
			<TechLogos stack={project.techStack} />
			<TeamDots team={project.team} {members} />
		</div>
	</div>
</a>
