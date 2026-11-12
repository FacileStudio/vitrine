<script lang="ts">
  import { onMount } from "svelte";
  import { Button } from "@facile/muse";
  import { DISCORD_ICON, GITHUB_ICON } from "$lib/icons";
  import { scrollReveal } from "$lib/motion";

  const placeOrigin = "https://place.facile.studio";
  const discordInvite = "https://discord.gg/ftkWURp9PT";
  const fetchTimeoutMs = 6000;
  const featuredTopicSlugs = [
    "tandem-programmable-wireless-split-keyboard-1d3c24",
    "discord-1567945649960521778"
  ];

  type Announcement = { id: number; title: string; body: string; created_at: string };
  type Topic = {
    slug: string;
    title: string;
    origin?: string;
    author_handle?: string;
    messages: number;
    last_activity: string;
    excerpt: string;
    cover?: { kind: string; thumb_url: string; url: string } | null;
  };

  let announcements = $state<Announcement[]>([]);
  let topics = $state<Topic[]>([]);

  async function get<T>(path: string): Promise<T | null> {
    try {
      const response = await fetch(`${placeOrigin}/api${path}`, {
        signal: AbortSignal.timeout(fetchTimeoutMs),
        credentials: "omit"
      });
      return response.ok ? ((await response.json()) as T) : null;
    } catch {
      return null;
    }
  }

  function ago(iso: string): string {
    const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
    if (days < 1) return "aujourd'hui";
    if (days === 1) return "hier";
    if (days < 30) return `il y a ${days} jours`;
    return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
  }

  onMount(async () => {
    const [news, ...topicResults] = await Promise.all([
      get<{ announcements: Announcement[] }>("/announcements"),
      ...featuredTopicSlugs.map((slug) => get<{ topic: Topic }>(`/topics/${slug}`))
    ]);
    announcements = (news?.announcements ?? []).slice(0, 2);
    topics = topicResults
      .map((result) => result?.topic)
      .filter((t): t is Topic => Boolean(t));
  });
</script>

<section
  id="communaute"
  use:scrollReveal={{ delay: 0.05 }}
  class="flex flex-col gap-8 py-16 w-full max-w-fc-xl mx-auto px-4 sm:px-6 md:px-10"
>
  <div class="flex flex-col gap-2">
    <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">Une communauté qui échange</h2>
    <p class="text-fc-md text-fc-fg-muted leading-relaxed max-w-2xl">
      Les discussions de Place, en direct. Posez vos questions, suivez les annonces, échangez avec l'équipe.
    </p>
  </div>

  {#each announcements as news (news.id)}
    <article class="flex flex-col gap-2 rounded-fc-2xl bg-fc-component p-5 sm:p-6">
      <span class="text-fc-xs font-mono text-fc-fg-muted">Annonce · {ago(news.created_at)}</span>
      <h3 class="text-fc-lg font-bold text-fc-fg">{news.title}</h3>
      <p class="text-fc-md text-fc-fg-muted leading-relaxed whitespace-pre-line line-clamp-4">{news.body}</p>
    </article>
  {/each}

  {#if topics.length > 0}
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each topics as topic (topic.slug)}
        <a
          href={`${placeOrigin}/t/${topic.slug}`}
          target="_blank"
          rel="noreferrer"
          class="flex gap-4 rounded-fc-2xl bg-fc-component p-5 transition-colors hover:bg-fc-surface"
        >
          <div class="flex min-w-0 flex-1 flex-col gap-2">
            <h3 class="text-fc-base font-semibold text-fc-fg">{topic.title}</h3>
            {#if topic.excerpt}
              <p class="line-clamp-2 text-fc-sm text-fc-fg-muted">{topic.excerpt}</p>
            {/if}
            <span class="text-fc-xs text-fc-fg-muted">
              {topic.messages - 1 > 0 ? `${topic.messages - 1} réponse${topic.messages - 1 > 1 ? "s" : ""}` : "Nouvelle discussion"} · {ago(topic.last_activity)}
            </span>
          </div>
          {#if topic.cover && topic.cover.kind === "image"}
            <img
              src={`${placeOrigin}${topic.cover.thumb_url || topic.cover.url}`}
              alt=""
              loading="lazy"
              decoding="async"
              class="size-20 shrink-0 self-center rounded-fc-lg bg-fc-surface object-cover"
            />
          {/if}
        </a>
      {/each}
    </div>
  {/if}

  <div class="flex flex-wrap items-center gap-3">
    <Button variant="primary" size="md" href={placeOrigin} target="_blank" rel="noreferrer" class="rounded-fc-pill font-semibold px-5">
      Rejoindre la communauté
    </Button>
    <Button
      variant="ghost"
      size="md"
      href={discordInvite}
      target="_blank"
      rel="noreferrer"
      class="rounded-fc-pill bg-fc-component hover:bg-fc-surface text-fc-fg"
      icon={DISCORD_ICON}
    >
      Rejoindre le Discord
    </Button>
    <Button
      variant="ghost"
      size="md"
      href="https://github.com/FacileStudio"
      target="_blank"
      rel="noreferrer"
      class="rounded-fc-pill bg-fc-component hover:bg-fc-surface text-fc-fg"
      icon={GITHUB_ICON}
    >
      GitHub
    </Button>
  </div>
</section>
