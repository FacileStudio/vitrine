<script lang="ts">
	import { onMount } from 'svelte';
	import { logger } from '@repo/logger';
	import ImageUpload from './ImageUpload.svelte';
	import MultiSelect from './MultiSelect.svelte';
	import TechLogos from './TechLogos.svelte';
	import TeamDots from './TeamDots.svelte';
	import { siteAsset } from '$lib/site';
	import { loadMembers } from '$lib/members';
	import { LOCALES, type Locale, type Project, type ProjectOptions, type StudioMemberSummary } from './types';

	let { project = $bindable(), options }: { project: Project; options: ProjectOptions | null } = $props();

	let locale = $state<Locale>('fr');
	let members = $state(new Map<string, StudioMemberSummary>());

	onMount(() => {
		loadMembers()
			.then((loaded) => (members = loaded))
			.catch((err) => logger.error({ err }, 'Failed to load studio members'));
	});
</script>

<div class="space-y-6">
	<header class="flex flex-wrap items-center justify-between gap-4">
		<input
			bind:value={project.name}
			placeholder="Project name"
			aria-label="Project name"
			class="title flex-1 min-w-64 bg-transparent text-ink outline-none rounded-md px-3 -mx-2 py-1 placeholder:text-ghost hover:bg-white/[0.03] focus:bg-raised-hover"
		/>

		<div class="flex flex-wrap items-center gap-1">
			<label class="field w-64" title="Project link">
				<iconify-icon icon="lucide:link" width="14" class="text-faint"></iconify-icon>
				<input bind:value={project.link} placeholder="https://" class="field-input" />
			</label>
			<label class="field w-28" title="Year">
				<iconify-icon icon="lucide:calendar" width="14" class="text-faint"></iconify-icon>
				<input bind:value={project.date} placeholder="2026" class="field-input" />
			</label>
			<label class="field w-32" title="Duration in weeks">
				<iconify-icon icon="lucide:clock" width="14" class="text-faint"></iconify-icon>
				<input type="number" min="1" bind:value={project.weeks} class="p w-12 bg-transparent text-ink outline-none" />
				<span class="subtext text-faint">wk</span>
			</label>
		</div>
	</header>

	<div class="grid gap-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
		<ImageUpload bind:value={project.image} />

		<div class="flex flex-col gap-1 min-w-0">
			<div class="relative isolate overflow-hidden flex-1 flex flex-col rounded-md bg-raised">
				<img
					src={siteAsset(project.image)}
					alt=""
					aria-hidden="true"
					class="absolute -z-10 -top-1/3 left-0 w-full h-full pointer-events-none object-cover saturate-150 opacity-40 blur-[100px]"
					onerror={(e) => e.currentTarget.remove()}
				/>
				<div class="flex items-center justify-between gap-3 p-2 pb-0">
					<div class="segmented w-fit bg-transparent">
						{#each LOCALES as code (code)}
							<button
								type="button"
								onclick={() => (locale = code)}
								aria-pressed={locale === code}
								title={project.description[code]?.trim() ? undefined : 'Not translated yet'}
								class="segmented-item subtext uppercase px-3 gap-1.5"
							>
								{code}
								{#if !project.description[code]?.trim()}
									<span class="size-1.5 rounded-full bg-warning"></span>
								{/if}
							</button>
						{/each}
					</div>
					<span class="subtext text-faint pr-2">{project.description[locale]?.length ?? 0} characters</span>
				</div>
				<textarea
					bind:value={project.description[locale]}
					placeholder="Project description..."
					aria-label="Description"
					class="p flex-1 min-h-40 w-full resize-none bg-transparent text-ink outline-none px-4 py-3 placeholder:text-ghost"
				></textarea>
			</div>

			<div class="rounded-md bg-raised px-8 py-4 flex items-center gap-3" title="Tags">
				<iconify-icon icon="lucide:tags" width="16" class="text-faint shrink-0"></iconify-icon>
				<div class="flex-1 min-w-0">
					<MultiSelect
						bind:selected={project.services}
						options={(options?.services ?? []).map((value) => ({ value, label: value }))}
						placeholder="Add tags"
					>
						{#snippet display(values)}
							<span class="flex flex-wrap gap-1">
								{#each values as value (value)}
									<span class="chip py-1">{value}</span>
								{/each}
							</span>
						{/snippet}
					</MultiSelect>
				</div>
			</div>

			<div class="rounded-md bg-raised px-8 py-4 flex items-center gap-3" title="Tech stack">
				<iconify-icon icon="lucide:code-xml" width="16" class="text-faint shrink-0"></iconify-icon>
				<div class="flex-1 min-w-0">
					<MultiSelect
						bind:selected={project.techStack}
						options={(options?.techStack ?? []).map((value) => ({ value, label: value }))}
						allowNew
						icon={(name) => siteAsset(`/images/logo/${name}.png`)}
						placeholder="Add tech"
					>
						{#snippet display(values)}
							<TechLogos stack={values} max={12} />
						{/snippet}
					</MultiSelect>
				</div>
			</div>

			<div class="rounded-md bg-raised px-8 py-4 flex items-center gap-3" title="Team">
				<iconify-icon icon="lucide:users-round" width="16" class="text-faint shrink-0"></iconify-icon>
				<div class="flex-1 min-w-0">
					<MultiSelect
						bind:selected={project.team}
						options={(options?.members ?? []).map((m) => ({ value: m.slug, label: m.name }))}
						placeholder="Add the team"
					>
						{#snippet display(values)}
							<TeamDots team={values} {members} />
						{/snippet}
					</MultiSelect>
				</div>
			</div>
		</div>
	</div>
</div>
