<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { onMount } from 'svelte';
	import UserDetailModal from '$lib/components/UserDetailModal.svelte';
	import { Spinner } from '@repo/ui';
	import { enter } from '$lib/motion';
	import { logger } from '@repo/logger';
	import 'iconify-icon';

	let pageLoading = $state(true);
	let users: any[] = $state([]);
	let stats: any = $state(null);
	let searchQuery = $state('');
	let selectedUserId = $state('');
	let banningUserId = $state('');

	let filters = $state({
		status: 'all' as 'all' | 'active' | 'suspended' | 'banned' | 'pending',
		role: 'all' as 'all' | 'admin' | 'user',
	});

	onMount(async () => {
		await Promise.all([fetchUsers(), fetchStats()]);
	});

	async function fetchUsers() {
		pageLoading = true;
		try {
			users = await trpc.user.list.query(filters);
		} catch (err) {
			logger.error({ err }, 'Failed to fetch users');
		} finally {
			pageLoading = false;
		}
	}

	async function fetchStats() {
		try {
			stats = await trpc.user.getStats.query();
		} catch (err) {
			logger.error({ err }, 'Failed to fetch user statistics');
		}
	}

	$effect(() => {
		fetchUsers();
	});

	const handleDelete = async (id: string, name: string) => {
		if (!confirm(`Supprimer ${name} ? Cette action est définitive.`)) return;
		try {
			await trpc.user.delete.mutate({ id });
			users = users.filter(u => u.id !== id);
			await fetchStats();
		} catch (err) {
			logger.error({ err }, 'Failed to delete user');
			alert('Failed to delete user');
		}
	};

	const handleToggleRole = async (id: string, currentRole: string) => {
		const newRole = currentRole === 'ADMIN' ? 'USER' : 'ADMIN';
		try {
			await trpc.user.update.mutate({ id, role: newRole });
			users = users.map(u => u.id === id ? { ...u, role: newRole } : u);
		} catch (err) {
			logger.error({ err }, 'Failed to update user role');
			alert('Failed to update role');
		}
	};

	const handleBan = async (userId: string) => {
		try {
			await trpc.user.ban.mutate({ id: userId });
			await fetchUsers();
			await fetchStats();
			banningUserId = '';
		} catch (err) {
			logger.error({ err }, 'Failed to ban user');
			alert('Failed to ban user');
		}
	};

	const handleUnban = async (id: string) => {
		if (!confirm('Rétablir ce compte ?')) return;
		try {
			await trpc.user.unban.mutate({ id });
			await fetchUsers();
			await fetchStats();
		} catch (err) {
			logger.error({ err }, 'Failed to unban user');
			alert('Failed to unban user');
		}
	};

	const handleVerifyEmail = async (id: string) => {
		try {
			await trpc.user.verifyEmail.mutate({ id });
			users = users.map(u => u.id === id ? { ...u, emailVerified: true } : u);
		} catch (err) {
			logger.error({ err }, 'Failed to verify email');
			alert('Failed to verify email');
		}
	};

	const STATUS: Record<string, { label: string; tone: string }> = {
		ACTIVE: { label: 'Actif', tone: 'bg-success-surface text-success' },
		PENDING: { label: 'En attente', tone: 'bg-white/10 text-soft' },
		SUSPENDED: { label: 'Suspendu', tone: 'bg-white/10 text-warning' },
		BANNED: { label: 'Banni', tone: 'bg-danger-surface text-danger' },
	};

	function formatDate(date: Date | string | null) {
		if (!date) return '-';
		return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(date));
	}

	let searchTerm = $derived(searchQuery.toLowerCase().trim());
	let filteredUsers = $derived(users.filter(user => {
		if (!searchTerm) return true;
		const searchContent = `${user.firstName} ${user.lastName} ${user.email} ${user.id}`.toLowerCase();
		return searchTerm.split(' ').every(word => searchContent.includes(word));
	}));
</script>

<header class="page-header">
	<div>
		<div class="flex items-baseline gap-3">
			<h1 class="title text-ink">Comptes</h1>
			<span class="badge">{users.length}</span>
		</div>
		<p class="page-description">Les personnes qui peuvent se connecter au backoffice</p>
	</div>

	<div class="flex flex-wrap items-center gap-1">
		<label class="field w-72">
			<iconify-icon icon="lucide:search" width="16" class="text-faint"></iconify-icon>
			<input bind:value={searchQuery} placeholder="Nom, e-mail..." class="field-input" />
		</label>
		<label class="field">
			<iconify-icon icon="lucide:activity" width="14" class="text-faint"></iconify-icon>
			<select bind:value={filters.status} class="field-select">
				<option value="all">Tous les statuts</option>
				<option value="active">Actifs</option>
				<option value="suspended">Suspendus</option>
				<option value="banned">Bannis</option>
				<option value="pending">En attente</option>
			</select>
		</label>
		<label class="field">
			<iconify-icon icon="lucide:shield" width="14" class="text-faint"></iconify-icon>
			<select bind:value={filters.role} class="field-select">
				<option value="all">Tous les rôles</option>
				<option value="admin">Admins</option>
				<option value="user">Utilisateurs</option>
			</select>
		</label>
	</div>
</header>

{#if stats}
	<div class="grid gap-1 sm:grid-cols-2 xl:grid-cols-4">
		{#each [
			{ label: 'Total', value: stats.totalUsers, icon: 'lucide:users' },
			{ label: 'Actifs', value: stats.activeUsers, icon: 'lucide:user-check' },
			{ label: 'Suspendus', value: stats.suspendedUsers, icon: 'lucide:clock' },
			{ label: 'Bannis', value: stats.bannedUsers, icon: 'lucide:user-x' },
		] as stat (stat.label)}
			<div use:enter class="panel p-5 flex items-center justify-between">
				<div>
					<p class="p text-muted">{stat.label}</p>
					<p class="title text-ink tabular-nums mt-1">{stat.value}</p>
				</div>
				<span class="size-10 rounded-md bg-raised-hover flex items-center justify-center text-soft">
					<iconify-icon icon={stat.icon} width="18"></iconify-icon>
				</span>
			</div>
		{/each}
	</div>
{/if}

{#if pageLoading}
	<div class="py-20 flex justify-center">
		<Spinner size="xl" />
	</div>
{:else if filteredUsers.length > 0}
	<div class="flex flex-col gap-1">
		<div class="grid grid-cols-[minmax(0,1fr)_8rem_7rem_8rem_11rem] gap-5 px-3 pr-5">
			<span class="column-label">Compte</span>
			<span class="column-label">Statut</span>
			<span class="column-label">Rôle</span>
			<span class="column-label">Inscrit le</span>
			<span class="column-label text-right">Actions</span>
		</div>

		{#each filteredUsers as user (user.id)}
			{@const status = STATUS[user.status || 'ACTIVE'] ?? STATUS.ACTIVE}
			<div use:enter class="panel">
				<div class="grid grid-cols-[minmax(0,1fr)_8rem_7rem_8rem_11rem] items-center gap-5 p-3 pr-5">
					<div class="flex items-center gap-3 min-w-0">
						{#if user.avatar?.url}
							<img src={user.avatar.url} alt="" class="size-10 rounded-md object-cover" />
						{:else}
							<span class="size-10 shrink-0 rounded-md bg-raised-hover flex items-center justify-center lead text-soft">
								{user.firstName[0]}
							</span>
						{/if}
						<div class="min-w-0">
							<p class="lead text-ink flex items-center gap-1.5 truncate">
								{user.firstName} {user.lastName}
								{#if user.emailVerified}
									<iconify-icon icon="lucide:badge-check" width="14" class="text-muted" title="E-mail vérifié"></iconify-icon>
								{/if}
							</p>
							<p class="subtext text-faint truncate">{user.email}</p>
						</div>
					</div>

					<span class="subtext w-fit rounded-sm px-2 py-1 {status.tone}">{status.label}</span>

					<button
						type="button"
						title="Changer le rôle"
						onclick={() => handleToggleRole(user.id, user.role)}
						class="chip w-fit hover:text-ink {user.role === 'ADMIN' ? 'text-ink' : ''}"
					>
						<iconify-icon icon={user.role === 'ADMIN' ? 'lucide:shield-check' : 'lucide:user'} width="12"></iconify-icon>
						{user.role === 'ADMIN' ? 'Admin' : 'Utilisateur'}
					</button>

					<span class="p text-muted">{formatDate(user.createdAt)}</span>

					<div class="flex items-center justify-end gap-1">
						<button type="button" onclick={() => (selectedUserId = user.id)} class="btn-icon" title="Détails" aria-label="Détails">
							<iconify-icon icon="lucide:eye" width="16"></iconify-icon>
						</button>
						{#if !user.emailVerified}
							<button type="button" onclick={() => handleVerifyEmail(user.id)} class="btn-icon" title="Vérifier l'e-mail" aria-label="Vérifier l'e-mail">
								<iconify-icon icon="lucide:mail-check" width="16"></iconify-icon>
							</button>
						{/if}
						{#if user.status === 'BANNED'}
							<button type="button" onclick={() => handleUnban(user.id)} class="btn-icon" title="Rétablir" aria-label="Rétablir">
								<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
							</button>
						{:else}
							<button type="button" onclick={() => (banningUserId = user.id)} class="btn-icon btn-icon-danger" title="Bannir" aria-label="Bannir">
								<iconify-icon icon="lucide:shield-alert" width="16"></iconify-icon>
							</button>
						{/if}
						<button
							type="button"
							onclick={() => handleDelete(user.id, `${user.firstName} ${user.lastName}`)}
							class="btn-icon btn-icon-danger"
							title="Supprimer"
							aria-label="Supprimer"
						>
							<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
						</button>
					</div>
				</div>

				{#if banningUserId === user.id}
					<div use:enter class="flex items-center gap-3 px-5 pb-4">
						<iconify-icon icon="lucide:shield-alert" width="18" class="text-danger"></iconify-icon>
						<p class="p flex-1 text-soft">Bannir ce compte ? Il perd l'accès jusqu'à ce qu'il soit rétabli.</p>
						<button type="button" onclick={() => handleBan(user.id)} class="btn btn-primary">Bannir</button>
						<button type="button" onclick={() => (banningUserId = '')} class="btn">Annuler</button>
					</div>
				{/if}
			</div>
		{/each}

		<p class="subtext text-faint text-center pt-3">{filteredUsers.length} sur {users.length} comptes</p>
	</div>
{:else}
	<div use:enter class="empty-state">
		<iconify-icon icon="lucide:users" width="28" class="text-ghost"></iconify-icon>
		<p class="lead text-ink">Aucun compte trouvé</p>
		<p class="p text-muted">Essayez d'autres filtres ou une autre recherche</p>
	</div>
{/if}

<UserDetailModal
	bind:userId={selectedUserId}
	onClose={() => {
		selectedUserId = '';
		fetchUsers();
		fetchStats();
	}}
/>
