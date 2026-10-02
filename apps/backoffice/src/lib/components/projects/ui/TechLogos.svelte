<script lang="ts">
	import { siteAsset } from '$lib/site';

	let { stack, max = 5 }: { stack: string[]; max?: number } = $props();
</script>

<span class="flex items-center gap-3">
	{#each stack.slice(0, max) as name (name)}
		<img
			src={siteAsset(`/images/logo/${name}.png`)}
			alt={name}
			title={name}
			class="max-w-8 h-5 object-contain"
			onerror={(e) => e.currentTarget.remove()}
		/>
	{/each}
	{#if stack.length > max}
		<span class="subtext text-faint">+{stack.length - max}</span>
	{/if}
</span>
