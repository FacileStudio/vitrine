<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { onMount } from 'svelte';
	import { Spinner, EmptyState } from '@repo/ui';
	import { logger } from '@repo/logger';
	import 'iconify-icon';

	type Contact = Awaited<ReturnType<typeof trpc.contact.list.query>>[number];

	let pageLoading = $state(true);
	let contacts = $state<Contact[]>([]);
	let error = $state('');
	let expandedId = $state<string | null>(null);

	onMount(() => {
		loadContacts();
	});

	async function loadContacts() {
		pageLoading = true;
		try {
			contacts = await trpc.contact.list.query();
		} catch (err) {
			logger.error({ err }, 'Failed to load contacts');
			error = 'Erreur chargement des contacts';
		} finally {
			pageLoading = false;
		}
	}

	function toggle(id: string) {
		expandedId = expandedId === id ? null : id;
	}

	async function handleDelete(id: string, name: string) {
		if (!confirm(`Supprimer le message de "${name}" ?`)) return;
		try {
			await trpc.contact.delete.mutate({ id });
			contacts = contacts.filter((c) => c.id !== id);
		} catch (err) {
			logger.error({ err }, 'Failed to delete contact');
			error = 'Erreur suppression';
		}
	}

	const formatDate = (date: Date | string) =>
		new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }).format(
			new Date(date)
		);
</script>

<div class="p-8 max-w-5xl mx-auto space-y-6">
	<header>
		<h1 class="text-3xl font-black text-slate-900 tracking-tighter">Contacts</h1>
		<p class="text-slate-500 text-sm mt-1 italic">Messages reçus depuis le formulaire du site</p>
	</header>

	{#if error}
		<div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">{error}</div>
	{/if}

	{#if pageLoading}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{:else if contacts.length > 0}
		<div class="space-y-3">
			{#each contacts as contact (contact.id)}
				<div class="bg-white rounded-2xl border border-slate-100 overflow-hidden">
					<button
						onclick={() => toggle(contact.id)}
						class="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-slate-50 transition-colors"
					>
						<div class="min-w-0 flex-1">
							<div class="flex items-center gap-2">
								<span class="font-black text-slate-900 truncate">{contact.firstName} {contact.lastName}</span>
								<span class="text-xs text-slate-400 font-medium truncate">{contact.email}</span>
							</div>
							<p class="text-sm text-slate-500 mt-1 line-clamp-1">{contact.message}</p>
						</div>
						<div class="flex items-center gap-3 shrink-0">
							<span class="text-xs text-slate-400 font-medium hidden sm:inline">{formatDate(contact.createdAt)}</span>
							<iconify-icon
								icon="solar:alt-arrow-down-bold"
								width="16"
								class="text-slate-400 transition-transform {expandedId === contact.id ? 'rotate-180' : ''}"
							></iconify-icon>
						</div>
					</button>

					{#if expandedId === contact.id}
						<div class="px-4 pb-4 border-t border-slate-100 pt-3">
							<p class="text-sm text-slate-700 whitespace-pre-wrap">{contact.message}</p>
							<div class="flex items-center gap-2 mt-4">
								<a
									href="mailto:{contact.email}"
									class="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl font-bold text-xs hover:bg-slate-800 transition-colors"
								>
									<iconify-icon icon="solar:letter-bold" width="14"></iconify-icon>
									Répondre
								</a>
								<button
									onclick={() => handleDelete(contact.id, `${contact.firstName} ${contact.lastName}`)}
									class="flex items-center gap-2 bg-slate-100 text-slate-500 px-4 py-2 rounded-xl font-bold text-xs hover:bg-red-50 hover:text-red-600 transition-colors"
								>
									<iconify-icon icon="solar:trash-bin-trash-bold" width="14"></iconify-icon>
									Supprimer
								</button>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{:else}
		<EmptyState
			icon="solar:letter-bold-duotone"
			title="Aucun message"
			description="Les messages envoyés via le formulaire de contact du site apparaîtront ici."
		/>
	{/if}
</div>
