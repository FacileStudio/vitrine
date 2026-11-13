<script lang="ts">
  import { browser } from "$app/environment";
  import { fly, fade } from "svelte/transition";
  import { Button, Icon, icons } from "@facile/muse";
  import { format, useI18n } from "$lib/i18n";

  const i18n = useI18n();
  const t = $derived(i18n.t);

  const PROJECT_TYPES = [
    { id: "showcase", icon: "solar:panorama-bold-duotone" },
    { id: "app", icon: "solar:code-square-bold-duotone" },
    { id: "branding", icon: "solar:pallete-2-bold-duotone" },
    { id: "infra", icon: "solar:cloud-bold-duotone" },
    { id: "rnd", icon: "solar:cpu-bolt-bold-duotone" },
  ] as const;

  const BUDGETS = ["xs", "s", "m", "l"] as const;
  const TIMELINES = ["asap", "soon", "later", "flexible"] as const;
  const QUICK_TAGS = ["redesign", "newSite", "performance", "design", "hosting"] as const;

  type ProjectType = (typeof PROJECT_TYPES)[number]["id"];
  type Budget = (typeof BUDGETS)[number];
  type Timeline = (typeof TIMELINES)[number];
  type QuickTag = (typeof QUICK_TAGS)[number];

  let step = $state(1);
  let direction = $state<"next" | "prev">("next");

  let projectType = $state<ProjectType>("showcase");
  let budget = $state<Budget>("s");
  let timeline = $state<Timeline>("soon");
  let message = $state("");
  let tags = $state<QuickTag[]>([]);
  let name = $state("");
  let email = $state("");
  let phone = $state("");
  let submitted = $state(false);

  const projectTypeLabel = $derived(t.contact.types[projectType].title);
  const budgetLabel = $derived(t.contact.budgets[budget].label);
  const timelineLabel = $derived(t.contact.timelines[timeline]);
  const tagLabels = $derived(tags.map((tag) => t.contact.tags[tag]).join(", "));

  function toggleQuickTag(tag: QuickTag) {
    tags = tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag];
  }

  const STEPS = $derived(t.contact.steps);

  function nextStep() {
    if (step < STEPS.length) {
      direction = "next";
      step += 1;
    }
  }

  function prevStep() {
    if (step > 1) {
      direction = "prev";
      step -= 1;
    }
  }

  function goToStep(s: number) {
    direction = s > step ? "next" : "prev";
    step = s;
  }

  const isStepValid = $derived.by(() => {
    if (step === 1) return Boolean(projectType);
    if (step === 2) return Boolean(budget && timeline);
    if (step === 3) return true;
    if (step === 4) return Boolean(name.trim() && email.trim() && email.includes("@"));
    return true;
  });

  function handleSubmit(e?: SubmitEvent) {
    e?.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const mail = t.contact.mail;
    const subject = encodeURIComponent(format(mail.subject, { type: projectTypeLabel, name }));
    const body = encodeURIComponent(
      `${mail.greeting}\n\n` +
      `${mail.name} ${name}\n` +
      `${mail.email} ${email}\n` +
      `${mail.phone} ${phone || mail.notProvided}\n\n` +
      `${mail.type} ${projectTypeLabel}\n` +
      `${mail.budget} ${budgetLabel}\n` +
      `${mail.timeline} ${timelineLabel}\n` +
      `${mail.keyPoints} ${tagLabels || mail.none}\n\n` +
      `${mail.description}\n${message || mail.toBeDefined}\n\n` +
      `---\n${mail.sentFrom}`
    );

    submitted = true;
    if (browser) {
      window.location.href = `mailto:contact@facile.studio?subject=${subject}&body=${body}`;
    }
  }

  function resetForm() {
    submitted = false;
    step = 1;
  }
</script>

<svelte:head>
  <title>{t.contact.meta.title}</title>
  <meta name="description" content={t.contact.meta.description} />
</svelte:head>

<div class="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 pt-8 pb-6 sm:pt-12 sm:pb-10 flex flex-col min-h-dvh justify-between gap-8">
  <header>
    <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
      <a
        href={i18n.href("/")}
        class="inline-flex items-center gap-2 justify-self-start whitespace-nowrap rounded-fc-pill bg-fc-surface hover:bg-fc-surface-hover px-4 py-2 text-xs font-semibold text-fc-fg transition-colors shrink-0 shadow-xs"
      >
        <Icon icon={icons.chevronLeft} size={14} />
        <span>{t.common.backHome}</span>
      </a>

      {#if !submitted}
        <div class="flex items-center gap-1.5" role="img" aria-label={format(t.contact.progress, { step, total: STEPS.length })}>
          {#each STEPS as _, i (i)}
            <span
              class="h-2 rounded-fc-full transition-all duration-300 {i + 1 === step
                ? 'w-6 bg-fc-fg'
                : i + 1 < step
                  ? 'w-2 bg-fc-fg-muted'
                  : 'w-2 bg-fc-surface'}"
            ></span>
          {/each}
        </div>
      {:else}
        <span></span>
      {/if}

      <a
        href="tel:+33768888818"
        class="hidden sm:inline-flex justify-self-end items-center gap-1.5 text-fc-xs text-fc-fg-muted hover:text-fc-fg font-medium transition-colors"
      >
        {t.common.phone}
      </a>
    </div>
  </header>

  <div class="flex-1 flex flex-col justify-center py-8 sm:py-10">
    {#if submitted}
      <div
        in:fade={{ duration: 300 }}
        class="flex flex-col items-center justify-center text-center gap-6 max-w-xl mx-auto py-8"
      >
        <div class="flex size-16 items-center justify-center rounded-fc-full bg-fc-surface text-fc-accent shadow-md">
          <Icon icon={icons.check} size={32} />
        </div>

        <div class="flex flex-col gap-3">
          <h1 class="text-3xl sm:text-4xl font-black tracking-tight text-fc-fg">
            {t.contact.done.title}
          </h1>
          <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted leading-relaxed">
            {t.contact.done.text}
          </p>
        </div>

        <div class="w-full rounded-fc-2xl bg-fc-component p-6 text-left flex flex-col gap-3 text-fc-xs shadow-sm">
          <span class="font-semibold uppercase tracking-wider text-fc-accent">{t.contact.done.summary}</span>
          <div class="grid grid-cols-2 gap-3 text-fc-fg">
            <div>
              <span class="text-fc-fg-muted block">{t.contact.done.type}</span>
              <strong class="font-medium">{projectTypeLabel}</strong>
            </div>
            <div>
              <span class="text-fc-fg-muted block">{t.contact.done.budget}</span>
              <strong class="font-medium">{budgetLabel}</strong>
            </div>
            <div>
              <span class="text-fc-fg-muted block">{t.contact.done.timeline}</span>
              <strong class="font-medium">{timelineLabel}</strong>
            </div>
            <div>
              <span class="text-fc-fg-muted block">{t.contact.done.contact}</span>
              <strong class="font-medium">{name} ({email})</strong>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            variant="primary"
            size="lg"
            href={i18n.href("/")}
            class="rounded-fc-pill font-semibold px-8 shadow-sm"
            icon={icons.home}
          >
            {t.common.backHome}
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onclick={resetForm}
            class="rounded-fc-pill bg-fc-surface text-fc-fg hover:bg-fc-surface-hover px-6"
            icon={icons.refresh}
          >
            {t.contact.done.edit}
          </Button>
        </div>
      </div>
    {:else}
      {#if step === 1}
        <div
          in:fly={{ x: direction === "next" ? 24 : -24, duration: 250 }}
          class="flex flex-col gap-8"
        >
          <div class="flex flex-col gap-2">
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
              {t.contact.typeStep.title}
            </h1>
            <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted">
              {t.contact.typeStep.intro}
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each PROJECT_TYPES as item}
              <button
                type="button"
                onclick={() => (projectType = item.id)}
                aria-pressed={projectType === item.id}
                class="flex flex-col justify-between gap-4 rounded-fc-2xl p-5 sm:p-6 text-left transition-all cursor-pointer
                  {projectType === item.id
                    ? 'bg-fc-accent/15 shadow-md'
                    : 'bg-fc-component hover:bg-fc-surface'}"
              >
                <div class="flex flex-col gap-3">
                  <div class="flex items-center justify-between">
                    <span class="flex size-10 items-center justify-center rounded-fc-lg bg-fc-surface text-fc-accent">
                      <Icon icon={item.icon} size={22} />
                    </span>
                    {#if projectType === item.id}
                      <span class="flex size-5 items-center justify-center rounded-fc-full bg-fc-accent text-fc-accent-fg">
                        <Icon icon={icons.check} size={12} />
                      </span>
                    {/if}
                  </div>
                  <div>
                    <h3 class="text-fc-base font-bold text-fc-fg">{t.contact.types[item.id].title}</h3>
                    <p class="text-[11px] font-mono text-fc-fg-muted">{t.contact.types[item.id].category}</p>
                  </div>
                  <p class="text-fc-xs text-fc-fg-muted leading-relaxed">
                    {t.contact.types[item.id].description}
                  </p>
                </div>
              </button>
            {/each}
          </div>
        </div>
      {:else if step === 2}
        <div
          in:fly={{ x: direction === "next" ? 24 : -24, duration: 250 }}
          class="flex flex-col gap-8"
        >
          <div class="flex flex-col gap-2">
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
              {t.contact.budgetStep.title}
            </h1>
            <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted">
              {t.contact.budgetStep.intro}
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-fg-muted">{t.contact.budgetStep.budgetLabel}</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {#each BUDGETS as b}
                <button
                  type="button"
                  onclick={() => (budget = b)}
                  aria-pressed={budget === b}
                  class="flex flex-col justify-between gap-3 rounded-fc-2xl p-5 text-left transition-all cursor-pointer
                    {budget === b
                      ? 'bg-fc-accent/15 shadow-md'
                      : 'bg-fc-component hover:bg-fc-surface'}"
                >
                  <div class="flex items-center justify-between">
                    <span class="text-fc-lg font-bold text-fc-fg">{t.contact.budgets[b].label}</span>
                    {#if budget === b}
                      <span class="flex size-5 items-center justify-center rounded-fc-full bg-fc-accent text-fc-accent-fg">
                        <Icon icon={icons.check} size={12} />
                      </span>
                    {/if}
                  </div>
                  <p class="text-fc-xs text-fc-fg-muted leading-relaxed">
                    {t.contact.budgets[b].note}
                  </p>
                </button>
              {/each}
            </div>
          </div>

          <div class="flex flex-col gap-4 pt-2">
            <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-fg-muted">{t.contact.budgetStep.timelineLabel}</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {#each TIMELINES as option}
                <button
                  type="button"
                  onclick={() => (timeline = option)}
                  aria-pressed={timeline === option}
                  class="rounded-fc-pill px-4 py-3 text-center text-fc-xs font-medium transition-all cursor-pointer
                    {timeline === option
                      ? 'bg-fc-accent text-fc-accent-fg shadow-xs'
                      : 'bg-fc-component text-fc-fg-muted hover:text-fc-fg hover:bg-fc-surface'}"
                >
                  {t.contact.timelines[option]}
                </button>
              {/each}
            </div>
          </div>
        </div>
      {:else if step === 3}
        <div
          in:fly={{ x: direction === "next" ? 24 : -24, duration: 250 }}
          class="flex flex-col gap-8 max-w-3xl"
        >
          <div class="flex flex-col gap-2">
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
              {t.contact.visionStep.title}
            </h1>
            <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted">
              {t.contact.visionStep.intro}
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-[11px] font-semibold uppercase tracking-wider text-fc-fg-muted mr-1">{t.contact.visionStep.shortcuts}</span>
              {#each QUICK_TAGS as tag}
                <button
                  type="button"
                  onclick={() => toggleQuickTag(tag)}
                  aria-pressed={tags.includes(tag)}
                  class="rounded-fc-pill px-3 py-1 text-[11px] font-medium transition-colors cursor-pointer
                    {tags.includes(tag)
                      ? 'bg-fc-accent text-fc-accent-fg'
                      : 'bg-fc-component text-fc-fg-muted hover:bg-fc-surface hover:text-fc-fg'}"
                >
                  + {t.contact.tags[tag]}
                </button>
              {/each}
            </div>

            <div class="flex flex-col gap-2">
              <label for="contact-vision" class="text-fc-xs font-medium text-fc-fg-muted">
                {t.contact.visionStep.detailsLabel}
              </label>
              <textarea
                id="contact-vision"
                bind:value={message}
                rows="6"
                placeholder={t.contact.visionStep.placeholder}
                class="w-full rounded-fc-2xl bg-fc-component p-5 text-fc-sm text-fc-fg outline-none transition-colors focus:bg-fc-surface resize-none shadow-sm placeholder:text-fc-fg-muted/60"
              ></textarea>
            </div>
          </div>
        </div>
      {:else if step === 4}
        <form
          onsubmit={handleSubmit}
          in:fly={{ x: direction === "next" ? 24 : -24, duration: 250 }}
          class="flex flex-col gap-8"
        >
          <div class="flex flex-col gap-2">
            <h1 class="text-2xl sm:text-4xl font-black tracking-tight text-fc-fg">
              {t.contact.contactStep.title}
            </h1>
            <p class="text-fc-sm sm:text-fc-base text-fc-fg-muted">
              {t.contact.contactStep.intro}
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-7 flex flex-col gap-4">
              <div class="flex flex-col gap-1.5">
                <label for="contact-name" class="text-fc-xs font-medium text-fc-fg-muted">{t.contact.contactStep.name}</label>
                <input
                  id="contact-name"
                  type="text"
                  bind:value={name}
                  required
                  placeholder={t.contact.contactStep.namePlaceholder}
                  class="h-12 rounded-fc-xl bg-fc-component px-4 text-fc-sm text-fc-fg outline-none transition-colors focus:bg-fc-surface shadow-xs"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="contact-email" class="text-fc-xs font-medium text-fc-fg-muted">{t.contact.contactStep.email}</label>
                <input
                  id="contact-email"
                  type="email"
                  bind:value={email}
                  required
                  placeholder={t.contact.contactStep.emailPlaceholder}
                  class="h-12 rounded-fc-xl bg-fc-component px-4 text-fc-sm text-fc-fg outline-none transition-colors focus:bg-fc-surface shadow-xs"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <label for="contact-phone" class="text-fc-xs font-medium text-fc-fg-muted">{t.contact.contactStep.phone}</label>
                <input
                  id="contact-phone"
                  type="tel"
                  bind:value={phone}
                  placeholder={t.contact.contactStep.phonePlaceholder}
                  class="h-12 rounded-fc-xl bg-fc-component px-4 text-fc-sm text-fc-fg outline-none transition-colors focus:bg-fc-surface shadow-xs"
                />
              </div>
            </div>

            <div class="lg:col-span-5 rounded-fc-2xl bg-fc-component p-6 flex flex-col gap-4 shadow-sm">
              <span class="text-fc-xs font-semibold uppercase tracking-wider text-fc-accent">{t.contact.contactStep.summary}</span>

              <div class="flex flex-col gap-3 text-fc-xs">
                <div>
                  <span class="text-fc-fg-muted block">{t.contact.contactStep.nature}</span>
                  <span class="font-semibold text-fc-fg">{projectTypeLabel}</span>
                </div>
                <div>
                  <span class="text-fc-fg-muted block">{t.contact.contactStep.budget}</span>
                  <span class="font-semibold text-fc-fg">{budgetLabel}</span>
                </div>
                <div>
                  <span class="text-fc-fg-muted block">{t.contact.contactStep.timeline}</span>
                  <span class="font-semibold text-fc-fg">{timelineLabel}</span>
                </div>
                {#if tags.length > 0}
                  <div>
                    <span class="text-fc-fg-muted block">{t.contact.contactStep.keyPoints}</span>
                    <span class="font-semibold text-fc-fg">{tagLabels}</span>
                  </div>
                {/if}
                {#if message}
                  <div>
                    <span class="text-fc-fg-muted block">{t.contact.contactStep.notes}</span>
                    <span class="text-fc-fg-muted line-clamp-3 italic">{format(t.contact.contactStep.quote, { message })}</span>
                  </div>
                {/if}
              </div>

              <div class="pt-2 flex flex-col gap-2 text-[11px] text-fc-fg-muted">
                <span class="flex items-center gap-2">
                  <span class="size-1.5 rounded-fc-full bg-fc-accent"></span>
                  <span>{t.contact.contactStep.reply}</span>
                </span>
                <span class="flex items-center gap-2">
                  <span class="size-1.5 rounded-fc-full bg-fc-accent"></span>
                  <span>{t.contact.contactStep.transparent}</span>
                </span>
              </div>
            </div>
          </div>
        </form>
      {/if}
    {/if}
  </div>

  {#if !submitted}
    <footer class="grid grid-cols-2 sm:grid-cols-[minmax(9rem,auto)_1fr_minmax(9rem,auto)] items-center gap-x-8 gap-y-6 pt-6">
        <div class="relative col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-1">
          <div class="absolute left-[12.5%] right-[12.5%] top-2 h-1 -translate-y-1/2 rounded-fc-full bg-fc-surface overflow-hidden">
            <div
              class="h-full rounded-fc-full bg-fc-accent transition-all duration-500 ease-out"
              style="width: {((step - 1) / (STEPS.length - 1)) * 100}%"
            ></div>
          </div>
          <ol class="relative grid grid-cols-4">
            {#each STEPS as label, i (label)}
              {@const n = i + 1}
              <li class="flex justify-center">
                <button
                  type="button"
                  onclick={() => goToStep(n)}
                  aria-current={step === n ? "step" : undefined}
                  class="flex flex-col items-center gap-3 text-fc-xs font-medium transition-colors
                    {step === n ? 'text-fc-fg' : 'text-fc-fg-muted hover:text-fc-fg'}"
                >
                  <span class="flex h-4 items-center justify-center">
                    <span
                      class="rounded-fc-full transition-all duration-300 {step === n
                        ? 'size-4 bg-fc-accent'
                        : n < step
                          ? 'size-3 bg-fc-accent'
                          : 'size-3 bg-fc-surface'}"
                    ></span>
                  </span>
                  <span>{n} {label}</span>
                </button>
              </li>
            {/each}
          </ol>
        </div>

      <div class="justify-self-start sm:col-start-1 sm:row-start-1">
        {#if step > 1}
          <Button
            variant="ghost"
            size="md"
            onclick={prevStep}
            class="rounded-fc-pill px-6 bg-fc-component hover:bg-fc-surface text-fc-fg"
            icon={icons.chevronLeft}
          >
            {t.contact.prev}
          </Button>
        {/if}
      </div>

      <div class="justify-self-end sm:col-start-3 sm:row-start-1">
        {#if step < 4}
          <Button
            variant="primary"
            size="lg"
            onclick={nextStep}
            disabled={!isStepValid}
            class="rounded-fc-pill font-semibold px-8 shadow-sm"
            icon={icons.arrow}
          >
            {t.contact.next}
          </Button>
        {:else}
          <Button
            type="button"
            variant="primary"
            size="lg"
            onclick={() => handleSubmit()}
            disabled={!isStepValid}
            class="rounded-fc-pill font-semibold px-8 shadow-md"
            icon={icons.arrow}
          >
            {t.contact.submit}
          </Button>
        {/if}
      </div>
    </footer>
  {/if}
</div>
