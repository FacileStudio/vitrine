<script lang="ts">
  import "../app.css";
  import { onMount, type Snippet } from "svelte";
  import { browser } from "$app/environment";
  import { page } from "$app/state";
  import { onNavigate } from "$app/navigation";
  import { gsap } from "gsap";
  import {
    Button,
    Icon,
    IconButton,
    Page,
    icons,
    prefersReducedMotion,
    provideLocale,
    registerIcons,
  } from "@facile/muse";
  import { NAV_LINKS } from "$lib/data";
  import { MENU_ICON, SUITE_ICONS } from "$lib/icons";
  import { moveNavPill, scrollToSection, watchActiveSection } from "$lib/motion";
  import EntranceLoader from "$lib/components/EntranceLoader.svelte";

  let { children }: { children: Snippet } = $props();
  registerIcons(SUITE_ICONS);
  provideLocale("fr");

  let theme = $state<"light" | "dark">("dark");
  let activeSection = $state<string>("");
  let scrolled = $state(false);
  let mobileOpen = $state(false);
  let navPill: HTMLSpanElement | null = $state(null);
  let navEls: Record<string, HTMLAnchorElement> = $state({});
  let scrimEl: HTMLDivElement | null = $state(null);
  let drawerEl: HTMLElement | null = $state(null);

  const isProjectsPage = $derived(page.url.pathname.startsWith("/projects"));
  const isHomePage = $derived(page.url.pathname === "/");
  const isContactPage = $derived(page.url.pathname === "/contact");
  const flush = $derived(scrolled || isContactPage);
  const canonicalUrl = $derived(`https://facile.studio${page.url.pathname}`);

  if (browser) {
    const saved = readTheme();
    if (saved) theme = saved;
  }

  function readTheme(): "light" | "dark" | null {
    try {
      const saved = localStorage.getItem("facile-theme");
      return saved === "light" || saved === "dark" ? saved : null;
    } catch {
      return null;
    }
  }

  $effect(() => {
    if (!browser) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem("facile-theme", theme);
    } catch {}
  });

  $effect(() => {
    const targetKey = isProjectsPage ? "portfolio" : activeSection;
    moveNavPill(navPill, navEls[targetKey], true);
  });

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

  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
  }

  function selectSection(id: string, event?: MouseEvent) {
    activeSection = id;
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    scrollToSection(id, event);
  }

  function openSidebar() {
    mobileOpen = true;
    requestAnimationFrame(() => {
      if (!scrimEl || !drawerEl || prefersReducedMotion()) return;
      gsap.fromTo(scrimEl, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" });
      gsap.fromTo(drawerEl, { xPercent: 100 }, { xPercent: 0, duration: 0.34, ease: "power3.out" });
    });
  }

  function closeSidebar(afterClose?: () => void) {
    if (!scrimEl || !drawerEl || prefersReducedMotion()) {
      mobileOpen = false;
      afterClose?.();
      return;
    }
    gsap.to(scrimEl, { opacity: 0, duration: 0.22, ease: "power2.in" });
    gsap.to(drawerEl, {
      xPercent: 100,
      duration: 0.26,
      ease: "power3.in",
      onComplete: () => {
        mobileOpen = false;
        afterClose?.();
      },
    });
  }

  onMount(() => {
    const targetKey = isProjectsPage ? "portfolio" : activeSection;
    moveNavPill(navPill, navEls[targetKey], false);
    return watchActiveSection(
      NAV_LINKS.map((s) => s.id),
      (id) => (activeSection = id),
      (isScrolled) => (scrolled = isScrolled),
    );
  });

  const FOOTER_LINKS = [
    { label: "Projets", href: "/projects" },
    { label: "Bulle", href: "https://bulle.facile.studio" },
    { label: "Pastille", href: "https://pastille.facile.studio" },
    { label: "La Suite", href: "https://suite.facile.studio" },
    { label: "Compte Facile", href: "https://sso.facile.studio" },
    { label: "GitHub", href: "https://github.com/FacileStudio" },
  ];
</script>

<svelte:head>
  <link rel="canonical" href={canonicalUrl} />
  <meta property="og:url" content={canonicalUrl} />
</svelte:head>

<div class="relative min-h-dvh w-full bg-fc-surface text-fc-fg flex flex-col">
  <EntranceLoader />

  {#if !isContactPage}
  <div
    class="screen-frame pointer-events-none fixed z-20 transition-all duration-500 ease-out
      {flush ? 'inset-0 rounded-none' : 'inset-2 sm:inset-3 xl:inset-4 rounded-[28px] sm:rounded-[36px]'}"
    aria-hidden="true"
  ></div>

  <div class="fixed top-0 inset-x-0 z-30 flex justify-center pointer-events-none px-2 sm:px-4">
    <div class="pointer-events-auto relative flex items-start justify-center w-full max-w-5xl">
      <div
        class="hidden sm:block absolute right-full top-3 xl:top-4 pointer-events-none transition-opacity ease-out {scrolled ? 'opacity-0 duration-100 delay-0' : 'opacity-100 duration-200 delay-500'}"
        aria-hidden="true"
      >
        <svg viewBox="0 0 19 19" class="h-4 w-4 sm:h-5 sm:w-5 text-fc-surface fill-current block -mr-[0.5px]">
          <path
            d="M19 19L18.9944 18.5324C18.9369 16.1967 18.4488 13.89 17.5537 11.7289C16.5988 9.42375 15.1993 7.32929 13.435 5.56501C11.6707 3.80074 9.57625 2.40118 7.27112 1.44634C4.96593 0.491499 2.49512 1.09045e-07 0 0H19V19Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <header
        class="relative flex h-14 w-full items-center justify-between gap-2 sm:gap-4 transition-all duration-500 ease-out
          {scrolled
          ? 'mt-2.5 sm:mt-3 rounded-fc-pill bg-fc-surface/85 px-2.5 backdrop-blur-xl shadow-lg'
          : 'mt-0 rounded-t-none rounded-b-2xl sm:rounded-b-3xl bg-fc-surface px-2.5 shadow-none'}"
      >
        <a
          href="/"
          class="inline-flex size-9 shrink-0 items-center justify-center rounded-fc-pill text-fc-fg transition-colors hover:bg-fc-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fc-ring shrink-0"
          aria-label="Accueil"
        >
          <svg viewBox="0 0 23 25" class="h-5 w-auto text-fc-fg fill-current">
            <path d="M2.30534 0.255093L2.49734 0.319092C2.08134 1.88709 2.97734 4.06309 4.48134 4.06309C7.61734 4.06309 10.1453 -0.000907898 14.6253 0.0310917C18.1453 0.0310917 18.9133 3.16709 18.9133 4.67109V6.94309H14.0493L14.0173 4.99109C14.0173 2.75109 12.8333 2.23909 11.4893 2.23909C7.00934 2.23909 5.31334 8.57509 2.91334 8.57509C1.56934 8.57509 1.21734 6.71909 1.21734 5.27909C1.21734 3.13509 1.76134 1.15109 2.30534 0.255093ZM5.69734 11.6791L8.73734 4.95909H12.9293C11.7133 7.29509 10.6893 9.56709 9.76134 11.6791H10.1133C13.8573 11.6791 16.8333 12.6071 16.8333 17.5031L12.0333 17.4391C12.0653 12.9591 11.9373 12.1911 10.1453 12.1911H9.50534C6.46534 19.0071 4.28934 24.0311 0.00134376 24.0311L0.0333438 18.7831V11.6791H5.69734ZM0.289344 14.7831V18.7831C1.95334 18.6871 3.42534 16.7671 4.35334 14.6551L5.44134 12.2231C1.31334 12.3831 0.289344 12.8951 0.289344 14.7831ZM19.9478 24.0951C18.5398 24.0951 17.5158 23.1031 17.5158 21.7271C17.5158 20.3831 18.5398 19.3591 19.9478 19.3591C21.3558 19.3591 22.3798 20.3831 22.3798 21.7271C22.3798 23.1031 21.3558 24.0951 19.9478 24.0951Z" />
          </svg>
        </a>

        <nav aria-label="Primary" class="relative hidden lg:flex items-center gap-0.5 p-1">
          <span
            bind:this={navPill}
            aria-hidden="true"
            class="pointer-events-none absolute inset-y-1 left-0 rounded-fc-pill bg-fc-accent opacity-0"
          ></span>
          {#each NAV_LINKS as item (item.id)}
            {@const active = isHomePage && activeSection === item.id}
            <a
              bind:this={navEls[item.id]}
              href="/#{item.id}"
              aria-current={active ? "location" : undefined}
              onclick={(e) => selectSection(item.id, e)}
              class="relative z-10 inline-flex h-8 items-center whitespace-nowrap rounded-fc-pill px-2.5 lg:px-3 text-fc-xs gap-1.5
                font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-fc-ring {active ? 'text-fc-accent-fg' : 'text-fc-fg-muted hover:text-fc-fg'}"
              ><Icon icon={item.icon} size={14} />{item.label}</a
            >
          {/each}
          <a
            bind:this={navEls["portfolio"]}
            href="/projects"
            aria-current={isProjectsPage ? "page" : undefined}
            class="relative z-10 inline-flex h-8 items-center whitespace-nowrap rounded-fc-pill px-2.5 lg:px-3 text-fc-xs
              font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-fc-ring gap-1.5 {isProjectsPage ? 'text-fc-accent-fg' : 'text-fc-fg-muted hover:text-fc-fg'}"
          >
            <Icon icon="solar:monitor-bold-duotone" size={14} />
            Portfolio
          </a>
        </nav>

        <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <IconButton
            variant="ghost"
            class="size-9 bg-fc-surface/70 text-fc-fg hover:bg-fc-surface"
            aria-label={theme === "dark" ? "Passer au thème clair" : "Passer au thème sombre"}
            onclick={toggleTheme}
          >
            <Icon icon={theme === "dark" ? icons.sun : icons.moon} size={16} />
          </IconButton>
          <Button
            variant="primary"
            size="md"
            href="/contact"
            class="inline-flex h-9 px-3 sm:px-4 rounded-fc-pill font-semibold shadow-sm text-fc-xs sm:text-fc-sm"
            icon={icons.arrow}
          >
            <span class="hidden sm:inline">Démarrer un projet</span>
            <span class="sm:hidden">Projet</span>
          </Button>
          <IconButton
            variant="ghost"
            class="size-9 bg-fc-surface/70 text-fc-fg hover:bg-fc-surface lg:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            onclick={openSidebar}
          >
            <Icon icon={MENU_ICON} size={18} />
          </IconButton>
        </div>
      </header>

      <div
        class="hidden sm:block absolute left-full top-3 xl:top-4 pointer-events-none transition-opacity ease-out {scrolled ? 'opacity-0 duration-100 delay-0' : 'opacity-100 duration-200 delay-500'}"
        aria-hidden="true"
      >
        <svg viewBox="0 0 19 19" class="h-4 w-4 sm:h-5 sm:w-5 scale-x-[-1] text-fc-surface fill-current block -ml-[0.5px]">
          <path
            d="M19 19L18.9944 18.5324C18.9369 16.1967 18.4488 13.89 17.5537 11.7289C16.5988 9.42375 15.1993 7.32929 13.435 5.56501C11.6707 3.80074 9.57625 2.40118 7.27112 1.44634C4.96593 0.491499 2.49512 1.09045e-07 0 0H19V19Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  </div>
  {/if}

  {#if mobileOpen}
    <div class="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
      <div
        bind:this={scrimEl}
        role="presentation"
        class="fixed inset-0 bg-fc-scrim backdrop-blur-xs"
        onclick={() => closeSidebar()}
      ></div>
      <aside
        bind:this={drawerEl}
        class="fixed top-3 right-3 bottom-3 flex w-72 max-w-[calc(100vw-1.5rem)] flex-col justify-between
          rounded-fc-lg bg-fc-component/95 p-5 backdrop-blur-xl"
      >
        <div class="flex flex-col gap-6">
          <div class="flex items-center justify-between">
            <a href="/" onclick={() => closeSidebar()} class="inline-flex items-center text-fc-fg" aria-label="Accueil">
              <svg viewBox="0 0 23 25" class="h-6 w-auto text-fc-fg fill-current">
                <path d="M2.30534 0.255093L2.49734 0.319092C2.08134 1.88709 2.97734 4.06309 4.48134 4.06309C7.61734 4.06309 10.1453 -0.000907898 14.6253 0.0310917C18.1453 0.0310917 18.9133 3.16709 18.9133 4.67109V6.94309H14.0493L14.0173 4.99109C14.0173 2.75109 12.8333 2.23909 11.4893 2.23909C7.00934 2.23909 5.31334 8.57509 2.91334 8.57509C1.56934 8.57509 1.21734 6.71909 1.21734 5.27909C1.21734 3.13509 1.76134 1.15109 2.30534 0.255093ZM5.69734 11.6791L8.73734 4.95909H12.9293C11.7133 7.29509 10.6893 9.56709 9.76134 11.6791H10.1133C13.8573 11.6791 16.8333 12.6071 16.8333 17.5031L12.0333 17.4391C12.0653 12.9591 11.9373 12.1911 10.1453 12.1911H9.50534C6.46534 19.0071 4.28934 24.0311 0.00134376 24.0311L0.0333438 18.7831V11.6791H5.69734ZM0.289344 14.7831V18.7831C1.95334 18.6871 3.42534 16.7671 4.35334 14.6551L5.44134 12.2231C1.31334 12.3831 0.289344 12.8951 0.289344 14.7831ZM19.9478 24.0951C18.5398 24.0951 17.5158 23.1031 17.5158 21.7271C17.5158 20.3831 18.5398 19.3591 19.9478 19.3591C21.3558 19.3591 22.3798 20.3831 22.3798 21.7271C22.3798 23.1031 21.3558 24.0951 19.9478 24.0951Z" />
              </svg>
            </a>
            <IconButton
              variant="ghost"
              class="size-9 bg-fc-surface text-fc-fg"
              aria-label="Fermer le menu"
              onclick={() => closeSidebar()}
            >
              <Icon icon={icons.close} size={16} />
            </IconButton>
          </div>
          <nav aria-label="Mobile" class="flex flex-col gap-1.5">
            {#each NAV_LINKS as item (item.id)}
              {@const active = isHomePage && activeSection === item.id}
              <a
                href="/#{item.id}"
                onclick={(e) => {
                  e.preventDefault();
                  closeSidebar(() => selectSection(item.id));
                }}
                class="inline-flex h-10 items-center gap-2.5 rounded-fc-pill px-4 text-fc-sm font-medium transition-colors
                  {active ? 'bg-fc-accent text-fc-accent-fg' : 'text-fc-fg-muted hover:bg-fc-surface hover:text-fc-fg'}"
                ><Icon icon={item.icon} size={16} />{item.label}</a
              >
            {/each}
            <a
              href="/projects"
              onclick={() => closeSidebar()}
              class="inline-flex h-10 items-center gap-2.5 rounded-fc-pill px-4 text-fc-sm font-medium {isProjectsPage ? 'bg-fc-accent text-fc-accent-fg' : 'text-fc-fg-muted hover:bg-fc-surface hover:text-fc-fg'}"
            >
              <Icon icon="solar:monitor-bold-duotone" size={16} />
              Portfolio complet
            </a>
          </nav>
        </div>
        <Button
          variant="primary"
          size="md"
          href="/contact"
          class="w-full rounded-fc-pill font-semibold"
          onclick={() => closeSidebar()}
          icon={icons.arrow}
        >
          Démarrer un projet
        </Button>
      </aside>
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
    <footer class="relative z-10 mx-auto w-full max-w-fc-xl px-4 pb-12 pt-8 sm:px-6 md:px-10">
      <div
        class="flex flex-col items-center justify-between gap-4 rounded-3xl bg-fc-component p-5
          text-fc-xs text-fc-fg-muted shadow-sm xl:flex-row xl:rounded-fc-pill xl:p-2.5"
      >
        <div class="flex flex-col xl:flex-row items-center gap-3 text-center xl:text-left">
          <a
            href="/"
            class="inline-flex size-9 shrink-0 items-center justify-center rounded-fc-pill text-fc-fg transition-colors hover:bg-fc-surface"
            aria-label="Accueil"
          >
          <svg viewBox="0 0 23 25" class="h-5 w-auto text-fc-fg fill-current" aria-hidden="true">
            <path d="M2.30534 0.255093L2.49734 0.319092C2.08134 1.88709 2.97734 4.06309 4.48134 4.06309C7.61734 4.06309 10.1453 -0.000907898 14.6253 0.0310917C18.1453 0.0310917 18.9133 3.16709 18.9133 4.67109V6.94309H14.0493L14.0173 4.99109C14.0173 2.75109 12.8333 2.23909 11.4893 2.23909C7.00934 2.23909 5.31334 8.57509 2.91334 8.57509C1.56934 8.57509 1.21734 6.71909 1.21734 5.27909C1.21734 3.13509 1.76134 1.15109 2.30534 0.255093ZM5.69734 11.6791L8.73734 4.95909H12.9293C11.7133 7.29509 10.6893 9.56709 9.76134 11.6791H10.1133C13.8573 11.6791 16.8333 12.6071 16.8333 17.5031L12.0333 17.4391C12.0653 12.9591 11.9373 12.1911 10.1453 12.1911H9.50534C6.46534 19.0071 4.28934 24.0311 0.00134376 24.0311L0.0333438 18.7831V11.6791H5.69734ZM0.289344 14.7831V18.7831C1.95334 18.6871 3.42534 16.7671 4.35334 14.6551L5.44134 12.2231C1.31334 12.3831 0.289344 12.8951 0.289344 14.7831ZM19.9478 24.0951C18.5398 24.0951 17.5158 23.1031 17.5158 21.7271C17.5158 20.3831 18.5398 19.3591 19.9478 19.3591C21.3558 19.3591 22.3798 20.3831 22.3798 21.7271C22.3798 23.1031 21.3558 24.0951 19.9478 24.0951Z" />
          </svg>
          </a>
          <div>
            <span class="font-bold text-fc-fg">Facile Studio</span>
            <span class="mx-2">·</span>
            <span>Lyon · Strasbourg · À distance</span>
            <span class="mx-2">·</span>
            <a href="tel:+33768888818" class="font-medium text-fc-fg hover:text-fc-accent transition-colors">07 68 88 88 18</a>
            <span class="mx-2">·</span>
            <a href="mailto:contact@facile.studio" class="font-medium text-fc-fg hover:text-fc-accent transition-colors">contact@facile.studio</a>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-1">
          {#each FOOTER_LINKS as link (link.label)}
            <a
              href={link.href}
              class="inline-flex h-9 items-center rounded-fc-pill px-3 transition-colors hover:bg-fc-surface hover:text-fc-fg"
              >{link.label}</a
            >
          {/each}
        </div>
      </div>
    </footer>
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
