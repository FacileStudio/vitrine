<script lang="ts">
	import type { Snippet } from 'svelte';
	import { inputClass } from './types';

	type Option = { value: string; label: string };

	let {
		options,
		selected = $bindable(),
		placeholder = 'Aucun',
		allowNew = false,
		icon,
		display,
	}: {
		options: Option[];
		selected: string[];
		placeholder?: string;
		allowNew?: boolean;
		icon?: (value: string) => string;
		display?: Snippet<[string[]]>;
	} = $props();

	let draft = $state('');

	// a value added by hand is not in options yet, it still has to show and be removable
	const all = $derived([
		...options,
		...selected.filter((value) => !options.some((o) => o.value === value)).map((value) => ({ value, label: value })),
	]);

	const labelOf = (value: string) => all.find((o) => o.value === value)?.label ?? value;

	function toggle(value: string) {
		selected = selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value];
	}

	function add() {
		const value = draft.trim();

		if (value && !selected.includes(value))
			selected = [...selected, value];

		draft = '';
	}
</script>

{#snippet logo(value: string)}
	{#if icon}
		<!-- a value added by hand may have no logo yet, the label alone is enough then -->
		<img src={icon(value)} alt="" class="size-4 object-contain" onerror={(e) => e.currentTarget.remove()} />
	{/if}
{/snippet}

<details class="group relative">
	<summary class="list-none cursor-pointer rounded-md flex flex-wrap items-center gap-1.5 min-h-10">
		{#if selected.length === 0}
			<span class="p text-faint">{placeholder}</span>
		{:else if display}
			{@render display(selected)}
		{:else}
			{#each selected as value (value)}
				<span class="subtext flex items-center gap-1.5 rounded-sm bg-white/10 px-2 py-1 text-ink">
					{@render logo(value)}
					{labelOf(value)}
				</span>
			{/each}
		{/if}
		<iconify-icon icon="lucide:chevron-down" width="14" class="ml-auto text-faint group-open:rotate-180"></iconify-icon>
	</summary>

	<div class="absolute z-20 mt-1 w-full min-w-56 max-h-72 overflow-y-auto rounded-md bg-popover p-2 shadow-lg space-y-1">
		{#each all as option (option.value)}
			<label class="flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-white/[0.05] cursor-pointer">
				<input
					type="checkbox"
					checked={selected.includes(option.value)}
					onchange={() => toggle(option.value)}
					class="w-4 h-4 accent-white"
				/>
				{@render logo(option.value)}
				<span class="p text-soft">{option.label}</span>
			</label>
		{/each}

		{#if allowNew}
			<div class="flex gap-2 pt-1">
				<input
					bind:value={draft}
					placeholder="Ajouter…"
					class={inputClass}
					onkeydown={(e) => {
						if (e.key === 'Enter') {
							e.preventDefault();
							add();
						}
					}}
				/>
				<button type="button" onclick={add} class="btn btn-primary px-3" aria-label="Ajouter">+</button>
			</div>
		{/if}
	</div>
</details>
