<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { onMount } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import { enter } from '$lib/motion';

	type Member = Awaited<ReturnType<typeof trpc.studio.list.query>>[number];

	let members = $state<Member[] | null>(null);
	let error = $state('');
	let query = $state('');

	const shown = $derived(
		(members ?? []).filter((m) =>
			[m.name, m.role.fr, m.slug].join(' ').toLowerCase().includes(query.trim().toLowerCase())
		)
	);

	onMount(async () => {
		try {
			members = await trpc.studio.list.query();
		} catch (err) {
			logger.error({ err }, 'Failed to load studio members');
			error = 'Could not load the studio';
		}
	});
</script>

<header class="page-header">
	<div>
		<div class="flex items-baseline gap-3">
			<h1 class="title text-ink">Studio</h1>
			{#if members}
				<span class="badge">{members.length}</span>
			{/if}
		</div>
		<p class="page-description">The members shown on the site's studio page</p>
	</div>

	<label class="field w-72">
		<iconify-icon icon="lucide:search" width="16" class="text-faint"></iconify-icon>
		<input bind:value={query} placeholder="Search a member..." class="field-input" />
	</label>
</header>

{#if error}
	<p class="alert"><iconify-icon icon="lucide:circle-alert" width="16"></iconify-icon>{error}</p>
{:else if !members}
	<div class="py-20 flex justify-center">
		<Spinner size="xl" />
	</div>
{:else if shown.length === 0}
	<div use:enter class="empty-state">
		<iconify-icon icon="lucide:search-x" width="28" class="text-ghost"></iconify-icon>
		<p class="lead text-ink">No member matches “{query}”</p>
		<button type="button" onclick={() => (query = '')} class="p text-muted hover:text-ink">Clear search</button>
	</div>
{:else}
	<div class="grid gap-1 sm:grid-cols-2 xl:grid-cols-4">
		{#each shown as member (member.slug)}
			<a use:enter href="/admin/studio/{member.slug}" class="group panel-link p-5 flex flex-col gap-8 overflow-hidden relative">
                <div
                    style:background-color={member.highlight}
                    class="absolute top-0 -translate-1/2 left-20 w-90 opacity-15 rounded-full blur-[120px] z-0 aspect-square"
                ></div>
				<div class="flex items-start z-10 justify-between">
					<span
						class="subtitle size-14 rounded-md flex items-center justify-center"
						style:background-color="{member.highlight}20"
						style:color="color-mix(in srgb, {member.highlight}, #fff 20%)"
					>
						{member.name.charAt(0)}
					</span>
					<iconify-icon icon="lucide:arrow-up-right" width="18" class="text-ghost group-hover:text-ink"></iconify-icon>
				</div>
                <div class="flex justify-between z-10 items-center mt-auto">
                    <div class="min-w-0 flex gap-3 items-center">
                        <p class="subtitle text-ink truncate">{member.name}</p>
                    </div>
    
                    <div class="mt-auto flex justify-end flex-wrap gap-1.5">
                        <span class="chip"><iconify-icon icon="lucide:folder-kanban" width="12"></iconify-icon>{member.projects.length} projects</span>
                        <span class="chip"><iconify-icon icon="lucide:link" width="12"></iconify-icon>{member.socials.length} links</span>
                        {#if member.suite}
                            <span class="chip"><iconify-icon icon="lucide:sparkles" width="12"></iconify-icon>Suite</span>
                        {/if}
                    </div>
                </div>
			</a>
		{/each}
	</div>
{/if}
