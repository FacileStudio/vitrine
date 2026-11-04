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
      description: "Conception sur mesure, animations soignées à 60fps, SEO et image de marque mémorable.",
    },
    {
      id: "Application web & SaaS",
      title: "Application web & SaaS",
      category: "Ingénierie & Produit",
      icon: "solar:code-square-bold-duotone",
      description: "Plateforme métier réactive, APIs ultra-rapides, bases de données résilientes et logique complexe.",
    },
    {
      id: "Direction artistique & Branding",
      title: "Direction artistique & Branding",
      category: "Design & Identité",
      icon: "solar:pallete-2-bold-duotone",
      description: "Logotype, univers typographique, charte de marque complète, design system et maquettes 3D.",
    },
    {
      id: "Infra & Hébergement souverain",
      title: "Infra & Hébergement souverain",
      category: "DevOps & Cloud",
      icon: "solar:cloud-bold-duotone",
      description: "Serveurs dédiés en France, conteneurisation Docker, Nginx, haute disponibilité et indépendance.",
    },
    {
      id: "R&D, Matériel & Autre",
      title: "R&D, Matériel & Autre",
      category: "Hardware & R&D",
      icon: "solar:cpu-bolt-bold-duotone",
      description: "IoT embarqué, firmware Rust Embassy, microVMs autonomes ou projet expérimental sur mesure.",
    },
  ];

  const BUDGETS = [
    { label: "< 5k\u00A0€", note: "Cadrage initial ou vitrine condensée" },
    { label: "5k - 15k\u00A0€", note: "Site vitrine sur mesure ou MVP applicatif complet" },
    { label: "15k - 30k\u00A0€", note: "Plateforme applicative intégrée, branding et design system" },
    { label: "> 30k\u00A0€", note: "Grand projet applicatif, R&D ou écosystème global" },
  ];

  const TIMELINES = [
    "Dès que possible (< 1 mois)",
    "Dans les 1 à 3 mois",
    "D'ici 3 à 6 mois",
    "Pas de contrainte de date",
  ];

  const QUICK_TAGS = [
    "Refonte d'un site existant",
    "Création de zéro",
    "Performance & vitesse brute",
    "Design & animations haut de gamme",
    "Souveraineté & hébergement français",
  ];

  function toggleQuickTag(tag: string) {
    if (message.includes(tag)) {
      message = message.replace(tag, "").trim();
    } else {
      message = message ? `${message} · ${tag}` : tag;
    }
  }

  function nextStep() {
    if (step < 4) {
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
      `Calendrier visé : ${timeline}\n\n` +
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
  <title>Démarrer un projet — Facile Studio</title>
  <meta
    name="description"
    content="Parlez-nous de votre vision. Conception sur mesure, ingénierie d'excellence, souveraineté technique et accompagnement d'experts."
  />
</svelte:head>

<div class="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-10 flex flex-col min-h-[calc(100dvh-6.5rem)] justify-between gap-8">
  <header class="flex flex-col gap-4">
    <div class="flex items-center justify-between gap-4">
      <a
        href="/"
        class="inline-flex items-center gap-2 rounded-fc-pill bg-fc-surface hover:bg-fc-surface-hover px-4 py-2 text-xs font-semibold text-fc-fg transition-colors shrink-0 shadow-xs"
      >
        <Icon icon={icons.chevronLeft} size={14} />
        <span>Retour à l'accueil</span>
      </a>

      {#if !submitted}
        <div class="flex items-center gap-2 text-fc-xs font-mono text-fc-fg-muted">
          <span class="font-semibold text-fc-fg">Étape 0{step}</span>
          <span>/</span>
          <span>04</span>
        </div>
      {/if}

      <div class="hidden sm:flex items-center gap-3">
        <a
          href="tel:+33768888818"
          class="inline-flex items-center gap-1.5 text-fc-xs text-fc-fg-muted hover:text-fc-fg font-medium transition-colors"
        >
          <span>07 68 88 88 18</span>
        </a>
      </div>
    </div>

    {#if !submitted}
      <div class="flex flex-col gap-2 pt-2">
        <div class="h-1.5 w-full bg-fc-surface rounded-fc-full overflow-hidden">
          <div
            class="h-full bg-fc-accent transition-all duration-500 ease-out rounded-fc-full"
            style="width: {(step / 4) * 100}%"
          ></div>
        </div>
        <div class="grid grid-cols-4 gap-2 text-[11px] font-medium text-fc-fg-muted">
          <button
            type="button"
            onclick={() => goToStep(1)}
            class="text-left transition-colors {step === 1 ? 'text-fc-fg font-bold' : ''}"
          >
            1. Projet
          </button>
          <button
            type="button"
            onclick={() => goToStep(2)}
            class="text-left transition-colors {step === 2 ? 'text-fc-fg font-bold' : ''}"
          >
            2. Budget
          </button>
          <button
            type="button"
            onclick={() => goToStep(3)}
            class="text-left transition-colors {step === 3 ? 'text-fc-fg font-bold' : ''}"
          >
            3. Vision
          </button>
          <button
            type="button"
            onclick={() => goToStep(4)}
            class="text-left transition-colors {step === 4 ? 'text-fc-fg font-bold' : ''}"
          >
            4. Contact
          </button>
        </div>
      </div>
    {/if}
  </header>

  <main class="flex-1 flex flex-col justify-center py-4 sm:py-8">
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
            Demande préparée avec succès
          </h1>
          <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted leading-relaxed">
            Votre messagerie s'est ouverte avec tous les éléments du dossier. Nous nous engageons à étudier votre besoin et vous apporter une réponse personnalisée sous 24h ouvrées.
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
            <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Étape 1 sur 4</span>
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
              Quel type de projet souhaitez-vous concevoir ?
            </h1>
            <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted">
              Sélectionnez la nature principale de votre besoin pour cadrer notre accompagnement.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each PROJECT_TYPES as item}
              <button
                type="button"
                onclick={() => (projectType = item.id)}
                class="flex flex-col justify-between gap-4 rounded-fc-2xl p-5 sm:p-6 text-left transition-all cursor-pointer border
                  {projectType === item.id
                    ? 'bg-fc-component border-fc-accent ring-2 ring-fc-accent/20 shadow-md'
                    : 'bg-fc-component border-transparent hover:border-fc-border hover:bg-fc-surface'}"
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
            <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Étape 2 sur 4</span>
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
              Enveloppe budgétaire & calendrier visé
            </h1>
            <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted">
              Des repères transparents pour calibrer les ressources techniques et l'ambition de réalisation.
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-fg-muted">Budget prévisionnel</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {#each BUDGETS as b}
                <button
                  type="button"
                  onclick={() => (budget = b.label)}
                  class="flex flex-col justify-between gap-3 rounded-fc-2xl p-5 text-left transition-all cursor-pointer border
                    {budget === b.label
                      ? 'bg-fc-component border-fc-accent ring-2 ring-fc-accent/20 shadow-md'
                      : 'bg-fc-component border-transparent hover:border-fc-border hover:bg-fc-surface'}"
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
                  class="rounded-fc-pill px-4 py-3 text-center text-fc-xs font-medium transition-all cursor-pointer border
                    {timeline === t
                      ? 'bg-fc-accent text-fc-accent-fg shadow-xs border-transparent'
                      : 'bg-fc-component text-fc-fg-muted hover:text-fc-fg hover:bg-fc-surface border-transparent'}"
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
            <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Étape 3 sur 4</span>
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
              Partagez votre vision et vos ambitions
            </h1>
            <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted">
              En quelques mots ou paragraphes, décrivez votre activité, vos attentes ou vos contraintes spécifiques.
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-[11px] font-semibold uppercase tracking-wider text-fc-fg-muted mr-1">Raccourcis :</span>
              {#each QUICK_TAGS as tag}
                <button
                  type="button"
                  onclick={() => toggleQuickTag(tag)}
                  class="rounded-fc-pill px-3 py-1 text-[11px] font-medium transition-colors cursor-pointer
                    {message.includes(tag)
                      ? 'bg-fc-accent text-fc-accent-fg'
                      : 'bg-fc-component text-fc-fg-muted hover:bg-fc-surface hover:text-fc-fg'}"
                >
                  + {tag}
                </button>
              {/each}
            </div>

            <div class="flex flex-col gap-2">
              <label for="contact-vision" class="text-fc-xs font-medium text-fc-fg-muted">
                Détails de votre besoin (optionnel mais conseillé)
              </label>
              <textarea
                id="contact-vision"
                bind:value={message}
                rows="6"
                placeholder="Parlez-nous de votre public cible, des inspirations visuelles que vous aimez, des fonctionnalités indispensables ou des technologies souhaitées..."
                class="w-full rounded-fc-2xl bg-fc-component p-5 text-fc-sm text-fc-fg outline-none focus:ring-2 focus:ring-fc-accent resize-none shadow-sm placeholder:text-fc-fg-muted/60"
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
            <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Étape 4 sur 4</span>
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
              Comment pouvons-nous vous recontacter ?
            </h1>
            <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted">
              Nous étudions votre projet et revenons vers vous avec un premier diagnostic sous 24h ouvrées.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-7 flex flex-col gap-4">
              <div class="flex flex-col gap-1.5">
                <label for="contact-name" class="text-fc-xs font-medium text-fc-fg-muted">Votre nom complet ou entité *</label>
                <input
                  id="contact-name"
                  type="text"
                  bind:value={name}
                  required
                  placeholder="Ex. Alexandre Dumas — Studio Dumas"
                  class="h-12 rounded-fc-xl bg-fc-component px-4 text-fc-sm text-fc-fg outline-none focus:ring-2 focus:ring-fc-accent shadow-xs"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="contact-email" class="text-fc-xs font-medium text-fc-fg-muted">Votre adresse email professionnelle *</label>
                <input
                  id="contact-email"
                  type="email"
                  bind:value={email}
                  required
                  placeholder="alexandre@domaine.fr"
                  class="h-12 rounded-fc-xl bg-fc-component px-4 text-fc-sm text-fc-fg outline-none focus:ring-2 focus:ring-fc-accent shadow-xs"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="contact-phone" class="text-fc-xs font-medium text-fc-fg-muted">Téléphone direct (optionnel)</label>
                <input
                  id="contact-phone"
                  type="tel"
                  bind:value={phone}
                  placeholder="06 12 34 56 78"
                  class="h-12 rounded-fc-xl bg-fc-component px-4 text-fc-sm text-fc-fg outline-none focus:ring-2 focus:ring-fc-accent shadow-xs"
                />
              </div>
            </div>

            <div class="lg:col-span-5 rounded-fc-2xl bg-fc-component p-6 flex flex-col gap-4 shadow-sm border border-fc-border/40">
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
                {#if message}
                  <div>
                    <span class="text-fc-fg-muted block">Vision & notes</span>
                    <span class="text-fc-fg-muted line-clamp-3 italic">« {message} »</span>
                  </div>
                {/if}
              </div>

              <div class="pt-2 border-t border-fc-border/40 flex flex-col gap-2 text-[11px] text-fc-fg-muted">
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
  </main>

  {#if !submitted}
    <footer class="flex items-center justify-between gap-4 pt-6 border-t border-fc-border/40">
      <div>
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

      <div class="flex items-center gap-3">
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
