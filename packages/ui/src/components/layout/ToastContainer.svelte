<script lang="ts">
    import { toast } from '@repo/utils';
    import { flip } from 'svelte/animate';
    import { fly } from 'svelte/transition';
    import 'iconify-icon';

    const icons = {
        success: 'solar:check-circle-bold',
        error: 'solar:danger-circle-bold',
        info: 'solar:info-circle-bold',
        warning: 'solar:bell-bold'
    };

    const colors = {
        success: 'bg-card border-border text-foreground',
        error: 'bg-card border-destructive/30 text-destructive',
        info: 'bg-card border-border text-foreground',
        warning: 'bg-card border-border text-foreground'
    };
</script>

<div class="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 w-full max-w-[320px]">
    {#each $toast as t (t.id)}
        <div
            animate:flip={{ duration: 300 }}
            in:fly={{ x: 50, duration: 400 }}
            out:fly={{ x: 50, duration: 300 }}
            class="flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg {colors[t.type]}"
        >
            <div class="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-muted">
                <iconify-icon icon={icons[t.type]} width="18"></iconify-icon>
            </div>

            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium leading-tight line-clamp-2">
                    {t.message}
                </p>
            </div>

            <button
                on:click={() => toast.remove(t.id)}
                class="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Close notification"
            >
                <iconify-icon icon="solar:close-circle-bold" width="16"></iconify-icon>
            </button>
        </div>
    {/each}
</div>
