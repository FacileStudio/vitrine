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
		{ value: 'site', label: 'Ordre du site' },
		{ value: 'recent', label: 'Plus récents' },
		{ value: 'name', label: 'Nom' },
	] as const;

	const VIEWS = [
		{ value: 'grid', icon: 'lucide:layout-grid', label: 'Grille' },
		{ value: 'list', icon: 'lucide:list', label: 'Liste' },
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
			error = 'Erreur chargement des projets';
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

<div class="p-8 mx-auto space-y-8">
	<header class="flex flex-wrap items-end justify-between gap-6">
		<div>
			<div class="flex items-baseline gap-3">
				<h1 class="title text-white">Projects</h1>
				{#if projects}
					<span class="subtext rounded-sm bg-white/10 px-1.5 py-0.5 text-white/70">{projects.length}</span>
				{/if}
			</div>
			<p class="p text-white/58 mt-2">Les projets affichés sur la page projets du site</p>
		</div>

		<div class="flex flex-wrap items-center gap-1">
			<label class="flex items-center gap-2 w-72 rounded-md bg-stone-700/10 px-3 py-2.5 focus-within:bg-stone-700/20">
				<iconify-icon icon="lucide:search" width="16" class="text-white/45"></iconify-icon>
				<input
					bind:this={search}
					bind:value={query}
					placeholder="Rechercher un projet, une techno..."
					class="p flex-1 min-w-0 bg-transparent text-white placeholder:text-white/35 outline-none"
					onkeydown={(e) => {
						if (e.key === 'Escape') {
							query = '';
							e.currentTarget.blur();
						}
					}}
				/>
				<kbd class="subtext rounded-sm bg-white/10 px-1.5 text-white/45">/</kbd>
			</label>

			<label class="flex items-center gap-2 rounded-md bg-stone-700/10 pl-3 pr-2 py-2.5">
				<iconify-icon icon="lucide:arrow-up-down" width="14" class="text-white/45"></iconify-icon>
				<select bind:value={sort} class="p bg-transparent text-white/80 outline-none cursor-pointer">
					{#each SORTS as option (option.value)}
						<option value={option.value} class="bg-[#111]">{option.label}</option>
					{/each}
				</select>
			</label>

			<div class="flex items-center rounded-md bg-stone-700/10 p-1">
				{#each VIEWS as option (option.value)}
					<button
						type="button"
						title={option.label}
						aria-label={option.label}
						aria-pressed={view === option.value}
						onclick={() => pickView(option.value)}
						class="flex items-center p-2 rounded-sm {view === option.value ? 'bg-white text-black' : 'text-white/58 hover:text-white'}"
					>
						<iconify-icon icon={option.icon} width="16"></iconify-icon>
					</button>
				{/each}
			</div>
		</div>
	</header>

	{#if error}
		<p class="p bg-red-500/10 text-red-300 px-6 py-3 rounded-xl">{error}</p>
	{:else if !projects}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{:else if shown.length === 0}
		<div use:enter class="bg-stone-700/5 rounded-md py-20 flex flex-col items-center gap-1 text-center">
			<iconify-icon icon="lucide:search-x" width="28" class="text-white/30"></iconify-icon>
			<p class="lead text-white">Aucun projet ne correspond à « {query} »</p>
			<button type="button" onclick={() => (query = '')} class="p text-white/58 hover:text-white">Effacer la recherche</button>
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
