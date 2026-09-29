<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { onMount } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import { siteAsset } from '$lib/site';
	import { enter } from '$lib/motion';

	type Project = Awaited<ReturnType<typeof trpc.projects.list.query>>[number];

	let projects = $state<Project[] | null>(null);
	let error = $state('');

	onMount(async () => {
		try {
			projects = await trpc.projects.list.query();
		} catch (err) {
			logger.error({ err }, 'Failed to load projects');
			error = 'Erreur chargement des projets';
		}
	});
</script>

<div class="p-8 max-w-full mx-auto space-y-12">
	<header>
		<h1 class="title text-white">Projects</h1>
		<p class="p text-white/58 mt-4">Les projets affichés sur la page projets du site</p>
	</header>

	{#if error}
		<p class="p bg-red-500/10 text-red-300 px-6 py-3 rounded-xl">{error}</p>
	{:else if !projects}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{:else}
		<div class="gap-1 flex flex-col">
			{#each projects as project (project.slug)}
				<a
					use:enter
					href="/admin/projects/{project.slug}"
					class="group bg-white/[0.03] rounded-md overflow-hidden hover:bg-white/[0.05]"
				>
					<div class="flex items-start ">
						<img src={siteAsset(project.image)} alt={project.slug} class="w-80 aspect-16/10 rounded-sm object-cover" />
						<div class="min-w-0 py-5 px-8 h-50 flex flex-col justify-between gap-2">
                            <div>
                                <p class="subtitle text-white">{project.name}</p>
                                <p class="p text-white/58 mt-2 line-clamp-3 max-w-[80ch]">{project.description.fr}</p>
                            </div>
                            <p class="subtext text-white/45 mt-1">
                                    {project.date} · {project.weeks} semaines · {project.story.length} sections · {project.gallery.length} images
                            </p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
