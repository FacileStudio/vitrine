<script lang="ts">
	import { LOCALES, type Locale } from './types';

	let { locale = $bindable() }: { locale: Locale } = $props();
</script>

<div class="flex gap-2">
	{#each LOCALES as code (code)}
		<button
			type="button"
			onclick={() => (locale = code)}
			class="lead px-3 py-1.5 rounded-xl uppercase {locale === code
				? 'bg-white text-black'
				: 'bg-white/[0.05] text-white/58 hover:text-white'}"
		>
			{code}
		</button>
	{/each}
</div>
