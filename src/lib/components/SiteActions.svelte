<script lang="ts">
  import { Button, Icon, IconButton, icons } from "@facile/muse";
  import { theme, toggleTheme } from "$lib/theme.svelte";

  const ROUND = "size-(--fc-ctl) rounded-fc-inner border-0 bg-fc-surface/70 text-fc-fg hover:bg-fc-surface";
</script>

<IconButton
  variant="ghost"
  class={ROUND}
  aria-label={theme.value === "dark" ? "Passer au thème clair" : "Passer au thème sombre"}
  onclick={toggleTheme}
>
  <Icon icon={theme.value === "dark" ? icons.sun : icons.moon} size={16} />
</IconButton>
<Button
  variant="primary"
  size="md"
  href="/contact"
  class="h-(--fc-ctl) rounded-fc-inner px-4 font-semibold"
  icon={icons.arrow}
>
  Démarrer un projet
</Button>
