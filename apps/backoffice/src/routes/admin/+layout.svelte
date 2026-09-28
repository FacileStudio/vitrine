<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import 'iconify-icon';

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
		{ href: '/admin/statistics', icon: 'solar:chart-2-bold-duotone', label: 'Statistiques' },
		{ href: '/admin/contacts', icon: 'solar:letter-bold-duotone', label: 'Contacts' },
		{ href: '/admin/studio', icon: 'solar:users-group-rounded-bold-duotone', label: 'Studio' },
		{ href: '/admin/users', icon: 'solar:users-group-two-rounded-bold', label: 'Membres' },
        { href: '/admin/projects', icon: 'solar:users-group-two-rounded-bold', label: 'Projects'}
	];

	let currentPath = $derived($page.url.pathname);
</script>

{#if ready}
	<div class="min-h-screen bg-white/[0.03] flex">
		<aside class="w-60 bg-white/[0.03] border-r border-white/10 flex flex-col shrink-0">
			<div class="p-5 border-b border-white/10">
				<a href="/admin/contacts" class="flex items-center gap-2.5">
					<div class="w-8 h-8 rounded-xl bg-white flex items-center justify-center">
						<iconify-icon icon="solar:palette-bold" class="text-white" width="16"></iconify-icon>
					</div>
					<span class="font-black text-white tracking-tight">Facile.</span>
				</a>
			</div>

			<nav class="flex-1 p-3 space-y-1">
				{#each navItems as item (item.href)}
					<a
						href={item.href}
						class="flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm transition-colors
							{currentPath.startsWith(item.href)
								? 'bg-white text-black'
								: 'text-white/58 hover:bg-white/[0.05] hover:text-white'}"
					>
						<iconify-icon icon={item.icon} width="20"></iconify-icon>
						{item.label}
					</a>
				{/each}
			</nav>

			<div class="p-3 border-t border-white/10">
				<button
					onclick={() => { localStorage.removeItem('token'); goto('/'); }}
					class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm text-white/45 hover:bg-white/[0.05] hover:text-white transition-colors"
				>
					<iconify-icon icon="solar:logout-2-bold" width="20"></iconify-icon>
					Déconnexion
				</button>
			</div>
		</aside>

		<main class="flex-1 min-w-0">
			{@render children()}
		</main>
	</div>
{/if}
