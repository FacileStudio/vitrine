<script lang="ts">
	import { trpc } from '$lib/trpc';
	import Header from '$lib/components/Header.svelte';
	import { onMount, tick } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import { goto } from '$app/navigation';
	import { collapse, enter, flip } from '$lib/motion';
	import { loadMembers } from '$lib/members';
	import { Reorder } from '$lib/reorder.svelte';
	import { describe } from '$lib/components/projects/project';
	import StepRow from '$lib/components/process/StepRow.svelte';
	import NewStepRow from '$lib/components/process/NewStepRow.svelte';
	import type { ProcessStep, StudioMemberSummary } from '$lib/components/process/types';

	let steps = $state<ProcessStep[] | null>(null);
	let members = $state(new Map<string, StudioMemberSummary>());
	let error = $state('');
	let actionError = $state('');
	let query = $state('');
	let creating = $state(false);
	let list = $state<HTMLElement>();

	// dragging only means something with nothing filtered out
	const canReorder = $derived(!query.trim());

	const indexOf = (slug: string) => steps?.findIndex((step) => step.slug === slug) ?? -1;

	const shown = $derived.by(() => {
		const needle = query.trim().toLowerCase();

		return (steps ?? []).filter((s) =>
			[s.title.fr, s.title.en, s.keywords.fr, ...s.items.fr, ...s.team.map((slug) => members.get(slug)?.name ?? slug)]
				.join(' ')
				.toLowerCase()
				.includes(needle)
		);
	});

	async function move(from: string, to: string) {
		if (!steps || !list || from === to)
			return;

		const previous = steps;
		const next = [...steps];
		const [item] = next.splice(indexOf(from), 1);

		next.splice(previous.findIndex((step) => step.slug === to), 0, item);

		await flip([...list.children], async () => {
			steps = next;
			await tick();
		});

		try {
			steps = await trpc.process.reorder.mutate({ slugs: next.map((step) => step.slug) });
			actionError = '';
		} catch (err) {
			logger.error({ err }, 'Failed to reorder process steps');
			steps = previous;
			actionError = describe(err);
		}
	}

	const reorder = new Reorder(() => canReorder, move);

	// the bar sits on the side the dragged step will land: after the target when moving down
	const landsAfter = (slug: string) => reorder.dragged !== null && indexOf(reorder.dragged) < indexOf(slug);

	onMount(async () => {
		loadMembers()
			.then((loaded) => (members = loaded))
			.catch((err) => logger.error({ err }, 'Failed to load studio members'));

		try {
			steps = await trpc.process.list.query();
		} catch (err) {
			logger.error({ err }, 'Failed to load process steps');
			error = 'Could not load the process';
		}
	});

	async function create() {
		if (creating)
			return;

		creating = true;

		try {
			const step = await trpc.process.create.mutate({ title: 'New step' });
			actionError = '';
			await goto(`/admin/process/${step.slug}`);
		} catch (err) {
			logger.error({ err }, 'Failed to create a process step');
			actionError = describe(err);
		} finally {
			creating = false;
		}
	}

	async function remove(step: ProcessStep, row: HTMLElement | null) {
		if (!confirm(`Delete ${step.title.fr}? This cannot be undone.`))
			return;

		try {
			await trpc.process.remove.mutate({ slug: step.slug });
			actionError = '';

			const drop = () => (steps = steps?.filter((s) => s.slug !== step.slug) ?? null);

			if (row)
				collapse(row, drop);
			else
				drop();
		} catch (err) {
			logger.error({ err }, 'Failed to delete a process step');
			actionError = describe(err);
		}
	}
</script>

<div class="mx-auto space-y-8">
	<Header title="Process" count={steps?.length} description="The steps shown on the site's process page, in order">
		{#snippet details()}
			<span class="text-faint">· {canReorder ? 'drag to reorder' : 'clear the search to reorder'}</span>
		{/snippet}

		{#snippet actions()}
			<label class="field w-72">
				<iconify-icon icon="iconoir:search" width="16" class="text-faint"></iconify-icon>
				<input
					bind:value={query}
					placeholder="Search a step..."
					class="field-input"
					onkeydown={(e) => {
						if (e.key === 'Escape') {
							query = '';
							e.currentTarget.blur();
						}
					}}
				/>
			</label>
		{/snippet}
	</Header>

	{#if actionError}
		<p class="alert"><iconify-icon icon="iconoir:warning-circle" width="16"></iconify-icon>{actionError}</p>
	{/if}
	{#if error}
		<p class="alert"><iconify-icon icon="iconoir:warning-circle" width="16"></iconify-icon>{error}</p>
	{:else if !steps}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{:else if shown.length === 0 && query.trim()}
		<div use:enter class="empty-state">
			<iconify-icon icon="iconoir:search-window" width="28" class="text-ghost"></iconify-icon>
			<p class="lead text-ink">No step matches “{query}”</p>
			<button type="button" onclick={() => (query = '')} class="p text-muted hover:text-ink">Clear search</button>
		</div>
	{:else}
		<div bind:this={list} class="flex flex-col gap-fc">
			{#each shown as step (step.slug)}
				<div use:enter {...reorder.props(step.slug)} role="listitem" class="relative {reorder.dragged === step.slug ? 'opacity-40' : ''}">
					{#if reorder.showsBar(step.slug)}
						<span class="absolute inset-x-0 z-10 h-0.5 rounded-full bg-brand {landsAfter(step.slug) ? '-bottom-[3px]' : '-top-[3px]'}"></span>
					{/if}
					<StepRow {step} index={indexOf(step.slug)} {members} onremove={(row) => remove(step, row)} />
				</div>
			{/each}
			<div use:enter>
				<NewStepRow busy={creating} onpick={create} />
			</div>
		</div>
	{/if}
</div>
