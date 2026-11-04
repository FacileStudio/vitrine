<script lang="ts">
  import { TECH_ICONS } from "$lib/tech-icons";

  let { tech, class: className = "" }: { tech: string; class?: string } = $props();

  const icon = $derived(TECH_ICONS[tech]);
</script>

<span
  class="inline-flex items-center gap-1.5 rounded-fc-pill px-2.5 py-0.5 text-[11px] font-medium leading-none {className}"
>
  {#if icon}
    <svg
      viewBox={icon.viewBox}
      class="size-3 shrink-0 fill-current opacity-90"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  {/if}
  <span>{tech}</span>
</span>
