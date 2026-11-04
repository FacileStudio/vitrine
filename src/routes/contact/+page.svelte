<script lang="ts">
  import { browser } from "$app/environment";
  import { fly, fade } from "svelte/transition";
  import { Button, Icon, icons } from "@facile/muse";

  let step = $state(1);
  let direction = $state<"next" | "prev">("next");

  let projectType = $state("Site vitrine d'exception");
  let budget = $state("5k - 15k\u00A0€");
  let timeline = $state("Dans les 1 à 3 mois");
  let message = $state("");
  let tags = $state<string[]>([]);
  let name = $state("");
  let email = $state("");
  let phone = $state("");
  let submitted = $state(false);

  const PROJECT_TYPES = [
    {
      id: "Site vitrine d'exception",
      title: "Site vitrine d'exception",
      category: "Vitrines & Direction artistique",
      icon: "solar:panorama-bold-duotone",
      description: "Design sur mesure, animations à 60 FPS, SEO et une identité qu'on retient.",
    },
    {
      id: "Application web & SaaS",
      title: "Application web & SaaS",
      category: "Ingénierie & Produit",
      icon: "solar:code-square-bold-duotone",
      description: "Outil métier, APIs rapides, base de données fiable et logique sur mesure.",
    },
    {
      id: "Direction artistique & Branding",
      title: "Direction artistique & Branding",
      category: "Design & Identité",
      icon: "solar:pallete-2-bold-duotone",
      description: "Logotype, typographie, charte graphique, design system et maquettes 3D.",
    },
    {
      id: "Infra & Hébergement souverain",
      title: "Infra & Hébergement souverain",
      category: "DevOps & Cloud",
      icon: "solar:cloud-bold-duotone",
      description: "Serveurs dédiés en Europe, Docker, Nginx et haute disponibilité.",
    },
    {
      id: "R&D, Matériel & Autre",
      title: "R&D, Matériel & Autre",
      category: "Hardware & R&D",
      icon: "solar:cpu-bolt-bold-duotone",
      description: "Objets connectés, firmware Rust Embassy, microVMs ou projet expérimental.",
    },
  ];

  const BUDGETS = [
    { label: "< 5k\u00A0€", note: "Cadrage ou petite vitrine" },
    { label: "5k - 15k\u00A0€", note: "Vitrine sur mesure ou première version d'une application" },
    { label: "15k - 30k\u00A0€", note: "Application complète, branding et design system" },
    { label: "> 30k\u00A0€", note: "Grande application, R&D ou écosystème complet" },
  ];

  const TIMELINES = [
    "Dès que possible (< 1 mois)",
    "Dans les 1 à 3 mois",
    "D'ici 3 à 6 mois",
    "Pas de contrainte de date",
  ];

  const QUICK_TAGS = [
    "Refonte d'un site existant",
    "Nouveau site",
    "Performance",
    "Design & animations",
    "Hébergement souverain",
  ];

  function toggleQuickTag(tag: string) {
    tags = tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag];
  }

  const STEPS = ["Projet", "Budget", "Vision", "Contact"];

  function nextStep() {
    if (step < STEPS.length) {
      direction = "next";
      step += 1;
    }
  }

  function prevStep() {
    if (step > 1) {
      direction = "prev";
      step -= 1;
    }
  }

  function goToStep(s: number) {
    direction = s > step ? "next" : "prev";
    step = s;
  }

  const isStepValid = $derived.by(() => {
    if (step === 1) return Boolean(projectType);
    if (step === 2) return Boolean(budget && timeline);
    if (step === 3) return true;
    if (step === 4) return Boolean(name.trim() && email.trim() && email.includes("@"));
    return true;
  });

  function handleSubmit(e?: SubmitEvent) {
    e?.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const subject = encodeURIComponent(`[Projet] ${projectType} - ${name}`);
    const body = encodeURIComponent(
      `Bonjour Facile Studio,\n\n` +
      `Nom / Entreprise : ${name}\n` +
      `Email : ${email}\n` +
      `Téléphone : ${phone || "Non renseigné"}\n\n` +
      `Type de projet : ${projectType}\n` +
      `Budget estimé : ${budget}\n` +
      `Calendrier visé : ${timeline}\n` +
      `Points clés : ${tags.join(", ") || "Aucun"}\n\n` +
      `Description du besoin :\n${message || "À préciser lors de notre premier échange."}\n\n` +
      `---\nEnvoyé depuis facile.studio/contact`
    );

    submitted = true;
    if (browser) {
      window.location.href = `mailto:contact@facile.studio?subject=${subject}&body=${body}`;
    }
  }

  function resetForm() {
    submitted = false;
    step = 1;
  }
</script>

<svelte:head>
  <title>Démarrer un projet · Facile Studio</title>
  <meta
    name="description"
    content="Parlez-nous de votre projet. Design sur mesure, code solide et hébergement souverain."
  />
</svelte:head>

<div class="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 pt-8 pb-6 sm:pt-12 sm:pb-10 flex flex-col min-h-dvh justify-between gap-8">
  <header>
    <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
      <a
        href="/"
        class="inline-flex items-center gap-2 justify-self-start whitespace-nowrap rounded-fc-pill bg-fc-surface hover:bg-fc-surface-hover px-4 py-2 text-xs font-semibold text-fc-fg transition-colors shrink-0 shadow-xs"
      >
        <Icon icon={icons.chevronLeft} size={14} />
        <span>Retour à l'accueil</span>
      </a>

      {#if !submitted}
        <div class="flex items-center gap-1.5" role="img" aria-label="Étape {step} sur {STEPS.length}">
          {#each STEPS as _, i (i)}
            <span
              class="h-2 rounded-fc-full transition-all duration-300 {i + 1 === step
                ? 'w-6 bg-fc-fg'
                : i + 1 < step
                  ? 'w-2 bg-fc-fg-muted'
                  : 'w-2 bg-fc-surface'}"
            ></span>
          {/each}
        </div>
      {:else}
        <span></span>
      {/if}

      <a
        href="tel:+33768888818"
        class="hidden sm:inline-flex justify-self-end items-center gap-1.5 text-fc-xs text-fc-fg-muted hover:text-fc-fg font-medium transition-colors"
      >
        07 68 88 88 18
      </a>
    </div>
  </header>

  <div class="flex-1 flex flex-col justify-center py-8 sm:py-10">
    {#if submitted}
      <div
        in:fade={{ duration: 300 }}
        class="flex flex-col items-center justify-center text-center gap-6 max-w-xl mx-auto py-8"
      >
        <div class="flex size-16 items-center justify-center rounded-fc-full bg-fc-surface text-fc-accent shadow-md">
          <Icon icon={icons.check} size={32} />
        </div>

        <div class="flex flex-col gap-3">
          <h1 class="text-3xl sm:text-4xl font-black tracking-tight text-fc-fg">
            Votre demande est prête
          </h1>
          <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted leading-relaxed">
            Votre messagerie s'est ouverte avec le récapitulatif. Envoyez le mail, on vous répond sous 24h ouvrées.
          </p>
        </div>

        <div class="w-full rounded-fc-2xl bg-fc-component p-6 text-left flex flex-col gap-3 text-fc-xs shadow-sm">
          <span class="font-semibold uppercase tracking-wider text-fc-accent">Récapitulatif de votre demande</span>
          <div class="grid grid-cols-2 gap-3 text-fc-fg">
            <div>
              <span class="text-fc-fg-muted block">Type :</span>
              <strong class="font-medium">{projectType}</strong>
            </div>
            <div>
              <span class="text-fc-fg-muted block">Budget indicatif :</span>
              <strong class="font-medium">{budget}</strong>
            </div>
            <div>
              <span class="text-fc-fg-muted block">Calendrier :</span>
              <strong class="font-medium">{timeline}</strong>
            </div>
            <div>
              <span class="text-fc-fg-muted block">Contact :</span>
              <strong class="font-medium">{name} ({email})</strong>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            variant="primary"
            size="lg"
            href="/"
            class="rounded-fc-pill font-semibold px-8 shadow-sm"
            icon={icons.home}
          >
            Retour à l'accueil
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onclick={resetForm}
            class="rounded-fc-pill bg-fc-surface text-fc-fg hover:bg-fc-surface-hover px-6"
            icon={icons.refresh}
          >
            Modifier ma demande
          </Button>
        </div>
      </div>
    {:else}
      {#if step === 1}
        <div
          in:fly={{ x: direction === "next" ? 24 : -24, duration: 250 }}
          class="flex flex-col gap-8"
        >
          <div class="flex flex-col gap-2">
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
              Quel type de projet souhaitez-vous concevoir ?
            </h1>
            <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted">
              Choisissez votre besoin principal.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each PROJECT_TYPES as item}
              <button
                type="button"
                onclick={() => (projectType = item.id)}
                aria-pressed={projectType === item.id}
                class="flex flex-col justify-between gap-4 rounded-fc-2xl p-5 sm:p-6 text-left transition-all cursor-pointer
                  {projectType === item.id
                    ? 'bg-fc-accent/15 shadow-md'
                    : 'bg-fc-component hover:bg-fc-surface'}"
              >
                <div class="flex flex-col gap-3">
                  <div class="flex items-center justify-between">
                    <span class="flex size-10 items-center justify-center rounded-fc-lg bg-fc-surface text-fc-accent">
                      <Icon icon={item.icon} size={22} />
                    </span>
                    {#if projectType === item.id}
                      <span class="flex size-5 items-center justify-center rounded-fc-full bg-fc-accent text-fc-accent-fg">
                        <Icon icon={icons.check} size={12} />
                      </span>
                    {/if}
                  </div>
                  <div>
                    <h3 class="text-fc-base font-bold text-fc-fg">{item.title}</h3>
                    <p class="text-[11px] font-mono text-fc-fg-muted">{item.category}</p>
                  </div>
                  <p class="text-fc-xs text-fc-fg-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </button>
            {/each}
          </div>
        </div>
      {:else if step === 2}
        <div
          in:fly={{ x: direction === "next" ? 24 : -24, duration: 250 }}
          class="flex flex-col gap-8"
        >
          <div class="flex flex-col gap-2">
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
              Budget et calendrier
            </h1>
            <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted">
              Ces repères nous aident à dimensionner le projet.
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-fg-muted">Budget prévisionnel</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {#each BUDGETS as b}
                <button
                  type="button"
                  onclick={() => (budget = b.label)}
                  aria-pressed={budget === b.label}
                  class="flex flex-col justify-between gap-3 rounded-fc-2xl p-5 text-left transition-all cursor-pointer
                    {budget === b.label
                      ? 'bg-fc-accent/15 shadow-md'
                      : 'bg-fc-component hover:bg-fc-surface'}"
                >
                  <div class="flex items-center justify-between">
                    <span class="text-fc-lg font-bold text-fc-fg">{b.label}</span>
                    {#if budget === b.label}
                      <span class="flex size-5 items-center justify-center rounded-fc-full bg-fc-accent text-fc-accent-fg">
                        <Icon icon={icons.check} size={12} />
                      </span>
                    {/if}
                  </div>
                  <p class="text-fc-xs text-fc-fg-muted leading-relaxed">
                    {b.note}
                  </p>
                </button>
              {/each}
            </div>
          </div>

          <div class="flex flex-col gap-4 pt-2">
            <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-fg-muted">Délai ou calendrier souhaité</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {#each TIMELINES as t}
                <button
                  type="button"
                  onclick={() => (timeline = t)}
                  aria-pressed={timeline === t}
                  class="rounded-fc-pill px-4 py-3 text-center text-fc-xs font-medium transition-all cursor-pointer
                    {timeline === t
                      ? 'bg-fc-accent text-fc-accent-fg shadow-xs'
                      : 'bg-fc-component text-fc-fg-muted hover:text-fc-fg hover:bg-fc-surface'}"
                >
                  {t}
                </button>
              {/each}
            </div>
          </div>
        </div>
      {:else if step === 3}
        <div
          in:fly={{ x: direction === "next" ? 24 : -24, duration: 250 }}
          class="flex flex-col gap-8 max-w-3xl"
        >
          <div class="flex flex-col gap-2">
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
              Parlez-nous de votre projet
            </h1>
            <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted">
              Quelques mots suffisent. Votre activité, vos attentes, vos contraintes.
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-[11px] font-semibold uppercase tracking-wider text-fc-fg-muted mr-1">Raccourcis :</span>
              {#each QUICK_TAGS as tag}
                <button
                  type="button"
                  onclick={() => toggleQuickTag(tag)}
                  aria-pressed={tags.includes(tag)}
                  class="rounded-fc-pill px-3 py-1 text-[11px] font-medium transition-colors cursor-pointer
                    {tags.includes(tag)
                      ? 'bg-fc-accent text-fc-accent-fg'
                      : 'bg-fc-component text-fc-fg-muted hover:bg-fc-surface hover:text-fc-fg'}"
                >
                  + {tag}
                </button>
              {/each}
            </div>

            <div class="flex flex-col gap-2">
              <label for="contact-vision" class="text-fc-xs font-medium text-fc-fg-muted">
                Détails (optionnel, mais utile)
              </label>
              <textarea
                id="contact-vision"
                bind:value={message}
                rows="6"
                placeholder="Votre public, les sites qui vous inspirent, les fonctionnalités indispensables..."
                class="w-full rounded-fc-2xl bg-fc-component p-5 text-fc-sm text-fc-fg outline-none transition-colors focus:bg-fc-surface resize-none shadow-sm placeholder:text-fc-fg-muted/60"
              ></textarea>
            </div>
          </div>
        </div>
      {:else if step === 4}
        <form
          onsubmit={handleSubmit}
          in:fly={{ x: direction === "next" ? 24 : -24, duration: 250 }}
          class="flex flex-col gap-8"
        >
          <div class="flex flex-col gap-2">
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
              Comment pouvons-nous vous recontacter ?
            </h1>
            <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted">
              On étudie votre projet et on vous répond sous 24h ouvrées.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-7 flex flex-col gap-4">
              <div class="flex flex-col gap-1.5">
                <label for="contact-name" class="text-fc-xs font-medium text-fc-fg-muted">Nom ou entreprise *</label>
                <input
                  id="contact-name"
                  type="text"
                  bind:value={name}
                  required
                  placeholder="Alexandre Dumas, Studio Dumas"
                  class="h-12 rounded-fc-xl bg-fc-component px-4 text-fc-sm text-fc-fg outline-none transition-colors focus:bg-fc-surface shadow-xs"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="contact-email" class="text-fc-xs font-medium text-fc-fg-muted">Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  bind:value={email}
                  required
                  placeholder="alexandre@domaine.fr"
                  class="h-12 rounded-fc-xl bg-fc-component px-4 text-fc-sm text-fc-fg outline-none transition-colors focus:bg-fc-surface shadow-xs"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="contact-phone" class="text-fc-xs font-medium text-fc-fg-muted">Téléphone (optionnel)</label>
                <input
                  id="contact-phone"
                  type="tel"
                  bind:value={phone}
                  placeholder="06 12 34 56 78"
                  class="h-12 rounded-fc-xl bg-fc-component px-4 text-fc-sm text-fc-fg outline-none transition-colors focus:bg-fc-surface shadow-xs"
                />
              </div>
            </div>

            <div class="lg:col-span-5 rounded-fc-2xl bg-fc-component p-6 flex flex-col gap-4 shadow-sm">
              <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Synthèse de votre projet</span>

              <div class="flex flex-col gap-3 text-fc-xs">
                <div>
                  <span class="text-fc-fg-muted block">Nature du projet</span>
                  <span class="font-semibold text-fc-fg">{projectType}</span>
                </div>
                <div>
                  <span class="text-fc-fg-muted block">Budget indicatif</span>
                  <span class="font-semibold text-fc-fg">{budget}</span>
                </div>
                <div>
                  <span class="text-fc-fg-muted block">Calendrier</span>
                  <span class="font-semibold text-fc-fg">{timeline}</span>
                </div>
                {#if tags.length > 0}
                  <div>
                    <span class="text-fc-fg-muted block">Points clés</span>
                    <span class="font-semibold text-fc-fg">{tags.join(", ")}</span>
                  </div>
                {/if}
                {#if message}
                  <div>
                    <span class="text-fc-fg-muted block">Vos notes</span>
                    <span class="text-fc-fg-muted line-clamp-3 italic">« {message} »</span>
                  </div>
                {/if}
              </div>

              <div class="pt-2 flex flex-col gap-2 text-[11px] text-fc-fg-muted">
                <span class="flex items-center gap-2">
                  <span class="size-1.5 rounded-fc-full bg-fc-accent"></span>
                  <span>Réponse sous 24h ouvrées</span>
                </span>
                <span class="flex items-center gap-2">
                  <span class="size-1.5 rounded-fc-full bg-fc-accent"></span>
                  <span>Devis transparent et sans engagement</span>
                </span>
              </div>
            </div>
          </div>
        </form>
      {/if}
    {/if}
  </div>

  {#if !submitted}
    <footer class="grid grid-cols-2 sm:grid-cols-[minmax(9rem,auto)_1fr_minmax(9rem,auto)] items-center gap-x-8 gap-y-6 pt-6">
        <div class="relative col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-1">
          <div class="absolute left-[12.5%] right-[12.5%] top-2 h-1 -translate-y-1/2 rounded-fc-full bg-fc-surface overflow-hidden">
            <div
              class="h-full rounded-fc-full bg-fc-accent transition-all duration-500 ease-out"
              style="width: {((step - 1) / (STEPS.length - 1)) * 100}%"
            ></div>
          </div>
          <ol class="relative grid grid-cols-4">
            {#each STEPS as label, i (label)}
              {@const n = i + 1}
              <li class="flex justify-center">
                <button
                  type="button"
                  onclick={() => goToStep(n)}
                  aria-current={step === n ? "step" : undefined}
                  class="flex flex-col items-center gap-3 text-fc-xs font-medium transition-colors
                    {step === n ? 'text-fc-fg' : 'text-fc-fg-muted hover:text-fc-fg'}"
                >
                  <span class="flex h-4 items-center justify-center">
                    <span
                      class="rounded-fc-full transition-all duration-300 {step === n
                        ? 'size-4 bg-fc-accent'
                        : n < step
                          ? 'size-3 bg-fc-accent'
                          : 'size-3 bg-fc-surface'}"
                    ></span>
                  </span>
                  <span>{n} {label}</span>
                </button>
              </li>
            {/each}
          </ol>
        </div>

      <div class="justify-self-start sm:col-start-1 sm:row-start-1">
        {#if step > 1}
          <Button
            variant="ghost"
            size="md"
            onclick={prevStep}
            class="rounded-fc-pill px-6 bg-fc-component hover:bg-fc-surface text-fc-fg"
            icon={icons.chevronLeft}
          >
            Précédent
          </Button>
        {/if}
      </div>

      <div class="justify-self-end sm:col-start-3 sm:row-start-1">
        {#if step < 4}
          <Button
            variant="primary"
            size="lg"
            onclick={nextStep}
            disabled={!isStepValid}
            class="rounded-fc-pill font-semibold px-8 shadow-sm"
            icon={icons.arrow}
          >
            Continuer
          </Button>
        {:else}
          <Button
            type="button"
            variant="primary"
            size="lg"
            onclick={() => handleSubmit()}
            disabled={!isStepValid}
            class="rounded-fc-pill font-semibold px-8 shadow-md"
            icon={icons.arrow}
          >
            Transmettre mon projet
          </Button>
        {/if}
      </div>
    </footer>
  {/if}
</div>
