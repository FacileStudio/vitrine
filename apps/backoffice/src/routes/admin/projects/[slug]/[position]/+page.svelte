<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { page } from '$app/state';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import type { Project, ProjectOptions } from '$lib/components/projects/types';
	import { isInfoSection } from '$lib/components/projects/editor/elements';
	import ElementLibrary from '$lib/components/projects/editor/ElementLibrary.svelte';
	import SectionGrid from '$lib/components/projects/editor/SectionGrid.svelte';
	import SectionBucket from '$lib/components/projects/editor/SectionBucket.svelte';
	import ProjectInfoCard from '$lib/components/projects/overview/ProjectInfoCard.svelte';
	import ItemDialog from '$lib/components/projects/editor/ItemDialog.svelte';
	import MultiSelect from '$lib/components/projects/ui/MultiSelect.svelte';
	import { ROWS, addToBucket, fits, moveToBucket, removeItem, trimmed } from '$lib/components/projects/editor/gridOps';
	import { describe, infoInput, prepare } from '$lib/components/projects/project';
	import { goto } from '$app/navigation';
	import { enter } from '$lib/motion';
	import SaveBar from '$lib/components/SaveBar.svelte';

	let project = $state<Project | null>(null);
	let options = $state<ProjectOptions | null>(null);
	let error = $state('');

	const slug = $derived(page.params.slug!);
	const position = $derived(Number(page.params.position));
	const section = $derived(project?.story[position]);

	let baseline = $state('');

	const dirty = $derived(project !== null && JSON.stringify(project) !== baseline);

	function load(result: Project) {
		project = prepare(result);
		baseline = JSON.stringify(project);
	}

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
			.then(load)
			.catch((err) => {
				logger.error({ err }, 'Failed to load project');
				error = 'Project not found';
			});
	});

	let saving = $state(false);
	let saveError = $state('');

	const chips = $derived.by(() => {
		if (!section || !project || isInfoSection(section))
			return [];

		const items = section.layout.items.length;
		const media = section.layout.items.filter((item) => item.kind === 'image' || item.kind === 'video').length;

		return [
			{ icon: 'lucide:grid-2x2', label: `${Math.max(1, trimmed(section.layout).cols)}×${ROWS}` },
			{ icon: 'lucide:layers', label: `${items} item${items > 1 ? 's' : ''}` },
			{ icon: 'lucide:image', label: `${media} media` },
			{ icon: 'lucide:inbox', label: `${project.bucket.length} in the bucket` },
		];
	});

	async function saveStory() {
		if (!project)
			return;

		saving = true;
		saveError = '';

		try {
			const snapshot = $state.snapshot(project) as Project;

			if (section && isInfoSection(section))
				await trpc.projects.updateInfo.mutate(infoInput(snapshot));

			const sections = snapshot.story.map((s, position) => ({
				position,
				layout: trimmed(s.layout),
				by: s.by ?? [],
			}));
			load(
				await trpc.projects.updateStory.mutate({
					slug,
					sections,
					bucket: snapshot.bucket,
				})
			);
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

	// alt+arrows walk the sections, typing in a field keeps the arrows for the caret
	function walk(e: KeyboardEvent) {
		if (!e.altKey || !project || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight'))
			return;

		const next = position + (e.key === 'ArrowLeft' ? -1 : 1);

		if (next < 0 || next >= project.story.length)
			return;

		e.preventDefault();
		goto(`/admin/projects/${slug}/${next}`);
	}
</script>

<svelte:window onkeydown={walk} />

<div class="space-y-6">
	<nav aria-label="Breadcrumb" class="p flex items-center gap-2 text-faint">
		<a href="/admin/projects" class="hover:text-ink">Projects</a>
		<iconify-icon icon="lucide:chevron-right" width="14" class="text-white/25"></iconify-icon>
		<a href="/admin/projects/{slug}" class="hover:text-ink">{project?.name ?? 'Projet'}</a>
		<iconify-icon icon="lucide:chevron-right" width="14" class="text-white/25"></iconify-icon>
		<span class="text-soft">Section {position + 1}</span>
	</nav>

	{#if error}
		<p class="alert"><iconify-icon icon="lucide:circle-alert" width="16"></iconify-icon>{error}</p>
	{:else if !project}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{:else if !section}
		<p class="alert"><iconify-icon icon="lucide:circle-alert" width="16"></iconify-icon>Section not found</p>
	{:else}
		<SaveBar {dirty} {saving} error={saveError} onsave={saveStory} />

		<header class="flex flex-wrap items-end justify-between gap-6">
			<div class="min-w-0 space-y-3">
				<h1 class="title text-ink truncate">
					{isInfoSection(section) ? 'Cover & intro' : (section.title?.en ?? 'Untitled')}
				</h1>
				
			</div>

			<div class="flex items-center gap-3">
				<div class="flex items-center gap-2 min-w-64 rounded-md bg-raised pl-4 pr-2 py-1">
					<iconify-icon icon="lucide:users-round" width="16" class="text-faint"></iconify-icon>
					<MultiSelect
						bind:selected={project.story[position].by!}
						options={(options?.members ?? []).map((m) => ({ value: m.slug, label: m.name }))}
						placeholder="No team"
					/>
				</div>

				<div class="flex items-center rounded-md bg-raised p-1">
					{#each [{ to: position - 1, icon: 'lucide:chevron-left', label: 'Previous section' }, { to: position + 1, icon: 'lucide:chevron-right', label: 'Next section' }] as nav, n (nav.icon)}
						{#if n === 1}
							<span class="subtext px-2 text-muted tabular-nums">{position + 1} / {project.story.length}</span>
						{/if}
						{#if nav.to >= 0 && nav.to < project.story.length}
							<a
								href="/admin/projects/{slug}/{nav.to}"
								aria-label={nav.label}
								title="{nav.label} (Alt {nav.to < position ? '←' : '→'})"
								class="flex items-center p-2 rounded-sm text-muted hover:bg-white/[0.06] hover:text-ink"
							>
								<iconify-icon icon={nav.icon} width="16"></iconify-icon>
							</a>
						{:else}
							<span class="flex items-center p-2 text-white/15">
								<iconify-icon icon={nav.icon} width="16"></iconify-icon>
							</span>
						{/if}
					{/each}
				</div>
			</div>
		</header>

		{#key position}
		<div use:enter>
		{#if isInfoSection(section)}
			<div>
				<ProjectInfoCard bind:project {options} />
			</div>
		{:else}
			<div class="grid gap-1 items-start lg:grid-cols-[16rem_minmax(0,1fr)]">
			<div class="lg:sticky lg:top-28">
				<ElementLibrary onadd={(kind, w, h) => project && addToBucket(project.bucket, kind, w, h)} />
			</div>

			<div class="space-y-1 min-w-0">

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
			</div>
			</div>
		{/if}
		</div>
		{/key}
	{/if}
</div>
