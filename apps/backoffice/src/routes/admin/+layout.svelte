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
	];

	let currentPath = $derived($page.url.pathname);
</script>

{#if ready}
	<div class="min-h-screen bg-slate-50 flex">
		<aside class="w-60 bg-white border-r border-slate-100 flex flex-col shrink-0">
			<div class="p-5 border-b border-slate-100">
				<a href="/admin/contacts" class="flex items-center gap-2.5">
					<div class="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center">
						<iconify-icon icon="solar:palette-bold" class="text-white" width="16"></iconify-icon>
					</div>
					<span class="font-black text-slate-900 tracking-tight">Facile.</span>
				</a>
			</div>

			<nav class="flex-1 p-3 space-y-1">
				{#each navItems as item (item.href)}
					<a
						href={item.href}
						class="flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm transition-colors
							{currentPath.startsWith(item.href)
								? 'bg-slate-900 text-white'
								: 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}"
					>
						<iconify-icon icon={item.icon} width="20"></iconify-icon>
						{item.label}
					</a>
				{/each}
			</nav>

			<div class="p-3 border-t border-slate-100">
				<button
					onclick={() => { localStorage.removeItem('token'); goto('/'); }}
					class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm text-slate-400 hover:bg-slate-50 hover:text-slate-700 transition-colors"
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
