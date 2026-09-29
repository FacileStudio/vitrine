<script lang="ts">
	import { onMount } from 'svelte';

	type Theme = 'system' | 'light' | 'dark';

	const OPTIONS: { value: Theme; icon: string; label: string }[] = [
		{ value: 'light', icon: 'lucide:sun', label: 'Light' },
		{ value: 'dark', icon: 'lucide:moon', label: 'Dark' },
		{ value: 'system', icon: 'lucide:monitor', label: 'System' },
	];

	let theme = $state<Theme>('system');

	onMount(() => {
		const saved = document.documentElement.dataset.theme;
		theme = saved === 'light' || saved === 'dark' ? saved : 'system';
	});

	function pick(next: Theme) {
		theme = next;

		if (next === 'system')
			delete document.documentElement.dataset.theme;
		else
			document.documentElement.dataset.theme = next;

		try {
			if (next === 'system')
				localStorage.removeItem('theme');
			else
				localStorage.setItem('theme', next);
		} catch {
			// the theme still applies for this visit when storage is blocked
		}
	}
</script>

<div class="segmented w-full" role="group" aria-label="Theme">
	{#each OPTIONS as option (option.value)}
		<button
			type="button"
			title={option.label}
			aria-label={option.label}
			aria-pressed={theme === option.value}
			onclick={() => pick(option.value)}
			class="segmented-item flex-1 justify-center"
		>
			<iconify-icon icon={option.icon} width="16"></iconify-icon>
		</button>
	{/each}
</div>
