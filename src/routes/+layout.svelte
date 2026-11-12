<script lang="ts">
  import "../app.css";
  import { onMount, type Snippet } from "svelte";
  import { page } from "$app/state";
  import { onNavigate } from "$app/navigation";
  import {
    LandingFooter,
    LandingHeader,
    Page,
    prefersReducedMotion,
    provideLocale,
    registerIcons,
  } from "@facile/muse";
  import { NAV_LINKS } from "$lib/data";
  import { SUITE_ICONS } from "$lib/icons";
  import { scrollToSection, watchActiveSection } from "$lib/motion";
  import BrandMark from "$lib/components/BrandMark.svelte";
  import EntranceLoader from "$lib/components/EntranceLoader.svelte";
  import SiteActions from "$lib/components/SiteActions.svelte";

  let { children }: { children: Snippet } = $props();
  registerIcons(SUITE_ICONS);
  provideLocale("fr");

  let activeSection = $state<string>("");
  let scrolled = $state(false);

  const isProjectsPage = $derived(page.url.pathname.startsWith("/projects"));
  const isHomePage = $derived(page.url.pathname === "/");
  const isContactPage = $derived(page.url.pathname === "/contact");
  const flush = $derived(scrolled || isContactPage);
  const canonicalUrl = $derived(`https://facile.studio${page.url.pathname}`);

  const links = $derived([
    ...NAV_LINKS.map((item) => ({
      href: `/#${item.id}`,
      label: item.label,
      active: isHomePage && activeSection === item.id,
    })),
    { href: "/projects", label: "Portfolio", active: isProjectsPage },
  ]);

  const FOOTER_COLUMNS = [
    {
      title: "Studio",
      links: [
        { label: "Projets", href: "/projects" },
        { label: "Compte Facile", href: "https://sso.facile.studio" },
        { label: "GitHub", href: "https://github.com/FacileStudio" },
      ],
    },
    {
      title: "Produits",
      links: [
        { label: "Bulle", href: "https://bulle.facile.studio" },
        { label: "Pastille", href: "https://pastille.facile.studio" },
        { label: "La Suite", href: "https://suite.facile.studio" },
        { label: "Place", href: "https://place.facile.studio" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "07 68 88 88 18", href: "tel:+33768888818" },
        { label: "contact@facile.studio", href: "mailto:contact@facile.studio" },
        { label: "Lyon · Strasbourg · À distance", href: "/contact" },
      ],
    },
  ];

  onNavigate((navigation) => {
    if (!document.startViewTransition || prefersReducedMotion()) return;
    if (navigation.from?.url.pathname === navigation.to?.url.pathname) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  function onclick(event: MouseEvent) {
    const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>(
      'a[href^="#"], a[href^="/#"]',
    );
    const href = anchor?.getAttribute("href");
    if (!href) return;
    const id = href.replace(/^\/?#/, "");
    if (!id) return;
    const isNavSection = NAV_LINKS.some((item) => item.id === id);
    if (!isNavSection && !document.getElementById(id)) return;
    if (isNavSection) activeSection = id;
    if (href.startsWith("/#") && window.location.pathname !== "/") {
      event.preventDefault();
      window.location.href = `/#${id}`;
      return;
    }
    if (window.location.pathname === "/" || document.getElementById(id)) {
      scrollToSection(id, event);
    }
  }

  onMount(() =>
    watchActiveSection(
      NAV_LINKS.map((s) => s.id),
      (id) => (activeSection = id),
      (isScrolled) => (scrolled = isScrolled),
    ),
  );
</script>

<svelte:head>
  <link rel="canonical" href={canonicalUrl} />
  <meta property="og:url" content={canonicalUrl} />
</svelte:head>

<svelte:document {onclick} />

<div class="relative min-h-dvh w-full bg-fc-surface text-fc-fg flex flex-col">
  <EntranceLoader />

  {#if !isContactPage}
    <div
      class="screen-frame pointer-events-none fixed z-20 transition-all duration-500 ease-out
        {flush ? 'inset-0 rounded-none' : 'inset-2 sm:inset-3 xl:inset-4 rounded-[28px] sm:rounded-[36px]'}"
      aria-hidden="true"
    ></div>

    <div class="contents [&>div:first-child]:-mb-14">
      <LandingHeader
        homeHref="/"
        {links}
        class="vitrine-bar relative {scrolled
          ? 'shadow-lg'
          : 'vitrine-bar-top max-w-5xl rounded-b-2xl bg-fc-surface backdrop-blur-none sm:rounded-b-3xl'}"
      >
        {#snippet brand()}<BrandMark />{/snippet}
        {#snippet actions()}<SiteActions />{/snippet}
      </LandingHeader>
    </div>
  {/if}

  <div
    class="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden bg-fc-page"
  >
    <div
      class="ambient pointer-events-none fixed z-0 overflow-hidden transition-all duration-500 ease-out
        {flush ? 'inset-0 rounded-none' : 'inset-2 sm:inset-3 xl:inset-4 rounded-[28px] sm:rounded-[36px]'}"
      aria-hidden="true"
    >
      <div class="ambient-blob ambient-blob-1 -top-80 -left-80 size-[1000px]"></div>
      <div class="ambient-blob ambient-blob-2 top-1/4 -right-96 size-[950px]"></div>
      <div class="ambient-blob ambient-blob-3 -bottom-96 left-1/4 size-[1100px]"></div>
      <div class="ambient-grain absolute inset-0"></div>
    </div>

    {#if !isContactPage}
      <div class="h-14 shrink-0 pointer-events-none" aria-hidden="true"></div>
    {/if}
    <main class="relative z-10 flex-1">
      {#if isHomePage || isContactPage}
        {@render children()}
      {:else}
        <Page width="xl" class="pt-2 sm:pt-4">{@render children()}</Page>
      {/if}
    </main>

    {#if !isContactPage}
      <LandingFooter
        appName="Facile Studio"
        homeHref="/"
        columns={FOOTER_COLUMNS}
        legal={{ hideLocaleSwitch: true }}
        class="relative z-10 pb-12"
      >
        {#snippet brand()}<BrandMark /><span>Facile Studio</span>{/snippet}
      </LandingFooter>
    {/if}
  </div>
</div>

<style>
  @keyframes ambient-float-1 {
    0%, 100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(60px, 80px, 0) scale(1.08);
    }
  }

  @keyframes ambient-float-2 {
    0%, 100% {
      transform: translate3d(0, 0, 0) scale(1.05);
    }
    50% {
      transform: translate3d(-70px, -50px, 0) scale(0.95);
    }
  }

  @keyframes ambient-float-3 {
    0%, 100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(50px, -60px, 0) scale(1.06);
    }
  }

  :global(::view-transition-old(root)) {
    animation: page-out 280ms cubic-bezier(0.4, 0, 1, 1) both;
  }

  :global(::view-transition-new(root)) {
    animation: page-in 420ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes page-out {
    to {
      opacity: 0;
      transform: scale(0.985);
    }
  }

  @keyframes page-in {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
  }

  :global(.vitrine-bar::before),
  :global(.vitrine-bar::after) {
    content: "";
    position: absolute;
    top: 0.75rem;
    display: none;
    width: 1.25rem;
    height: 1.25rem;
    background: var(--color-fc-surface);
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19 19'%3E%3Cpath d='M19%2019L18.9944%2018.5324C18.9369%2016.1967%2018.4488%2013.89%2017.5537%2011.7289C16.5988%209.42375%2015.1993%207.32929%2013.435%205.56501C11.6707%203.80074%209.57625%202.40118%207.27112%201.44634C4.96593%200.491499%202.49512%201.09045e-07%200%200H19V19Z'/%3E%3C/svg%3E") center / 100% 100% no-repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19 19'%3E%3Cpath d='M19%2019L18.9944%2018.5324C18.9369%2016.1967%2018.4488%2013.89%2017.5537%2011.7289C16.5988%209.42375%2015.1993%207.32929%2013.435%205.56501C11.6707%203.80074%209.57625%202.40118%207.27112%201.44634C4.96593%200.491499%202.49512%201.09045e-07%200%200H19V19Z'/%3E%3C/svg%3E") center / 100% 100% no-repeat;
    opacity: 0;
    pointer-events: none;
    transition: opacity 100ms ease-out;
  }

  :global(.vitrine-bar::before) {
    right: 100%;
    margin-right: -0.5px;
  }

  :global(.vitrine-bar::after) {
    left: 100%;
    margin-left: -0.5px;
    scale: -1 1;
  }

  :global(.vitrine-bar-top::before),
  :global(.vitrine-bar-top::after) {
    opacity: 1;
    transition: opacity 200ms ease-out 500ms;
  }

  @media (min-width: 40rem) {
    :global(.vitrine-bar::before),
    :global(.vitrine-bar::after) {
      display: block;
    }
  }

  @media (min-width: 80rem) {
    :global(.vitrine-bar::before),
    :global(.vitrine-bar::after) {
      top: 1rem;
    }
  }

  .screen-frame {
    box-shadow: 0 0 0 100vmax var(--color-fc-surface);
  }

  .ambient {
    --glow: rgb(202 230 216 / 0.16);
  }

  :global(.dark) .ambient {
    --glow: rgb(202 230 216 / 0.08);
  }

  .ambient-blob {
    position: absolute;
    border-radius: 9999px;
    background: radial-gradient(closest-side, var(--glow), rgb(202 230 216 / 0) 100%);
    will-change: transform;
  }

  .ambient-grain {
    opacity: 0.06;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  .ambient-blob-1 {
    animation: ambient-float-1 22s ease-in-out infinite;
  }

  .ambient-blob-2 {
    animation: ambient-float-2 26s ease-in-out infinite;
  }

  .ambient-blob-3 {
    animation: ambient-float-3 30s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .ambient-blob-1,
    .ambient-blob-2,
    .ambient-blob-3 {
      animation: none !important;
    }
  }
</style>
