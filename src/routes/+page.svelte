<script lang="ts">
  import { Button, Card, Icon } from "@facile/muse";
  import PcbViewer from "$lib/components/PcbViewer.svelte";
  import InteractiveBlob from "$lib/components/InteractiveBlob.svelte";
  import StudioGraph from "$lib/components/StudioGraph.svelte";
  import {
    CATEGORIES,
    CLIENT_PROJECTS,
    STUDIO_METRICS,
    STUDIO_SERVICES,
    SUITE_TOOLS,
  } from "$lib/data";
  import { GITHUB_ICON } from "$lib/icons";
  import { scrollReveal } from "$lib/motion";

  let selectedCategory = $state<string>("all");
  let activeBlobName = $state<string>("Bulle");

  const filteredTools = $derived(
    selectedCategory === "all"
      ? SUITE_TOOLS
      : SUITE_TOOLS.filter((t) => t.category === selectedCategory)
  );

  function openContactModal() {
    window.dispatchEvent(new CustomEvent("facile:open-contact"));
  }
</script>

<svelte:head>
  <title>Facile Studio — Studio de design & ingénierie web</title>
  <meta
    name="description"
    content="Studio de design et d'ingénierie web. Sites vitrines d'exception, applications sur mesure, direction artistique et logiciels souverains."
  />
</svelte:head>

<!-- Top Wordmark & Hero Section -->
<section id="hero" use:scrollReveal={{ delay: 0.05, stagger: 0.08 }} class="relative flex flex-col gap-8 pt-4 pb-20 md:pt-10 md:pb-28 overflow-hidden">
  <!-- Massive full-width monochrome FACILE wordmark -->
  <div data-reveal-item class="w-full overflow-hidden select-none py-2">
    <svg viewBox="0 0 1488 409" fill="none" class="w-full h-auto max-h-[160px] sm:max-h-[220px] md:max-h-[300px] text-fc-fg fill-current transition-colors duration-300">
      <path d="M33.1193 3.91218L36.4625 5.02899C29.2188 32.3912 44.8207 70.3632 71.0097 70.3632C125.616 70.3632 169.636 -0.555124 247.646 0.00328039C308.939 0.00328039 322.312 54.7276 322.312 80.973V120.62H237.616L237.059 86.5571C237.059 47.4683 216.442 38.5337 193.039 38.5337C115.029 38.5337 85.4972 149.099 43.7063 149.099C20.3034 149.099 14.1741 116.711 14.1741 91.5828C14.1741 54.1692 23.6467 19.5477 33.1193 3.91218ZM92.1837 203.265L145.119 85.9987H218.114C196.94 126.763 179.109 166.41 162.95 203.265H169.079C234.273 203.265 286.094 219.459 286.094 304.896L202.512 303.779C203.069 225.602 200.84 212.2 169.636 212.2H158.492C105.557 331.141 67.6664 418.812 -7 418.812L-6.44279 327.232V203.265H92.1837ZM-1.98509 257.431V327.232C26.9899 325.557 52.6217 292.052 68.7808 255.197L87.7261 212.758C15.8457 215.55 -1.98509 224.485 -1.98509 257.431Z" fill="currentColor"/>
      <path d="M302.996 416.02L408.402 80.973H490.358L595.764 416.02H538.186L442.531 115.408H455.068L360.574 416.02H302.996ZM361.735 343.426V291.075H537.257V343.426H361.735Z" fill="currentColor"/>
      <path d="M751.49 423C718.057 423 689.422 415.71 665.586 401.129C641.75 386.393 623.408 365.918 610.561 339.704C597.869 313.489 591.523 283.087 591.523 248.496C591.523 213.906 597.869 183.504 610.561 157.289C623.408 131.075 641.75 110.677 665.586 96.0966C689.422 81.3607 718.057 73.9928 751.49 73.9928C790.03 73.9928 822.147 83.6875 847.841 103.077C873.535 122.311 891.567 148.293 901.937 181.022L845.519 196.611C839.018 174.74 827.952 157.677 812.319 145.423C796.686 133.014 776.409 126.809 751.49 126.809C729.046 126.809 710.318 131.85 695.304 141.933C680.445 152.015 669.224 166.208 661.639 184.512C654.21 202.66 650.418 223.988 650.263 248.496C650.263 273.005 653.978 294.41 661.407 312.714C668.991 330.862 680.29 344.978 695.304 355.06C710.318 365.142 729.046 370.184 751.49 370.184C776.409 370.184 796.686 363.979 812.319 351.57C827.952 339.161 839.018 322.098 845.519 300.382L901.937 315.971C891.567 348.7 873.535 374.759 847.841 394.149C822.147 413.383 790.03 423 751.49 423Z" fill="currentColor"/>
      <path d="M938.983 416.02V80.973H994.936V416.02H938.983Z" fill="currentColor"/>
      <path d="M1050.55 416.02V80.973H1106.51V363.436H1254.17V416.02H1050.55Z" fill="currentColor"/>
      <path d="M1163.48 416.02V80.973H1379.4V133.557H1219.44V216.155H1320.83V268.739H1219.44V363.436H1379.4V416.02H1163.48Z" fill="currentColor"/>
      <path d="M1435.99 363.901H1488V416.02H1435.99V363.901Z" fill="currentColor"/>
    </svg>
  </div>

  <div data-reveal-item class="flex flex-col gap-6 max-w-4xl pt-2">
    <h1 class="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-fc-fg leading-[1.08]">
      Une équipe de passionnés<br />
      <span class="text-fc-fg-muted">qui sait ce qu'elle fait.</span>
    </h1>

    <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 text-fc-sm text-fc-fg-muted font-mono">
      <span class="text-fc-accent font-bold">[fasil]</span>
      <span>Qui se fait sans effort, qui ne présente aucune difficulté. Simple, aisé.</span>
    </div>

    <p class="text-fc-md sm:text-fc-lg text-fc-fg-muted max-w-3xl leading-relaxed">
      Studio de design et d'ingénierie web. On conçoit, développe et déploie des sites vitrines d'exception, des applications sur mesure et des identités visuelles remarquables. Zéro usine à gaz, des performances brutes et un soin obsessionnel du détail.
    </p>
  </div>

  <!-- Primary CTAs -->
  <div data-reveal-item class="flex flex-wrap items-center gap-4 pt-2">
    <Button
      variant="primary"
      size="lg"
      class="rounded-fc-pill font-semibold px-6 shadow-md"
      onclick={openContactModal}
    >
      Démarrer un projet
    </Button>
    <Button
      variant="ghost"
      size="lg"
      href="#projets"
      class="rounded-fc-pill font-medium px-6 bg-fc-component hover:bg-fc-surface text-fc-fg"
    >
      Voir nos réalisations
    </Button>
    <a
      href="tel:+33768888818"
      class="inline-flex items-center gap-2 rounded-fc-pill bg-fc-surface px-4 py-2 text-fc-xs font-semibold text-fc-fg transition-colors hover:bg-fc-surface-hover"
    >
      <svg class="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span>07 68 88 88 18</span>
    </a>
  </div>

  <!-- Studio metrics banner -->
  <div data-reveal-item class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
    {#each STUDIO_METRICS as stat}
      <div class="flex flex-col gap-1 rounded-fc-xl bg-fc-component p-5">
        <span class="text-2xl sm:text-3xl font-black text-fc-fg">{stat.value}</span>
        <span class="text-fc-xs font-semibold text-fc-fg">{stat.label}</span>
        <span class="text-[11px] text-fc-fg-muted">{stat.sub}</span>
      </div>
    {/each}
  </div>
</section>

<!-- Services / Ce qu'on vend Section -->
<section id="services" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-10 py-16">
  <div class="flex flex-col gap-3">
    <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Prestations studio</span>
    <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
      Ce que l'on construit pour vous
    </h2>
    <p class="text-fc-md text-fc-fg-muted max-w-2xl">
      Chaque projet bénéficie d'une conception sur mesure sans intermédiaire. Vous travaillez en direct avec les designers et développeurs qui codent votre solution.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each STUDIO_SERVICES as service}
      <div class="flex flex-col justify-between gap-6 rounded-fc-2xl bg-fc-component p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1">
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <span class="flex size-10 items-center justify-center rounded-fc-lg bg-fc-surface text-fc-accent">
              <Icon icon={service.icon} size={22} />
            </span>
            <div>
              <h3 class="text-fc-lg font-bold text-fc-fg">{service.title}</h3>
              <p class="text-fc-xs text-fc-fg-muted">{service.tagline}</p>
            </div>
          </div>
          <p class="text-fc-sm text-fc-fg-muted leading-relaxed">
            {service.description}
          </p>
        </div>

        <div class="flex flex-col gap-3 pt-2">
          <span class="text-[11px] font-semibold uppercase tracking-wider text-fc-fg-muted">Livrables inclus</span>
          <div class="flex flex-wrap gap-2">
            {#each service.deliverables as d}
              <span class="rounded-fc-md bg-fc-surface px-2.5 py-1 text-[11px] font-medium text-fc-fg">
                {d}
              </span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-fc-2xl bg-fc-surface p-6 sm:p-8">
    <div class="flex flex-col gap-1 text-center sm:text-left">
      <span class="text-fc-md font-bold text-fc-fg">Un besoin particulier ou un projet spécifique ?</span>
      <span class="text-fc-xs text-fc-fg-muted">Nous cadrons votre cahier des charges et vous envoyons une proposition sous 48h.</span>
    </div>
    <Button variant="primary" size="md" class="rounded-fc-pill font-semibold px-6 shrink-0" onclick={openContactModal}>
      Demander un devis
    </Button>
  </div>
</section>

<!-- Portfolio / Réalisations Clients Section -->
<section id="projets" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-10 py-16">
  <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
    <div class="flex flex-col gap-3">
      <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Réalisations récentes</span>
      <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
        Des projets taillés pour performer
      </h2>
      <p class="text-fc-md text-fc-fg-muted max-w-2xl">
        Découvrez une sélection de réalisations conçues et livrées par le studio.
      </p>
    </div>
    <Button variant="ghost" size="md" href="/projects" class="rounded-fc-pill bg-fc-component text-fc-fg hover:bg-fc-surface shrink-0">
      Voir tout le portfolio
    </Button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each CLIENT_PROJECTS as project}
      <a
        href={`/projects/${project.slug}`}
        class="group flex flex-col overflow-hidden rounded-fc-2xl bg-fc-component transition-all duration-300 hover:-translate-y-1 shadow-sm"
      >
        <div class="relative aspect-video w-full overflow-hidden bg-fc-surface">
          <img
            src={`/images/projects/${project.slug === 'marcel' ? 'Marcel.webp' : project.slug === 'laura-herve' ? 'LauraHerve.webp' : project.slug === 'projet-zero' ? 'ProjetZero_reveal.webp' : 'SolaïsIntra.webp'}`}
            alt={project.name}
            class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div class="flex flex-col gap-3 p-6">
          <div class="flex items-center justify-between">
            <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">{project.category}</span>
            <span class="text-[11px] font-mono text-fc-fg-muted">{project.year}</span>
          </div>
          <h3 class="text-fc-xl font-bold text-fc-fg group-hover:text-fc-accent transition-colors">
            {project.name}
          </h3>
          <p class="text-fc-sm text-fc-fg-muted line-clamp-2">
            {project.description}
          </p>
          <div class="flex flex-wrap gap-1.5 pt-2">
            {#each project.stack as tech}
              <span class="rounded-fc-md bg-fc-surface px-2 py-0.5 text-[11px] font-medium text-fc-fg-muted">
                {tech}
              </span>
            {/each}
          </div>
        </div>
      </a>
    {/each}
  </div>
</section>

<!-- Studio Interconnectivity Graph Section -->
<section id="ecosystem" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-8 py-16">
  <div class="flex flex-col gap-3 text-center items-center">
    <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Architecture studio</span>
    <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
      Un écosystème connecté, zéro friction
    </h2>
    <p class="text-fc-md text-fc-fg-muted max-w-2xl">
      Nos projets clients et nos outils internes communiquent via des APIs ouvertes et un bus d'événements centralisé. Une architecture fluide et résiliente.
    </p>
  </div>

  <div class="rounded-fc-2xl bg-fc-component p-4 sm:p-8">
    <StudioGraph />
  </div>
</section>

<!-- La Suite Facile (20 Internal Tools) Section -->
<section id="suite" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-10 py-16">
  <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Boîte à outils studio</span>
      <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
        La Suite Facile
      </h2>
      <p class="text-fc-md text-fc-fg-muted max-w-2xl">
        20 outils libres et souverains développés par le studio pour nos besoins quotidiens et ceux de nos clients. Un seul compte Facile pour y accéder.
      </p>
    </div>
    <div class="flex flex-wrap gap-2">
      <Button
        variant="ghost"
        size="md"
        href="https://sso.facile.studio"
        target="_blank"
        rel="noreferrer"
        class="rounded-fc-pill bg-fc-component hover:bg-fc-surface text-fc-fg"
      >
        Créer un compte Facile
      </Button>
      <Button
        variant="ghost"
        size="md"
        href="https://github.com/FacileStudio"
        target="_blank"
        rel="noreferrer"
        class="rounded-fc-pill bg-fc-component hover:bg-fc-surface text-fc-fg"
        icon={GITHUB_ICON}
      >
        GitHub
      </Button>
    </div>
  </div>

  <!-- Filter chips -->
  <div class="flex flex-wrap items-center gap-2">
    {#each CATEGORIES as cat}
      <button
        type="button"
        onclick={() => (selectedCategory = cat.id)}
        class="rounded-fc-pill px-3.5 py-1.5 text-fc-xs font-medium transition-colors
          {selectedCategory === cat.id
          ? 'bg-fc-accent text-fc-accent-fg'
          : 'bg-fc-component text-fc-fg-muted hover:bg-fc-surface hover:text-fc-fg'}"
      >
        {cat.label}
      </button>
    {/each}
  </div>

  <!-- Tools grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each filteredTools as tool (tool.id)}
      <div class="flex flex-col justify-between gap-4 rounded-fc-xl bg-fc-component p-5 transition-transform duration-200 hover:-translate-y-0.5">
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <span class="flex size-10 items-center justify-center rounded-fc-lg bg-fc-surface text-fc-accent">
              <Icon icon={tool.icon} size={22} />
            </span>
            <div class="flex items-center gap-2">
              {#if tool.badge}
                <span class="rounded-fc-pill bg-fc-accent/15 px-2 py-0.5 text-[10px] font-bold text-fc-accent">
                  {tool.badge}
                </span>
              {/if}
              <span class="text-[11px] font-mono text-fc-fg-muted">{tool.tag}</span>
            </div>
          </div>
          <div>
            <h3 class="text-fc-md font-bold text-fc-fg">{tool.name}</h3>
            <p class="text-fc-xs font-medium text-fc-fg-muted">{tool.tagline}</p>
          </div>
          <p class="text-fc-xs text-fc-fg-muted leading-relaxed">
            {tool.description}
          </p>
        </div>

        <div class="flex items-center gap-2 pt-1">
          {#if tool.url}
            <a
              href={tool.url}
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-1.5 rounded-fc-pill bg-fc-surface px-3 py-1 text-[11px] font-semibold text-fc-fg transition-colors hover:bg-fc-surface-hover"
            >
              <span>Accéder</span>
              <svg class="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          {/if}
          {#if tool.githubUrl}
            <a
              href={tool.githubUrl}
              target="_blank"
              rel="noreferrer"
              class="inline-flex size-7 items-center justify-center rounded-fc-pill bg-fc-surface text-fc-fg-muted transition-colors hover:text-fc-fg"
              aria-label="Dépôt GitHub"
            >
              <Icon icon={GITHUB_ICON} size={14} />
            </a>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Bulle AI Agent Section -->
<section id="bulle" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-8 py-16">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-fc-2xl bg-fc-component p-6 sm:p-10">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Intelligence embarquée</span>
        <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
          Bulle, votre compagnon de code
        </h2>
        <p class="text-fc-md text-fc-fg-muted leading-relaxed">
          Un agent IA complet qui dispose de son propre système d'exploitation dans une microVM isolée. Connecté à Matrix, capable de modifier du code, d'exécuter des pipelines et d'interagir en langage naturel.
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <span class="rounded-fc-md bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-fg">MicroVM Linux isolée</span>
        <span class="rounded-fc-md bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-fg">Protocole Matrix E2EE</span>
        <span class="rounded-fc-md bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-fg">Interface OpenUI</span>
      </div>

      <div class="flex items-center gap-3 pt-2">
        <Button variant="primary" size="md" href="https://bulle.facile.studio" target="_blank" rel="noreferrer" class="rounded-fc-pill font-semibold px-5">
          Tester Bulle
        </Button>
        <Button variant="ghost" size="md" href="https://github.com/FacileStudio/Bulle" target="_blank" rel="noreferrer" class="rounded-fc-pill bg-fc-surface text-fc-fg hover:bg-fc-component" icon={GITHUB_ICON}>
          Code source
        </Button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center p-4">
      <InteractiveBlob name="Bulle" size="lg" />
      <span class="mt-4 text-[11px] font-mono text-fc-fg-muted">Avatar interactif — bougez votre curseur</span>
    </div>
  </div>
</section>

<!-- Hardware & Atelier R&D: Pastille PCB Section (Lower down) -->
<section id="hardware" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-10 py-16">
  <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Atelier R&D & Hardware</span>
      <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
        Pastille · Balise vocale ouverte 38 mm
      </h2>
      <p class="text-fc-md text-fc-fg-muted max-w-2xl">
        Quand le web rencontre l'électronique embarquée. Pastille est un charm matériel ouvert basé sur ESP32-S3 avec écran circulaire IPS et firmware en Rust Embassy.
      </p>
    </div>
    <div class="flex flex-wrap gap-2">
      <Button variant="ghost" size="md" href="https://pastille.facile.studio" target="_blank" rel="noreferrer" class="rounded-fc-pill bg-fc-component hover:bg-fc-surface text-fc-fg">
        Site officiel Pastille
      </Button>
      <Button variant="ghost" size="md" href="https://github.com/FacileStudio/Pastille" target="_blank" rel="noreferrer" class="rounded-fc-pill bg-fc-component hover:bg-fc-surface text-fc-fg" icon={GITHUB_ICON}>
        Schémas KiCad
      </Button>
    </div>
  </div>

  <!-- 3D Interactive Turntable Viewer -->
  <div class="rounded-fc-2xl bg-fc-component p-4 sm:p-8">
    <PcbViewer />
  </div>
</section>

<!-- Closing Studio Contact & Call to Action -->
<section id="contact" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-8 py-20">
  <div class="flex flex-col items-center text-center gap-6 rounded-fc-2xl bg-fc-component p-8 sm:p-14">
    <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Lançons votre projet</span>
    <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-fc-fg max-w-2xl leading-tight">
      Prêt à concevoir un site web ou une application qui compte ?
    </h2>
    <p class="text-fc-md text-fc-fg-muted max-w-xl leading-relaxed">
      Discutons de votre vision, de vos contraintes et de votre calendrier. Nous intervenons sur des vitrines haut de gamme, des apps métier et des infrastructures pérennes.
    </p>

    <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
      <Button variant="primary" size="lg" class="rounded-fc-pill font-semibold px-8 shadow-md" onclick={openContactModal}>
        Démarrer un projet
      </Button>
      <a
        href="tel:+33768888818"
        class="inline-flex items-center gap-2 rounded-fc-pill bg-fc-surface px-6 py-3 text-fc-sm font-semibold text-fc-fg transition-colors hover:bg-fc-surface-hover"
      >
        <svg class="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>07 68 88 88 18</span>
      </a>
      <a
        href="mailto:contact@facile.studio?subject=%5BProjet%5D%20Nouveau%20projet%20avec%20Facile%20Studio"
        class="inline-flex items-center gap-2 rounded-fc-pill bg-fc-surface px-6 py-3 text-fc-sm font-semibold text-fc-fg transition-colors hover:bg-fc-surface-hover"
      >
        <svg class="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>contact@facile.studio</span>
      </a>
    </div>

    <div class="flex items-center gap-6 pt-4 text-fc-xs text-fc-fg-muted font-mono">
      <span>Paris · Rouen · Remote</span>
      <span>·</span>
      <span>Devis sous 48h</span>
    </div>
  </div>
</section>
