<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { onMount } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';

	type Member = Awaited<ReturnType<typeof trpc.studio.list.query>>[number];

	let members = $state<Member[] | null>(null);
	let error = $state('');

	onMount(async () => {
		try {
			members = await trpc.studio.list.query();
		} catch (err) {
			logger.error({ err }, 'Failed to load studio members');
			error = 'Erreur chargement du studio';
		}
	});
</script>

<div class="p-8 max-w-5xl mx-auto space-y-6">
	<header>
		<h1 class="title text-slate-900">Studio</h1>
		<p class="p text-slate-500 mt-1">Les membres affichés sur la page studio du site</p>
	</header>

	{#if error}
		<p class="p bg-red-50 text-red-700 px-4 py-3 rounded-xl">{error}</p>
	{:else if !members}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{:else}
		<div class="grid gap-4 sm:grid-cols-2">
			{#each members as member (member.slug)}
				<a
					href="/admin/studio/{member.slug}"
					class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md"
				>
					<div class="h-2" style:background-color={member.highlight}></div>
					<div class="p-5 flex items-center gap-4">
						<div
							class="subtitle w-16 h-16 rounded-full flex items-center justify-center text-white shrink-0"
							style:background-color={member.highlight}
						>
							{member.name[0]}
						</div>
						<div class="min-w-0 flex-1">
							<p class="subtitle text-slate-900">{member.name}</p>
							<p class="p text-slate-500">{member.role.fr}</p>
							<p class="subtext text-slate-400 mt-1">
								{member.projects.length} projets · {member.socials.length} réseaux{member.suite ? ' · Suite' : ''}
							</p>
						</div>
						<iconify-icon icon="solar:alt-arrow-right-bold" width="20" class="text-slate-300 group-hover:text-slate-900"></iconify-icon>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
