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
		{ href: '/admin/projects', icon: 'lucide:folder-kanban', label: 'Projects', highlight: 'var(--color-accent-projects)' },
		{ href: '/admin/studio', icon: 'lucide:users-round', label: 'Studio', highlight: 'var(--color-accent-studio)' },
		{ href: '/admin/contacts', icon: 'lucide:mail', label: 'Contacts', highlight: 'var(--color-accent-contacts)' },
		{ href: '/admin/statistics', icon: 'lucide:chart-column', label: 'Statistiques', highlight: 'var(--color-accent-statistics)' },
		{ href: '/admin/users', icon: 'lucide:shield-user', label: 'Comptes', highlight: 'var(--color-accent-users)' },
	];

	let currentPath = $derived($page.url.pathname);
</script>

{#if ready}
	<div class="min-h-screen flex">
		<aside class="w-72 sticky top-0 h-screen flex flex-col shrink-0">
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
						class="p flex items-center gap-3 px-3 py-2.5 relative overflow-hidden rounded-sm {active ? 'bg-stone-700/10 text-white' : 'text-muted hover:bg-white/[0.05] hover:text-white'}"
					>
                        <div
                            style:background-color={item.highlight}
                            class="{active ? 'opacity-15' : 'opacity-0'} absolute top-0 -translate-1/2  left-0 w-80 rounded-full blur-3xl z-0 aspect-square"
                        ></div> 
						<iconify-icon icon={item.icon} width="18"></iconify-icon>
						{item.label}
					</a>
				{/each}
			</nav>

			<div class="p-3 space-y-1">
				<a href="/profile" class="p flex items-center gap-3 px-3 py-2.5 rounded-md text-muted hover:bg-white/[0.05] hover:text-ink">
					<iconify-icon icon="lucide:circle-user-round" width="18"></iconify-icon>
					Profil
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
					Déconnexion
				</button>
			</div>
		</aside>

		<main class="flex-1 px-8 py-12 space-y-6 min-w-0">
			{@render children()}
		</main>
	</div>
{/if}
