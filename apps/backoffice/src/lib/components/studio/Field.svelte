<script lang="ts">
	import type { Snippet } from 'svelte';

	let { label, className, children }: { label?: string; className?: string; children: Snippet } = $props();
</script>

<label class="block space-y-4 {className}">
	<span class="text-sm text-white/80">{label}</span>
	{@render children()}
	
</label>
