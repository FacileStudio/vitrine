<script lang="ts">
  import { onMount } from "svelte";
  import { SUITE_ICONS } from "$lib/icons";

  let container: HTMLElement | null = $state(null);
  let active = $state(false);

  const CX = 540;
  const CY = 360;
  const R = 265;

  const suiteList = [
    { name: "Bulle", cat: "Agent IA", icon: "solar:smile-circle-bold-duotone" },
    { name: "Pastille", cat: "Hardware & IoT", icon: "solar:circle-dot-bold-duotone" },
    { name: "Fusible", cat: "Électronique", icon: "solar:cpu-bolt-bold-duotone" },
    { name: "Sablier", cat: "Temps", icon: "solar:hourglass-bold-duotone" },
    { name: "Opus", cat: "Projets", icon: "solar:slider-vertical-minimalistic-bold-duotone" },
    { name: "Vision", cat: "Analytique", icon: "solar:panorama-bold-duotone" },
    { name: "Glouton", cat: "Prospection", icon: "solar:magnet-wave-bold-duotone" },
    { name: "Ardoise", cat: "Facturation", icon: "solar:bill-list-bold-duotone" },
    { name: "Plume", cat: "Signature", icon: "solar:pen-new-square-bold-duotone" },
    { name: "Casier", cat: "Secrets", icon: "solar:key-minimalistic-square-bold-duotone" },
    { name: "Nuage", cat: "Stockage", icon: "solar:cloud-bold-duotone" },
    { name: "Courrier", cat: "Email", icon: "solar:letter-opened-bold-duotone" },
    { name: "Agenda", cat: "Planning", icon: "solar:calendar-add-bold-duotone" },
    { name: "Echo", cat: "Visio", icon: "solar:monitor-camera-bold-duotone" },
    { name: "Capsule", cat: "Chiffrement", icon: "solar:pill-bold-duotone" },
    { name: "Scribe", cat: "Audio", icon: "solar:microphone-2-bold-duotone" },
    { name: "Journal", cat: "Logs", icon: "solar:notebook-bold-duotone" },
    { name: "Prisme", cat: "Chat Matrix", icon: "solar:chat-round-dots-bold-duotone" },
    { name: "Sonde", cat: "Statut", icon: "solar:radar-bold-duotone" },
    { name: "Registre", cat: "Auth SSO", icon: "solar:key-square-bold-duotone" },
    { name: "Boîte", cat: "Packages", icon: "solar:box-minimalistic-bold-duotone" },
  ];

  const nodes = suiteList.map((item, i) => {
    const a = -Math.PI / 2 + (Math.PI * 2 / suiteList.length) * i;
    const x = Math.round(CX + R * Math.cos(a));
    const y = Math.round(CY + R * Math.sin(a));
    const iconData = SUITE_ICONS[item.icon];

    return { ...item, a, x, y, i, iconData };
  });

  onMount(() => {
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      active = true;
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          active = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  });
</script>

<div
  bind:this={container}
  class="graph-root relative w-full overflow-hidden rounded-fc-3xl bg-fc-component p-4 sm:p-8 md:p-12 shadow-sm"
  class:active
>
  <svg
    viewBox="0 0 1080 720"
    xmlns="http://www.w3.org/2000/svg"
    class="mx-auto h-auto w-full max-w-5xl lg:max-w-6xl"
    role="img"
    aria-label="Architecture et écosystème connectés de la Suite Facile"
  >
    <defs>
      <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="var(--fc-accent)" stop-opacity="0.4" />
        <stop offset="60%" stop-color="var(--fc-accent)" stop-opacity="0.1" />
        <stop offset="100%" stop-color="var(--fc-accent)" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.04" />
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.12" />
      </linearGradient>
    </defs>

    <circle cx={CX} cy={CY} r="90" fill="none" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" stroke-dasharray="4 6" />
    <circle cx={CX} cy={CY} r="180" fill="none" stroke="currentColor" stroke-opacity="0.06" stroke-width="1" stroke-dasharray="3 8" />
    <circle cx={CX} cy={CY} r={R} fill="none" stroke="currentColor" stroke-opacity="0.05" stroke-width="1" />

    {#each nodes as n}
      <line
        x1={CX}
        y1={CY}
        x2={n.x}
        y2={n.y}
        stroke="currentColor"
        stroke-opacity="0.12"
        stroke-width="1"
        class="spoke"
        style="--delay:{n.i * 30}ms"
      />
    {/each}

    {#each nodes as n}
      <circle r="3" fill="var(--fc-accent)" class="particle">
        <animateMotion
          dur="{2.4 + (n.i % 4) * 0.35}s"
          repeatCount="indefinite"
          path="M{n.x},{n.y} L{CX},{CY}"
        />
      </circle>
      <circle r="2.2" fill="currentColor" fill-opacity="0.6" class="particle dim">
        <animateMotion
          dur="{3.0 + (n.i % 5) * 0.3}s"
          repeatCount="indefinite"
          path="M{CX},{CY} L{n.x},{n.y}"
        />
      </circle>
    {/each}

    {#each nodes as n}
      <g
        class="node-group cursor-pointer"
        style="--delay:{150 + n.i * 30}ms"
        role="img"
        aria-label="{n.name} — {n.cat}"
      >
        <title>{n.name} — {n.cat}</title>
        <circle
          cx={n.x}
          cy={n.y}
          r="23"
          fill="var(--fc-surface)"
          class="node-disc"
        />
        {#if n.iconData}
          <g
            transform="translate({n.x - 14}, {n.y - 14}) scale(1.18)"
            class="node-icon text-fc-fg-muted"
          >
            {@html n.iconData.body}
          </g>
        {/if}
      </g>
    {/each}

    <g transform="translate({CX}, {CY})">
      <circle cx="0" cy="0" r="100" fill="url(#hub-glow)" class="hub-glow" />
      <circle cx="0" cy="0" r="56" fill="var(--fc-component)" />
      <circle cx="0" cy="0" r="44" fill="#141414" />
      <g class="hub-pulse">
        <g transform="scale(2.2) translate(-11.4, -12.1)">
          <path
            d="M2.30534 0.255093L2.49734 0.319092C2.08134 1.88709 2.97734 4.06309 4.48134 4.06309C7.61734 4.06309 10.1453 -0.000907898 14.6253 0.0310917C18.1453 0.0310917 18.9133 3.16709 18.9133 4.67109V6.94309H14.0493L14.0173 4.99109C14.0173 2.75109 12.8333 2.23909 11.4893 2.23909C7.00934 2.23909 5.31334 8.57509 2.91334 8.57509C1.56934 8.57509 1.21734 6.71909 1.21734 5.27909C1.21734 3.13509 1.76134 1.15109 2.30534 0.255093ZM5.69734 11.6791L8.73734 4.95909H12.9293C11.7133 7.29509 10.6893 9.56709 9.76134 11.6791H10.1133C13.8573 11.6791 16.8333 12.6071 16.8333 17.5031L12.0333 17.4391C12.0653 12.9591 11.9373 12.1911 10.1453 12.1911H9.50534C6.46534 19.0071 4.28934 24.0311 0.00134376 24.0311L0.0333438 18.7831V11.6791H5.69734ZM0.289344 14.7831V18.7831C1.95334 18.6871 3.42534 16.7671 4.35334 14.6551L5.44134 12.2231C1.31334 12.3831 0.289344 12.8951 0.289344 14.7831ZM19.9478 24.0951C18.5398 24.0951 17.5158 23.1031 17.5158 21.7271C17.5158 20.3831 18.5398 19.3591 19.9478 19.3591C21.3558 19.3591 22.3798 20.3831 22.3798 21.7271C22.3798 23.1031 21.3558 24.0951 19.9478 24.0951Z"
            fill="#ffffff"
          />
        </g>
      </g>
    </g>
  </svg>
</div>

<style>
  .graph-root {
    opacity: 0;
    transform: scale(0.96);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .graph-root.active {
    opacity: 1;
    transform: scale(1);
  }
  .spoke {
    stroke-dasharray: 220;
    stroke-dashoffset: 220;
    transition: stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: var(--delay);
  }
  .active .spoke {
    stroke-dashoffset: 0;
  }
  .particle {
    opacity: 0;
    transition: opacity 0.5s ease 1s;
  }
  .dim {
    transition-delay: 1.4s;
  }
  .active .particle {
    opacity: 0.9;
  }
  .node-group {
    opacity: 0;
    transition: opacity 0.5s ease;
    transition-delay: var(--delay);
  }
  .active .node-group {
    opacity: 1;
  }
  .node-disc {
    transition: fill 0.2s ease;
  }
  .node-icon {
    transition: color 0.2s ease;
  }
  .node-group:hover .node-disc {
    fill: var(--fc-component);
  }
  .node-group:hover .node-icon {
    color: var(--fc-accent);
  }
  .hub-pulse {
    animation: hub-breathe 4s ease-in-out infinite;
  }
  .hub-glow {
    animation: glow-breathe 4s ease-in-out infinite;
  }
  @keyframes hub-breathe {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.08);
    }
  }
  @keyframes glow-breathe {
    0%, 100% {
      transform: scale(0.9);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.12);
      opacity: 1;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .hub-pulse,
    .hub-glow {
      animation: none;
    }
  }
</style>
