<script lang="ts">
  import { Button, Card, Icon, icons } from "@facile/muse";
  import TechBadge from "$lib/components/TechBadge.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  const project = $derived(data.project);
</script>

<svelte:head>
  <title>{project.name} · Étude de cas · Facile Studio</title>
  <meta name="description" content="{project.name} par Facile Studio : {project.tagline}" />
</svelte:head>

<article class="flex flex-col gap-12 py-6 md:py-12">
  <header class="flex flex-col gap-6">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-2 text-fc-xs text-fc-fg-muted">
        <a
          href="/"
          class="inline-flex items-center gap-1.5 rounded-fc-pill px-2.5 py-1 transition-colors hover:bg-fc-surface hover:text-fc-fg"
        >
          <Icon icon={icons.home} size={14} />
          <span>Accueil</span>
        </a>
        <span>/</span>
        <a
          href="/projects"
          class="inline-flex items-center gap-1.5 rounded-fc-pill px-2.5 py-1 transition-colors hover:bg-fc-surface hover:text-fc-fg"
        >
          <span>Projets</span>
        </a>
        <span>/</span>
        <span class="text-fc-fg font-medium truncate max-w-[160px] sm:max-w-none">{project.name}</span>
      </div>

      <div class="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          href="/projects"
          class="rounded-fc-pill bg-fc-surface text-fc-fg hover:bg-fc-component px-3.5"
          icon={icons.chevronLeft}
        >
          Retour aux projets
        </Button>
        {#if project.link}
          <Button
            variant="primary"
            size="sm"
            href={project.link}
            target="_blank"
            rel="noreferrer"
            class="rounded-fc-pill px-4"
            icon={icons.globe}
          >
            Voir le site
          </Button>
        {/if}
      </div>
    </div>

    <div class="flex flex-col gap-4 max-w-4xl pt-2">
      <div class="flex flex-wrap items-center gap-2">
        <span class="rounded-fc-pill bg-fc-surface px-3 py-1 text-fc-xs font-mono font-medium text-fc-fg">
          {project.client}
        </span>
        <span class="rounded-fc-pill bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-fg-muted">
          {project.year}
        </span>
        {#each project.categories as category (category)}
          <span class="rounded-fc-pill bg-fc-component px-3 py-1 text-fc-xs font-medium text-fc-fg-muted">
            {category}
          </span>
        {/each}
      </div>

      <h1 class="text-fc-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-fc-fg leading-[1.08]">
        {project.name}
      </h1>

      <p class="text-fc-lg sm:text-fc-xl text-fc-fg-muted leading-relaxed">
        {project.tagline}
      </p>
    </div>
  </header>

  <div class="relative w-full overflow-hidden rounded-fc-3xl bg-fc-surface aspect-video md:aspect-[21/9] shadow-sm">
    <img
      src={project.cover}
      alt="Aperçu principal du projet {project.name}"
      class="h-full w-full object-cover"
    />
  </div>

  {#if project.stats && project.stats.length > 0}
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {#each project.stats as stat (stat.label)}
        <Card class="flex flex-col justify-between gap-2 p-6 bg-fc-component rounded-[var(--radius-fc-2xl)] shadow-sm">
          <span class="text-fc-xs font-mono uppercase tracking-wider text-fc-fg-muted">
            {stat.label}
          </span>
          <span class="text-fc-3xl sm:text-fc-4xl font-black tracking-tight text-fc-fg">
            {stat.value}
          </span>
        </Card>
      {/each}
    </div>
  {/if}

  <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
    <div class="flex flex-col gap-4 rounded-fc-3xl bg-fc-component p-8 shadow-sm">
      <div class="inline-flex items-center gap-2 rounded-fc-pill bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-accent w-fit">
        Le problème
      </div>
      <h2 class="text-fc-2xl font-bold tracking-tight text-fc-fg">
        {project.challenge.title}
      </h2>
      <p class="text-fc-sm sm:text-fc-md text-fc-fg-muted leading-relaxed">
        {project.challenge.description}
      </p>
    </div>

    <div class="flex flex-col gap-4 rounded-fc-3xl bg-fc-component p-8 shadow-sm">
      <div class="inline-flex items-center gap-2 rounded-fc-pill bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-success w-fit">
        La solution
      </div>
      <h2 class="text-fc-2xl font-bold tracking-tight text-fc-fg">
        {project.approach.title}
      </h2>
      <p class="text-fc-sm sm:text-fc-md text-fc-fg-muted leading-relaxed">
        {project.approach.description}
      </p>
    </div>
  </section>

  <section class="flex flex-col gap-6 pt-4">
    <div class="flex flex-col gap-2">
      <div class="inline-flex items-center gap-2 rounded-fc-pill bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-fg-muted w-fit">
        Captures
      </div>
      <h2 class="text-fc-2xl sm:text-fc-3xl font-bold tracking-tight text-fc-fg">
        Galerie
      </h2>
      <p class="text-fc-sm text-fc-fg-muted">
        Captures des livrables en production et maquettes.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each project.gallery as image, index (image.src)}
        {@const isFull = image.featured || (index === 0 && project.gallery.length % 2 === 1)}
        <figure class="flex flex-col gap-3 rounded-fc-2xl bg-fc-component p-4 shadow-sm {isFull ? 'md:col-span-2' : ''}">
          <div class="relative overflow-hidden rounded-fc-xl bg-fc-surface {isFull ? 'aspect-video md:aspect-[21/9]' : 'aspect-video'}">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              class="h-full w-full object-cover"
            />
          </div>
          {#if image.caption}
            <figcaption class="flex items-center gap-2 px-1 text-fc-xs font-mono text-fc-fg-muted">
              <span class="size-1 rounded-fc-full bg-fc-accent"></span>
              <span>{image.caption}</span>
            </figcaption>
          {/if}
        </figure>
      {/each}
    </div>
  </section>

  <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
    <div class="flex flex-col gap-5 rounded-fc-3xl bg-fc-component p-8 shadow-sm">
      <h3 class="text-fc-lg font-bold tracking-tight text-fc-fg">
        Livrables du projet
      </h3>
      <ul class="flex flex-col gap-3 text-fc-sm text-fc-fg-muted">
        {#each project.deliverables as deliverable (deliverable)}
          <li class="flex items-start gap-3">
            <span class="mt-0.5 flex size-5 items-center justify-center rounded-fc-full bg-fc-surface text-fc-accent shrink-0">
              <Icon icon={icons.check} size={14} />
            </span>
            <span class="leading-relaxed">{deliverable}</span>
          </li>
        {/each}
      </ul>
    </div>

    <div class="flex flex-col gap-5 rounded-fc-3xl bg-fc-component p-8 shadow-sm">
      <h3 class="text-fc-lg font-bold tracking-tight text-fc-fg">
        Technologies & composants
      </h3>
      <div class="flex flex-wrap gap-2">
        {#each project.stack as tech (tech)}
          <TechBadge {tech} class="bg-fc-surface px-3.5 py-1.5 text-fc-xs font-mono font-medium text-fc-fg" />
        {/each}
      </div>
      <p class="text-fc-xs text-fc-fg-muted leading-relaxed pt-2">
        Aucune dépendance propriétaire fermée. Le code reste léger et auditable.
      </p>
    </div>
  </section>

  <section class="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-fc-3xl bg-fc-component p-8 sm:p-10 mt-4 shadow-sm">
    <div class="flex flex-col gap-2 max-w-xl text-center sm:text-left">
      <h3 class="text-fc-xl sm:text-fc-2xl font-bold tracking-tight text-fc-fg">
        Lancer un projet similaire
      </h3>
      <p class="text-fc-sm text-fc-fg-muted leading-relaxed">
        Des objectifs proches pour votre application ou votre vitrine&nbsp;? On étudie votre besoin sous 48 heures.
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-3 shrink-0">
      <Button
        variant="ghost"
        size="lg"
        href="/projects"
        class="rounded-fc-pill bg-fc-surface text-fc-fg hover:bg-fc-page px-5"
        icon={icons.chevronLeft}
      >
        Autres projets
      </Button>
      <Button
        variant="primary"
        size="lg"
        href="/contact"
        class="rounded-fc-pill px-6"
        icon={icons.arrow}
      >
        Nous contacter
      </Button>
    </div>
  </section>
</article>
