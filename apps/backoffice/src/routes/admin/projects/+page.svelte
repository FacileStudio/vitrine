<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { onMount } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import { enter } from '$lib/motion';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import ProjectRow from '$lib/components/projects/ProjectRow.svelte';
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
	<header class="page-header">
		<div>
			<div class="flex items-baseline gap-3">
				<h1 class="title text-ink">Projects</h1>
				{#if projects}
					<span class="badge">{projects.length}</span>
				{/if}
			</div>
			<p class="page-description">The projects shown on the site's projects page</p>
		</div>

		<div class="flex flex-wrap items-center gap-1">
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
		</div>
	</header>

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
		<div class="grid gap-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
			{#each shown as project (project.slug)}
				<div use:enter class="flex">
					<ProjectCard {project} {members} />
				</div>
			{/each}
		</div>
	{:else}
		<div class="flex flex-col gap-1">
			{#each shown as project (project.slug)}
				<div use:enter>
					<ProjectRow {project} {members} />
				</div>
			{/each}
		</div>
	{/if}
</div>
