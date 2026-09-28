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
		<h1 class="text-3xl font-black text-white tracking-tighter">Contacts</h1>
		<p class="text-white/58 text-sm mt-1 italic">Messages reçus depuis le formulaire du site</p>
	</header>

	{#if error}
		<div class="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl text-sm font-medium">{error}</div>
	{/if}

	{#if pageLoading}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{:else if contacts.length > 0}
		<div class="space-y-3">
			{#each contacts as contact (contact.id)}
				<div class="bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden">
					<button
						onclick={() => toggle(contact.id)}
						class="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-white/[0.05] transition-colors"
					>
						<div class="min-w-0 flex-1">
							<div class="flex items-center gap-2">
								<span class="font-black text-white truncate">{contact.firstName} {contact.lastName}</span>
								<span class="text-xs text-white/45 font-medium truncate">{contact.email}</span>
							</div>
							<p class="text-sm text-white/58 mt-1 line-clamp-1">{contact.message}</p>
						</div>
						<div class="flex items-center gap-3 shrink-0">
							<span class="text-xs text-white/45 font-medium hidden sm:inline">{formatDate(contact.createdAt)}</span>
							<iconify-icon
								icon="lucide:chevron-down"
								width="16"
								class="text-white/45 transition-transform {expandedId === contact.id ? 'rotate-180' : ''}"
							></iconify-icon>
						</div>
					</button>

					{#if expandedId === contact.id}
						<div class="px-4 pb-4 border-t border-white/10 pt-3">
							<p class="text-sm text-white/80 whitespace-pre-wrap">{contact.message}</p>
							<div class="flex items-center gap-2 mt-4">
								<a
									href="mailto:{contact.email}"
									class="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-bold text-xs hover:bg-white/90 transition-colors"
								>
									<iconify-icon icon="lucide:mail" width="14"></iconify-icon>
									Répondre
								</a>
								<button
									onclick={() => handleDelete(contact.id, `${contact.firstName} ${contact.lastName}`)}
									class="flex items-center gap-2 bg-white/[0.05] text-white/58 px-4 py-2 rounded-xl font-bold text-xs hover:bg-red-500/10 hover:text-red-400 transition-colors"
								>
									<iconify-icon icon="lucide:trash-2" width="14"></iconify-icon>
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
			icon="lucide:mail"
			title="Aucun message"
			description="Les messages envoyés via le formulaire de contact du site apparaîtront ici."
		/>
	{/if}
</div>
