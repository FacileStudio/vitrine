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
	import type { ProjectOption, StudioMember } from '$lib/components/studio/types';

	let member = $state<StudioMember | null>(null);
	let options = $state<ProjectOption[]>([]);
	let error = $state('');
	let saving = $state(false);
	let saved = $state(false);

	onMount(async () => {
		try {
			member = await trpc.studio.get.query({ slug: page.params.slug! });
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
		saved = false;
		error = '';

		try {
			member = await trpc.studio.update.mutate($state.snapshot(member));
			saved = true;
		} catch (err) {
			logger.error({ err }, 'Failed to save studio member');
			error = describe(err);
		} finally {
			saving = false;
		}
	}
</script>

<div class="p-8 max-w-4xl mx-auto space-y-6">
	<a href="/admin/studio" class="p inline-flex items-center gap-2 text-white/58 hover:text-white">
		<iconify-icon icon="solar:arrow-left-bold" width="16"></iconify-icon>
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

		<div class="sticky bottom-4 bg-[#050505]/80 backdrop-blur-xl rounded-2xl shadow-lg p-4 flex items-center justify-between gap-4">
			<p class="p {error ? 'text-red-400' : 'text-white/58'}">
				{error || (saved ? 'Enregistré' : 'Modifications non enregistrées')}
			</p>
			<button
				type="button"
				onclick={save}
				disabled={saving}
				class="lead flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl hover:bg-white/90 disabled:opacity-50"
			>
				<iconify-icon icon="solar:diskette-bold" width="18"></iconify-icon>
				{saving ? 'Enregistrement...' : 'Enregistrer'}
			</button>
		</div>
	{/if}
</div>
