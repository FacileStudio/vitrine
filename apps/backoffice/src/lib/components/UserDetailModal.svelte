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
					<img src={user.avatar.url} alt={user.firstName} class="w-20 h-20 rounded-project object-cover" />
				{:else}
					<div class="w-20 h-20 rounded-project bg-wash flex items-center justify-center title text-faint">
						{user.firstName[0]}
					</div>
				{/if}

				<div class="flex-1">
					<div class="flex items-center gap-3 mb-2">
						<h2 class="title text-ink">{user.firstName} {user.lastName}</h2>
						<Badge variant={getStatusColor(user.status)}>{user.status}</Badge>
					</div>
					<p class="p text-muted mb-2">{user.email}</p>
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
					{ label: 'Overview', value: 'overview', icon: 'lucide:info' },
					{ label: 'Activity', value: 'activity', icon: 'lucide:history' },
					{ label: 'Moderation', value: 'moderation', icon: 'lucide:shield-alert' }
				]}
				bind:activeTab
			/>

			{#if activeTab === 'overview'}
				<div class="grid grid-cols-2 gap-4">
					<div class="rounded-project bg-raised p-4">
						<div class="subtext text-faint mb-1">Messages</div>
						<div class="title text-ink">{user.messages?.length || 0}</div>
					</div>
					<div class="rounded-project bg-raised p-4">
						<div class="subtext text-faint mb-1">Rooms</div>
						<div class="title text-ink">{user.rooms?.length || 0}</div>
					</div>
					<div class="rounded-project bg-raised p-4">
						<div class="subtext text-faint mb-1">Joined</div>
						<div class="p text-soft">{formatDate(user.createdAt)}</div>
					</div>
					<div class="rounded-project bg-raised p-4">
						<div class="subtext text-faint mb-1">Last Login</div>
						<div class="p text-soft">{formatDate(user.lastLoginAt)}</div>
					</div>
				</div>

				{#if user.messages && user.messages.length > 0}
					<div>
						<h3 class="p text-faint mb-3">Recent Messages</h3>
						<div class="space-y-2 max-h-60 overflow-y-auto">
							{#each user.messages.slice(0, 5) as message (message.id ?? message.createdAt ?? message.text)}
								<div class="rounded-project bg-raised p-3 p">
									<div class="text-soft mb-1">{message.text}</div>
									<div class="subtext text-faint">{formatDate(message.createdAt)}</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			{:else if activeTab === 'activity'}
				<div class="space-y-3 max-h-96 overflow-y-auto">
					{#if user.auditLogs && user.auditLogs.length > 0}
						{#each user.auditLogs as log (log.id ?? `${log.action}-${log.createdAt}`)}
							<div class="rounded-project bg-raised p-4">
								<div class="flex items-center justify-between mb-2">
									<Badge variant="slate">
										{log.action}
									</Badge>
									<span class="subtext text-faint">{formatDate(log.createdAt)}</span>
								</div>
								<div class="p text-soft">{log.entity} #{log.entityId}</div>
								{#if log.ipAddress}
									<div class="subtext text-muted mt-1">IP: {log.ipAddress}</div>
								{/if}
							</div>
						{/each}
					{:else}
						<div class="text-center py-12 text-faint">
							<iconify-icon icon="lucide:history" width="48"></iconify-icon>
							<p class="mt-2 p">No activity logs</p>
						</div>
					{/if}
				</div>
			{:else if activeTab === 'moderation'}
				<div class="space-y-4">
					{#if user.status === 'BANNED'}
						<div class="rounded-project bg-raised p-4">
							<div class="flex items-center gap-2 mb-2">
								<iconify-icon icon="lucide:shield-alert" class="text-muted"></iconify-icon>
								<h3 class="lead text-ink">User is Banned</h3>
							</div>
							<button
								onclick={handleUnban}
								disabled={actionLoading}
								class="mt-3 btn btn-primary"
							>
								Unban User
							</button>
						</div>
					{:else if user.status === 'SUSPENDED'}
						<div class="rounded-project bg-raised p-4">
							<div class="flex items-center gap-2 mb-2">
								<iconify-icon icon="lucide:clock" class="text-muted"></iconify-icon>
								<h3 class="lead text-ink">User is Suspended</h3>
							</div>
							<button
								onclick={handleUnsuspend}
								disabled={actionLoading}
								class="mt-3 btn btn-primary"
							>
								Unsuspend User
							</button>
						</div>
					{/if}

					{#if !user.emailVerified}
						<div class="rounded-project bg-raised p-4">
							<div class="flex items-center justify-between">
								<div>
									<h3 class="lead text-ink mb-1">Email Not Verified</h3>
									<p class="p text-soft">Manually verify user's email address</p>
								</div>
								<button
									onclick={handleVerifyEmail}
									disabled={actionLoading}
									class="btn btn-primary"
								>
									Verify Email
								</button>
							</div>
						</div>
					{/if}

					{#if user.status !== 'BANNED'}
						<div class="rounded-project bg-raised p-4">
							<h3 class="lead text-ink mb-3">Ban User</h3>
							<button
								onclick={handleBan}
								disabled={actionLoading}
								class="w-full btn btn-primary"
							>
								Ban User Permanently
							</button>
						</div>
					{/if}

					{#if user.status !== 'SUSPENDED' && user.status !== 'BANNED'}
						<div class="rounded-project bg-raised p-4">
							<h3 class="lead text-ink mb-3">Suspend User</h3>
							<button
								onclick={handleSuspend}
								disabled={actionLoading}
								class="w-full btn btn-primary"
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
