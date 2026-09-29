<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		count,
		description,
		back,
		details,
		actions,
	}: {
		title?: string;
		count?: number | null;
		description?: string;
		back?: { href: string; label: string };
		details?: Snippet;
		actions?: Snippet;
	} = $props();
</script>

{#if back}
	<a href={back.href} class="p inline-flex items-center gap-2 pl-6 text-muted hover:text-ink">
		<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon>
		{back.label}
	</a>
{/if}

{#if title}
	<header class="page-header pl-8">
		<div>
			<div class="flex items-baseline gap-3">
				<h1 class="title text-ink">{title}</h1>
				{#if count != null}
					<span class="badge">{count}</span>
				{/if}
			</div>
			{#if description || details}
				<p class="page-description">
					{description}
					{@render details?.()}
				</p>
			{/if}
		</div>

		{#if actions}
			<div class="flex flex-wrap items-center gap-1">
				{@render actions()}
			</div>
		{/if}
	</header>
{/if}
