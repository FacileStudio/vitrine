<script lang="ts">
  import { Blob, gaze } from "@facile/blob";

  let { name = "Bulle", size = "md" }: { name?: string; size?: "sm" | "md" | "lg" } = $props();

  const eyes = gaze({ travel: 6, target: "pointer" });

  const sizeClass = $derived(
    size === "sm" ? "size-16" : size === "lg" ? "size-40 sm:size-52" : "size-28 sm:size-36"
  );
</script>

<div class="relative flex items-center justify-center overflow-hidden rounded-full bg-fc-surface/40 p-2 backdrop-blur transition-all duration-300 hover:scale-105" aria-hidden="true">
  <Blob {name} animate="always" class="block {sizeClass}" {@attach eyes} />
</div>
