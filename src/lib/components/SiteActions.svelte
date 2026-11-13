<script lang="ts">
  import { Button, Icon, IconButton, SignInWithFacile, icons } from "@facile/muse";
  import { ACCOUNT_URL } from "$lib/data";
  import { useI18n } from "$lib/i18n";
  import { theme, toggleTheme } from "$lib/theme.svelte";

  let { suite = false }: { suite?: boolean } = $props();

  const i18n = useI18n();
  const t = $derived(i18n.t);

  const ROUND = "size-(--fc-ctl) rounded-fc-inner border-0 bg-fc-surface/70 text-fc-fg hover:bg-fc-surface";
</script>

<IconButton
  variant="ghost"
  class={ROUND}
  aria-label={theme.value === "dark" ? t.actions.themeLight : t.actions.themeDark}
  onclick={toggleTheme}
>
  <Icon icon={theme.value === "dark" ? icons.sun : icons.moon} size={16} />
</IconButton>
{#if suite}
  <SignInWithFacile href={ACCOUNT_URL} size="sm" class="h-(--fc-ctl)" />
{:else}
  <Button
    variant="primary"
    size="md"
    href={i18n.href("/contact")}
    class="h-(--fc-ctl) rounded-fc-inner px-4 font-semibold"
    icon={icons.arrow}
  >
    {t.common.startProject}
  </Button>
{/if}
