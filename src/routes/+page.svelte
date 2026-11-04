<script lang="ts">
  import { Button, Card, Icon, Section } from "@facile/muse";
  import PcbViewer from "$lib/components/PcbViewer.svelte";
  import InteractiveBlob from "$lib/components/InteractiveBlob.svelte";
  import { HERO_STATS, SUITE_TOOLS } from "$lib/data";
  import { GITHUB_ICON } from "$lib/icons";
  import { scrollReveal } from "$lib/motion";

  let selectedCategory = $state<string>("all");
  let activeBlobName = $state<string>("Bulle");

  const categories = [
    { id: "all", label: "All Tools (20)" },
    { id: "hardware", label: "Hardware & IoT" },
    { id: "agent", label: "AI & Agents" },
    { id: "productivity", label: "Productivity" },
    { id: "business", label: "Business" },
    { id: "infra", label: "Security & Ops" },
  ];

  const filteredTools = $derived(
    selectedCategory === "all"
      ? SUITE_TOOLS
      : SUITE_TOOLS.filter((t) => t.category === selectedCategory)
  );
</script>

<svelte:head>
  <title>Facile Studio — Sovereign Software, Open Hardware & Autonomous Agents</title>
  <meta
    name="description"
    content="Facile Studio is an open-source suite of twenty interconnected sovereign tools, the Bulle autonomous coding agent, and the Pastille AI hardware charm."
  />
</svelte:head>

<!-- Hero Section -->
<section
  id="hero"
  use:scrollReveal={{ delay: 0.1, stagger: 0.08 }}
  class="relative flex flex-col gap-8 pt-6 pb-16 md:pt-14 md:pb-24 overflow-hidden"
>
  <div data-reveal-item class="flex flex-col gap-5 max-w-3xl">
    <div class="inline-flex items-center gap-2 rounded-fc-pill bg-fc-surface px-3.5 py-1 text-fc-xs font-mono text-fc-fg-muted w-fit">
      <span class="flex size-2 rounded-fc-full bg-fc-success animate-pulse"></span>
      Sovereign Suite · Open Source · Hardware & AI
    </div>
    <h1 class="text-fc-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-fc-fg leading-[1.08]">
      On simplifie.<br />
      <span class="text-fc-fg-muted">Vous créez.</span>
    </h1>
    <p class="text-fc-md sm:text-fc-xl text-fc-fg-muted max-w-2xl leading-relaxed">
      Vingt outils interconnectés, un agent autonome avec son propre ordinateur, et un charm matériel open-source. Sur vos serveurs, avec vos données, zéro dépendance cloud.
    </p>
  </div>

  <div data-reveal-item class="flex flex-wrap items-center gap-3 pt-2">
    <Button
      variant="primary"
      size="lg"
      href="#suite"
      class="rounded-fc-pill px-6"
    >
      Découvrir la suite
    </Button>
    <Button
      variant="ghost"
      size="lg"
      class="rounded-fc-pill bg-fc-surface text-fc-fg hover:bg-fc-component px-5"
      href="#pastille"
    >
      Pastille 3D PCB
    </Button>
    <Button
      variant="ghost"
      size="lg"
      class="rounded-fc-pill bg-fc-surface text-fc-fg hover:bg-fc-component px-5"
      href="#bulle"
    >
      Agent Bulle
    </Button>
  </div>

  <!-- Hero Metrics -->
  <div class="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-4">
    {#each HERO_STATS as stat (stat.label)}
      <div data-reveal-item>
        <Card class="flex h-full flex-col justify-between gap-2 p-5 bg-fc-component/60 hover:bg-fc-component transition-all duration-300">
          <span class="text-fc-xs font-mono uppercase text-fc-fg-muted">{stat.label}</span>
          <span class="text-fc-2xl sm:text-fc-3xl font-bold tracking-tight text-fc-fg">{stat.value}</span>
          <span class="text-fc-xs text-fc-fg-muted">{stat.detail}</span>
        </Card>
      </div>
    {/each}
  </div>
</section>

<!-- Pastille 3D Section -->
<div use:scrollReveal={{ y: 24 }}>
  <Section
    id="pastille"
    title="Pastille & Fusible"
    description="Charm vocal open-hardware de 38 mm pour Bulle. Conçu et exporté avec Fusible."
  >
    <div class="flex flex-col gap-6">
      <PcbViewer />

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card class="flex flex-col justify-between gap-3 p-5 bg-fc-component/60">
          <div class="flex items-center gap-2.5">
            <span class="flex size-8 items-center justify-center rounded-fc-md bg-fc-surface text-fc-fg">
              <Icon icon="solar:circle-dot-bold-duotone" size={20} />
            </span>
            <h3 class="text-fc-md font-semibold text-fc-fg">Format 38 mm & BOHS-01</h3>
          </div>
          <p class="text-fc-sm text-fc-fg-muted">
            Circuit 4 couches ENIG circulaire avec écran rond IPS GC9A01 240x240 piloté à 60 FPS et haptique LRA DRV2605L.
          </p>
          <span class="w-fit rounded-fc-pill bg-fc-surface px-2.5 py-0.5 text-fc-xs font-mono text-fc-fg-muted">
            18 uA veille · 14 g
          </span>
        </Card>

        <Card class="flex flex-col justify-between gap-3 p-5 bg-fc-component/60">
          <div class="flex items-center gap-2.5">
            <span class="flex size-8 items-center justify-center rounded-fc-md bg-fc-surface text-fc-fg">
              <Icon icon="solar:soundwave-bold-duotone" size={20} />
            </span>
            <h3 class="text-fc-md font-semibold text-fc-fg">Audio Full-Duplex PCM16</h3>
          </div>
          <p class="text-fc-sm text-fc-fg-muted">
            Micro I2S avec VAD matériel, ampli classe D MAX98357A, et streaming bidirectionnel basse latence sur BLE 5.0 et Wi-Fi WSS.
          </p>
          <span class="w-fit rounded-fc-pill bg-fc-surface px-2.5 py-0.5 text-fc-xs font-mono text-fc-fg-muted">
            &lt; 50 ms réveil · bohs.v1
          </span>
        </Card>

        <Card class="flex flex-col justify-between gap-3 p-5 bg-fc-component/60">
          <div class="flex items-center gap-2.5">
            <span class="flex size-8 items-center justify-center rounded-fc-md bg-fc-surface text-fc-fg">
              <Icon icon="solar:cpu-bolt-bold-duotone" size={20} />
            </span>
            <h3 class="text-fc-md font-semibold text-fc-fg">Fusible EDA & Firmware Rust</h3>
          </div>
          <p class="text-fc-sm text-fc-fg-muted">
            Firmware bare-metal Embassy Rust (ESP32-S3R8). Schémas, placement, règles DRC et exports Gerber générés avec Fusible.
          </p>
          <div class="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              href="https://pastille.facile.studio"
              target="_blank"
              class="rounded-fc-pill text-fc-xs"
            >
              Site Pastille
            </Button>
            <Button
              size="sm"
              variant="ghost"
              href="https://github.com/FacileStudio/Pastille"
              target="_blank"
              icon={GITHUB_ICON}
              class="rounded-fc-pill text-fc-xs"
            >
              GitHub
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </Section>
</div>

<!-- Bulle Section -->
<div use:scrollReveal={{ y: 24 }}>
  <Section
    id="bulle"
    title="Bulle & Mycelium"
    description="Agent de programmation autonome avec sa propre machine virtuelle et mémoire partagée."
  >
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px] items-stretch">
      <div class="flex flex-col justify-between gap-6 rounded-fc-lg bg-fc-component/80 p-6 sm:p-8">
        <div class="flex flex-col gap-4">
          <div class="inline-flex items-center gap-2 rounded-fc-pill bg-fc-surface px-3 py-1 text-fc-xs font-mono text-fc-fg-muted w-fit">
            <Icon icon="solar:smile-circle-bold-duotone" size={16} />
            <span>Runner autonome · MicroVM rootless · Matrix Bridge</span>
          </div>
          <h3 class="text-fc-2xl sm:text-fc-3xl font-bold tracking-tight text-fc-fg">
            Un agent qui code dans son propre ordinateur.
          </h3>
          <p class="text-fc-md text-fc-fg-muted leading-relaxed max-w-xl">
            Chaque utilisateur dispose d'une machine virtuelle microVM isolée et persistante. Bulle exécute des commandes shell, édite le code, pilote les outils de la suite et affiche des composants interactifs OpenUI directement dans le chat.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div class="rounded-fc-md bg-fc-surface/70 p-3.5">
            <span class="text-fc-xs font-mono uppercase text-fc-fg-muted">Environnement</span>
            <p class="text-fc-sm font-semibold text-fc-fg mt-1">MicroVM boite dédiée</p>
          </div>
          <div class="rounded-fc-md bg-fc-surface/70 p-3.5">
            <span class="text-fc-xs font-mono uppercase text-fc-fg-muted">Harness</span>
            <p class="text-fc-sm font-semibold text-fc-fg mt-1">Terminal TUI & Web Svelte 5</p>
          </div>
          <div class="rounded-fc-md bg-fc-surface/70 p-3.5">
            <span class="text-fc-xs font-mono uppercase text-fc-fg-muted">Mémoire agent</span>
            <p class="text-fc-sm font-semibold text-fc-fg mt-1">Mycelium Wiki & Flows</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3 pt-2">
          <Button
            variant="primary"
            size="md"
            href="https://bulle.facile.studio"
            target="_blank"
            class="rounded-fc-pill"
          >
            Lancer Bulle
          </Button>
          <Button
            variant="outline"
            size="md"
            href="https://github.com/FacileStudio/Bulle"
            target="_blank"
            icon={GITHUB_ICON}
            class="rounded-fc-pill"
          >
            Dépôt Bulle
          </Button>
          <Button
            variant="ghost"
            size="md"
            href="https://mycelium.facile.studio"
            target="_blank"
            class="rounded-fc-pill text-fc-fg-muted hover:text-fc-fg"
          >
            Mycelium
          </Button>
        </div>
      </div>

      <!-- Interactive Blob Companion Card -->
      <Card class="flex flex-col items-center justify-center gap-4 p-6 bg-fc-component text-center">
        <span class="text-fc-xs font-mono uppercase text-fc-fg-muted">Compagnon dynamique</span>
        <InteractiveBlob name={activeBlobName} size="lg" />
        <div class="flex flex-col gap-1">
          <h4 class="text-fc-lg font-bold text-fc-fg">{activeBlobName}</h4>
          <span class="text-fc-xs text-fc-fg-muted font-mono">Gaze tracking & animations</span>
        </div>
        <div class="flex flex-wrap justify-center gap-1.5 pt-2">
          {#each ["Bulle", "Kori", "Pastille", "Pi"] as name}
            <button
              class="rounded-fc-pill px-3 py-1 text-fc-xs font-medium transition-colors
                {activeBlobName === name ? 'bg-fc-accent text-fc-accent-fg' : 'bg-fc-surface text-fc-fg-muted hover:text-fc-fg'}"
              onclick={() => (activeBlobName = name)}
            >
              {name}
            </button>
          {/each}
        </div>
      </Card>
    </div>
  </Section>
</div>

<!-- Complete Suite Tools Grid -->
<div use:scrollReveal={{ y: 24 }}>
  <Section
    id="suite"
    title="La suite Facile"
    description="Vingt logiciels conçus avec la charte Muse. Chaque outil fait une chose parfaitement."
  >
    <!-- Category Filter Pills -->
    <div class="flex flex-wrap items-center gap-1.5 pb-6">
      {#each categories as cat (cat.id)}
        <button
          class="rounded-fc-pill px-3.5 py-1.5 text-fc-xs font-medium transition-all duration-200
            {selectedCategory === cat.id
            ? 'bg-fc-accent text-fc-accent-fg shadow-xs'
            : 'bg-fc-component text-fc-fg-muted hover:bg-fc-surface hover:text-fc-fg'}"
          onclick={() => (selectedCategory = cat.id)}
        >
          {cat.label}
        </button>
      {/each}
    </div>

    <!-- Tools Grid -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each filteredTools as tool (tool.id)}
        <div data-reveal-item>
          <Card class="flex h-full flex-col justify-between gap-5 p-5 bg-fc-component/60 hover:bg-fc-component transition-all duration-300 group hover:-translate-y-0.5">
            <div class="flex flex-col gap-3">
              <div class="flex items-center justify-between">
                <div class="inline-flex size-11 items-center justify-center rounded-fc-md bg-fc-surface text-fc-fg transition-transform duration-300 group-hover:scale-105">
                  <Icon icon={tool.icon} size={24} />
                </div>
                {#if tool.badge}
                  <span class="rounded-fc-pill bg-fc-accent px-2.5 py-0.5 text-[11px] font-mono font-medium text-fc-accent-fg">
                    {tool.badge}
                  </span>
                {:else}
                  <span class="rounded-fc-pill bg-fc-surface px-2.5 py-0.5 text-[11px] font-mono text-fc-fg-muted">
                    {tool.categoryLabel}
                  </span>
                {/if}
              </div>

              <div class="flex flex-col gap-1">
                <h3 class="text-fc-lg font-bold tracking-tight text-fc-fg">{tool.name}</h3>
                <span class="text-fc-xs font-medium text-fc-fg-muted">{tool.tagline}</span>
              </div>

              <p class="text-fc-sm text-fc-fg-muted leading-relaxed">
                {tool.description}
              </p>
            </div>

            <div class="flex items-center justify-between pt-3">
              <span class="text-[11px] font-mono text-fc-fg-muted truncate max-w-[170px]">
                {tool.tag}
              </span>
              <div class="flex items-center gap-1.5">
                {#if tool.url}
                  <Button
                    size="sm"
                    variant="ghost"
                    href={tool.url}
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-fc-pill text-fc-xs text-fc-fg hover:bg-fc-surface h-7 px-2.5"
                  >
                    Ouvrir ↗
                  </Button>
                {/if}
                {#if tool.githubUrl}
                  <Button
                    size="sm"
                    variant="ghost"
                    href={tool.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    icon={GITHUB_ICON}
                    class="size-7 rounded-fc-pill p-0 text-fc-fg-muted hover:text-fc-fg hover:bg-fc-surface"
                    aria-label="{tool.name} repository"
                  />
                {/if}
              </div>
            </div>
          </Card>
        </div>
      {/each}
    </div>
  </Section>
</div>

<!-- Architecture & Bus Section -->
<div use:scrollReveal={{ y: 24 }}>
  <Section
    id="architecture"
    title="Une architecture unifiée"
    description="Registre pour l'authentification universelle, Antenne pour le bus d'événements temps-réel."
  >
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <!-- Registre Card -->
      <Card class="flex flex-col justify-between gap-5 p-6 bg-fc-component">
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="flex size-10 items-center justify-center rounded-fc-md bg-fc-surface text-fc-fg">
              <Icon icon="solar:shield-user-bold-duotone" size={22} />
            </span>
            <div class="flex flex-col">
              <h3 class="text-fc-lg font-bold text-fc-fg">Registre (SSO & IdP)</h3>
              <span class="text-fc-xs text-fc-fg-muted font-mono">sso.facile.studio · OIDC & RFC 8628</span>
            </div>
          </div>
          <p class="text-fc-sm text-fc-fg-muted leading-relaxed">
            Créez votre compte une seule fois. Connectez-vous à toute la suite web, ainsi qu'aux CLI de terminal grâce au flux Device Grant (RFC 8628). Passkeys WebAuthn, chiffrement Argon2, et gestion d'espaces partagés.
          </p>
        </div>

        <div class="rounded-fc-md bg-fc-surface p-4 font-mono text-fc-xs text-fc-fg-muted leading-relaxed">
          <div class="text-fc-success"># Connexion instantanée de toute la suite en CLI :</div>
          <div class="text-fc-fg pt-1">$ facile login</div>
          <div class="text-fc-info pt-0.5">✔ Registre OIDC loopback flow authenticated</div>
        </div>
      </Card>

      <!-- Antenne Card -->
      <Card class="flex flex-col justify-between gap-5 p-6 bg-fc-component">
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="flex size-10 items-center justify-center rounded-fc-md bg-fc-surface text-fc-fg">
              <Icon icon="solar:station-bold-duotone" size={22} />
            </span>
            <div class="flex flex-col">
              <h3 class="text-fc-lg font-bold text-fc-fg">Antenne (Bus d'événements)</h3>
              <span class="text-fc-xs text-fc-fg-muted font-mono">antenne.facile.studio · Event Mesh</span>
            </div>
          </div>
          <p class="text-fc-sm text-fc-fg-muted leading-relaxed">
            Chaque outil de la suite communique via Antenne. Un document signé dans Plume déclenche la facture dans Ardoise. Une tâche créée dans Opus est chronométrable dans Sablier. Les alertes sont routées vers Matrix, Discord ou Webhook.
          </p>
        </div>

        <div class="rounded-fc-md bg-fc-surface p-4 font-mono text-fc-xs text-fc-fg-muted leading-relaxed">
          <div class="text-fc-success"># Flux d'événements temps-réel entre applications :</div>
          <div class="text-fc-fg pt-1">[Opus] task.created → [Sablier] timer.ready</div>
          <div class="text-fc-info pt-0.5">[Plume] doc.signed → [Ardoise] invoice.generate</div>
        </div>
      </Card>
    </div>
  </Section>
</div>

<!-- Studio Manifesto Section -->
<div use:scrollReveal={{ y: 24 }} class="pb-16">
  <Section
    id="manifesto"
    title="Le studio"
    description="Deux développeurs, deux designers. Nous concevons les outils dont nous avons besoin."
  >
    <Card class="flex flex-col justify-between gap-6 p-6 sm:p-10 bg-fc-component">
      <div class="flex flex-col gap-4 max-w-2xl">
        <h3 class="text-fc-2xl sm:text-fc-3xl font-bold tracking-tight text-fc-fg">
          Quatre humains. Zéro bullshit.
        </h3>
        <p class="text-fc-md text-fc-fg-muted leading-relaxed">
          Nous construisons chaque jour des logiciels simples, sobres et durables. Pas de métriques de rétention toxiques, pas d'usines à gaz d'investisseurs, pas d'enfermement propriétaire. Le code source est transparent, vos serveurs vous appartiennent.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-3 pt-2">
        <Button
          variant="primary"
          size="md"
          href="https://github.com/FacileStudio"
          target="_blank"
          icon={GITHUB_ICON}
          class="rounded-fc-pill"
        >
          Rejoindre le projet sur GitHub
        </Button>
        <Button
          variant="outline"
          size="md"
          href="https://sso.facile.studio"
          target="_blank"
          class="rounded-fc-pill"
        >
          Créer un compte Registre
        </Button>
      </div>
    </Card>
  </Section>
</div>
