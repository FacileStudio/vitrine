<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { Button, Icon, IconButton, icons } from "@facile/muse";

  let { open = $bindable(false) }: { open: boolean } = $props();

  let name = $state("");
  let email = $state("");
  let projectType = $state("Site vitrine d'exception");
  let budget = $state("5k - 15k\u00A0€");
  let message = $state("");
  let submitted = $state(false);

  const PROJECT_TYPES = [
    "Site vitrine d'exception",
    "Application web & SaaS",
    "Direction artistique & Branding",
    "Infra & Hébergement souverain",
    "Autre projet",
  ];

  const BUDGETS = ["< 5k\u00A0€", "5k - 15k\u00A0€", "15k - 30k\u00A0€", "> 30k\u00A0€"];

  onMount(() => {
    function handleOpen() {
      open = true;
    }
    window.addEventListener("facile:open-contact", handleOpen);
    return () => window.removeEventListener("facile:open-contact", handleOpen);
  });

  function close() {
    open = false;
    submitted = false;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") close();
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[Projet] ${projectType} - ${name || "Nouveau client"}`);
    const body = encodeURIComponent(
      `Bonjour Facile Studio,\n\n` +
      `Nom / Entreprise : ${name}\n` +
      `Email : ${email}\n` +
      `Type de projet : ${projectType}\n` +
      `Budget estimé : ${budget}\n\n` +
      `Description du besoin :\n${message}\n\n` +
      `---\nEnvoyé depuis facile.studio`
    );
    submitted = true;
    if (browser) {
      window.location.href = `mailto:contact@facile.studio?subject=${subject}&body=${body}`;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div
      role="presentation"
      class="fixed inset-0 bg-fc-scrim/80 backdrop-blur-md transition-opacity duration-300"
      onclick={close}
    ></div>

    <div
      class="relative z-10 w-full max-w-lg overflow-hidden rounded-fc-2xl bg-fc-component p-6 sm:p-8
        shadow-2xl transition-all duration-300"
    >
      <div class="flex items-center justify-between pb-4">
        <div>
          <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Démarrer un projet</span>
          <h2 id="modal-title" class="text-fc-xl font-bold tracking-tight text-fc-fg">
            Parlons de votre vision
          </h2>
        </div>
        <IconButton variant="ghost" class="size-9 bg-fc-surface text-fc-fg hover:bg-fc-surface-hover" aria-label="Fermer" onclick={close}>
          <Icon icon={icons.close} size={16} />
        </IconButton>
      </div>

      <p class="text-fc-sm text-fc-fg-muted pb-6">
        Décrivez votre projet ou contactez-nous directement par téléphone ou email. Nous vous répondons sous 24 heures.
      </p>

      <div class="grid grid-cols-2 gap-3 pb-6">
        <a
          href="tel:+33768888818"
          class="flex items-center justify-center gap-2 rounded-fc-lg bg-fc-surface py-3 px-4 text-fc-xs font-semibold text-fc-fg transition-colors hover:bg-fc-surface-hover"
        >
          <svg class="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>07 68 88 88 18</span>
        </a>
        <a
          href="mailto:contact@facile.studio?subject=%5BProjet%5D%20Nouveau%20projet%20avec%20Facile%20Studio"
          class="flex items-center justify-center gap-2 rounded-fc-lg bg-fc-surface py-3 px-4 text-fc-xs font-semibold text-fc-fg transition-colors hover:bg-fc-surface-hover"
        >
          <svg class="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>contact@facile.studio</span>
        </a>
      </div>

      {#if submitted}
        <div class="rounded-fc-lg bg-fc-surface p-6 text-center">
          <p class="text-fc-md font-semibold text-fc-fg">Email préparé dans votre messagerie</p>
          <p class="mt-2 text-fc-xs text-fc-fg-muted">
            Si votre client mail ne s'est pas ouvert automatiquement, écrivez directement à <strong>contact@facile.studio</strong>.
          </p>
          <Button variant="primary" size="md" class="mt-4 rounded-fc-pill" onclick={close} icon={icons.close}>Fermer</Button>
        </div>
      {:else}
        <form onsubmit={handleSubmit} class="flex flex-col gap-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex flex-col gap-1.5">
              <label for="contact-name" class="text-[11px] font-medium text-fc-fg-muted">Votre nom ou entité</label>
              <input
                id="contact-name"
                type="text"
                bind:value={name}
                required
                placeholder="Ex. Alexandre Dumas"
                class="h-10 rounded-fc-md bg-fc-surface px-3 text-fc-sm text-fc-fg outline-none focus:ring-2 focus:ring-fc-accent"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label for="contact-email" class="text-[11px] font-medium text-fc-fg-muted">Votre adresse email</label>
              <input
                id="contact-email"
                type="email"
                bind:value={email}
                required
                placeholder="alexandre@domaine.fr"
                class="h-10 rounded-fc-md bg-fc-surface px-3 text-fc-sm text-fc-fg outline-none focus:ring-2 focus:ring-fc-accent"
              />
            </div>
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="contact-type" class="text-[11px] font-medium text-fc-fg-muted">Type de prestation</label>
            <select
              id="contact-type"
              bind:value={projectType}
              class="h-10 rounded-fc-md bg-fc-surface px-3 text-fc-sm text-fc-fg outline-none focus:ring-2 focus:ring-fc-accent"
            >
              {#each PROJECT_TYPES as item}
                <option value={item}>{item}</option>
              {/each}
            </select>
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="contact-budget" class="text-[11px] font-medium text-fc-fg-muted">Enveloppe budgétaire indicative</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {#each BUDGETS as b}
                <button
                  type="button"
                  onclick={() => (budget = b)}
                  class="whitespace-nowrap rounded-fc-pill py-2 px-2 text-center text-[11px] font-medium transition-colors
                    {budget === b ? 'bg-fc-accent text-fc-accent-fg' : 'bg-fc-surface text-fc-fg-muted hover:text-fc-fg'}"
                >
                  {b}
                </button>
              {/each}
            </div>
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="contact-message" class="text-[11px] font-medium text-fc-fg-muted">Quelques mots sur vos objectifs</label>
            <textarea
              id="contact-message"
              bind:value={message}
              rows="3"
              placeholder="Décrivez votre activité, le calendrier visé et ce que vous souhaitez accomplir..."
              class="rounded-fc-md bg-fc-surface p-3 text-fc-sm text-fc-fg outline-none focus:ring-2 focus:ring-fc-accent resize-none"
            ></textarea>
          </div>

          <Button type="submit" variant="primary" size="lg" class="mt-2 w-full rounded-fc-pill font-semibold" icon={icons.arrow}>
            Envoyer ma demande de projet
          </Button>
        </form>
      {/if}
    </div>
  </div>
{/if}
