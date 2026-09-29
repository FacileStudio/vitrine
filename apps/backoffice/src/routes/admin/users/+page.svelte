<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { onMount } from 'svelte';
	import UserDetailModal from '$lib/components/UserDetailModal.svelte';
	import { Spinner, SearchInput, Badge, EmptyState } from '@repo/ui';
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
		if (!confirm(`Delete ${name}? This action cannot be undone.`)) return;
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
		if (!confirm('Unban this user?')) return;
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

	function getStatusColor(_status: string): 'slate' {
		return 'slate';
	}

	function formatDate(date: Date | string | null) {
		if (!date) return '-';
		return new Date(date).toLocaleDateString();
	}

	let searchTerm = $derived(searchQuery.toLowerCase().trim());
	let filteredUsers = $derived(users.filter(user => {
		if (!searchTerm) return true;
		const searchContent = `${user.firstName} ${user.lastName} ${user.email} ${user.id}`.toLowerCase();
		return searchTerm.split(' ').every(word => searchContent.includes(word));
	}));
</script>

<div class="p-8 max-w-[1400px] mx-auto space-y-6">
	<header>
		<h1 class="text-3xl font-black text-white tracking-tighter">Members</h1>
		<p class="text-white/58 text-sm mt-1">Manage and moderate platform members</p>
	</header>

	{#if stats}
		<div class="grid grid-cols-4 gap-4">
			<div class="bg-white/[0.03] rounded-2xl p-4 border border-white/10">
				<div class="flex items-center justify-between mb-2">
					<div class="text-xs font-bold text-white/45">Total</div>
					<iconify-icon icon="lucide:users" class="text-white/45" width="20"></iconify-icon>
				</div>
				<div class="text-2xl font-black text-white">{stats.totalUsers}</div>
			</div>
			<div class="bg-white/[0.03] rounded-2xl p-4 border border-white/10">
				<div class="flex items-center justify-between mb-2">
					<div class="text-xs font-bold text-white/58">Active</div>
					<iconify-icon icon="lucide:user-check" class="text-white/58" width="20"></iconify-icon>
				</div>
				<div class="text-2xl font-black text-white/58">{stats.activeUsers}</div>
			</div>
			<div class="bg-white/[0.03] rounded-2xl p-4 border border-white/10">
				<div class="flex items-center justify-between mb-2">
					<div class="text-xs font-bold text-white/58">Suspended</div>
					<iconify-icon icon="lucide:ban" class="text-white/58" width="20"></iconify-icon>
				</div>
				<div class="text-2xl font-black text-white/58">{stats.suspendedUsers}</div>
			</div>
			<div class="bg-white/[0.03] rounded-2xl p-4 border border-white/10">
				<div class="flex items-center justify-between mb-2">
					<div class="text-xs font-bold text-white/80">Banned</div>
					<iconify-icon icon="lucide:user-x" class="text-white/80" width="20"></iconify-icon>
				</div>
				<div class="text-2xl font-black text-white/80">{stats.bannedUsers}</div>
			</div>
		</div>
	{/if}

	<div class="bg-white/[0.03] rounded-2xl border border-white/10 p-4">
		<div class="flex gap-3 items-center">
			<div class="flex-1">
				<SearchInput bind:value={searchQuery} placeholder="Search by name, email..." />
			</div>
			<select
				bind:value={filters.status}
				class="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl outline-none font-bold text-sm focus:border-white/20"
			>
				<option value="all">All Status</option>
				<option value="active">Active</option>
				<option value="suspended">Suspended</option>
				<option value="banned">Banned</option>
				<option value="pending">Pending</option>
			</select>
			<select
				bind:value={filters.role}
				class="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl outline-none font-bold text-sm focus:border-white/20"
			>
				<option value="all">All Roles</option>
				<option value="admin">Admin</option>
				<option value="user">User</option>
			</select>
		</div>
	</div>

	{#if pageLoading}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{:else if filteredUsers.length > 0}
		<div class="bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden">
			<div class="overflow-x-auto">
				<table class="w-full">
					<thead class="bg-white/[0.03] border-b border-white/10">
						<tr>
							<th class="text-left px-6 py-3 text-xs font-black text-white/58">User</th>
							<th class="text-left px-6 py-3 text-xs font-black text-white/58">Status</th>
							<th class="text-left px-6 py-3 text-xs font-black text-white/58">Role</th>
							<th class="text-left px-6 py-3 text-xs font-black text-white/58">Joined</th>
							<th class="text-right px-6 py-3 text-xs font-black text-white/58">Actions</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-white/10">
						{#each filteredUsers as user (user.id)}
							<tr class="hover:bg-white/[0.05] transition-colors">
								<td class="px-6 py-4">
									<div class="flex items-center gap-3">
										{#if user.avatar?.url}
											<img src={user.avatar.url} alt={user.firstName} class="w-10 h-10 rounded-xl object-cover" />
										{:else}
											<div class="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-white/58 font-bold">
												{user.firstName[0]}
											</div>
										{/if}
										<div>
											<div class="font-bold text-white flex items-center gap-2">
												{user.firstName} {user.lastName}
												{#if user.emailVerified}
													<iconify-icon icon="lucide:badge-check" class="text-white/58" width="16"></iconify-icon>
												{/if}
											</div>
											<div class="text-sm text-white/58">{user.email}</div>
										</div>
									</div>
								</td>
								<td class="px-6 py-4">
									<Badge variant={getStatusColor(user.status || 'ACTIVE')}>
										{user.status || 'ACTIVE'}
									</Badge>
								</td>
								<td class="px-6 py-4">
									<button
										onclick={() => handleToggleRole(user.id, user.role)}
										class="px-3 py-1 rounded-lg text-xs font-bold transition-colors {user.role === 'ADMIN' ? 'bg-stone-700/10 text-white hover:bg-stone-700/10' : 'bg-white/[0.05] text-white/80 hover:bg-stone-700/10'}"
									>
										{user.role}
									</button>
								</td>
								<td class="px-6 py-4 text-sm text-white/70">
									{formatDate(user.createdAt)}
								</td>
								<td class="px-6 py-4">
									<div class="flex items-center justify-end gap-2">
										<button
											onclick={() => selectedUserId = user.id}
											class="p-2 hover:bg-white/[0.05] rounded-lg transition-colors text-white/45 hover:text-white"
											title="View details"
										>
											<iconify-icon icon="lucide:eye" width="18"></iconify-icon>
										</button>

										{#if !user.emailVerified}
											<button
												onclick={() => handleVerifyEmail(user.id)}
												class="p-2 hover:bg-white/[0.05] rounded-lg transition-colors text-white/45 hover:text-white"
												title="Verify email"
											>
												<iconify-icon icon="lucide:shield-check" width="18"></iconify-icon>
											</button>
										{/if}

										{#if user.status === 'BANNED'}
											<button
												onclick={() => handleUnban(user.id)}
												class="p-2 hover:bg-white/[0.05] rounded-lg transition-colors text-white/58 hover:text-white"
												title="Unban user"
											>
												<iconify-icon icon="lucide:shield-check" width="18"></iconify-icon>
											</button>
										{:else}
											<button
												onclick={() => {
													banningUserId = user.id;
												}}
												class="p-2 hover:bg-white/[0.05] rounded-lg transition-colors text-white/45 hover:text-white"
												title="Ban user"
											>
												<iconify-icon icon="lucide:shield-alert" width="18"></iconify-icon>
											</button>
										{/if}

										<button
											onclick={() => handleDelete(user.id, `${user.firstName} ${user.lastName}`)}
											class="p-2 hover:bg-white/[0.05] rounded-lg transition-colors text-white/45 hover:text-white"
											title="Delete user"
										>
											<iconify-icon icon="lucide:trash-2" width="18"></iconify-icon>
										</button>
									</div>
								</td>
							</tr>

							{#if banningUserId === user.id}
								<tr class="bg-white/[0.03]">
									<td colspan="5" class="px-6 py-4">
										<div class="flex items-center gap-3">
											<iconify-icon icon="lucide:shield-alert" class="text-white/58" width="20"></iconify-icon>
											<p class="flex-1 text-sm text-white/80">Ban this user? They lose access until unbanned.</p>
											<button
												onclick={() => handleBan(user.id)}
												class="px-4 py-2 bg-white text-black rounded-xl font-bold text-sm hover:bg-white/90 transition-colors"
											>
												Ban User
											</button>
											<button
												onclick={() => {
													banningUserId = '';
												}}
												class="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl font-bold text-sm hover:bg-white/[0.05] transition-colors"
											>
												Cancel
											</button>
										</div>
									</td>
								</tr>
							{/if}
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<div class="text-sm text-white/58 text-center">
			Showing {filteredUsers.length} of {users.length} users
		</div>
	{:else}
		<EmptyState
			icon="lucide:users"
			title="No users found"
			description="Try adjusting your filters or search query"
		/>
	{/if}
</div>

<UserDetailModal
	bind:userId={selectedUserId}
	onClose={() => {
		selectedUserId = '';
		fetchUsers();
		fetchStats();
	}}
/>
