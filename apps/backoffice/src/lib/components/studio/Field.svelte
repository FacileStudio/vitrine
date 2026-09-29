<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		label,
		hint,
		className,
		children,
	}: { label?: string; hint?: string; className?: string; children: Snippet } = $props();
</script>

<label class="block space-y-2 {className}">
	{#if label || hint}
		<span class="flex items-baseline gap-2">
			{#if label}
				<span class="p text-soft">{label}</span>
			{/if}
			{#if hint}
				<span class="subtext text-faint">{hint}</span>
			{/if}
		</span>
	{/if}
	{@render children()}
</label>
