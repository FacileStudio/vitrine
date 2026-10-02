<script lang="ts">
	import { trpc } from '$lib/trpc';
	import Header from '$lib/components/Header.svelte';
	import { onMount, tick } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import { enter, flip } from '$lib/motion';
	import { describe } from '$lib/components/projects/project';
	import ProjectCard from '$lib/components/projects/list/ProjectCard.svelte';
	import ProjectRow from '$lib/components/projects/list/ProjectRow.svelte';
	import type { ProjectSummary, StudioMemberSummary } from '$lib/components/projects/types';

	const SORTS = [
		{ value: 'site', label: 'Site order' },
		{ value: 'recent', label: 'Newest' },
		{ value: 'name', label: 'Name' },
	] as const;

	const VIEWS = [
		{ value: 'grid', icon: 'lucide:layout-grid', label: 'Grid' },
		{ value: 'list', icon: 'lucide:list', label: 'List' },
	] as const;

	let projects = $state<ProjectSummary[] | null>(null);
	let members = $state(new Map<string, StudioMemberSummary>());
	let error = $state('');
	let query = $state('');
	let sort = $state<(typeof SORTS)[number]['value']>('site');
	let view = $state<(typeof VIEWS)[number]['value']>('grid');
	let search = $state<HTMLInputElement>();

	// name, description, tags, stack and team all answer a search
	let reorderError = $state('');
	let dragged = $state<string | null>(null);
	let over = $state<string | null>(null);
	let list = $state<HTMLElement>();

	// dragging only means something in the site's own order with nothing filtered out
	const canReorder = $derived(sort === 'site' && !query.trim());

	const indexOf = (slug: string) => projects?.findIndex((project) => project.slug === slug) ?? -1;

	async function move(from: string, to: string) {
		if (!projects || !list || from === to)
			return;

		const previous = projects;
		const next = [...projects];
		const [item] = next.splice(indexOf(from), 1);

		next.splice(previous.findIndex((project) => project.slug === to), 0, item);

		await flip([...list.children], async () => {
			projects = next;
			await tick();
		});

		try {
			projects = await trpc.projects.reorder.mutate({ slugs: next.map((project) => project.slug) });
			reorderError = '';
		} catch (err) {
			logger.error({ err }, 'Failed to reorder projects');
			projects = previous;
			reorderError = describe(err);
		}
	}

	function dragProps(slug: string) {
		return {
			draggable: canReorder,
			ondragstart: (e: DragEvent) => {
				if (!canReorder)
					return e.preventDefault();

				dragged = slug;
				e.dataTransfer?.setData('text/plain', slug);

				if (e.dataTransfer) {
					e.dataTransfer.effectAllowed = 'move';
					e.dataTransfer.setDragImage(e.currentTarget as Element, 24, 24);
				}
			},
			ondragover: (e: DragEvent) => {
				if (!dragged)
					return;

				e.preventDefault();
				over = slug;
			},
			ondrop: (e: DragEvent) => {
				e.preventDefault();

				if (dragged)
					move(dragged, slug);

				dragged = over = null;
			},
			ondragend: () => (dragged = over = null),
		};
	}

	// the bar sits on the side the dragged item will land: after the target when moving forward
	const landsAfter = (slug: string) => dragged !== null && indexOf(dragged) < indexOf(slug);

	const shown = $derived.by(() => {
		const needle = query.trim().toLowerCase();
		const matches = (projects ?? []).filter((p) =>
			[p.name, p.description.fr, ...p.services, ...p.techStack, ...p.team.map((slug) => members.get(slug)?.name ?? slug)]
				.join(' ')
				.toLowerCase()
				.includes(needle)
		);

		if (sort === 'recent')
			return matches.toSorted((a, b) => b.date.localeCompare(a.date));

		if (sort === 'name')
			return matches.toSorted((a, b) => a.name.localeCompare(b.name));

		return matches;
	});

	onMount(async () => {
		try {
			view = localStorage.getItem('projects:view') === 'list' ? 'list' : 'grid';
		} catch {
			// storage can be blocked, the grid is a fine default
		}

		trpc.studio.list
			.query()
			.then((list) => (members = new Map(list.map((m) => [m.slug, m]))))
			.catch((err) => logger.error({ err }, 'Failed to load studio members'));

		try {
			projects = await trpc.projects.list.query();
		} catch (err) {
			logger.error({ err }, 'Failed to load projects');
			error = 'Could not load the projects';
		}
	});

	function pickView(value: typeof view) {
		view = value;

		try {
			localStorage.setItem('projects:view', value);
		} catch {
			// remembering the view is a convenience, nothing breaks without it
		}
	}
</script>

<svelte:window
	onkeydown={(e) => {
		const typing = (e.target as HTMLElement).closest('input, textarea, select, [contenteditable]');

		if (e.key === '/' && !typing) {
			e.preventDefault();
			search?.focus();
		}
	}}
/>

<div class="mx-auto space-y-8">
	<Header title="Projects" count={projects?.length} description="The projects shown on the site's projects page">
		{#snippet details()}
			<span class="text-faint">· {canReorder ? 'drag to reorder' : 'switch to site order and clear the search to reorder'}</span>
		{/snippet}
	
		{#snippet actions()}
			<label class="field w-72">
				<iconify-icon icon="lucide:search" width="16" class="text-faint"></iconify-icon>
				<input
					bind:this={search}
					bind:value={query}
					placeholder="Search a project or a tech..."
					class="field-input"
					onkeydown={(e) => {
						if (e.key === 'Escape') {
							query = '';
							e.currentTarget.blur();
						}
					}}
				/>
				<kbd class="kbd">/</kbd>
			</label>
	
			<label class="field">
				<iconify-icon icon="lucide:arrow-up-down" width="14" class="text-faint"></iconify-icon>
				<select bind:value={sort} class="field-select">
					{#each SORTS as option (option.value)}
						<option value={option.value}>{option.label}</option>
					{/each}
				</select>
			</label>
	
			<div class="segmented">
				{#each VIEWS as option (option.value)}
					<button
						type="button"
						title={option.label}
						aria-label={option.label}
						aria-pressed={view === option.value}
						onclick={() => pickView(option.value)}
						class="segmented-item"
					>
						<iconify-icon icon={option.icon} width="16"></iconify-icon>
					</button>
				{/each}
			</div>
		{/snippet}
	</Header>

	{#if reorderError}
		<p class="alert"><iconify-icon icon="lucide:circle-alert" width="16"></iconify-icon>{reorderError}</p>
	{/if}
	{#if error}
		<p class="alert"><iconify-icon icon="lucide:circle-alert" width="16"></iconify-icon>{error}</p>
	{:else if !projects}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{:else if shown.length === 0}
		<div use:enter class="empty-state">
			<iconify-icon icon="lucide:search-x" width="28" class="text-ghost"></iconify-icon>
			<p class="lead text-ink">No project matches “{query}”</p>
			<button type="button" onclick={() => (query = '')} class="p text-muted hover:text-ink">Clear search</button>
		</div>
	{:else if view === 'grid'}
		<div bind:this={list} class="grid gap-fc sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
			{#each shown as project (project.slug)}
				<div use:enter {...dragProps(project.slug)} role="listitem" class="relative flex {dragged === project.slug ? 'opacity-40' : ''}">
					{#if over === project.slug && dragged && dragged !== project.slug}
						<span class="absolute inset-y-0 z-10 w-0.5 rounded-full bg-brand {landsAfter(project.slug) ? '-right-[3px]' : '-left-[3px]'}"></span>
					{/if}
					<ProjectCard {project} {members} />
				</div>
			{/each}
		</div>
	{:else}
		<div bind:this={list} class="flex flex-col gap-fc">
			{#each shown as project (project.slug)}
				<div use:enter {...dragProps(project.slug)} role="listitem" class="relative {dragged === project.slug ? 'opacity-40' : ''}">
					{#if over === project.slug && dragged && dragged !== project.slug}
						<span class="absolute inset-x-0 z-10 h-0.5 rounded-full bg-brand {landsAfter(project.slug) ? '-bottom-[3px]' : '-top-[3px]'}"></span>
					{/if}
					<ProjectRow {project} {members} />
				</div>
			{/each}
		</div>
	{/if}
</div>
