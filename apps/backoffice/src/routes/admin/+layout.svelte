<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import 'iconify-icon';
	import { slideIn } from '$lib/motion';

	let { children } = $props();

	let ready = $state(false);

	onMount(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			goto('/');
			return;
		}
		ready = true;
	});

	const navItems = [
		{ href: '/admin/projects', icon: 'lucide:folder-kanban', label: 'Projects', highlight: 'var(--color-accent-projects)' },
		{ href: '/admin/studio', icon: 'lucide:users-round', label: 'Studio', highlight: 'var(--color-accent-studio)' },
		{ href: '/admin/contacts', icon: 'lucide:mail', label: 'Contacts', highlight: 'var(--color-accent-contacts)' },
		{ href: '/admin/statistics', icon: 'lucide:chart-column', label: 'Statistics', highlight: 'var(--color-accent-statistics)' },
		{ href: '/admin/users', icon: 'lucide:shield-user', label: 'Accounts', highlight: 'var(--color-accent-users)' },
	];

	let currentPath = $derived($page.url.pathname);

	let menuOpen = $state(false);

	// following a link inside the drawer should reveal the page it opened
	$effect(() => {
		currentPath;
		menuOpen = false;
	});
</script>

{#snippet sidebar()}
	<div class="p-5">
		<a href="/admin/projects" class="flex items-center gap-2.5">
			<img src="/logo.png" alt="" class="size-8 rounded-sm" />
			<span class="lead text-[#c8e5d7]">Facile.</span>
		</a>
	</div>

	<nav class="flex-1 p-3 space-y-1">
		{#each navItems as item (item.href)}
			{@const active = currentPath.startsWith(item.href)}
			<a
				href={item.href}
				aria-current={active ? 'page' : undefined}
				class="p flex items-center gap-3 px-6 py-4 relative overflow-hidden rounded-sm {active ? 'bg-stone-700/50 text-white' : 'text-muted hover:bg-white/[0.05] hover:text-white'}"
			>
				<iconify-icon icon={item.icon} width="18"></iconify-icon>
				{item.label}
			</a>
		{/each}
	</nav>

	<div class="p-3 space-y-1">
		<a href="/profile" class="p flex items-center gap-3 px-3 py-2.5 rounded-md text-muted hover:bg-white/[0.05] hover:text-ink">
			<iconify-icon icon="lucide:circle-user-round" width="18"></iconify-icon>
			Profile
		</a>
		<button
			type="button"
			onclick={() => {
				localStorage.removeItem('token');
				goto('/');
			}}
			class="p w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-faint hover:bg-danger-surface hover:text-danger"
		>
			<iconify-icon icon="lucide:log-out" width="18"></iconify-icon>
			Sign out
		</button>
	</div>
{/snippet}

{#if ready}
	<header class="lg:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-page">
		<a href="/admin/projects" class="flex items-center gap-2.5">
			<img src="/logo.png" alt="" class="size-8 rounded-sm" />
			<span class="lead text-[#c8e5d7]">Facile.</span>
		</a>
		<button type="button" onclick={() => (menuOpen = true)} aria-label="Open menu" class="btn-icon size-10">
			<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
		</button>
	</header>

	{#if menuOpen}
		<div class="lg:hidden fixed inset-0 z-50 flex">
			<aside use:slideIn class="w-72 max-w-[85vw] h-full bg-page flex flex-col">
				{@render sidebar()}
			</aside>
			<button type="button" aria-label="Close menu" onclick={() => (menuOpen = false)} class="flex-1 bg-overlay"></button>
		</div>
	{/if}

	<div class="min-h-screen lg:flex">
		<aside class="hidden lg:flex w-72 sticky top-0 h-screen flex-col shrink-0">
			{@render sidebar()}
		</aside>

		<main class="flex-1 px-4 py-6 lg:px-8 lg:py-12 space-y-6 min-w-0">
			{@render children()}
		</main>
	</div>
{/if}
