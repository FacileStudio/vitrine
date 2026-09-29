<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import IdentitySection from '$lib/components/studio/IdentitySection.svelte';
	import TextsSection from '$lib/components/studio/TextsSection.svelte';
	import SocialsSection from '$lib/components/studio/SocialsSection.svelte';
	import ProjectsSection from '$lib/components/studio/ProjectsSection.svelte';
	import ModelSection from '$lib/components/studio/ModelSection.svelte';
	import SaveBar from '$lib/components/SaveBar.svelte';
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
			error = 'Membre introuvable';
			return;
		}

		// the project list is read from the client's projects.json, so a missing file must not block the editor
		options = await trpc.studio.projectOptions.query().catch((err) => {
			logger.error({ err }, 'Failed to load project options');
			return member!.projects.map((slug) => ({ slug, name: slug }));
		});
	});

	// zod input errors arrive as a JSON list of issues, the field paths are what the admin needs
	function describe(err: unknown) {
		try {
			const issues: Array<{ path: (string | number)[] }> = JSON.parse((err as Error).message);
			return `Champs invalides : ${issues.map((issue) => issue.path.join('.')).join(', ')}`;
		} catch {
			return "Erreur lors de l'enregistrement";
		}
	}

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

<div class="p-8 max-w-4xl mx-auto space-y-6">
	<a href="/admin/studio" class="p inline-flex items-center gap-2 text-white/58 hover:text-white">
		<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon>
		Studio
	</a>

	{#if !member}
		{#if error}
			<p class="p bg-red-500/10 text-red-300 px-4 py-3 rounded-xl">{error}</p>
		{:else}
			<div class="py-20 flex justify-center">
				<Spinner size="xl" />
			</div>
		{/if}
	{:else}
		<SaveBar {dirty} {saving} error={saveError} onsave={save} />

		<header class="flex items-center gap-4">
			<div class="w-3 h-12 rounded-full" style:background-color={member.highlight}></div>
			<div>
				<h1 class="title text-white">{member.name}</h1>
				<p class="p text-white/58">{member.role.fr}</p>
			</div>
		</header>

		<IdentitySection bind:member />
		<TextsSection bind:member />
		<SocialsSection bind:member />
		<ProjectsSection bind:member {options} />
		<ModelSection bind:member />
	{/if}
</div>
