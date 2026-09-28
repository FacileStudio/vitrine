<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import type { Project } from '$lib/components/projects/types';

	let project = $state<Project | null>(null);
	let error = $state('');
	let saving = $state(false);
	let saved = $state(false);

	onMount(async () => {
		try {
			project = await trpc.projects.get.query({ slug: page.params.slug! });
		} catch (err) {
			logger.error({ err }, 'Failed to load project');
			error = 'Projet introuvable';
			return;
		}

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
		if (!project)
			return;

		saving = true;
		saved = false;
		error = '';

		try {
			project = await trpc.projects.update.mutate($state.snapshot(project));
			saved = true;
		} catch (err) {
			logger.error({ err }, 'Failed to save project');
			error = describe(err);
		} finally {
			saving = false;
		}
	}
</script>

<div class="p-8 max-w-4xl mx-auto space-y-6">
    <a href="/admin/projects" class="p inline-flex items-center gap-2 text-white/58 hover:text-white">
        <iconify-icon icon="solar:arrow-left-bold" width="16"></iconify-icon>
        Projects
    </a>

    {#if !project}
        {#if error}
            <p class="p bg-red-500/10 text-red-300 px-4 py-3 rounded-xl">{error}</p>
        {:else}
            <div class="py-20 flex justify-center">
                <Spinner size="xl" />
            </div>
        {/if}
    {:else}
        <h1 class="title text-white">{project.name}</h1>

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