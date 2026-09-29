<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { enter, fold } from '$lib/motion';

	let {
		title,
		icon,
		summary,
		actions,
		children,
	}: { title: string; icon: string; summary?: string; actions?: Snippet; children: Snippet } = $props();

	let open = $state(false);
	let body: HTMLElement;

	const key = $derived(`studio:open:${title}`);

	onMount(() => {
		try {
			open = localStorage.getItem(key) === '1';
		} catch {
			// storage can be blocked, every section then starts closed
		}

		fold(body, open, true);
	});

	function toggle() {
		open = !open;
		fold(body, open);

		try {
			localStorage.setItem(key, open ? '1' : '0');
		} catch {
			// remembering the fold is a convenience, nothing breaks without it
		}
	}
</script>

<section use:enter class="panel">
	<div class="flex items-center gap-4 px-8 py-8">
		<button type="button" onclick={toggle} aria-expanded={open} class="flex-1 min-w-0 flex items-center gap-3 text-left">
			<iconify-icon {icon} width="16" class="text-faint"></iconify-icon>
			<h2 class="lead text-ink">{title}</h2>
			{#if summary}
				<span class="subtext text-faint truncate">{summary}</span>
			{/if}
		</button>
		{#if open}
			{@render actions?.()}
		{/if}
		<button type="button" onclick={toggle} aria-label={open ? 'Collapse' : 'Expand'} class="btn-icon">
			<iconify-icon icon="lucide:chevron-down" width="16" class={open ? 'rotate-180' : ''}></iconify-icon>
		</button>
	</div>
	<div bind:this={body} class="overflow-hidden h-0 opacity-0">
		<div class="px-8 pb-8 space-y-1">
			{@render children()}
		</div>
	</div>
</section>
