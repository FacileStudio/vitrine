<script lang="ts">
  import "../app.css";
  import { onMount, type Snippet } from "svelte";
  import { browser } from "$app/environment";
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
  import ContactModal from "$lib/components/ContactModal.svelte";

  let { children }: { children: Snippet } = $props();
  registerIcons(SUITE_ICONS);
  provideLocale("en");

  let theme = $state<"light" | "dark">("dark");
  let activeSection = $state<string>(NAV_LINKS[0].id);
  let scrolled = $state(false);
  let mobileOpen = $state(false);
  let contactOpen = $state(false);
  let navPill: HTMLSpanElement | null = $state(null);
  let navEls: Record<string, HTMLAnchorElement> = $state({});
  let scrimEl: HTMLDivElement | null = $state(null);
  let drawerEl: HTMLElement | null = $state(null);

  if (browser) {
    const saved = localStorage.getItem("facile-theme");
    if (saved === "light" || saved === "dark") theme = saved;
    else document.documentElement.classList.add("dark");
  }

  $effect(() => {
    if (!browser) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("facile-theme", theme);
  });
  $effect(() => moveNavPill(navPill, navEls[activeSection], true));

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

  function triggerContact() {
    contactOpen = true;
  }

  onMount(() => {
    moveNavPill(navPill, navEls[activeSection], false);
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

<div class="flex min-h-dvh w-full flex-col bg-fc-page text-fc-fg">
  <div class="sticky top-0 z-30 flex w-full justify-center pointer-events-none px-3 sm:px-6">
    <header
      class="pointer-events-auto flex h-14 w-full items-center justify-between gap-3 transition-all duration-500 ease-fc
        {scrolled
        ? 'mt-3 max-w-5xl rounded-fc-pill bg-fc-surface/80 px-4 sm:px-6 backdrop-blur-xl shadow-lg'
        : 'mt-0 max-w-fc-xl rounded-none bg-fc-page/85 px-2 sm:px-4 backdrop-blur-md'}"
    >
      <a
        href="/"
        class="inline-flex items-center gap-2.5 rounded-fc-pill px-2 py-1 text-fc-md font-semibold text-fc-fg
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fc-ring"
      >
        <span class="flex size-7 items-center justify-center rounded-fc-full bg-fc-accent text-fc-accent-fg p-1.5 shadow-sm">
          <svg viewBox="0 0 23 25" fill="none" class="size-full fill-current">
            <path d="M2.30534 0.255093L2.49734 0.319092C2.08134 1.88709 2.97734 4.06309 4.48134 4.06309C7.61734 4.06309 10.1453 -0.000907898 14.6253 0.0310917C18.1453 0.0310917 18.9133 3.16709 18.9133 4.67109V6.94309H14.0493L14.0173 4.99109C14.0173 2.75109 12.8333 2.23909 11.4893 2.23909C7.00934 2.23909 5.31334 8.57509 2.91334 8.57509C1.56934 8.57509 1.21734 6.71909 1.21734 5.27909C1.21734 3.13509 1.76134 1.15109 2.30534 0.255093ZM5.69734 11.6791L8.73734 4.95909H12.9293C11.7133 7.29509 10.6893 9.56709 9.76134 11.6791H10.1133C13.8573 11.6791 16.8333 12.6071 16.8333 17.5031L12.0333 17.4391C12.0653 12.9591 11.9373 12.1911 10.1453 12.1911H9.50534C6.46534 19.0071 4.28934 24.0311 0.00134376 24.0311L0.0333438 18.7831V11.6791H5.69734ZM0.289344 14.7831V18.7831C1.95334 18.6871 3.42534 16.7671 4.35334 14.6551L5.44134 12.2231C1.31334 12.3831 0.289344 12.8951 0.289344 14.7831ZM19.9478 24.0951C18.5398 24.0951 17.5158 23.1031 17.5158 21.7271C17.5158 20.3831 18.5398 19.3591 19.9478 19.3591C21.3558 19.3591 22.3798 20.3831 22.3798 21.7271C22.3798 23.1031 21.3558 24.0951 19.9478 24.0951Z" />
          </svg>
        </span>
        <span class="font-bold tracking-tight">Facile Studio</span>
      </a>

      <nav aria-label="Primary" class="relative hidden md:flex items-center gap-0.5 p-1">
        <span
          bind:this={navPill}
          aria-hidden="true"
          class="pointer-events-none absolute inset-y-1 left-0 rounded-fc-pill bg-fc-accent opacity-0"
        ></span>
        {#each NAV_LINKS as item (item.id)}
          {@const active = activeSection === item.id}
          <a
            bind:this={navEls[item.id]}
            href="#{item.id}"
            aria-current={active ? "location" : undefined}
            onclick={(e) => selectSection(item.id, e)}
            class="relative z-10 inline-flex h-8 items-center whitespace-nowrap rounded-fc-pill px-3 text-fc-xs
              font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-fc-ring {active ? 'text-fc-accent-fg' : 'text-fc-fg-muted hover:text-fc-fg'}"
            >{item.label}</a
          >
        {/each}
        <a
          href="/projects"
          class="relative z-10 inline-flex h-8 items-center whitespace-nowrap rounded-fc-pill px-3 text-fc-xs
            font-medium text-fc-fg-muted hover:text-fc-fg transition-colors duration-200"
        >
          Portfolio
        </a>
      </nav>

      <div class="flex items-center gap-2">
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
          class="inline-flex h-9 px-4 rounded-fc-pill font-semibold shadow-sm"
          onclick={triggerContact}
        >
          Démarrer un projet
        </Button>
        <IconButton
          variant="ghost"
          class="size-9 bg-fc-surface/70 text-fc-fg hover:bg-fc-surface md:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
          onclick={openSidebar}
        >
          <Icon icon={MENU_ICON} size={18} />
        </IconButton>
      </div>
    </header>
  </div>

  {#if mobileOpen}
    <div class="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
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
            <span class="inline-flex items-center gap-2.5 text-fc-md font-semibold text-fc-fg">
              <span class="flex size-7 items-center justify-center rounded-fc-full bg-fc-accent text-fc-accent-fg p-1.5">
                <svg viewBox="0 0 23 25" fill="none" class="size-full fill-current">
                  <path d="M2.30534 0.255093L2.49734 0.319092C2.08134 1.88709 2.97734 4.06309 4.48134 4.06309C7.61734 4.06309 10.1453 -0.000907898 14.6253 0.0310917C18.1453 0.0310917 18.9133 3.16709 18.9133 4.67109V6.94309H14.0493L14.0173 4.99109C14.0173 2.75109 12.8333 2.23909 11.4893 2.23909C7.00934 2.23909 5.31334 8.57509 2.91334 8.57509C1.56934 8.57509 1.21734 6.71909 1.21734 5.27909C1.21734 3.13509 1.76134 1.15109 2.30534 0.255093ZM5.69734 11.6791L8.73734 4.95909H12.9293C11.7133 7.29509 10.6893 9.56709 9.76134 11.6791H10.1133C13.8573 11.6791 16.8333 12.6071 16.8333 17.5031L12.0333 17.4391C12.0653 12.9591 11.9373 12.1911 10.1453 12.1911H9.50534C6.46534 19.0071 4.28934 24.0311 0.00134376 24.0311L0.0333438 18.7831V11.6791H5.69734ZM0.289344 14.7831V18.7831C1.95334 18.6871 3.42534 16.7671 4.35334 14.6551L5.44134 12.2231C1.31334 12.3831 0.289344 12.8951 0.289344 14.7831ZM19.9478 24.0951C18.5398 24.0951 17.5158 23.1031 17.5158 21.7271C17.5158 20.3831 18.5398 19.3591 19.9478 19.3591C21.3558 19.3591 22.3798 20.3831 22.3798 21.7271C22.3798 23.1031 21.3558 24.0951 19.9478 24.0951Z" />
                </svg>
              </span>
              <span>Facile Studio</span>
            </span>
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
              {@const active = activeSection === item.id}
              <a
                href="#{item.id}"
                onclick={(e) => {
                  e.preventDefault();
                  closeSidebar(() => selectSection(item.id));
                }}
                class="inline-flex h-10 items-center rounded-fc-pill px-4 text-fc-sm font-medium transition-colors
                  {active ? 'bg-fc-accent text-fc-accent-fg' : 'text-fc-fg-muted hover:bg-fc-surface hover:text-fc-fg'}"
                >{item.label}</a
              >
            {/each}
            <a
              href="/projects"
              onclick={() => closeSidebar()}
              class="inline-flex h-10 items-center rounded-fc-pill px-4 text-fc-sm font-medium text-fc-fg-muted hover:bg-fc-surface hover:text-fc-fg"
            >
              Portfolio complet
            </a>
          </nav>
        </div>
        <Button
          variant="primary"
          size="md"
          class="w-full rounded-fc-pill font-semibold"
          onclick={() => closeSidebar(triggerContact)}
        >
          Démarrer un projet
        </Button>
      </aside>
    </div>
  {/if}

  <main class="flex-1"><Page width="xl">{@render children()}</Page></main>

  <ContactModal bind:open={contactOpen} />

  <footer class="mx-auto w-full max-w-fc-xl px-4 pb-12 pt-8 sm:px-6 md:px-10">
    <div
      class="flex flex-col items-center justify-between gap-6 rounded-fc-2xl bg-fc-component px-6 py-8
        text-fc-xs text-fc-fg-muted sm:flex-row shadow-sm"
    >
      <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
        <span class="flex size-7 items-center justify-center rounded-fc-full bg-fc-accent text-fc-accent-fg p-1.5">
          <svg viewBox="0 0 23 25" fill="none" class="size-full fill-current">
            <path d="M2.30534 0.255093L2.49734 0.319092C2.08134 1.88709 2.97734 4.06309 4.48134 4.06309C7.61734 4.06309 10.1453 -0.000907898 14.6253 0.0310917C18.1453 0.0310917 18.9133 3.16709 18.9133 4.67109V6.94309H14.0493L14.0173 4.99109C14.0173 2.75109 12.8333 2.23909 11.4893 2.23909C7.00934 2.23909 5.31334 8.57509 2.91334 8.57509C1.56934 8.57509 1.21734 6.71909 1.21734 5.27909C1.21734 3.13509 1.76134 1.15109 2.30534 0.255093ZM5.69734 11.6791L8.73734 4.95909H12.9293C11.7133 7.29509 10.6893 9.56709 9.76134 11.6791H10.1133C13.8573 11.6791 16.8333 12.6071 16.8333 17.5031L12.0333 17.4391C12.0653 12.9591 11.9373 12.1911 10.1453 12.1911H9.50534C6.46534 19.0071 4.28934 24.0311 0.00134376 24.0311L0.0333438 18.7831V11.6791H5.69734ZM0.289344 14.7831V18.7831C1.95334 18.6871 3.42534 16.7671 4.35334 14.6551L5.44134 12.2231C1.31334 12.3831 0.289344 12.8951 0.289344 14.7831ZM19.9478 24.0951C18.5398 24.0951 17.5158 23.1031 17.5158 21.7271C17.5158 20.3831 18.5398 19.3591 19.9478 19.3591C21.3558 19.3591 22.3798 20.3831 22.3798 21.7271C22.3798 23.1031 21.3558 24.0951 19.9478 24.0951Z" />
          </svg>
        </span>
        <div>
          <span class="font-bold text-fc-fg">Facile Studio</span>
          <span class="mx-2">·</span>
          <span>Paris · Rouen · Remote</span>
          <span class="mx-2">·</span>
          <a href="tel:+33768888818" class="font-medium text-fc-fg hover:underline">07 68 88 88 18</a>
          <span class="mx-2">·</span>
          <a href="mailto:contact@facile.studio" class="font-medium text-fc-fg hover:underline">contact@facile.studio</a>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-4">
        {#each FOOTER_LINKS as link (link.label)}
          <a href={link.href} class="hover:text-fc-fg transition-colors">{link.label}</a>
        {/each}
      </div>
    </div>
  </footer>
</div>
