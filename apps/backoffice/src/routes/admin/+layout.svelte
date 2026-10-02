<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import 'iconify-icon';
	import { MobileNav, SideBar } from '$lib/muse';
	import Glow from '$lib/components/Glow.svelte';
	import { icons } from '$lib/icons';
	import { logger } from '@repo/logger';
	import { trpc } from '$lib/trpc';

	let { children } = $props();

	let ready = $state(false);
	let collapsed = $state(false);
	let user = $state<{ name: string; avatar?: string } | undefined>();

	onMount(() => {
		try {
			collapsed = localStorage.getItem('sidebar:collapsed') === '1';
		} catch {
			// storage can be blocked, the rail then starts expanded
		}

		// the session is an httpOnly cookie: the page only renders once the API confirms it
		trpc.auth.me
			.query({})
			.then((me) => {
				user = { name: `${me.firstName} ${me.lastName}`.trim(), avatar: me.avatarUrl ?? undefined };
				ready = true;
			})
			.catch((err) => {
				logger.error({ err }, 'Failed to load the signed-in user');
				goto('/');
			});
	});

	$effect(() => {
		const value = collapsed ? '1' : '0';

		try {
			localStorage.setItem('sidebar:collapsed', value);
		} catch {
			// remembering the rail is a convenience, nothing breaks without it
		}
	});

	const NAV = [
		{ href: '/admin/projects', icon: icons.folder, label: 'Projects' },
		{ href: '/admin/studio', icon: icons.usersGroup, label: 'Studio' },
		{ href: '/admin/contacts', icon: icons.mail, label: 'Contacts' },
		{ href: '/admin/statistics', icon: icons.dashboard, label: 'Statistics' },
		{ href: '/admin/users', icon: icons.shield, label: 'Accounts' },
	];

	let currentPath = $derived($page.url.pathname);

	const pages = $derived(NAV.map((item) => ({ ...item, active: currentPath.startsWith(item.href) })));
</script>

{#if ready}
	<Glow />

	<div class="min-h-dvh md:flex">
		<aside class="hidden md:block sticky top-0 h-dvh shrink-0">
			<SideBar
				icon={icons.paletteMark}
				title="Facile."
				{pages}
				{user}
				userHref="/profile"
				bind:collapsed
			/>
		</aside>

		<main class="flex-1 min-w-0 px-1 pt-6 pb-28 md:pl-0 md:pr-6 md:py-12 space-y-8">
			{@render children()}
		</main>
	</div>

	<MobileNav items={pages} {user} profileHref="/profile" />
{/if}
