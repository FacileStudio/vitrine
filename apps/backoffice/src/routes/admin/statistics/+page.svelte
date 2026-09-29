<script lang="ts">
	import { trpc } from '$lib/trpc';
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';
	import { AreaChart, BarChart, Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import { enter } from '$lib/motion';

	type Overview = Awaited<ReturnType<typeof trpc.statistics.overview.query>>;

	let overview = $state<Overview | null>(null);
	let error = $state('');

	onMount(async () => {
		try {
			overview = await trpc.statistics.overview.query();
		} catch (err) {
			logger.error({ err }, 'Failed to load statistics');
			error = 'Could not load the statistics';
		}
	});

	const today = $derived(overview?.series.at(-1));

	const stats = $derived(
		overview
			? [
					{ label: 'Visits', value: overview.counters.totalVisits, icon: 'lucide:eye', note: `${today?.visits ?? 0} today` },
					{ label: 'Unique visitors', value: overview.counters.totalUniqueVisitors, icon: 'lucide:users-round', note: `${today?.uniqueVisitors ?? 0} today` },
					{ label: 'Visitors per day', value: overview.counters.avgVisitorsPerDay, icon: 'lucide:calendar', note: 'Average over 14 days' },
					{ label: 'Messages received', value: overview.counters.totalContacts, icon: 'lucide:mail', note: 'From the contact form' },
				]
			: []
	);
</script>

<Header title="Statistics" description="Traffic on the showcase site">
	{#snippet actions()}
		<span class="chip"><iconify-icon icon="lucide:calendar-range" width="12"></iconify-icon>Last 14 days</span>
	{/snippet}
</Header>

{#if error}
	<p class="alert"><iconify-icon icon="lucide:circle-alert" width="16"></iconify-icon>{error}</p>
{:else if !overview}
	<div class="py-20 flex justify-center">
		<Spinner size="xl" />
	</div>
{:else}
	<div class="grid gap-1 sm:grid-cols-2 xl:grid-cols-4">
		{#each stats as stat (stat.label)}
			<div use:enter class="panel p-5 space-y-4">
				<div class="flex items-center justify-between">
					<span class="p text-muted">{stat.label}</span>
					<span class="size-8 rounded-project bg-raised-hover flex items-center justify-center text-soft">
						<iconify-icon icon={stat.icon} width="16"></iconify-icon>
					</span>
				</div>
				<div>
					<p class="title text-ink tabular-nums">{stat.value}</p>
					<p class="subtext text-faint mt-1">{stat.note}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="grid gap-1 xl:grid-cols-2">
		<section use:enter class="panel">
			<header class="panel-header pt-4">
				<iconify-icon icon="lucide:chart-area" width="16" class="text-faint"></iconify-icon>
				<h2 class="lead text-ink">Visits</h2>
				<span class="subtext text-faint">per day</span>
			</header>
			<div class="px-3 pb-3">
				<AreaChart data={overview.series} x="label" y="visits" color="currentColor" height={280} />
			</div>
		</section>

		<section use:enter class="panel">
			<header class="panel-header pt-4">
				<iconify-icon icon="lucide:chart-column" width="16" class="text-faint"></iconify-icon>
				<h2 class="lead text-ink">Unique visitors</h2>
				<span class="subtext text-faint">per day</span>
			</header>
			<div class="px-3 pb-3">
				<BarChart data={overview.series} x="label" y="uniqueVisitors" color="currentColor" height={280} />
			</div>
		</section>
	</div>
{/if}
