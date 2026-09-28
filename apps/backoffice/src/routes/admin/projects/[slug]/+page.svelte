<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import type { Project, ProjectOptions } from '$lib/components/projects/types';
	import { isInfoSection } from '$lib/components/projects/elements';
	import SectionRow from '$lib/components/projects/SectionRow.svelte';
	import ProjectInfoCard from '$lib/components/projects/ProjectInfoCard.svelte';

	let project = $state<Project | null>(null);
	let options = $state<ProjectOptions | null>(null);
	let error = $state('');

	onMount(async () => {
		try {
			// the dropdown lists are optional, a failure there must not hide a project that loaded fine
			trpc.projects.options
				.query()
				.then((available) => (options = available))
				.catch((err) => logger.error({ err }, 'Failed to load project options'));

			project = await trpc.projects.get.query({ slug: page.params.slug! });
		} catch (err) {
			logger.error({ err }, 'Failed to load project');
			error = 'Projet introuvable';
			return;
		}

	});

//      now let's do the project slug page.

//   What I would want is multiple x by 3 grid that will be my sections where I can drag and drop any type of block
//   I want, 1x1, 2x1, 3x1, 1x2, 2x2, 3x2, 1x3, 2x3 or 3x3. In those I can add, text (like note with subtitle and
//   description) or just description, a video or an image (which I will be able to drag and drop too. Can we
//   simplify this
</script>

<div class="p-8 mx-auto space-y-6">
    <a href="/admin/projects" class="p inline-flex items-center gap-2 text-white/58 hover:text-white">
        <iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon>
        Projects
    </a>

    {#if !project}
        {#if error}
            <p class="p bg-red-500/10 text-red-300 px-4 py-3 rounded-xl">{error}</p>
        {:else}
            <div class="py-20 flex justify-center">
                <Spinner size="xl" />
            </div>
        {/if}
    {:else}
        <div class="w-full flex justify-between items-center">
            <h1 class="title text-white">{project.name}</h1>
            <button class="bg-stone-700/5 rounded-md px-6 py-3">Add new block</button>
        </div>

        <div class="flex flex-col gap-1">
            {#each project.story as section, i (i)}
                {#if isInfoSection(section)}
                    <ProjectInfoCard bind:project {options} />
                {:else}
                    <SectionRow slug={project.slug} {section} index={i} />
                {/if}
            {/each}
        </div>
    {/if}
</div>