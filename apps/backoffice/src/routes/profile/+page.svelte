<script lang="ts">
  import { trpc } from '$lib/trpc';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import 'iconify-icon';
  import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';

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
      error = 'Could not load the profile';
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

<main class="max-w-3xl mx-auto px-8 py-12 space-y-8">
  <nav aria-label="Breadcrumb" class="p flex items-center gap-2 text-faint">
    <a href="/admin/projects" class="hover:text-ink">Backoffice</a>
    <iconify-icon icon="lucide:chevron-right" width="14" class="text-ghost"></iconify-icon>
    <span class="text-soft">Profile</span>
  </nav>

  {#if loading}
    <div class="panel p-6"><p class="p text-muted">Loading profile...</p></div>
  {:else if error}
    <p class="alert"><iconify-icon icon="lucide:circle-alert" width="16"></iconify-icon>{error}</p>
  {:else if user}
    <header class="page-header">
      <div class="flex items-center gap-4">
        <span class="subtitle size-14 rounded-project bg-raised-hover flex items-center justify-center text-soft">
          {user.firstName?.[0] ?? '?'}
        </span>
        <div>
          <h1 class="title text-ink">{user.firstName} {user.lastName}</h1>
          <p class="p text-muted">{user.email}</p>
        </div>
      </div>
      <div class="flex items-center gap-1">
        <div class="w-40"><ThemeSwitch /></div>
      <button on:click={handleLogout} class="btn btn-danger">
        <iconify-icon icon="lucide:log-out" width="16"></iconify-icon>
        Sign out
      </button>
      </div>
    </header>

    <section class="panel">
      <header class="panel-header pt-4">
        <iconify-icon icon="lucide:id-card" width="16" class="text-faint"></iconify-icon>
        <h2 class="lead text-ink">Details</h2>
      </header>
      <dl class="grid sm:grid-cols-2 gap-1 p-2 pt-0">
        {#each [
          { label: 'First name', value: user.firstName },
          { label: 'Last name', value: user.lastName },
          { label: 'Email', value: user.email },
          { label: 'Role', value: user.role === 'ADMIN' ? 'Admin' : 'User' },
          // auth.me only returns identity fields, so the account dates only show when present
          { label: 'Member since', value: user.createdAt ? new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(new Date(user.createdAt)) : '' },
        ].filter((row) => row.value) as row (row.label)}
          <div class="rounded-project bg-raised p-4">
            <dt class="subtext text-faint">{row.label}</dt>
            <dd class="p text-ink mt-1">{row.value}</dd>
          </div>
        {/each}
      </dl>
    </section>
  {/if}
</main>
