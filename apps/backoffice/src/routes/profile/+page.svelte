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
      error = 'Impossible de charger le profil';
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

<main class="max-w-3xl mx-auto px-8 py-12 space-y-6">
  <nav aria-label="Fil d'Ariane" class="p flex items-center gap-2 text-faint">
    <a href="/admin/projects" class="hover:text-ink">Backoffice</a>
    <iconify-icon icon="lucide:chevron-right" width="14" class="text-ghost"></iconify-icon>
    <span class="text-soft">Profil</span>
  </nav>

  {#if loading}
    <div class="panel p-6"><p class="p text-muted">Chargement du profil...</p></div>
  {:else if error}
    <p class="alert"><iconify-icon icon="lucide:circle-alert" width="16"></iconify-icon>{error}</p>
  {:else if user}
    <header class="page-header">
      <div class="flex items-center gap-4">
        <span class="subtitle size-14 rounded-md bg-raised-hover flex items-center justify-center text-soft">
          {user.firstName?.[0] ?? '?'}
        </span>
        <div>
          <h1 class="title text-ink">{user.firstName} {user.lastName}</h1>
          <p class="p text-muted">{user.email}</p>
        </div>
      </div>
      <button on:click={handleLogout} class="btn btn-danger">
        <iconify-icon icon="lucide:log-out" width="16"></iconify-icon>
        Déconnexion
      </button>
    </header>

    <section class="panel">
      <header class="panel-header pt-4">
        <iconify-icon icon="lucide:id-card" width="16" class="text-faint"></iconify-icon>
        <h2 class="lead text-ink">Informations</h2>
      </header>
      <dl class="grid sm:grid-cols-2 gap-1 p-2 pt-0">
        {#each [
          { label: 'Prénom', value: user.firstName },
          { label: 'Nom', value: user.lastName },
          { label: 'E-mail', value: user.email },
          { label: 'Rôle', value: user.role === 'ADMIN' ? 'Admin' : 'Utilisateur' },
          // auth.me only returns identity fields, so the account dates only show when present
          { label: 'Membre depuis', value: user.createdAt ? new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date(user.createdAt)) : '' },
        ].filter((row) => row.value) as row (row.label)}
          <div class="rounded-md bg-raised p-4">
            <dt class="subtext text-faint">{row.label}</dt>
            <dd class="p text-ink mt-1">{row.value}</dd>
          </div>
        {/each}
      </dl>
    </section>
  {/if}
</main>
