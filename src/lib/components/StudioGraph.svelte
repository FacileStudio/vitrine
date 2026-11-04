<script lang="ts">
  import { onMount } from "svelte";

  let container: HTMLElement | null = $state(null);
  let active = $state(false);

  const CX = 400;
  const CY = 260;
  const R = 185;

  const nodes = [
    { name: "Sites vitrines", cat: "Client", a: -Math.PI / 2 },
    { name: "Apps métier", cat: "Client", a: -Math.PI / 2 + (Math.PI * 2 / 12) * 1 },
    { name: "Direction artistique", cat: "Design", a: -Math.PI / 2 + (Math.PI * 2 / 12) * 2 },
    { name: "DevOps Hetzner", cat: "Infra", a: -Math.PI / 2 + (Math.PI * 2 / 12) * 3 },
    { name: "Bulle Agent", cat: "IA", a: -Math.PI / 2 + (Math.PI * 2 / 12) * 4 },
    { name: "Ardoise", cat: "Facturation", a: -Math.PI / 2 + (Math.PI * 2 / 12) * 5 },
    { name: "Pastille", cat: "Hardware", a: -Math.PI / 2 + (Math.PI * 2 / 12) * 6 },
    { name: "Vision", cat: "Analytique", a: -Math.PI / 2 + (Math.PI * 2 / 12) * 7 },
    { name: "Nuage", cat: "Stockage", a: -Math.PI / 2 + (Math.PI * 2 / 12) * 8 },
    { name: "Courrier", cat: "Email", a: -Math.PI / 2 + (Math.PI * 2 / 12) * 9 },
    { name: "Casier", cat: "Secrets", a: -Math.PI / 2 + (Math.PI * 2 / 12) * 10 },
    { name: "Journal", cat: "Télémétrie", a: -Math.PI / 2 + (Math.PI * 2 / 12) * 11 }
  ].map((item, i) => {
    const x = Math.round(CX + R * Math.cos(item.a));
    const y = Math.round(CY + R * Math.sin(item.a));
    const lx = Math.round(CX + (R + 24) * Math.cos(item.a));
    const ly = Math.round(CY + (R + 24) * Math.sin(item.a));
    const c = Math.cos(item.a);
    const anchor = Math.abs(c) < 0.25 ? ("middle" as const) : c > 0 ? ("start" as const) : ("end" as const);
    return { ...item, x, y, lx, ly, anchor, i };
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

<div bind:this={container} class="graph-root relative w-full overflow-hidden py-10" class:active>
  <svg
    viewBox="-60 0 920 520"
    xmlns="http://www.w3.org/2000/svg"
    class="mx-auto h-auto w-full max-w-4xl"
    role="img"
    aria-label="Architecture et écosystème connectés du studio Facile"
  >
    <defs>
      <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="var(--fc-accent)" stop-opacity="0.35" />
        <stop offset="60%" stop-color="var(--fc-accent)" stop-opacity="0.08" />
        <stop offset="100%" stop-color="var(--fc-accent)" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="currentColor" stop-opacity="0.04" />
        <stop offset="100%" stop-color="currentColor" stop-opacity="0.12" />
      </linearGradient>
    </defs>

    <!-- Concentric orbital rings -->
    <circle cx={CX} cy={CY} r="65" fill="none" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" stroke-dasharray="4 6" />
    <circle cx={CX} cy={CY} r="120" fill="none" stroke="currentColor" stroke-opacity="0.06" stroke-width="1" stroke-dasharray="3 8" />
    <circle cx={CX} cy={CY} r="185" fill="none" stroke="currentColor" stroke-opacity="0.04" stroke-width="1" />

    <!-- Connecting spokes -->
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
        style="--delay:{n.i * 50}ms"
      />
    {/each}

    <!-- Moving data particles -->
    {#each nodes as n}
      <circle r="2.5" fill="var(--fc-accent)" class="particle">
        <animateMotion
          dur="{2.4 + (n.i % 3) * 0.4}s"
          repeatCount="indefinite"
          path="M{n.x},{n.y} L{CX},{CY}"
        />
      </circle>
      <circle r="1.8" fill="currentColor" fill-opacity="0.6" class="particle dim">
        <animateMotion
          dur="{3.2 + (n.i % 4) * 0.3}s"
          repeatCount="indefinite"
          path="M{CX},{CY} L{n.x},{n.y}"
        />
      </circle>
    {/each}

    <!-- Node circles and typography -->
    {#each nodes as n}
      <g class="node-group" style="--delay:{200 + n.i * 45}ms">
        <circle cx={n.x} cy={n.y} r="6" fill="var(--fc-component)" />
        <circle cx={n.x} cy={n.y} r="3" fill="var(--fc-accent)" />
        <text
          x={n.lx}
          y={n.ly}
          text-anchor={n.anchor}
          dominant-baseline="central"
          fill="currentColor"
          class="text-[12px] font-semibold text-fc-fg"
        >
          {n.name}
        </text>
      </g>
    {/each}

    <!-- Central studio core -->
    <circle cx={CX} cy={CY} r="60" fill="url(#hub-glow)" />
    <circle cx={CX} cy={CY} r="36" fill="var(--fc-component)" />
    <circle cx={CX} cy={CY} r="28" fill="var(--fc-surface)" />
    
    <!-- Central F. cursive logo mark -->
    <g transform="translate({CX - 11}, {CY - 12}) scale(0.95)">
      <path
        d="M2.30534 0.255093L2.49734 0.319092C2.08134 1.88709 2.97734 4.06309 4.48134 4.06309C7.61734 4.06309 10.1453 -0.000907898 14.6253 0.0310917C18.1453 0.0310917 18.9133 3.16709 18.9133 4.67109V6.94309H14.0493L14.0173 4.99109C14.0173 2.75109 12.8333 2.23909 11.4893 2.23909C7.00934 2.23909 5.31334 8.57509 2.91334 8.57509C1.56934 8.57509 1.21734 6.71909 1.21734 5.27909C1.21734 3.13509 1.76134 1.15109 2.30534 0.255093ZM5.69734 11.6791L8.73734 4.95909H12.9293C11.7133 7.29509 10.6893 9.56709 9.76134 11.6791H10.1133C13.8573 11.6791 16.8333 12.6071 16.8333 17.5031L12.0333 17.4391C12.0653 12.9591 11.9373 12.1911 10.1453 12.1911H9.50534C6.46534 19.0071 4.28934 24.0311 0.00134376 24.0311L0.0333438 18.7831V11.6791H5.69734ZM0.289344 14.7831V18.7831C1.95334 18.6871 3.42534 16.7671 4.35334 14.6551L5.44134 12.2231C1.31334 12.3831 0.289344 12.8951 0.289344 14.7831ZM19.9478 24.0951C18.5398 24.0951 17.5158 23.1031 17.5158 21.7271C17.5158 20.3831 18.5398 19.3591 19.9478 19.3591C21.3558 19.3591 22.3798 20.3831 22.3798 21.7271C22.3798 23.1031 21.3558 24.0951 19.9478 24.0951Z"
        fill="var(--fc-accent)"
      />
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
    stroke-dasharray: 190;
    stroke-dashoffset: 190;
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
    transform: scale(0.85);
    transform-origin: center;
    transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: var(--delay);
  }
  .active .node-group {
    opacity: 1;
    transform: scale(1);
  }
</style>
