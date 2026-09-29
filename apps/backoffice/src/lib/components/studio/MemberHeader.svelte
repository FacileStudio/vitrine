<script lang="ts">
	import { siteAsset } from '$lib/site';
	import type { StudioMember } from './types';

	let { member = $bindable() }: { member: StudioMember } = $props();

	// the site only has these two roles, each written in every language at once
	const ROLES = {
		designer: { label: 'Designer', text: { fr: 'Designer', en: 'Designer', es: 'Diseñador', de: 'Designer' } },
		developer: { label: 'Developer', text: { fr: 'Développeur', en: 'Developer', es: 'Desarrollador', de: 'Entwickler' } },
	} as const;

	const role = $derived<keyof typeof ROLES>(member.role.en === 'Developer' ? 'developer' : 'designer');

	// clicking the current role keeps its texts, so hand-written variants like "Designerin" survive
	function pick(next: keyof typeof ROLES) {
		if (next !== role)
			member.role = { ...ROLES[next].text };
	}
</script>

<header class="flex flex-wrap items-center gap-4">
	<label
		title="Member colour"
		class="subtitle relative size-14 shrink-0 rounded-project flex items-center justify-center cursor-pointer"
		style:background-color="{member.highlight}20"
		style:color="color-mix(in srgb, {member.highlight}, var(--theme-ink) 20%)"
	>
		{member.name.charAt(0)}
		<input type="color" bind:value={member.highlight} class="absolute inset-0 opacity-0 cursor-pointer" />
	</label>

	<textarea
		bind:value={member.name}
		rows="1"
		placeholder="Name"
		aria-label="Name"
		class="title flex-1 min-w-48 resize-none [field-sizing:content] bg-transparent text-ink outline-none rounded-project px-2 py-1 placeholder:text-ghost hover:bg-surface-hover focus:bg-raised-hover"
	></textarea>

	<div class="flex flex-wrap items-center gap-1">
		<div class="segmented" role="group" aria-label="Role">
			{#each Object.entries(ROLES) as [key, option] (key)}
				<button
					type="button"
					aria-pressed={role === key}
					onclick={() => pick(key as keyof typeof ROLES)}
					class="segmented-item p px-3"
				>
					{option.label}
				</button>
			{/each}
		</div>

		<label class="field w-32" title="Member colour">
			<span class="size-3 rounded-project shrink-0" style:background-color={member.highlight}></span>
			<input bind:value={member.highlight} class="field-input uppercase" />
		</label>

		<span class="field text-faint" title="Slug, used in the URL, read-only">
			<iconify-icon icon="lucide:at-sign" width="14"></iconify-icon>
			<span class="p">{member.slug}</span>
		</span>

		<button
			type="button"
			aria-pressed={member.suite}
			onclick={() => (member.suite = !member.suite)}
			title="Works on the Facile Suite"
			class="btn aria-pressed:bg-pressed aria-pressed:text-ink"
		>
			<iconify-icon icon="lucide:sparkles" width="14"></iconify-icon>
			Suite
		</button>

		<a
			href={siteAsset(`/en/studio/${member.slug}`)}
			target="_blank"
			rel="noopener"
			title="View on the site"
			aria-label="View on the site"
			class="btn-icon size-10"
		>
			<iconify-icon icon="lucide:external-link" width="16"></iconify-icon>
		</a>
	</div>
</header>
