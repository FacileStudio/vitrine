<script lang="ts">
  import { trpc } from '$lib/trpc';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import 'iconify-icon';

  let email = '';
  let password = '';
  let loading = false;
  let error = '';

  onMount(() => {
    const token = localStorage.getItem('token');
    if (token) {
      goto('/admin/contacts');
    }
  });

  async function handleLogin() {
    loading = true;
    error = '';
    try {
      const result = await trpc.auth.login.mutate({ email, password });
      localStorage.setItem('token', result.token);
      await goto('/admin/contacts');
    } catch (err) {
      error = 'Invalid email or password';
    }
    loading = false;
  }
</script>

<main class="min-h-screen bg-gray-50">
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900">Admin Login</h1>
        <p class="mt-2 text-gray-600">Enter admin credentials</p>
      </div>

      <form on:submit|preventDefault={handleLogin} class="mt-8 space-y-4">
        <input
          type="email"
          bind:value={email}
          placeholder="Email"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        />

        <input
          type="password"
          bind:value={password}
          placeholder="Password"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        />

        <button
          type="submit"
          disabled={loading}
          class="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 disabled:opacity-50 transition cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <iconify-icon icon="solar:login-2-bold" width="20" height="20"></iconify-icon>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {#if error}
          <p class="text-center text-sm text-red-600">{error}</p>
        {/if}
      </form>
    </div>
  </div>
</main>
