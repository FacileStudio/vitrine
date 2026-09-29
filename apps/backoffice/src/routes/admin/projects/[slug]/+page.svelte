<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import type { Project, ProjectOptions } from '$lib/components/projects/types';
	import { isEndSection, isInfoSection } from '$lib/components/projects/elements';
	import { describe, infoInput, prepare } from '$lib/components/projects/project';
	import { collapse, enter, settle } from '$lib/motion';
	import SectionRow from '$lib/components/projects/SectionRow.svelte';
	import ProjectInfoCard from '$lib/components/projects/ProjectInfoCard.svelte';
	import SaveBar from '$lib/components/SaveBar.svelte';

	let project = $state<Project | null>(null);
	let options = $state<ProjectOptions | null>(null);
	let error = $state('');
	let saving = $state(false);
	let saveError = $state('');
	let baseline = $state('');
	let list = $state<HTMLElement>();
	let dragged = $state<number | null>(null);
	let over = $state<number | null>(null);

	const sections = $derived(project?.story ?? []);
	const dirty = $derived(project !== null && JSON.stringify(project) !== baseline);

	function load(result: Project) {
		project = prepare(result);
		baseline = JSON.stringify(project);
	}

	onMount(async () => {
		try {
			// the dropdown lists are optional, a failure there must not hide a project that loaded fine
			trpc.projects.options
				.query()
				.then((available) => (options = available))
				.catch((err) => logger.error({ err }, 'Failed to load project options'));

			load(await trpc.projects.get.query({ slug: page.params.slug! }));
		} catch (err) {
			logger.error({ err }, 'Failed to load project');
			error = 'Projet introuvable';
		}
	});

	async function addSection() {
		if (!project || saving)
			return;

		// the generated end section stays last
		const end = project.story.findIndex(isEndSection);

		const index = end === -1 ? project.story.length : end;

		project.story.splice(index, 0, {
			blocks: [],
			layout: { cols: 3, items: [] },
			hasLayout: true,
			by: [],
		});

		await tick();
		list?.children[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		await saveProject();
	}

	// the intro and the generated end are pinned, only the story sections in between move
	const movable = (index: number) => {
		const section = project?.story[index];

		return !!section && !isEndSection(section) && !isInfoSection(section);
	};

	async function moveSection(from: number, to: number) {
		if (!project || from === to || saving)
			return;

		const [section] = project.story.splice(from, 1);

		project.story.splice(to, 0, section);

		await tick();

		const row = list?.children[to];

		if (row)
			settle(row, from < to ? -16 : 16);

		await saveProject();
	}

	function removeSection(index: number, row: HTMLElement | null) {
		if (!row)
			return;

		collapse(row, () => project?.story.splice(index, 1));
	}

	async function saveProject() {
		if (!project)
			return;

		saving = true;
		saveError = '';

		try {
			const snapshot = $state.snapshot(project) as Project;

			load(
				await trpc.projects.update.mutate({
					...infoInput(snapshot),
					story: snapshot.story.filter((s) => !isEndSection(s)),
					bucket: snapshot.bucket,
				})
			);
		} catch (err) {
			logger.error({ err }, 'Failed to save project');
			saveError = describe(err);
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
		<SaveBar {dirty} {saving} error={saveError} onsave={saveProject} />

		<div class="flex items-baseline gap-3">
			<h1 class="title text-white">{project.name}</h1>
			<span class="subtext text-white/45">{sections.length} sections</span>
		</div>

		<div bind:this={list} class="flex flex-col gap-1">
			{#each sections as section, i (i)}
				{#if isEndSection(section)}
					<div use:enter class="bg-stone-700/10 p-6 rounded-md flex items-center gap-6">
						<span class="subtext text-white/30">Fin (généré automatiquement)</span>
					</div>
				{:else if isInfoSection(section)}
					<div use:enter class="bg-stone-700/10 p-6 rounded-md">
						<ProjectInfoCard bind:project {options} />
					</div>
				{:else}
					<div
						use:enter
						role="listitem"
						class="relative {dragged === i ? 'opacity-40' : ''}"
						ondragstart={(e) => {
							dragged = i;
							e.dataTransfer?.setData('text/plain', String(i));
							// the drag starts on the link inside, the whole row should follow the cursor, not a URL
							if (e.dataTransfer) {
								e.dataTransfer.effectAllowed = 'move';
								e.dataTransfer.setDragImage(e.currentTarget, 24, 24);
							}
						}}
						ondragover={(e) => {
							if (dragged === null || !movable(i))
								return;
							e.preventDefault();
							over = i;
						}}
						ondrop={(e) => {
							e.preventDefault();
							if (dragged !== null)
								moveSection(dragged, i);
							dragged = over = null;
						}}
						ondragend={() => (dragged = over = null)}
					>
						{#if dragged !== null && over === i && dragged !== i}
							<span class="absolute inset-x-0 h-0.5 rounded-full bg-white z-10 {dragged < i ? '-bottom-0.5' : '-top-0.5'}"></span>
						{/if}
						<SectionRow slug={project.slug} {section} index={i} />
						<button
							type="button"
							aria-label="Supprimer la section"
							onclick={(e) => removeSection(i, e.currentTarget.parentElement)}
							class="absolute top-1/2 -translate-y-1/2 right-4 flex items-center p-2 rounded-md text-white/30 hover:bg-red-500/20 hover:text-red-300"
						>
							<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
						</button>
					</div>
				{/if}
			{/each}

			<button
				type="button"
				onclick={addSection}
				disabled={saving}
				class="p disabled:opacity-50 bg-stone-700/10 p-6 rounded-md flex items-center gap-3 text-white/58 hover:bg-white/[0.03] hover:text-white"
			>
				<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
				Ajouter une section
			</button>
		</div>
	{/if}
</div>
