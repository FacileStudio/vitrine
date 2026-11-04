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
  import { GITHUB_ICON, MENU_ICON, SUITE_ICONS } from "$lib/icons";
  import { moveNavPill, scrollToSection, watchActiveSection } from "$lib/motion";

  let { children }: { children: Snippet } = $props();
  registerIcons(SUITE_ICONS);
  provideLocale("en");

  let theme = $state<"light" | "dark">("dark");
  let activeSection = $state<string>(NAV_LINKS[0].id);
  let scrolled = $state(false);
  let mobileOpen = $state(false);
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
    moveNavPill(navPill, navEls[activeSection], false);
    return watchActiveSection(
      NAV_LINKS.map((s) => s.id),
      (id) => (activeSection = id),
      (isScrolled) => (scrolled = isScrolled),
    );
  });

  const FOOTER_LINKS = [
    { label: "Bulle", href: "https://bulle.facile.studio" },
    { label: "Pastille", href: "https://pastille.facile.studio" },
    { label: "Sablier", href: "https://sablier.facile.studio" },
    { label: "Opus", href: "https://opus.facile.studio" },
    { label: "GitHub", href: "https://github.com/FacileStudio" },
  ];
</script>

<div class="flex min-h-dvh w-full flex-col bg-fc-page text-fc-fg">
  <div class="sticky top-0 z-30 flex w-full justify-center pointer-events-none px-3 sm:px-6">
    <header
      class="pointer-events-auto flex h-14 w-full items-center justify-between gap-3 transition-all duration-500 ease-fc
        {scrolled
        ? 'mt-3 max-w-4xl rounded-fc-pill bg-fc-surface/75 px-4 sm:px-6 backdrop-blur-xl'
        : 'mt-0 max-w-fc-xl rounded-none bg-fc-page/80 px-2 sm:px-4 backdrop-blur-md'}"
    >
      <a
        href="#hero"
        onclick={(e) => selectSection("hero", e)}
        class="inline-flex items-center gap-2.5 rounded-fc-pill px-2 py-1 text-fc-md font-semibold text-fc-fg
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fc-ring"
      >
        <span class="flex size-7 items-center justify-center rounded-fc-full bg-fc-accent text-fc-accent-fg font-black text-fc-xs">
          F.
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
      </nav>

      <div class="flex items-center gap-2">
        <IconButton
          variant="ghost"
          class="size-9 bg-fc-surface/70 text-fc-fg hover:bg-fc-surface"
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          onclick={toggleTheme}
        >
          <Icon icon={theme === "dark" ? icons.sun : icons.moon} size={16} />
        </IconButton>
        <Button
          variant="primary"
          size="md"
          class="hidden sm:inline-flex h-9 px-4 rounded-fc-pill"
          href="https://github.com/FacileStudio"
          target="_blank"
          rel="noreferrer"
          icon={GITHUB_ICON}>GitHub</Button
        >
        <IconButton
          variant="ghost"
          class="size-9 bg-fc-surface/70 text-fc-fg hover:bg-fc-surface md:hidden"
          aria-label="Open navigation menu"
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
            <span class="inline-flex items-center gap-2 text-fc-md font-semibold text-fc-fg">
              <span class="flex size-6 items-center justify-center rounded-fc-full bg-fc-accent text-fc-accent-fg font-black text-fc-xs">
                F.
              </span>
              <span>Facile Studio</span>
            </span>
            <IconButton
              variant="ghost"
              class="size-9 bg-fc-surface text-fc-fg"
              aria-label="Close navigation menu"
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
          </nav>
        </div>
        <Button
          variant="primary"
          size="md"
          class="w-full rounded-fc-pill"
          href="https://github.com/FacileStudio"
          target="_blank"
          rel="noreferrer"
          icon={GITHUB_ICON}>GitHub</Button
        >
      </aside>
    </div>
  {/if}

  <main class="flex-1"><Page width="xl">{@render children()}</Page></main>

  <footer class="mx-auto w-full max-w-fc-xl px-4 pb-12 pt-8 sm:px-6 md:px-10">
    <div
      class="flex flex-col items-center justify-between gap-4 rounded-fc-lg bg-fc-component px-6 py-6
        text-fc-xs text-fc-fg-muted sm:flex-row"
    >
      <div class="flex flex-wrap items-center gap-2.5">
        <span class="flex size-5 items-center justify-center rounded-fc-full bg-fc-accent text-fc-accent-fg font-black text-[10px]">
          F.
        </span>
        <span class="font-semibold text-fc-fg">Facile Studio</span>
        <span>·</span>
        <span>Open Source sovereign software & hardware</span>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        {#each FOOTER_LINKS as link (link.label)}
          <a href={link.href} target="_blank" rel="noreferrer" class="hover:text-fc-fg transition-colors">{link.label}</a>
        {/each}
      </div>
    </div>
  </footer>
</div>
