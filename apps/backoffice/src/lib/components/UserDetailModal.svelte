<script lang="ts">
	import { Modal, Badge, Spinner, Tabs } from '@repo/ui';
	import { trpc } from '$lib/trpc';
	import { logger } from '@repo/logger';
	import 'iconify-icon';

	let { userId = $bindable(''), onClose = () => {} }: { userId?: string; onClose?: () => void } = $props();

	let loading = $state(true);
	let user: any = $state(null);
	let activeTab = $state<'overview' | 'activity' | 'moderation'>('overview');
	let actionLoading = $state(false);

	$effect(() => {
		if (userId && userId !== '') {
			loadUser();
		} else {
			user = null;
		}
	});

	async function loadUser() {
		loading = true;
		try {
			user = await trpc.user.getById.query({ id: userId });
		} catch (err) {
			logger.error({ err }, 'Failed to load user details');
		} finally {
			loading = false;
		}
	}

	async function handleBan() {
		if (!confirm('Are you sure you want to ban this user?')) return;

		actionLoading = true;
		try {
			await trpc.user.ban.mutate({ id: userId });
			await loadUser();
		} catch (err) {
			logger.error({ err }, 'Failed to ban user');
			alert('Failed to ban user');
		} finally {
			actionLoading = false;
		}
	}

	async function handleUnban() {
		if (!confirm('Are you sure you want to unban this user?')) return;

		actionLoading = true;
		try {
			await trpc.user.unban.mutate({ id: userId });
			await loadUser();
		} catch (err) {
			logger.error({ err }, 'Failed to unban user');
			alert('Failed to unban user');
		} finally {
			actionLoading = false;
		}
	}

	async function handleSuspend() {
		if (!confirm('Suspend this user? The suspension lasts until you lift it.')) return;

		actionLoading = true;
		try {
			await trpc.user.suspend.mutate({ id: userId });
			await loadUser();
		} catch (err) {
			logger.error({ err }, 'Failed to suspend user');
			alert('Failed to suspend user');
		} finally {
			actionLoading = false;
		}
	}

	async function handleUnsuspend() {
		if (!confirm('Are you sure you want to unsuspend this user?')) return;

		actionLoading = true;
		try {
			await trpc.user.unsuspend.mutate({ id: userId });
			await loadUser();
		} catch (err) {
			logger.error({ err }, 'Failed to unsuspend user');
			alert('Failed to unsuspend user');
		} finally {
			actionLoading = false;
		}
	}

	async function handleVerifyEmail() {
		if (!confirm('Manually verify this user\'s email?')) return;

		actionLoading = true;
		try {
			await trpc.user.verifyEmail.mutate({ id: userId });
			await loadUser();
		} catch (err) {
			logger.error({ err }, 'Failed to verify user email');
			alert('Failed to verify email');
		} finally {
			actionLoading = false;
		}
	}

	function formatDate(date: Date | string | null) {
		if (!date) return 'N/A';
		return new Date(date).toLocaleString();
	}

	function getStatusColor(_status: string): 'slate' {
		return 'slate';
	}
</script>

<Modal open={!!userId && userId !== ''} title="User Details" onClose={onClose}>
	{#if loading}
		<div class="py-20 flex justify-center">
			<Spinner size="xl" />
		</div>
	{:else if user}
		<div class="space-y-6">
			<div class="flex items-start gap-4">
				{#if user.avatar?.url}
					<img src={user.avatar.url} alt={user.firstName} class="w-20 h-20 rounded-2xl object-cover" />
				{:else}
					<div class="w-20 h-20 rounded-2xl bg-white/[0.05] flex items-center justify-center text-white/45 font-black text-3xl">
						{user.firstName[0]}
					</div>
				{/if}

				<div class="flex-1">
					<div class="flex items-center gap-3 mb-2">
						<h2 class="text-2xl font-black text-white">{user.firstName} {user.lastName}</h2>
						<Badge variant={getStatusColor(user.status)}>{user.status}</Badge>
					</div>
					<p class="text-sm text-white/58 mb-2">{user.email}</p>
					<div class="flex gap-2">
						{#if user.role === 'ADMIN'}
							<Badge variant="slate">Admin</Badge>
						{/if}
						{#if user.emailVerified}
							<Badge variant="slate">Verified</Badge>
						{:else}
							<Badge variant="slate">Unverified</Badge>
						{/if}
					</div>
				</div>
			</div>

			<Tabs
				tabs={[
					{ label: 'Overview', value: 'overview', icon: 'solar:info-circle-bold' },
					{ label: 'Activity', value: 'activity', icon: 'solar:history-bold' },
					{ label: 'Moderation', value: 'moderation', icon: 'solar:shield-warning-bold' }
				]}
				bind:activeTab
			/>

			{#if activeTab === 'overview'}
				<div class="grid grid-cols-2 gap-4">
					<div class="bg-white/[0.03] p-4 rounded-2xl">
						<div class="text-xs font-black text-white/45 mb-1">Messages</div>
						<div class="text-2xl font-black text-white">{user.messages?.length || 0}</div>
					</div>
					<div class="bg-white/[0.03] p-4 rounded-2xl">
						<div class="text-xs font-black text-white/45 mb-1">Rooms</div>
						<div class="text-2xl font-black text-white">{user.rooms?.length || 0}</div>
					</div>
					<div class="bg-white/[0.03] p-4 rounded-2xl">
						<div class="text-xs font-black text-white/45 mb-1">Joined</div>
						<div class="text-sm font-bold text-white/80">{formatDate(user.createdAt)}</div>
					</div>
					<div class="bg-white/[0.03] p-4 rounded-2xl">
						<div class="text-xs font-black text-white/45 mb-1">Last Login</div>
						<div class="text-sm font-bold text-white/80">{formatDate(user.lastLoginAt)}</div>
					</div>
				</div>

				{#if user.messages && user.messages.length > 0}
					<div>
						<h3 class="text-sm font-black text-white/45 mb-3">Recent Messages</h3>
						<div class="space-y-2 max-h-60 overflow-y-auto">
							{#each user.messages.slice(0, 5) as message (message.id ?? message.createdAt ?? message.text)}
								<div class="bg-white/[0.03] p-3 rounded-xl text-sm">
									<div class="text-white/70 mb-1">{message.text}</div>
									<div class="text-xs text-white/45">{formatDate(message.createdAt)}</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			{:else if activeTab === 'activity'}
				<div class="space-y-3 max-h-96 overflow-y-auto">
					{#if user.auditLogs && user.auditLogs.length > 0}
						{#each user.auditLogs as log (log.id ?? `${log.action}-${log.createdAt}`)}
							<div class="bg-white/[0.03] p-4 rounded-xl">
								<div class="flex items-center justify-between mb-2">
									<Badge variant="slate">
										{log.action}
									</Badge>
									<span class="text-xs text-white/45">{formatDate(log.createdAt)}</span>
								</div>
								<div class="text-sm font-bold text-white/80">{log.entity} #{log.entityId}</div>
								{#if log.ipAddress}
									<div class="text-xs text-white/58 mt-1">IP: {log.ipAddress}</div>
								{/if}
							</div>
						{/each}
					{:else}
						<div class="text-center py-12 text-white/45">
							<iconify-icon icon="solar:history-bold" width="48"></iconify-icon>
							<p class="mt-2 text-sm">No activity logs</p>
						</div>
					{/if}
				</div>
			{:else if activeTab === 'moderation'}
				<div class="space-y-4">
					{#if user.status === 'BANNED'}
						<div class="bg-white/[0.03] border border-white/10 p-4 rounded-2xl">
							<div class="flex items-center gap-2 mb-2">
								<iconify-icon icon="solar:shield-warning-bold" class="text-white/58"></iconify-icon>
								<h3 class="font-black text-white">User is Banned</h3>
							</div>
							<button
								onclick={handleUnban}
								disabled={actionLoading}
								class="mt-3 px-4 py-2 bg-white text-black rounded-xl font-bold text-sm hover:bg-white/90 transition-colors disabled:opacity-50"
							>
								Unban User
							</button>
						</div>
					{:else if user.status === 'SUSPENDED'}
						<div class="bg-white/[0.03] border border-white/10 p-4 rounded-2xl">
							<div class="flex items-center gap-2 mb-2">
								<iconify-icon icon="solar:clock-circle-bold" class="text-white/58"></iconify-icon>
								<h3 class="font-black text-white">User is Suspended</h3>
							</div>
							<button
								onclick={handleUnsuspend}
								disabled={actionLoading}
								class="mt-3 px-4 py-2 bg-white text-black rounded-xl font-bold text-sm hover:bg-white/90 transition-colors disabled:opacity-50"
							>
								Unsuspend User
							</button>
						</div>
					{/if}

					{#if !user.emailVerified}
						<div class="bg-white/[0.03] border border-white/10 p-4 rounded-2xl">
							<div class="flex items-center justify-between">
								<div>
									<h3 class="font-black text-white mb-1">Email Not Verified</h3>
									<p class="text-sm text-white/70">Manually verify user's email address</p>
								</div>
								<button
									onclick={handleVerifyEmail}
									disabled={actionLoading}
									class="px-4 py-2 bg-white text-black rounded-xl font-bold text-sm hover:bg-white/90 transition-colors disabled:opacity-50"
								>
									Verify Email
								</button>
							</div>
						</div>
					{/if}

					{#if user.status !== 'BANNED'}
						<div class="bg-white/[0.03] border border-white/10 p-4 rounded-2xl">
							<h3 class="font-black text-white mb-3">Ban User</h3>
							<button
								onclick={handleBan}
								disabled={actionLoading}
								class="w-full px-4 py-2 bg-white text-black rounded-xl font-bold text-sm hover:bg-white/90 transition-colors disabled:opacity-50"
							>
								Ban User Permanently
							</button>
						</div>
					{/if}

					{#if user.status !== 'SUSPENDED' && user.status !== 'BANNED'}
						<div class="bg-white/[0.03] border border-white/10 p-4 rounded-2xl">
							<h3 class="font-black text-white mb-3">Suspend User</h3>
							<button
								onclick={handleSuspend}
								disabled={actionLoading}
								class="w-full px-4 py-2 bg-white text-black rounded-xl font-bold text-sm hover:bg-white/90 transition-colors disabled:opacity-50"
							>
								Suspend User
							</button>
						</div>
					{/if}
				</div>
			{/if}
		</div>
	{/if}
</Modal>
