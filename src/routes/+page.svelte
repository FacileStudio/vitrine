<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount, tick } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { Button, Icon, SignInWithFacile, icons, prefersReducedMotion } from "@facile/muse";
  import Community from "$lib/components/Community.svelte";
  import PcbViewer from "$lib/components/PcbViewer.svelte";
  import InteractiveBlob from "$lib/components/InteractiveBlob.svelte";
  import StudioGraph from "$lib/components/StudioGraph.svelte";
  import TechBadge from "$lib/components/TechBadge.svelte";
  import {
    ACCOUNT_URL,
    CATEGORIES,
    CLIENT_PROJECTS,
    STUDIO_SERVICES,
    SUITE_TOOLS,
  } from "$lib/data";
  import { GITHUB_ICON } from "$lib/icons";
  import { scrollReveal } from "$lib/motion";

  let selectedCategory = $state<string>("all");
  let projectsSection = $state<HTMLElement | null>(null);
  let horizontalSection = $state<HTMLElement | null>(null);
  let horizontalTrack = $state<HTMLElement | null>(null);
  let heroAnimated = $state(false);

  const filteredTools = $derived(
    selectedCategory === "all"
      ? SUITE_TOOLS
      : SUITE_TOOLS.filter((t) => t.category === selectedCategory)
  );
  const TOOLS_PREVIEW = 9;
  let showAllTools = $state(false);
  let toolsGrid = $state<HTMLElement | null>(null);
  let toolsAnimating = false;

  async function toggleTools() {
    const grid = toolsGrid;
    if (!grid || prefersReducedMotion()) {
      showAllTools = !showAllTools;
      return;
    }
    if (toolsAnimating) return;
    toolsAnimating = true;
    const from = grid.offsetHeight;

    if (!showAllTools) {
      showAllTools = true;
      await tick();
      const added = Array.from(grid.children).slice(TOOLS_PREVIEW);
      gsap.fromTo(
        grid,
        { height: from, overflow: "hidden" },
        {
          height: grid.scrollHeight,
          duration: 0.6,
          ease: "power3.inOut",
          clearProps: "height,overflow",
          onComplete: () => (toolsAnimating = false),
        },
      );
      gsap.fromTo(
        added,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.45, delay: 0.12, stagger: 0.03, ease: "power2.out", clearProps: "opacity,transform" },
      );
      return;
    }

    const items = Array.from(grid.children) as HTMLElement[];
    const last = items[TOOLS_PREVIEW - 1];
    const to = last.getBoundingClientRect().bottom - grid.getBoundingClientRect().top;
    const gridTop = grid.getBoundingClientRect().top;
    if (gridTop < 0) {
      window.scrollTo({ top: window.scrollY + gridTop - 120, behavior: "smooth" });
    }
    gsap.to(items.slice(TOOLS_PREVIEW), { opacity: 0, y: 8, duration: 0.25, ease: "power2.in" });
    gsap.fromTo(
      grid,
      { height: from, overflow: "hidden" },
      {
        height: to,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: async () => {
          showAllTools = false;
          await tick();
          gsap.set(grid, { clearProps: "height,overflow" });
          toolsAnimating = false;
        },
      },
    );
  }
  const visibleTools = $derived(showAllTools ? filteredTools : filteredTools.slice(0, TOOLS_PREVIEW));
  const hiddenToolCount = $derived(filteredTools.length - TOOLS_PREVIEW);

  function triggerHeroAnimation() {
    if (heroAnimated || !browser) return;
    heroAnimated = true;

    if (prefersReducedMotion()) {
      gsap.set("[data-hero-item]", { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      "[data-hero-item]",
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "transform",
      }
    );
  }

  onMount(() => {
    if (!browser) return;

    if (!prefersReducedMotion()) gsap.set("[data-hero-item]", { opacity: 0 });

    let fallback: ReturnType<typeof setTimeout> | undefined;
    if ((window as any).__curtainComplete) {
      triggerHeroAnimation();
    } else {
      window.addEventListener("curtain-complete", triggerHeroAnimation, { once: true });
      fallback = setTimeout(triggerHeroAnimation, 2200);
    }

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!projectsSection || !horizontalSection || !horizontalTrack) return;

      const getScrollAmount = () => {
        if (!horizontalTrack || !horizontalSection) return 0;
        return horizontalTrack.scrollWidth - horizontalSection.clientWidth;
      };

      const HOLD = 0.08;
      const tween = gsap
        .timeline({
          scrollTrigger: {
            trigger: projectsSection,
            start: "top top",
            end: () => `+=${getScrollAmount() * (1 + HOLD * 2)}`,
            pin: true,
            anticipatePin: 1,
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        })
        .to({}, { duration: HOLD })
        .to(horizontalTrack, { x: () => -getScrollAmount(), ease: "none", duration: 1 })
        .to({}, { duration: HOLD });

      return () => {
        tween.kill();
      };
    });

    return () => {
      clearTimeout(fallback);
      window.removeEventListener("curtain-complete", triggerHeroAnimation);
      mm.revert();
    };
  });
</script>

<svelte:head>
  <title>Facile Studio · Web design and engineering studio</title>
  <meta name="description" content="Showcase sites, custom web apps, art direction and sovereign hosting, from the studio behind the Facile Suite." />
  <meta property="og:title" content="Facile Studio · Web design and engineering studio" />
  <meta property="og:description" content="Showcase sites, custom web apps, art direction and sovereign hosting, from the studio behind the Facile Suite." />
  <meta name="twitter:title" content="Facile Studio · Web design and engineering studio" />
  <meta name="twitter:description" content="Showcase sites, custom web apps, art direction and sovereign hosting, from the studio behind the Facile Suite." />
</svelte:head>

<section
  id="hero"
  class="relative flex flex-col min-h-[calc(100dvh-5.5rem)] sm:min-h-[calc(100dvh-6.5rem)] xl:min-h-[calc(100dvh-7rem)] w-full max-w-fc-xl mx-auto px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 overflow-hidden"
>
  <div class="relative z-10 flex flex-1 flex-col justify-center gap-6 max-w-4xl py-6">
    <h1 data-hero-item class="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-fc-fg leading-[1.08]">
      On simplifie,<br />
      <span class="text-fc-fg-muted">vous créez.</span>
    </h1>

    <div data-hero-item class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 text-fc-sm text-fc-fg-muted font-mono">
      <span class="text-[#CAE6D8] font-bold">[fasil]</span>
      <span>Qui se fait sans effort, qui ne présente aucune difficulté. Simple, aisé.</span>
    </div>

    <p data-hero-item class="text-fc-md sm:text-fc-lg text-fc-fg-muted max-w-3xl leading-relaxed">
      Studio de design et d'ingénierie web. On conçoit, développe et héberge des sites vitrines, des applications et des identités visuelles. Du code léger, des pages rapides, et beaucoup d'attention aux détails.
    </p>

    <div data-hero-item class="flex flex-wrap items-center gap-4 pt-2">
      <Button
        variant="primary"
        size="lg"
        href="/contact"
        class="h-11 rounded-fc-pill font-semibold px-6 shadow-md"
        icon={icons.arrow}
      >
        Démarrer un projet
      </Button>
      <Button
        variant="ghost"
        size="lg"
        href="#projets"
        class="h-11 rounded-fc-pill font-medium px-6 bg-fc-surface hover:bg-fc-surface-hover text-fc-fg"
        icon={icons.eye}
      >
        Voir nos réalisations
      </Button>
      <a
        href="tel:+33768888818"
        class="inline-flex h-11 items-center justify-center gap-2 rounded-fc-pill bg-fc-surface px-5 text-fc-sm font-semibold text-fc-fg transition-colors hover:bg-fc-surface-hover shrink-0"
      >
        <svg class="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>07 68 88 88 18</span>
      </a>
    </div>
  </div>

  <div data-hero-item class="relative shrink-0 -mx-4 sm:-mx-6 md:-mx-10 mt-4 overflow-hidden select-none pointer-events-none">
    <svg viewBox="-10 0 1510 435" preserveAspectRatio="xMinYMax meet" fill="none" class="w-full h-auto text-fc-fg fill-current transition-colors duration-300">
      <path d="M33.1193 3.91218L36.4625 5.02899C29.2188 32.3912 44.8207 70.3632 71.0097 70.3632C125.616 70.3632 169.636 -0.555124 247.646 0.00328039C308.939 0.00328039 322.312 54.7276 322.312 80.973V120.62H237.616L237.059 86.5571C237.059 47.4683 216.442 38.5337 193.039 38.5337C115.029 38.5337 85.4972 149.099 43.7063 149.099C20.3034 149.099 14.1741 116.711 14.1741 91.5828C14.1741 54.1692 23.6467 19.5477 33.1193 3.91218ZM92.1837 203.265L145.119 85.9987H218.114C196.94 126.763 179.109 166.41 162.95 203.265H169.079C234.273 203.265 286.094 219.459 286.094 304.896L202.512 303.779C203.069 225.602 200.84 212.2 169.636 212.2H158.492C105.557 331.141 67.6664 418.812 -7 418.812L-6.44279 327.232V203.265H92.1837ZM-1.98509 257.431V327.232C26.9899 325.557 52.6217 292.052 68.7808 255.197L87.7261 212.758C15.8457 215.55 -1.98509 224.485 -1.98509 257.431Z" fill="currentColor"/>
      <path d="M302.996 416.02L408.402 80.973H490.358L595.764 416.02H538.186L442.531 115.408H455.068L360.574 416.02H302.996ZM361.735 343.426V291.075H537.257V343.426H361.735Z" fill="currentColor"/>
      <path d="M751.49 423C718.057 423 689.422 415.71 665.586 401.129C641.75 386.393 623.408 365.918 610.561 339.704C597.869 313.489 591.523 283.087 591.523 248.496C591.523 213.906 597.869 183.504 610.561 157.289C623.408 131.075 641.75 110.677 665.586 96.0966C689.422 81.3607 718.057 73.9928 751.49 73.9928C790.03 73.9928 822.147 83.6875 847.841 103.077C873.535 122.311 891.567 148.293 901.937 181.022L845.519 196.611C839.018 174.74 827.952 157.677 812.319 145.423C796.686 133.014 776.409 126.809 751.49 126.809C729.046 126.809 710.318 131.85 695.304 141.933C680.445 152.015 669.224 166.208 661.639 184.512C654.21 202.66 650.418 223.988 650.263 248.496C650.263 273.005 653.978 294.41 661.407 312.714C668.991 330.862 680.29 344.978 695.304 355.06C710.318 365.142 729.046 370.184 751.49 370.184C776.409 370.184 796.686 363.979 812.319 351.57C827.952 339.161 839.018 322.098 845.519 300.382L901.937 315.971C891.567 348.7 873.535 374.759 847.841 394.149C822.147 413.383 790.03 423 751.49 423Z" fill="currentColor"/>
      <path d="M938.983 416.02V80.973H994.936V416.02H938.983Z" fill="currentColor"/>
      <path d="M1050.55 416.02V80.973H1106.51V363.436H1254.17V416.02H1050.55Z" fill="currentColor"/>
      <path d="M1163.48 416.02V80.973H1379.4V133.557H1219.44V216.155H1320.83V268.739H1219.44V363.436H1379.4V416.02H1163.48Z" fill="currentColor"/>
      <path d="M1435.99 363.901H1488V416.02H1435.99V363.901Z" fill="currentColor"/>
    </svg>
  </div>
</section>

<section id="services" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-10 py-16 w-full max-w-fc-xl mx-auto px-4 sm:px-6 md:px-10">
  <div class="flex flex-col gap-3">
    <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Prestations studio</span>
    <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
      Ce que l'on construit pour vous
    </h2>
    <p class="text-fc-md text-fc-fg-muted max-w-2xl">
      Vous travaillez directement avec les designers et développeurs qui font votre projet. Pas d'intermédiaire.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each STUDIO_SERVICES as service}
      <div class="flex flex-col justify-between gap-6 rounded-fc-2xl bg-fc-component p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1 shadow-sm">
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

  <div class="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-fc-3xl bg-fc-surface p-6 sm:p-8 shadow-sm">
    <div class="flex flex-col gap-1 text-center sm:text-left">
      <span class="text-fc-md font-bold text-fc-fg">Un besoin qui sort de ces cases&nbsp;?</span>
      <span class="text-fc-xs text-fc-fg-muted">Envoyez-nous votre cahier des charges, on vous répond avec une proposition sous 48h.</span>
    </div>
    <Button
      variant="primary"
      size="md"
      class="rounded-fc-pill font-semibold px-6 shrink-0"
      href="/contact"
      icon={icons.arrow}
    >
      Demander un devis
    </Button>
  </div>
</section>

<section
  id="projets"
  bind:this={projectsSection}
  class="relative py-12 lg:py-0 lg:pt-24 lg:pb-8 lg:h-dvh lg:flex lg:flex-col w-full overflow-hidden"
>
  <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-6 lg:shrink-0 w-full max-w-fc-xl mx-auto px-4 sm:px-6 md:px-10">
    <div class="flex flex-col gap-3">
      <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
        Quelques projets récents
      </h2>
      <p class="text-fc-md text-fc-fg-muted max-w-2xl">
        Des sites et des applications conçus et livrés par le studio.
      </p>
    </div>
    <Button
      variant="ghost"
      size="md"
      href="/projects"
      class="rounded-fc-pill bg-fc-component text-fc-fg hover:bg-fc-surface shrink-0"
      icon={icons.arrow}
    >
      Voir tout le portfolio
    </Button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden mt-8 max-w-fc-xl mx-auto px-4 sm:px-6">
    {#each CLIENT_PROJECTS as project}
      <a
        href={`/projects/${project.slug}`}
        class="project-card group relative flex flex-col justify-end aspect-[16/10] rounded-fc-2xl bg-black p-6 transition-transform duration-300 hover:-translate-y-1 shadow-md"
      >
        <img
          src={project.cover}
          alt={project.name}
          class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none"></div>
        <div class="relative z-10 flex flex-col gap-2.5 text-white">
          <div class="flex items-center justify-between">
            <span class="rounded-fc-pill bg-black/60 backdrop-blur-md px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
              {project.category}
            </span>
            <span class="text-[11px] font-mono text-zinc-300">{project.year}</span>
          </div>
          <h3 class="text-xl font-bold text-white group-hover:text-fc-accent transition-colors">
            {project.name}
          </h3>
          <p class="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          <div class="flex flex-wrap gap-1.5 pt-1">
            {#each project.stack.slice(0, 3) as tech}
              <TechBadge {tech} class="bg-black/60 backdrop-blur-md text-white" />
            {/each}
          </div>
        </div>
      </a>
    {/each}
  </div>

  <div
    bind:this={horizontalSection}
    class="hidden lg:block relative w-full flex-1 min-h-0 overflow-hidden"
  >
    <div
      bind:this={horizontalTrack}
      class="flex h-full items-stretch gap-8 pl-8 md:pl-12 lg:pl-16 pr-20 lg:pr-32 w-fit"
    >
      {#each CLIENT_PROJECTS as project}
        <article
          class="project-slide group relative w-[76vw] max-w-[1100px] h-full shrink-0 rounded-fc-3xl bg-black shadow-2xl flex flex-col justify-between p-8 xl:p-12"
        >
          <div class="project-clip absolute inset-0 z-0 bg-black">
            <img
              src={project.cover}
              alt={project.name}
              class="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30 pointer-events-none"></div>
          </div>

          <div class="relative z-10 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <span class="rounded-fc-pill bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                {project.category}
              </span>
              <span class="rounded-fc-pill bg-black/40 backdrop-blur-md px-3 py-1 text-xs font-mono text-zinc-300">
                {project.year}
              </span>
            </div>
            {#if project.link}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-1.5 rounded-fc-pill bg-black/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-white hover:text-black"
              >
                <span>Site en ligne</span>
                <Icon icon={icons.arrow} size={14} />
              </a>
            {/if}
          </div>

          <div class="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pt-12">
            <div class="flex flex-col gap-3 max-w-2xl">
              <h3 class="text-3xl xl:text-5xl font-black tracking-tight text-white drop-shadow-md">
                {project.name}
              </h3>
              <p class="text-sm xl:text-base text-zinc-200 line-clamp-2 leading-relaxed drop-shadow-sm max-w-xl">
                {project.description}
              </p>
              <div class="flex flex-wrap gap-2 pt-1">
                {#each project.stack as tech}
                  <TechBadge {tech} class="bg-black/60 backdrop-blur-md text-white" />
                {/each}
              </div>
            </div>

            <div class="flex items-center gap-3 shrink-0">
              <Button
                variant="primary"
                size="md"
                href={`/projects/${project.slug}`}
                class="rounded-fc-pill font-semibold px-6 shadow-xl bg-white text-black hover:bg-zinc-200"
                icon={icons.arrow}
              >
                Voir l'étude de cas
              </Button>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<section id="suite" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-10 py-16 w-full max-w-fc-xl mx-auto px-4 sm:px-6 md:px-10">
  <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
    <div class="flex flex-col gap-3">
      <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Gratuit pour vous aussi</span>
      <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
        La Suite Facile
      </h2>
      <p class="text-fc-md text-fc-fg-muted max-w-2xl">
        Les {SUITE_TOOLS.length} outils libres qu'on a construits pour livrer vos projets. Projets, factures, fichiers, emails, agenda : un seul compte Facile les ouvre tous.
      </p>
    </div>
    <div class="flex flex-col items-start sm:items-end gap-2 sm:shrink-0">
      <SignInWithFacile href={ACCOUNT_URL} size="lg" />
      <span class="text-fc-xs text-fc-fg-muted">Gratuit, et ça prend une minute.</span>
    </div>
  </div>

  <div class="flex flex-wrap items-center gap-2">
    {#each CATEGORIES as cat}
      <button
        type="button"
        onclick={() => (selectedCategory = cat.id)}
        aria-pressed={selectedCategory === cat.id}
        class="rounded-fc-pill px-3.5 py-1.5 text-fc-xs font-medium transition-colors
          {selectedCategory === cat.id
          ? 'bg-fc-accent text-fc-accent-fg'
          : 'bg-fc-component text-fc-fg-muted hover:bg-fc-surface hover:text-fc-fg'}"
      >
        {cat.label}
      </button>
    {/each}
  </div>

  <div id="suite-tools" bind:this={toolsGrid} class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each visibleTools as tool (tool.id)}
      <div class="flex flex-col justify-between gap-4 rounded-fc-2xl bg-fc-component p-5 transition-transform duration-200 hover:-translate-y-0.5 shadow-sm">
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

  {#if hiddenToolCount > 0}
    <div class="flex justify-center">
      <Button
        variant="ghost"
        size="md"
        onclick={toggleTools}
        aria-expanded={showAllTools}
        aria-controls="suite-tools"
        class="rounded-fc-pill bg-fc-component hover:bg-fc-surface text-fc-fg px-6"
        icon={showAllTools ? icons.chevronUp : icons.chevronDown}
      >
        {showAllTools ? "Voir moins" : `Voir les ${hiddenToolCount} autres outils`}
      </Button>
    </div>
  {/if}
</section>

<section id="ecosystem" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-8 py-16 w-full max-w-fc-xl mx-auto px-4 sm:px-6 md:px-10">
  <div class="flex flex-col gap-3 text-center items-center">
    <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
      Des outils qui se parlent
    </h2>
    <p class="text-fc-md text-fc-fg-muted max-w-2xl">
      Les outils de la Suite et les projets qu'on livre échangent par des APIs ouvertes et un bus d'événements commun.
    </p>
  </div>

  <StudioGraph />
</section>

<section id="bulle" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-8 py-16 w-full max-w-fc-xl mx-auto px-4 sm:px-6 md:px-10">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-fc-3xl bg-fc-component p-6 sm:p-10 shadow-sm">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">Inclus dans la Suite</span>
        <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
          Bulle, l'agent connecté à tous vos outils
        </h2>
        <p class="text-fc-md text-fc-fg-muted leading-relaxed">
          Bulle a son propre ordinateur, une microVM Linux, et se branche sur tous vos outils Facile. Il lit et rédige vos emails dans Courrier, range vos tâches dans Opus, cale vos rendez-vous dans Agenda, gère vos fichiers dans Nuage et déploie vos projets.
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <span class="rounded-fc-md bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-fg">MicroVM Linux souveraine</span>
        <span class="rounded-fc-md bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-fg">Courrier · Opus · Agenda · Nuage</span>
        <span class="rounded-fc-md bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-fg">Matrix E2EE & Prisme</span>
        <span class="rounded-fc-md bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-fg">Outils MCP natifs</span>
      </div>

      <div class="flex items-center gap-3 pt-2">
        <Button
          variant="primary"
          size="md"
          href="https://bulle.facile.studio"
          target="_blank"
          rel="noreferrer"
          class="rounded-fc-pill font-semibold px-5"
          icon="solar:smile-circle-bold-duotone"
        >
          Tester Bulle
        </Button>
        <Button variant="ghost" size="md" href="https://github.com/FacileStudio/Bulle" target="_blank" rel="noreferrer" class="rounded-fc-pill bg-fc-surface text-fc-fg hover:bg-fc-component" icon={GITHUB_ICON}>
          Code source
        </Button>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center p-4">
      <InteractiveBlob name="Bulle" size="lg" />
    </div>
  </div>
</section>

<section id="hardware" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-10 py-16 w-full max-w-fc-xl mx-auto px-4 sm:px-6 md:px-10">
  <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
    <div class="flex flex-col gap-3">
      <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
        Pastille, l'assistant vocal qui tient dans la paume
      </h2>
      <p class="text-fc-md text-fc-fg-muted max-w-2xl">
        Le studio a aussi un atelier de R&D matériel pour les objets connectés sur mesure. Pastille est notre démonstration ouverte. Un charm de 38 mm avec un ESP32-S3, un écran rond IPS et un firmware en Rust Embassy.
      </p>
    </div>
    <div class="flex flex-wrap sm:flex-nowrap sm:shrink-0 gap-2">
      <Button variant="ghost" size="md" href="https://pastille.facile.studio" target="_blank" rel="noreferrer" class="rounded-fc-pill bg-fc-component hover:bg-fc-surface text-fc-fg" icon={icons.globe}>
        Site officiel Pastille
      </Button>
      <Button variant="ghost" size="md" href="https://github.com/FacileStudio/Pastille" target="_blank" rel="noreferrer" class="rounded-fc-pill bg-fc-component hover:bg-fc-surface text-fc-fg" icon={GITHUB_ICON}>
        Schémas KiCad
      </Button>
    </div>
  </div>

  <PcbViewer />
</section>

<Community />

<section id="contact" use:scrollReveal={{ delay: 0.05 }} class="flex flex-col gap-8 py-20 w-full max-w-fc-xl mx-auto px-4 sm:px-6 md:px-10">
  <div class="flex flex-col items-center text-center gap-6 rounded-fc-3xl bg-fc-component p-8 sm:p-14 shadow-sm">
    <h2 class="text-3xl sm:text-5xl font-black tracking-tight text-fc-fg max-w-2xl leading-tight text-balance">
      Un site ou une application en tête&nbsp;?
    </h2>
    <p class="text-fc-md text-fc-fg-muted max-w-xl leading-relaxed">
      Parlez-nous de votre projet, de vos contraintes et de vos délais. On fait des sites vitrines, des applications métier et de l'hébergement.
    </p>

    <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
      <Button variant="primary" size="lg" href="/contact" class="rounded-fc-pill font-semibold px-8 shadow-md" icon={icons.arrow}>
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
  </div>

  <div class="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-fc-3xl bg-fc-surface p-6 sm:p-8 shadow-sm">
    <div class="flex flex-col gap-1 text-center sm:text-left">
      <span class="text-fc-md font-bold text-fc-fg">Pas de projet pour l'instant&nbsp;?</span>
      <span class="text-fc-xs text-fc-fg-muted">Essayez les outils du studio. Votre compte Facile est gratuit et ouvre toute la Suite.</span>
    </div>
    <SignInWithFacile href={ACCOUNT_URL} size="md" />
  </div>
</section>


<style>
  .project-clip {
    clip-path: inset(0 round var(--radius-fc-3xl));
  }

  .project-card {
    clip-path: inset(0 round var(--radius-fc-2xl));
  }
</style>
