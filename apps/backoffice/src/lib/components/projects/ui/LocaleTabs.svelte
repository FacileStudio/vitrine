<script lang="ts">
	import { LOCALES, type Locale } from '../types';

	let { locale = $bindable() }: { locale: Locale } = $props();
</script>

<div class="segmented w-fit">
	{#each LOCALES as code (code)}
		<button
			type="button"
			onclick={() => (locale = code)}
			aria-pressed={locale === code}
			class="segmented-item subtext uppercase px-3"
		>
			{code}
		</button>
	{/each}
</div>
