<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, description, children }: { title: string; description?: string; children: Snippet } =
		$props();
</script>

<section class="bg-white/[0.03] rounded-2xl shadow-sm p-6 space-y-4">
	<header>
		<h2 class="subtitle text-white">{title}</h2>
		{#if description}
			<p class="subtext text-white/58 mt-0.5">{description}</p>
		{/if}
	</header>
	{@render children()}
</section>
