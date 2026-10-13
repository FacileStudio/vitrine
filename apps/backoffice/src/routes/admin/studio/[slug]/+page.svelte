<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import MemberHeader from '$lib/components/studio/MemberHeader.svelte';
	import TextsSection from '$lib/components/studio/TextsSection.svelte';
	import SocialsSection from '$lib/components/studio/SocialsSection.svelte';
	import ProjectsSection from '$lib/components/studio/ProjectsSection.svelte';
	import ModelSection from '$lib/components/studio/ModelSection.svelte';
	import SaveBar from '$lib/components/SaveBar.svelte';
	import { describe } from '$lib/components/projects/project';
	import type { ProjectOption, StudioMember } from '$lib/components/studio/types';

	let member = $state<StudioMember | null>(null);
	let options = $state<ProjectOption[]>([]);
	let error = $state('');
	let saving = $state(false);
	let saveError = $state('');
	let baseline = $state('');

	const dirty = $derived(member !== null && JSON.stringify(member) !== baseline);

	function load(result: StudioMember) {
		member = result;
		baseline = JSON.stringify(member);
	}

	onMount(async () => {
		try {
			load(await trpc.studio.get.query({ slug: page.params.slug! }));
		} catch (err) {
			logger.error({ err }, 'Failed to load studio member');
			error = 'Member not found';
			return;
		}

		// the project list is read from the client's projects.json, so a missing file must not block the editor
		options = await trpc.studio.projectOptions.query().catch((err) => {
			logger.error({ err }, 'Failed to load project options');
			return member!.projects.map((slug) => ({ slug, name: slug }));
		});
	});

	async function save() {
		if (!member)
			return;

		saving = true;
		saveError = '';

		try {
			load(await trpc.studio.update.mutate($state.snapshot(member)));
		} catch (err) {
			logger.error({ err }, 'Failed to save studio member');
			saveError = describe(err);
		} finally {
			saving = false;
		}
	}
</script>

<nav aria-label="Breadcrumb" class="p flex items-center gap-2 text-faint">
	<a href="/admin/studio" class="hover:text-ink">Studio</a>
	<iconify-icon icon="iconoir:nav-arrow-right" width="14" class="text-ghost"></iconify-icon>
	<span class="text-soft">{member?.name ?? 'Member'}</span>
</nav>

{#if !member}
	{#if error}
		<p class="alert"><iconify-icon icon="iconoir:warning-circle" width="16"></iconify-icon>{error}</p>
	{:else}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{/if}
{:else}
	<SaveBar {dirty} {saving} error={saveError} onsave={save} />

	<MemberHeader bind:member />

	<div class="flex flex-col gap-1">
		<TextsSection bind:member />
		<ProjectsSection bind:member {options} />
		<SocialsSection bind:member />
		<ModelSection bind:member />
	</div>
{/if}
