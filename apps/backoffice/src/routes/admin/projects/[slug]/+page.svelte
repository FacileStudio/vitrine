<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import type { Project, ProjectOptions } from '$lib/components/projects/types';
	import { isEndSection, isInfoSection } from '$lib/components/projects/elements';
	import SectionRow from '$lib/components/projects/SectionRow.svelte';
	import ProjectInfoCard from '$lib/components/projects/ProjectInfoCard.svelte';

	let project = $state<Project | null>(null);
	let options = $state<ProjectOptions | null>(null);
	let error = $state('');
	let saving = $state(false);
	let saved = $state(false);
	let saveError = $state('');

	const sections = $derived(project?.story ?? []);

	onMount(async () => {
		try {
			// the dropdown lists are optional, a failure there must not hide a project that loaded fine
			trpc.projects.options
				.query()
				.then((available) => (options = available))
				.catch((err) => logger.error({ err }, 'Failed to load project options'));

			const result = await trpc.projects.get.query({ slug: page.params.slug! });
			result.story.forEach((s) => (s.by ??= []));
			project = result;
		} catch (err) {
			logger.error({ err }, 'Failed to load project');
			error = 'Projet introuvable';
		}
	});

	function addSection() {
		if (!project) return;

		project.story.push({
			blocks: [],
			layout: { cols: 3, items: [] },
			hasLayout: true,
		});
	}

	function removeSection(index: number) {
		if (!project) return;

		project.story.splice(index, 1);
	}

	async function saveProject() {
		if (!project) return;

		saving = true;
		saved = false;
		saveError = '';

		try {
			const snapshot = $state.snapshot(project);
			snapshot.story = snapshot.story.filter((s) => !isEndSection(s));
			project = await trpc.projects.update.mutate(snapshot);
			project.story.forEach((s) => (s.by ??= []));
			saved = true;
		} catch (err) {
			logger.error({ err }, 'Failed to save project');
			saveError = "Erreur lors de l'enregistrement";
		} finally {
			saving = false;
		}
	}
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
		<div class="flex items-center justify-between">
			<h1 class="title text-white">{project.name}</h1>
			<button
				type="button"
				onclick={addSection}
				class="bg-stone-700/5 rounded-md px-6 py-3 hover:bg-white/[0.05]">Add new section</button>
		</div>

		<div class="flex flex-col gap-1">
			{#each sections as section, i (i)}
				{#if isEndSection(section)}
					<div class="bg-stone-700/5 p-6 rounded-md flex items-center gap-6">
						<span class="subtext text-white/30">Fin (généré automatiquement)</span>
					</div>
				{:else if isInfoSection(section)}
					<ProjectInfoCard bind:project {options} />
				{:else}
					<div class="relative group">
						<SectionRow slug={project.slug} {section} index={i} />
						<button
							type="button"
							onclick={() => removeSection(i)}
							class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-red-500/20 text-red-300 rounded-md px-3 py-1.5 subtext hover:bg-red-500/30"
						>
							<iconify-icon icon="lucide:trash-2" width="14"></iconify-icon>
						</button>
					</div>
				{/if}
			{/each}
		</div>

		<div class="flex items-center justify-end gap-4">
			<p class="p {saveError ? 'text-red-400' : 'text-white/58'}">
				{saveError || (saved ? 'Enregistré' : '')}
			</p>
			<button
				type="button"
				onclick={saveProject}
				disabled={saving}
				class="lead flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl hover:bg-white/90 disabled:opacity-50"
			>
				<iconify-icon icon="lucide:save" width="18"></iconify-icon>
				{saving ? 'Enregistrement...' : 'Enregistrer'}
			</button>
		</div>
	{/if}
</div>