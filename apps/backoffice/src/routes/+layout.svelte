<script lang="ts">
  import { onMount } from 'svelte';
  import { authStore } from '$lib/auth-store';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { ToastContainer, Spinner } from '@repo/ui';
  import { logger } from '@repo/logger';
  import '../app.css';

  let { children } = $props();

  onMount(async () => {
    await authStore.init();
    logger.info('Auth store initialized');
  });

  $effect(() => {
    if (!$authStore.loading) {
      const path = page.url.pathname;
      const user = $authStore.user;

      if (path.startsWith('/admin') && !user)
        goto(resolve('/'));

      if (path === '/' && user)
        goto(resolve('/admin'));
    }
  });
</script>

{#if $authStore.loading}
  <div class="h-screen flex items-center justify-center bg-white">
    <Spinner size="xl" />
  </div>
{:else}
  {@render children()}
{/if}

<ToastContainer />
