<script lang="ts">
	import type { Snippet } from 'svelte';

	let { label, hint, children }: { label: string; hint?: string; children: Snippet } = $props();
</script>

<label class="block space-y-1.5">
	<span class="lead text-white/80">{label}</span>
	{@render children()}
	{#if hint}
		<span class="block subtext text-white/45">{hint}</span>
	{/if}
</label>
