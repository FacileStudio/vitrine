<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import { siteAsset } from '$lib/site';
	import { loadMembers } from '$lib/members';
	import SaveBar from '$lib/components/SaveBar.svelte';
	import Section from '$lib/components/studio/Section.svelte';
	import Field from '$lib/components/studio/Field.svelte';
	import LinesInput from '$lib/components/studio/LinesInput.svelte';
	import ImageUpload from '$lib/components/projects/ui/ImageUpload.svelte';
	import MultiSelect from '$lib/components/projects/ui/MultiSelect.svelte';
	import TeamDots from '$lib/components/projects/ui/TeamDots.svelte';
	import { describe } from '$lib/components/projects/project';
	import { LOCALES, type Locale } from '$lib/components/studio/types';
	import type { ProcessStep, StudioMemberSummary } from '$lib/components/process/types';

	let step = $state<ProcessStep | null>(null);
	let members = $state(new Map<string, StudioMemberSummary>());
	let error = $state('');
	let saving = $state(false);
	let saveError = $state('');
	let baseline = $state('');
	let locale = $state<Locale>('fr');

	const dirty = $derived(step !== null && JSON.stringify(step) !== baseline);

	// the site hides a step until every language has a title and a text
	const missing = (code: Locale) => !step || ![step.title[code], step.text[code]].every((text) => text?.trim());

	function load(result: ProcessStep) {
		step = result;
		baseline = JSON.stringify(step);
	}

	onMount(async () => {
		loadMembers()
			.then((loaded) => (members = loaded))
			.catch((err) => logger.error({ err }, 'Failed to load studio members'));

		try {
			load(await trpc.process.get.query({ slug: page.params.slug! }));
		} catch (err) {
			logger.error({ err }, 'Failed to load process step');
			error = 'Step not found';
		}
	});

	async function save() {
		if (!step)
			return;

		saving = true;
		saveError = '';

		try {
			load(await trpc.process.update.mutate($state.snapshot(step)));
		} catch (err) {
			logger.error({ err }, 'Failed to save process step');
			saveError = describe(err);
		} finally {
			saving = false;
		}
	}
</script>

<nav aria-label="Breadcrumb" class="p flex items-center gap-2 text-faint">
	<a href="/admin/process" class="hover:text-ink">Process</a>
	<iconify-icon icon="iconoir:nav-arrow-right" width="14" class="text-ghost"></iconify-icon>
	<span class="text-soft">{step?.title.fr || 'Step'}</span>
</nav>

{#if !step}
	{#if error}
		<p class="alert"><iconify-icon icon="iconoir:warning-circle" width="16"></iconify-icon>{error}</p>
	{:else}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{/if}
{:else}
	<SaveBar {dirty} {saving} error={saveError} onsave={save} />

	<header class="flex flex-wrap items-center gap-4">
		<textarea
			bind:value={step.title[locale]}
			rows="1"
			placeholder="Title"
			aria-label="Title ({locale})"
			class="title flex-1 min-w-48 resize-none [field-sizing:content] bg-transparent text-ink outline-none rounded-project px-2 py-1 placeholder:text-ghost hover:bg-surface-hover focus:bg-raised-hover"
		></textarea>

		<div class="flex flex-wrap items-center gap-1">
			<div class="segmented w-fit" role="group" aria-label="Language">
				{#each LOCALES as code (code)}
					<button
						type="button"
						onclick={() => (locale = code)}
						aria-pressed={locale === code}
						title={missing(code) ? 'Translation incomplete, the step stays off the site' : undefined}
						class="segmented-item subtext uppercase px-3 gap-1.5"
					>
						{code}
						{#if missing(code)}
							<span class="size-1.5 rounded-full bg-warning"></span>
						{/if}
					</button>
				{/each}
			</div>

			<span class="field text-faint" title="Slug, used as the page anchor, read-only">
				<iconify-icon icon="iconoir:at-sign" width="14"></iconify-icon>
				<span class="p">{step.slug}</span>
			</span>

			<a
				href={siteAsset(`/${locale}/process#${step.slug}`)}
				target="_blank"
				rel="noopener"
				title="View on the site"
				aria-label="View on the site"
				class="btn-icon size-10"
			>
				<iconify-icon icon="iconoir:open-new-window" width="16"></iconify-icon>
			</a>
		</div>
	</header>

	<div class="flex flex-col gap-1">
		<Section title="Step texts" icon="iconoir:language" summary={locale.toUpperCase()}>
			<div class="grid gap-1 sm:grid-cols-2">
				<Field label="Duration">
					<input bind:value={step.duration[locale]} placeholder="2 to 4 weeks" class="input" />
				</Field>
				<Field label="Keywords" hint="shown in the list">
					<input bind:value={step.keywords[locale]} placeholder="Logo, typography, brandbook" class="input" />
				</Field>
			</div>
			<Field label="Tagline" hint="shown on the home page">
				<input bind:value={step.tagline[locale]} placeholder="One sentence" class="input" />
			</Field>
			<Field label="Text" hint="wrap *words* in stars to highlight them">
				<textarea bind:value={step.text[locale]} rows="4" placeholder="What happens in this step" class="input block resize-none"></textarea>
			</Field>
			{#key locale}
				<Field label="Items" hint="one per line, shown as tags">
					<LinesInput bind:value={step.items[locale]} rows={6} placeholder="Discovery workshops with your team" />
				</Field>
			{/key}
		</Section>

		<Section title="Step media" icon="iconoir:media-image">
			<div class="max-w-md">
				<ImageUpload bind:value={step.image} accept="image/*,video/*" />
			</div>
		</Section>

		<Section title="Step team" icon="iconoir:group">
			<MultiSelect
				bind:selected={step.team}
				options={[...members.values()].map((m) => ({ value: m.slug, label: m.name }))}
				placeholder="Add the team"
			>
				{#snippet display(values)}
					<TeamDots team={values} {members} />
				{/snippet}
			</MultiSelect>
		</Section>
	</div>
{/if}
