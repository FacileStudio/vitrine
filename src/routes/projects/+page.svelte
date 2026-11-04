<script lang="ts">
  import { Button, Card, Icon, icons } from "@facile/muse";
  import { CLIENT_PROJECTS } from "$lib/data";

  const categories = ["Tous", "Vitrines", "Applications", "Branding", "3D"] as const;
  type Category = (typeof categories)[number];

  let selectedCategory = $state<Category>("Tous");

  const filteredProjects = $derived(
    selectedCategory === "Tous"
      ? CLIENT_PROJECTS
      : CLIENT_PROJECTS.filter((p) => p.categories.includes(selectedCategory))
  );
</script>

<svelte:head>
  <title>Projets & Réalisations — Facile Studio</title>
  <meta
    name="description"
    content="Études de cas détaillées : vitrines d'exception, applications métier ultra-réactives, direction artistique et expériences 3D interactives."
  />
</svelte:head>

<div class="flex flex-col gap-10 py-6 md:py-12">
  <div class="flex flex-col gap-6">
    <div class="flex items-center gap-2 text-fc-xs text-fc-fg-muted">
      <a
        href="/"
        class="inline-flex items-center gap-1.5 rounded-fc-pill px-2.5 py-1 transition-colors hover:bg-fc-surface hover:text-fc-fg"
      >
        <Icon icon={icons.home} size={14} />
        <span>Accueil</span>
      </a>
      <span>/</span>
      <span class="text-fc-fg font-medium">Projets</span>
    </div>

    <div class="flex flex-col gap-3 max-w-3xl">
      <div class="inline-flex items-center gap-2 rounded-fc-pill bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-fg-muted w-fit">
        Portfolio d'ingénierie & design
      </div>
      <h1 class="text-fc-3xl sm:text-5xl font-black tracking-tight text-fc-fg leading-tight">
        Études de cas & réalisations
      </h1>
      <p class="text-fc-md sm:text-fc-lg text-fc-fg-muted leading-relaxed">
        Chaque projet est conçu sur mesure : code propriétaire sans dépendances captives, temps de réponse sous les 50 millisecondes et direction artistique soignée.
      </p>
    </div>

    <div class="flex flex-wrap items-center gap-2 pt-2">
      {#each categories as category (category)}
        {@const active = selectedCategory === category}
        {@const count = category === "Tous"
          ? CLIENT_PROJECTS.length
          : CLIENT_PROJECTS.filter((p) => p.categories.includes(category)).length}
        <button
          type="button"
          onclick={() => (selectedCategory = category)}
          class="inline-flex items-center gap-2 rounded-fc-pill px-4 py-2 text-fc-xs font-medium transition-all duration-200 cursor-pointer
            {active
              ? 'bg-fc-accent text-fc-accent-fg shadow-sm'
              : 'bg-fc-component text-fc-fg-muted hover:bg-fc-surface hover:text-fc-fg'}"
        >
          <span>{category}</span>
          <span
            class="inline-flex size-5 items-center justify-center rounded-fc-full text-[10px] font-mono
              {active ? 'bg-fc-accent-fg/20 text-fc-accent-fg' : 'bg-fc-surface text-fc-fg-muted'}"
          >
            {count}
          </span>
        </button>
      {/each}
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each filteredProjects as project (project.slug)}
      <Card
        href="/projects/{project.slug}"
        class="group flex flex-col justify-between overflow-hidden p-0 bg-fc-component hover:bg-fc-surface transition-all duration-300"
      >
        <div class="flex flex-col">
          <div class="relative aspect-video w-full overflow-hidden bg-fc-surface">
            <img
              src={project.cover}
              alt={project.name}
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-fc-page/80 via-transparent to-transparent opacity-60"></div>
            <div class="absolute top-4 left-4 flex flex-wrap gap-2">
              <span class="rounded-fc-pill bg-fc-page/90 px-3 py-1 text-fc-xs font-mono font-medium text-fc-fg backdrop-blur-md">
                {project.client}
              </span>
              <span class="rounded-fc-pill bg-fc-surface/90 px-3 py-1 text-fc-xs font-mono text-fc-fg-muted backdrop-blur-md">
                {project.year}
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
              {#each project.categories as cat (cat)}
                <span class="rounded-fc-pill bg-fc-component/90 px-2.5 py-0.5 text-[11px] font-medium text-fc-fg backdrop-blur-md">
                  {cat}
                </span>
              {/each}
            </div>
          </div>

          <div class="flex flex-col gap-4 p-6">
            <div class="flex flex-col gap-1.5">
              <h2 class="text-fc-2xl font-bold tracking-tight text-fc-fg group-hover:text-fc-accent transition-colors">
                {project.name}
              </h2>
              <p class="text-fc-sm font-medium text-fc-fg-muted">
                {project.tagline}
              </p>
            </div>

            <p class="text-fc-sm text-fc-fg-muted line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            <div class="flex flex-col gap-2 pt-2">
              <span class="text-fc-xs font-mono uppercase tracking-wider text-fc-fg-muted">
                Livrables clés
              </span>
              <ul class="flex flex-col gap-1 text-fc-xs text-fc-fg-muted">
                {#each project.deliverables.slice(0, 3) as deliverable (deliverable)}
                  <li class="flex items-center gap-2">
                    <span class="size-1.5 rounded-fc-full bg-fc-accent shrink-0"></span>
                    <span class="truncate">{deliverable}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between gap-3 p-6 pt-0">
          <div class="flex flex-wrap items-center gap-1.5">
            {#each project.stack.slice(0, 4) as tech (tech)}
              <span class="rounded-fc-pill bg-fc-surface px-2.5 py-1 text-[11px] font-mono text-fc-fg-muted">
                {tech}
              </span>
            {/each}
          </div>

          <div class="inline-flex items-center gap-1 text-fc-xs font-semibold text-fc-fg group-hover:text-fc-accent transition-colors shrink-0">
            <span>Étude de cas</span>
            <Icon icon={icons.arrow} size={16} class="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    {/each}
  </div>

  <div class="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-fc-lg bg-fc-component p-8 sm:p-10">
    <div class="flex flex-col gap-2 max-w-xl text-center sm:text-left">
      <h3 class="text-fc-xl sm:text-fc-2xl font-bold tracking-tight text-fc-fg">
        Vous avez un projet d'application ou de vitrine ?
      </h3>
      <p class="text-fc-sm text-fc-fg-muted leading-relaxed">
        Nous concevons, développons et hébergeons vos outils avec une exigence technique totale et zéro intermédiaire captif.
      </p>
    </div>
    <Button
      variant="primary"
      size="lg"
      href="/#contact"
      class="rounded-fc-pill px-6 shrink-0"
    >
      Échanger sur votre projet
    </Button>
  </div>
</div>
