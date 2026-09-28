<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, description, children }: { title: string; description?: string; children: Snippet } =
		$props();
</script>

<section class="bg-white rounded-2xl shadow-sm p-6 space-y-4">
	<header>
		<h2 class="subtitle text-slate-900">{title}</h2>
		{#if description}
			<p class="subtext text-slate-500 mt-0.5">{description}</p>
		{/if}
	</header>
	{@render children()}
</section>
