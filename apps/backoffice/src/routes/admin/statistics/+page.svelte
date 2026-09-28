<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { onMount } from 'svelte';
	import { Spinner, StatsOverview } from '@repo/ui';
	import { logger } from '@repo/logger';

	type Overview = Awaited<ReturnType<typeof trpc.statistics.overview.query>>;

	let overview = $state<Overview | null>(null);
	let error = $state('');

	onMount(async () => {
		try {
			overview = await trpc.statistics.overview.query();
		} catch (err) {
			logger.error({ err }, 'Failed to load statistics');
			error = 'Erreur chargement des statistiques';
		}
	});

	const stats = $derived(
		overview
			? [
					{ title: 'Visites', value: overview.counters.totalVisits, icon: 'lucide:eye', color: 'indigo' as const },
					{ title: 'Visiteurs uniques', value: overview.counters.totalUniqueVisitors, icon: 'lucide:users-round', color: 'emerald' as const },
					{ title: 'Visiteurs / jour (14 j)', value: overview.counters.avgVisitorsPerDay, icon: 'lucide:calendar', color: 'amber' as const },
					{ title: 'Messages reçus', value: overview.counters.totalContacts, icon: 'lucide:mail', color: 'violet' as const },
				]
			: []
	);

	const charts = $derived(
		overview
			? [
					{ title: 'Visites', description: '14 derniers jours', type: 'area' as const, data: overview.series, x: 'label', y: 'visits' },
					{ title: 'Visiteurs uniques', description: '14 derniers jours', type: 'bar' as const, data: overview.series, x: 'label', y: 'uniqueVisitors' },
				]
			: []
	);
</script>

<div class="p-8 max-w-6xl mx-auto">
	{#if error}
		<div class="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl text-sm font-medium">{error}</div>
	{:else if !overview}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{:else}
		<StatsOverview title="Statistiques" description="Fréquentation du site vitrine" {stats} {charts} />
	{/if}
</div>
