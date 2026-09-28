<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { page } from '$app/state';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import type { Project, ProjectOptions } from '$lib/components/projects/types';
	import { isInfoSection } from '$lib/components/projects/elements';
	import ElementLibrary from '$lib/components/projects/ElementLibrary.svelte';
	import SectionGrid from '$lib/components/projects/SectionGrid.svelte';
	import SectionBucket from '$lib/components/projects/SectionBucket.svelte';
	import ProjectInfoCard from '$lib/components/projects/ProjectInfoCard.svelte';
	import ItemDialog from '$lib/components/projects/ItemDialog.svelte';
	import MultiSelect from '$lib/components/projects/MultiSelect.svelte';
	import { addToBucket, fits, moveToBucket, removeItem, trimmed } from '$lib/components/projects/gridOps';

	let project = $state<Project | null>(null);
	let options = $state<ProjectOptions | null>(null);
	let error = $state('');

	const slug = $derived(page.params.slug!);
	const position = $derived(Number(page.params.position));
	const section = $derived(project?.story[position]);

	// the API leaves an empty credit list out, the section's people dropdown needs an array to bind to
	const withCredits = (result: Project) => {
		result.story.forEach((s) => (s.by ??= []));
		result.bucket = [...new Map(result.bucket.map((item) => [item.id, item])).values()];
		return result;
	};

	let editingId = $state<string | null>(null);

	// where the clicked item lives, so the dialog binds to that exact entry of the grid or the shared bucket
	const editing = $derived.by(() => {
		if (!section || !editingId)
			return null;

		const index = section.layout.items.findIndex((item) => item.id === editingId);

		if (index !== -1)
			return { list: 'items' as const, index };

		if (!project)
			return null;

		const inBucket = project.bucket.findIndex((item) => item.id === editingId);

		return inBucket === -1 ? null : { list: 'bucket' as const, index: inBucket };
	});

	// reads slug only: moving between sections of one project keeps the data, section is derived from position
	$effect(() => {
		trpc.projects.get
			.query({ slug })
			.then((result) => (project = withCredits(result)))
			.catch((err) => {
				logger.error({ err }, 'Failed to load project');
				error = 'Projet introuvable';
			});
	});

	let saving = $state(false);
	let saved = $state(false);
	let saveError = $state('');

	// zod input errors arrive as a JSON list of issues, the API's own checks as a plain sentence
	function describe(err: unknown) {
		const message = (err as Error).message;

		try {
			const issues: Array<{ path: (string | number)[] }> = JSON.parse(message);
			return `Champs invalides : ${issues.map((issue) => issue.path.join('.')).join(', ')}`;
		} catch {
			return message || "Erreur lors de l'enregistrement";
		}
	}

	async function saveStory() {
		if (!project)
			return;

		saving = true;
		saved = false;
		saveError = '';

		try {
			const snapshot = $state.snapshot(project);
			const sections = snapshot.story.map((s, position) => ({
				position,
				layout: trimmed(s.layout),
				by: s.by ?? [],
			}));
			project = withCredits(
				await trpc.projects.updateStory.mutate({
					slug,
					sections,
					bucket: snapshot.bucket,
				})
			);
			saved = true;
		} catch (err) {
			logger.error({ err }, 'Failed to save story');
			saveError = describe(err);
		} finally {
			saving = false;
		}
	}

	// the dropdown lists are optional, a failure there must not hide a project that loaded fine
	$effect(() => {
		trpc.projects.options
			.query()
			.then((available) => (options = available))
			.catch((err) => logger.error({ err }, 'Failed to load project options'));
	});
</script>

<div class="p-8 mx-auto space-y-12">
	<a href="/admin/projects/{slug}" class="p inline-flex items-center gap-2 text-white/58 hover:text-white">
		<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon>
		{project?.name ?? 'Projet'}
	</a>

	{#if error}
		<p class="p bg-red-500/10 text-red-300 px-4 py-3 rounded-xl">{error}</p>
	{:else if !project}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{:else if !section}
		<p class="p bg-red-500/10 text-red-300 px-4 py-3 rounded-xl">Section introuvable</p>
	{:else}
		<div class="w-full flex justify-between items-center gap-4">
			<div class="flex items-baseline gap-3 min-w-0">
				<span class="subtext text-white/45">{position + 1} / {project.story.length}</span>
				<h1 class="title text-white truncate">{section.title?.en ?? 'Sans titre'}</h1>
			</div>

            <div class="flex  gap-2 items-center ">
					<span class="lead text-white/80">Équipe</span>
					<MultiSelect
						bind:selected={project.story[position].by!}
						options={(options?.members ?? []).map((m) => ({ value: m.slug, label: m.name }))}
						placeholder="Personne"
					/>
				</div>

			<div class="flex gap-4 p-4 shrink-0">
				{#if position > 0}
					<a href="/admin/projects/{slug}/{position - 1}">
						<iconify-icon icon="lucide:chevron-left" width="16"></iconify-icon>
					</a>
				{/if}
				{#if position < project.story.length - 1}
					<a href="/admin/projects/{slug}/{position + 1}">
						<iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
					</a>
				{/if}
			</div>
		</div>

		{#if isInfoSection(section)}
			<ProjectInfoCard bind:project {options} />
		{:else}
			<ElementLibrary onadd={(kind, w, h) => project && addToBucket(project.bucket, kind, w, h)} />

			<div class="space-y-8">

				<SectionGrid bind:layout={project.story[position].layout} bucket={project.bucket} onedit={(id) => (editingId = id)} />
				<SectionBucket layout={project.story[position].layout} bind:bucket={project.bucket} onedit={(id) => (editingId = id)} />

				{#if editing && editingId}
					{@const id = editingId}
					{#if editing.list === 'items'}
						<ItemDialog
							bind:item={project.story[position].layout.items[editing.index]}
							gallery={project.gallery}
							inGrid={true}
							onclose={() => (editingId = null)}
							onbucket={() => project && moveToBucket(project.story[position].layout, project.bucket, id)}
							onremove={() => project && removeItem(project.story[position].layout, project.bucket, id)}
							fitsSize={(w, h) => {
								if (!project)
									return true;

								const layout = project.story[position].layout;
								const item = layout.items[editing.index];

								return fits(layout, { x: item.x, y: item.y, w, h }, id);
							}}
						/>
					{:else}
						<ItemDialog
							bind:item={project.bucket[editing.index]}
							gallery={project.gallery}
							inGrid={false}
							onclose={() => (editingId = null)}
							onbucket={() => project && moveToBucket(project.story[position].layout, project.bucket, id)}
							onremove={() => project && removeItem(project.story[position].layout, project.bucket, id)}
							fitsSize={() => true}
						/>
					{/if}
				{/if}

				<div class="flex items-center justify-end gap-4">
					<p class="p {saveError ? 'text-red-400' : 'text-white/58'}">
						{saveError || (saved ? 'Enregistré' : '')}
					</p>
					<button
						type="button"
						onclick={saveStory}
						disabled={saving}
						class="lead flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl hover:bg-white/90 disabled:opacity-50"
					>
						<iconify-icon icon="lucide:save" width="18"></iconify-icon>
						{saving ? 'Enregistrement...' : 'Enregistrer'}
					</button>
				</div>
			</div>
		{/if}
	{/if}
</div>
