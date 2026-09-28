<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { logger } from '@repo/logger';
	import { siteAsset } from '$lib/site';
	import Field from '../studio/Field.svelte';
	import MultiSelect from './MultiSelect.svelte';
	import { LOCALES, inputClass, type Locale, type Project, type ProjectOptions } from './types';

	let { project = $bindable(), options }: { project: Project; options: ProjectOptions | null } = $props();

	const empty = () => ({ en: '', fr: '', es: '', de: '' });

	let locale = $state<Locale>('fr');
	let challenge = $state(project.challenge ?? empty());
	let saving = $state(false);
	let saved = $state(false);
	let error = $state('');

	async function save() {
		saving = true;
		saved = false;
		error = '';

		const { story, ...info } = $state.snapshot(project);
		const hasChallenge = Object.values(challenge).some((text) => text.trim());

		try {
			project = await trpc.projects.updateInfo.mutate({
				...info,
				// an emptied input is "" but the API expects the field left out
				link: info.link?.trim() || undefined,
				challenge: hasChallenge ? $state.snapshot(challenge) : undefined,
			});
			saved = true;
		} catch (err) {
			logger.error({ err }, 'Failed to save project info');
			error = "Erreur lors de l'enregistrement";
		} finally {
			saving = false;
		}
	}
</script>

<div class="bg-stone-700/5 p-6 rounded-md space-y-6">
	<div class="flex items-baseline gap-3">
		<span class="subtitle text-white">Couverture & intro</span>
		<span class="subtext text-white/45">Les informations affichées en tête de l'histoire</span>
	</div>

	<div class="grid gap-6 lg:grid-cols-[16rem_1fr]">
		<div class="space-y-3">
			<img src={siteAsset(project.image)} alt="" class="w-full aspect-[5/4] rounded-md object-cover bg-white/[0.03]" />
			<Field label="Image de couverture" hint="Chemin depuis /public du site">
				<input bind:value={project.image} class={inputClass} />
			</Field>
		</div>

		<div class="space-y-4">
			<div class="grid gap-4 sm:grid-cols-3">
				<Field label="Titre">
					<input bind:value={project.name} class={inputClass} />
				</Field>
				<Field label="Année">
					<input bind:value={project.date} class={inputClass} />
				</Field>
				<Field label="Semaines">
					<input type="number" min="1" bind:value={project.weeks} class={inputClass} />
				</Field>
			</div>

			<Field label="Lien" hint="Affiché dans l'intro et à la fin">
				<input bind:value={project.link} placeholder="https://" class={inputClass} />
			</Field>

			<div class="flex gap-2">
				{#each LOCALES as code (code)}
					<button
						type="button"
						onclick={() => (locale = code)}
						class="lead px-3 py-1.5 rounded-xl uppercase {locale === code
							? 'bg-white text-black'
							: 'bg-white/[0.05] text-white/58 hover:text-white'}"
					>
						{code}
					</button>
				{/each}
			</div>

			<Field label="Description">
				<textarea bind:value={project.description[locale]} rows="3" class={inputClass}></textarea>
			</Field>

			<Field label="Défi" hint="Le texte de l'intro, la description le remplace s'il est vide">
				<textarea bind:value={challenge[locale]} rows="3" class={inputClass}></textarea>
			</Field>

			<div class="grid gap-4 sm:grid-cols-3">
				<Field label="Tags">
					<MultiSelect
						bind:selected={project.services}
						options={(options?.services ?? []).map((value) => ({ value, label: value }))}
					/>
				</Field>
				<Field label="Tech stack">
					<MultiSelect
						bind:selected={project.techStack}
						options={(options?.techStack ?? []).map((value) => ({ value, label: value }))}
						allowNew
					/>
				</Field>
				<Field label="Équipe">
					<MultiSelect
						bind:selected={project.team}
						options={(options?.members ?? []).map((m) => ({ value: m.slug, label: m.name }))}
					/>
				</Field>
			</div>
		</div>
	</div>

	<div class="flex items-center justify-end gap-4">
		<p class="p {error ? 'text-red-400' : 'text-white/58'}">
			{error || (saved ? 'Enregistré' : '')}
		</p>
		<button
			type="button"
			onclick={save}
			disabled={saving}
			class="lead flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl hover:bg-white/90 disabled:opacity-50"
		>
			<iconify-icon icon="lucide:save" width="18"></iconify-icon>
			{saving ? 'Enregistrement...' : 'Enregistrer'}
		</button>
	</div>
</div>
