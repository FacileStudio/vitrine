<script lang="ts">
  import { trpc } from '$lib/trpc';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import 'iconify-icon';

  let loading = true;
  let user: any = null;
  let error = '';

  onMount(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      goto('/');
      return;
    }

    try {
      user = await trpc.auth.me.query({});
      loading = false;
    } catch (err: any) {
      error = 'Failed to load profile';
      loading = false;
      localStorage.removeItem('token');
      goto('/');
    }
  });

  function handleLogout() {
    localStorage.removeItem('token');
    goto('/');
  }
</script>

<main class="min-h-screen bg-white/[0.03]">
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="mb-8">
      <a href="/" class="text-white/58 hover:text-white flex items-center gap-2 mb-4">
        <iconify-icon icon="lucide:arrow-left" width="20" height="20"></iconify-icon>
        Back to Dashboard
      </a>
      <h1 class="text-4xl font-bold text-white">My Profile</h1>
    </div>

    {#if loading}
      <div class="bg-white/[0.03] rounded-lg shadow p-6">
        <p class="text-white/58">Loading profile...</p>
      </div>
    {:else if error}
      <div class="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
        <p class="text-red-400">{error}</p>
      </div>
    {:else if user}
      <div class="bg-white/[0.03] rounded-lg shadow p-6 space-y-6">
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="text-sm font-semibold text-white/58">First Name</label>
            <p class="text-lg text-white">{user.firstName}</p>
          </div>

          <div>
            <label class="text-sm font-semibold text-white/58">Last Name</label>
            <p class="text-lg text-white">{user.lastName}</p>
          </div>

          <div>
            <label class="text-sm font-semibold text-white/58">Email</label>
            <p class="text-lg text-white">{user.email}</p>
          </div>

          <div>
            <label class="text-sm font-semibold text-white/58">Role</label>
            <p class="text-lg text-white capitalize">{user.role}</p>
          </div>

          <div>
            <label class="text-sm font-semibold text-white/58">Account Status</label>
            <p class="text-lg text-white">{user.isActive ? 'Active' : 'Inactive'}</p>
          </div>

          <div>
            <label class="text-sm font-semibold text-white/58">Member Since</label>
            <p class="text-lg text-white">{new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div class="pt-4">
          <button
            on:click={handleLogout}
            class="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition cursor-pointer flex items-center gap-2"
          >
            <iconify-icon icon="lucide:log-out" width="20" height="20"></iconify-icon>
            Logout
          </button>
        </div>
      </div>
    {/if}
  </div>
</main>
