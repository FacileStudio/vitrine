<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { onMount } from 'svelte';
	import { Spinner } from '@repo/ui';
	import { logger } from '@repo/logger';
	import { collapse, enter } from '$lib/motion';

	type Contact = Awaited<ReturnType<typeof trpc.contact.list.query>>[number];

	let contacts = $state<Contact[] | null>(null);
	let error = $state('');
	let query = $state('');
	let expandedId = $state<string | null>(null);
	let copiedId = $state<string | null>(null);

	const shown = $derived(
		(contacts ?? []).filter((c) =>
			[c.firstName, c.lastName, c.email, c.message].join(' ').toLowerCase().includes(query.trim().toLowerCase())
		)
	);

	onMount(async () => {
		try {
			contacts = await trpc.contact.list.query();
		} catch (err) {
			logger.error({ err }, 'Failed to load contacts');
			error = 'Could not load the contacts';
		}
	});

	async function remove(contact: Contact, row: HTMLElement | null) {
		if (!confirm(`Delete the message from ${contact.firstName} ${contact.lastName}?`))
			return;

		try {
			await trpc.contact.delete.mutate({ id: contact.id });

			const drop = () => (contacts = contacts?.filter((c) => c.id !== contact.id) ?? null);

			if (row)
				collapse(row, drop);
			else
				drop();
		} catch (err) {
			logger.error({ err }, 'Failed to delete contact');
			error = 'Could not delete';
		}
	}

	async function copy(contact: Contact) {
		await navigator.clipboard.writeText(contact.email);
		copiedId = contact.id;
		setTimeout(() => (copiedId = copiedId === contact.id ? null : copiedId), 1500);
	}

	const formatDate = (date: Date | string) =>
		new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(date));
</script>

<header class="page-header">
	<div>
		<div class="flex items-baseline gap-3">
			<h1 class="title text-ink">Contacts</h1>
			{#if contacts}
				<span class="badge">{contacts.length}</span>
			{/if}
		</div>
		<p class="page-description">Messages sent through the site's contact form</p>
	</div>

	<label class="field w-72">
		<iconify-icon icon="lucide:search" width="16" class="text-faint"></iconify-icon>
		<input bind:value={query} placeholder="Search a message..." class="field-input" />
	</label>
</header>

{#if error}
	<p class="alert"><iconify-icon icon="lucide:circle-alert" width="16"></iconify-icon>{error}</p>
{/if}

{#if !contacts}
	{#if !error}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{/if}
{:else if contacts.length === 0}
	<div use:enter class="empty-state">
		<iconify-icon icon="lucide:inbox" width="28" class="text-ghost"></iconify-icon>
		<p class="lead text-ink">No messages yet</p>
		<p class="p text-muted">Messages sent through the site's form will show up here.</p>
	</div>
{:else if shown.length === 0}
	<div use:enter class="empty-state">
		<iconify-icon icon="lucide:search-x" width="28" class="text-ghost"></iconify-icon>
		<p class="lead text-ink">No message matches “{query}”</p>
		<button type="button" onclick={() => (query = '')} class="p text-muted hover:text-ink">Clear search</button>
	</div>
{:else}
	<div class="flex flex-col gap-1">
		{#each shown as contact (contact.id)}
			{@const open = expandedId === contact.id}
			<div use:enter class="panel overflow-hidden {open ? '' : 'hover:bg-surface-hover'}">
				<button
					type="button"
					aria-expanded={open}
					onclick={() => (expandedId = open ? null : contact.id)}
					class="w-full grid grid-cols-[2.5rem_14rem_minmax(0,1fr)_7rem_1rem] items-center gap-5 p-3 pr-5 text-left"
				>
					<span class="size-10 rounded-project bg-raised-hover flex items-center justify-center lead text-soft">
						{contact.firstName.charAt(0).toUpperCase()}
					</span>
					<span class="min-w-0">
						<span class="block lead text-ink truncate">{contact.firstName} {contact.lastName}</span>
						<span class="block subtext text-faint truncate">{contact.email}</span>
					</span>
					<span class="p text-muted truncate">{contact.message}</span>
					<span class="subtext text-faint text-right">{formatDate(contact.createdAt)}</span>
					<iconify-icon icon="lucide:chevron-down" width="16" class="text-ghost {open ? 'rotate-180' : ''}"></iconify-icon>
				</button>

				{#if open}
					<div use:enter class="px-5 pb-5 pl-[4.75rem] space-y-4">
						<p class="p text-soft whitespace-pre-wrap max-w-[80ch]">{contact.message}</p>
						<div class="flex flex-wrap items-center gap-2">
							<a href="mailto:{contact.email}" class="btn btn-primary">
								<iconify-icon icon="lucide:reply" width="16"></iconify-icon>
								Reply
							</a>
							<button type="button" onclick={() => copy(contact)} class="btn">
								<iconify-icon icon={copiedId === contact.id ? 'lucide:check' : 'lucide:copy'} width="16"></iconify-icon>
								{copiedId === contact.id ? 'Copied' : 'Copy email'}
							</button>
							<button
								type="button"
								onclick={(e) => remove(contact, e.currentTarget.closest('.panel'))}
								class="btn btn-danger"
							>
								<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
								Delete
							</button>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/if}
