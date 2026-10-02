<script lang="ts">
	import { onMount } from 'svelte';
	import { beforeNavigate } from '$app/navigation';
	import { enter, pop, spin } from '$lib/motion';

	let {
		dirty,
		saving,
		error = '',
		onsave,
	}: { dirty: boolean; saving: boolean; error?: string; onsave: () => void } = $props();

	let mac = $state(false);

	const status = $derived(error ? 'error' : saving ? 'saving' : dirty ? 'dirty' : 'clean');

	onMount(() => (mac = /Mac|iPhone|iPad/.test(navigator.userAgent)));

	// the section pages of one project share their state, only leaving the project loses edits
	beforeNavigate(({ from, to, cancel, type }) => {
		const sameEditor = to?.route.id === from?.route.id && to?.params?.slug === from?.params?.slug;

		if (!dirty || sameEditor || type === 'leave')
			return;

		if (!confirm('Some changes are not saved. Leave anyway?'))
			cancel();
	});

	function save() {
		if (dirty && !saving)
			onsave();
	}
</script>

<svelte:window
	onbeforeunload={(e) => {
		if (dirty)
			e.preventDefault();
	}}
	onkeydown={(e) => {
		if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
			e.preventDefault();
			save();
		}
	}}
/>

<div
	use:enter
	class="sticky top-0 z-30
		p-4 pl-6 flex items-center justify-end gap-6"
>
	<!-- {#key status}
		<span use:enter class="p flex items-center gap-2 {status === 'error' ? 'text-danger' : 'text-muted'}">
			{#if status === 'error'}
				<iconify-icon icon="lucide:circle-alert" width="16"></iconify-icon>
				{error}
			{:else if status === 'saving'}
				<iconify-icon use:spin icon="lucide:loader-circle" width="16"></iconify-icon>
				Saving...
			{:else if status === 'dirty'}
				<span class="size-2 rounded-full bg-warning"></span>
				Unsaved changes
			{:else}
				No pending changes
			{/if}
		</span>
	{/key} -->

	<button
		type="button"
		onclick={save}
		disabled={!dirty || saving}
		class="p flex items-center gap-3 px-5 py-3 rounded-project backdrop-blur-2xl disabled:cursor-default {status === 'clean'
			? 'bg-pressed text-on-pressed'
			: 'bg-orange-400/10 text-orange-300 hover:bg-orange-400/20 disabled:opacity-60'}"
	>
		{#key status === 'clean'}
			{#if status === 'clean'}
				<iconify-icon use:pop icon="lucide:circle-check" width="16"></iconify-icon>
				Saved
			{:else}
				<iconify-icon icon="lucide:save" width="16"></iconify-icon>
				Save
				<span class="subtext text-orange-300/60">{mac ? '⌘' : 'Ctrl'} S</span>
			{/if}
		{/key}
	</button>
</div>
