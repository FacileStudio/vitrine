<script lang="ts">
  import { browser } from "$app/environment";
  import { Button, Icon, icons } from "@facile/muse";

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
      `---\nEnvoyé depuis facile.studio/contact`
    );
    submitted = true;
    if (browser) {
      window.location.href = `mailto:contact@facile.studio?subject=${subject}&body=${body}`;
    }
  }

  function resetForm() {
    submitted = false;
  }
</script>

<svelte:head>
  <title>Démarrer un projet — Facile Studio</title>
  <meta
    name="description"
    content="Parlez-nous de votre vision. Conception sur mesure, ingénierie d'excellence, souveraineté technique et accompagnement d'experts."
  />
</svelte:head>

<div class="flex flex-col gap-8 py-6 md:py-12">
  <div class="flex items-center gap-2 text-fc-xs text-fc-fg-muted">
    <a
      href="/"
      class="inline-flex items-center gap-1.5 rounded-fc-pill px-2.5 py-1 transition-colors hover:bg-fc-surface hover:text-fc-fg"
    >
      <Icon icon={icons.home} size={14} />
      <span>Accueil</span>
    </a>
    <span>/</span>
    <span class="text-fc-fg font-medium">Contact</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
    <div class="lg:col-span-5 flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <div class="inline-flex items-center gap-2 rounded-fc-pill bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-fg-muted w-fit">
          Démarrer un projet
        </div>
        <h1 class="text-fc-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-fc-fg leading-tight">
          Parlons de votre vision
        </h1>
        <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted leading-relaxed">
          Nous concevons des sites vitrines d'exception, des applications web ultra-rapides et des identités visuelles remarquables. Chaque détail compte.
        </p>
      </div>

      <div class="flex flex-col gap-3 pt-1">
        <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-fg-muted">Contacts directs</span>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
          <a
            href="tel:+33768888818"
            class="flex items-center gap-3.5 rounded-fc-xl bg-fc-component p-4 text-fc-fg transition-all hover:bg-fc-surface shadow-xs group"
          >
            <div class="flex size-10 shrink-0 items-center justify-center rounded-fc-full bg-fc-surface group-hover:bg-fc-component text-fc-accent transition-colors">
              <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="flex flex-col min-w-0">
              <span class="text-[11px] font-medium text-fc-fg-muted">Téléphone direct</span>
              <span class="text-fc-sm font-semibold tracking-wide text-fc-fg">07 68 88 88 18</span>
            </div>
          </a>

          <a
            href="mailto:contact@facile.studio?subject=%5BProjet%5D%20Nouveau%20projet%20avec%20Facile%20Studio"
            class="flex items-center gap-3.5 rounded-fc-xl bg-fc-component p-4 text-fc-fg transition-all hover:bg-fc-surface shadow-xs group"
          >
            <div class="flex size-10 shrink-0 items-center justify-center rounded-fc-full bg-fc-surface group-hover:bg-fc-component text-fc-accent transition-colors">
              <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="flex flex-col min-w-0">
              <span class="text-[11px] font-medium text-fc-fg-muted">Email</span>
              <span class="text-fc-sm font-semibold tracking-wide text-fc-fg truncate">contact@facile.studio</span>
            </div>
          </a>
        </div>
      </div>

      <div class="rounded-fc-2xl bg-fc-component p-5 flex flex-col gap-3 shadow-xs">
        <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Nos engagements</span>
        <ul class="flex flex-col gap-2.5 text-fc-xs text-fc-fg-muted">
          <li class="flex items-center gap-2">
            <span class="size-1.5 rounded-fc-full bg-fc-accent shrink-0"></span>
            <span>Réponse complète et détaillée sous 24h ouvrées</span>
          </li>
          <li class="flex items-center gap-2">
            <span class="size-1.5 rounded-fc-full bg-fc-accent shrink-0"></span>
            <span>Cadrage technique et financier transparent</span>
          </li>
          <li class="flex items-center gap-2">
            <span class="size-1.5 rounded-fc-full bg-fc-accent shrink-0"></span>
            <span>Code propriétaire, zéro dépendance captive</span>
          </li>
          <li class="flex items-center gap-2">
            <span class="size-1.5 rounded-fc-full bg-fc-accent shrink-0"></span>
            <span>Hébergement souverain et performances maximales</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="lg:col-span-7 rounded-fc-2xl bg-fc-component p-6 sm:p-8 lg:p-10 shadow-sm">
      {#if submitted}
        <div class="flex flex-col items-center justify-center py-10 text-center gap-4">
          <div class="flex size-14 items-center justify-center rounded-fc-full bg-fc-surface text-fc-accent">
            <Icon icon={icons.check} size={28} />
          </div>
          <div class="flex flex-col gap-2 max-w-md">
            <h2 class="text-fc-xl sm:text-fc-2xl font-bold tracking-tight text-fc-fg">
              Demande de projet préparée
            </h2>
            <p class="text-fc-sm text-fc-fg-muted leading-relaxed">
              Votre client de messagerie s'est ouvert avec tous les détails préremplis. Si la fenêtre ne s'est pas ouverte automatiquement, écrivez directement à <strong class="text-fc-fg font-medium">contact@facile.studio</strong>.
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              class="rounded-fc-pill font-semibold px-6"
              onclick={resetForm}
              icon={icons.refresh}
            >
              Nouvelle demande
            </Button>
            <Button
              variant="ghost"
              size="md"
              href="/"
              class="rounded-fc-pill bg-fc-surface text-fc-fg hover:bg-fc-surface-hover px-6"
              icon={icons.home}
            >
              Retour à l'accueil
            </Button>
          </div>
        </div>
      {:else}
        <form onsubmit={handleSubmit} class="flex flex-col gap-6">
          <div>
            <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Formulaire de projet</span>
            <h2 class="text-fc-xl sm:text-fc-2xl font-bold tracking-tight text-fc-fg mt-1">
              Décrivez votre besoin
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1.5">
              <label for="contact-name" class="text-fc-xs font-medium text-fc-fg-muted">Votre nom ou entité *</label>
              <input
                id="contact-name"
                type="text"
                bind:value={name}
                required
                placeholder="Ex. Alexandre Dumas"
                class="h-11 rounded-fc-md bg-fc-surface px-4 text-fc-sm text-fc-fg outline-none focus:ring-2 focus:ring-fc-accent"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label for="contact-email" class="text-fc-xs font-medium text-fc-fg-muted">Votre adresse email *</label>
              <input
                id="contact-email"
                type="email"
                bind:value={email}
                required
                placeholder="alexandre@domaine.fr"
                class="h-11 rounded-fc-md bg-fc-surface px-4 text-fc-sm text-fc-fg outline-none focus:ring-2 focus:ring-fc-accent"
              />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <span class="text-fc-xs font-medium text-fc-fg-muted">Type de projet</span>
            <div class="flex flex-wrap gap-2">
              {#each PROJECT_TYPES as item}
                <button
                  type="button"
                  onclick={() => (projectType = item)}
                  class="rounded-fc-pill px-3.5 py-2 text-fc-xs font-medium transition-colors cursor-pointer
                    {projectType === item
                      ? 'bg-fc-accent text-fc-accent-fg shadow-xs'
                      : 'bg-fc-surface text-fc-fg-muted hover:text-fc-fg hover:bg-fc-surface-hover'}"
                >
                  {item}
                </button>
              {/each}
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <span class="text-fc-xs font-medium text-fc-fg-muted">Enveloppe budgétaire indicative</span>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {#each BUDGETS as b}
                <button
                  type="button"
                  onclick={() => (budget = b)}
                  class="whitespace-nowrap rounded-fc-pill py-2.5 px-3 text-center text-fc-xs font-medium transition-colors cursor-pointer
                    {budget === b
                      ? 'bg-fc-accent text-fc-accent-fg shadow-xs'
                      : 'bg-fc-surface text-fc-fg-muted hover:text-fc-fg hover:bg-fc-surface-hover'}"
                >
                  {b}
                </button>
              {/each}
            </div>
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="contact-message" class="text-fc-xs font-medium text-fc-fg-muted">Description de vos objectifs</label>
            <textarea
              id="contact-message"
              bind:value={message}
              rows="4"
              placeholder="Décrivez votre activité, le calendrier visé et ce que vous souhaitez accomplir..."
              class="rounded-fc-md bg-fc-surface p-4 text-fc-sm text-fc-fg outline-none focus:ring-2 focus:ring-fc-accent resize-none"
            ></textarea>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            class="w-full rounded-fc-pill font-semibold h-12 shadow-sm text-fc-sm sm:text-fc-base"
            icon={icons.arrow}
          >
            Envoyer ma demande de projet
          </Button>
        </form>
      {/if}
    </div>
  </div>
</div>
