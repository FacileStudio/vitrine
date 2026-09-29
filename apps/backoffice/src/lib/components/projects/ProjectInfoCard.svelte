<script lang="ts">
	import Field from '../studio/Field.svelte';
	import ImageUpload from './ImageUpload.svelte';
	import MultiSelect from './MultiSelect.svelte';
	import { siteAsset } from '$lib/site';
	import { LOCALES, inputClass, type Locale, type Project, type ProjectOptions } from './types';

	let { project = $bindable(), options }: { project: Project; options: ProjectOptions | null } = $props();

	let locale = $state<Locale>('fr');
</script>

<div class="space-y-6">
	<div class="grid gap-6 w-full lg:grid-cols-[24rem_1fr]">
		<div class="space-y-3">
			<ImageUpload bind:value={project.image} />
		</div>

		<div class="space-y-4 w-full">
			<div class="flex w-full justify-between items-end gap-1">
                <span class="flex items-end gap-1">
                    <Field className="w-80">
                        <input bind:value={project.name} class={inputClass} />
                    </Field>
                    <Field label="Lien" className="w-60">
				        <input bind:value={project.link} placeholder="https://" class={inputClass} />
			        </Field>
                </span>
                <span class="flex gap-1">
                    <Field label="Année" className="w-30">
                        <input bind:value={project.date} class={inputClass} />
                    </Field>
                    <Field label="Semaines" className="w-30">
                        <input type="number" min="1" bind:value={project.weeks} class={inputClass} />
                    </Field>
                </span>
			</div>

			

			<div class="flex gap-2">
				{#each LOCALES as code (code)}
					<button
						type="button"
						onclick={() => (locale = code)}
						class="lead px-3 py-1.5 rounded-xl uppercase subtext {locale === code
							? 'bg-white text-black'
							: 'text-white/58 hover:text-white'}"
					>
						{code}
					</button>
				{/each}
			</div>

			<Field label="Description">
				<textarea bind:value={project.description[locale]} rows="3" class={inputClass}></textarea>
			</Field>

			<Field label="Défi">
				<textarea bind:value={project.challenge![locale]} rows="3" class={inputClass}></textarea>
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
						icon={(name) => siteAsset(`/images/logo/${name}.png`)}
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
</div>
