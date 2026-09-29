<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import type { Project, ProjectOptions } from '$lib/components/projects/types';
	import { isEndSection, isInfoSection } from '$lib/components/projects/editor/elements';
	import { describe, infoInput, prepare } from '$lib/components/projects/project';
	import { collapse, enter, settle } from '$lib/motion';
	import SectionRow from '$lib/components/projects/overview/SectionRow.svelte';
	import ProjectInfoCard from '$lib/components/projects/overview/ProjectInfoCard.svelte';
	import SaveBar from '$lib/components/SaveBar.svelte';
	import { loadMembers } from '$lib/members';
	import type { StudioMemberSummary } from '$lib/components/projects/types';

	let project = $state<Project | null>(null);
	let options = $state<ProjectOptions | null>(null);
	let members = $state(new Map<string, StudioMemberSummary>());
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

			loadMembers()
				.then((loaded) => (members = loaded))
				.catch((err) => logger.error({ err }, 'Failed to load studio members'));

			load(await trpc.projects.get.query({ slug: page.params.slug! }));
		} catch (err) {
			logger.error({ err }, 'Failed to load project');
			error = 'Project not found';
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

<div class="space-y-6">
	<a href="/admin/projects" class="p inline-flex items-center gap-2 text-muted hover:text-ink">
		<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon>
		Projects
	</a>

	{#if !project}
		{#if error}
			<p class="alert"><iconify-icon icon="lucide:circle-alert" width="16"></iconify-icon>{error}</p>
		{:else}
			<div class="py-20 flex justify-center">
				<Spinner size="xl" />
			</div>
		{/if}
	{:else}
		<SaveBar {dirty} {saving} error={saveError} onsave={saveProject} />

		<div bind:this={list} class="flex flex-col gap-1">
			{#each sections as section, i (i)}
				{#if isEndSection(section)}
                    <span class="hidden" aria-label="Last section"></span>
				{:else if isInfoSection(section)}
					<div use:enter={{ fade: false }} class="mb-12">
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
							<span class="absolute inset-x-0 h-0.5 rounded-full bg-ink z-10 {dragged < i ? '-bottom-0.5' : '-top-0.5'}"></span>
						{/if}
						<SectionRow slug={project.slug} {section} index={i} {members} />
						<button
							type="button"
							aria-label="Delete section"
							onclick={(e) => removeSection(i, e.currentTarget.parentElement)}
							class="absolute top-1/2 -translate-y-1/2 right-2 lg:right-4 flex items-center p-2 rounded-project text-ghost hover:bg-red-500/20 hover:text-danger"
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
				class="p disabled:opacity-50 bg-raised p-6 rounded-project flex items-center gap-3 text-muted hover:bg-surface-hover hover:text-ink"
			>
				<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
				Add a section
			</button>
		</div>
	{/if}
</div>
