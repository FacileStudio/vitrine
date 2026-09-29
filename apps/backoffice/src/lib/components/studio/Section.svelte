<script lang="ts">
	import type { Snippet } from 'svelte';
	import { enter } from '$lib/motion';

	let {
		title,
		description,
		icon,
		children,
	}: { title: string; description?: string; icon?: string; children: Snippet } = $props();
</script>

<section use:enter class="panel">
	<header class="panel-header pt-4">
		{#if icon}
			<iconify-icon {icon} width="16" class="text-faint"></iconify-icon>
		{/if}
		<h2 class="lead text-ink">{title}</h2>
		{#if description}
			<p class="subtext text-faint">{description}</p>
		{/if}
	</header>
	<div class="px-5 pb-5 pt-1 space-y-4">
		{@render children()}
	</div>
</section>
