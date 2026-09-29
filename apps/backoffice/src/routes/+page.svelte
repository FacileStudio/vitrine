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
      goto('/admin/projects');
    }
  });

  async function handleLogin() {
    loading = true;
    error = '';
    try {
      const result = await trpc.auth.login.mutate({ email, password });
      localStorage.setItem('token', result.token);
      await goto('/admin/projects');
    } catch (err) {
      error = 'Wrong email or password';
    }
    loading = false;
  }
</script>

<main class="min-h-screen flex items-center justify-center px-4">
  <div class="w-full max-w-sm space-y-8">
    <div class="flex flex-col items-center gap-4 text-center">
      <img src="/logo.png" alt="Facile." class="size-12 rounded-md" />
      <div>
        <h1 class="title text-ink">Facile. backoffice</h1>
        <p class="page-description">Sign in to manage the site</p>
      </div>
    </div>

    <form on:submit|preventDefault={handleLogin} class="panel p-6 space-y-3">
      <label class="field">
        <iconify-icon icon="lucide:mail" width="16" class="text-faint"></iconify-icon>
        <input type="email" bind:value={email} placeholder="Email" autocomplete="email" required class="field-input" />
      </label>

      <label class="field">
        <iconify-icon icon="lucide:lock" width="16" class="text-faint"></iconify-icon>
        <input
          type="password"
          bind:value={password}
          placeholder="Password"
          autocomplete="current-password"
          required
          class="field-input"
        />
      </label>

      {#if error}
        <p class="alert"><iconify-icon icon="lucide:circle-alert" width="16"></iconify-icon>{error}</p>
      {/if}

      <button type="submit" disabled={loading} class="btn btn-primary w-full">
        <iconify-icon icon="lucide:log-in" width="16"></iconify-icon>
        {loading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  </div>
</main>
