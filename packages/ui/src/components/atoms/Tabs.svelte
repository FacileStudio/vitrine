<script lang="ts">
    import { cn } from '@repo/utils';

    export let tabs: Array<{ label: string; value: string; icon?: string }> = [];
    export let activeTab = '';
    let className = "";
    export { className as class };

    $: if (!activeTab && tabs.length > 0) {
        activeTab = tabs[0].value;
    }
</script>

<div class={cn("flex items-center gap-1 bg-white/[0.05] p-1 rounded-2xl border border-white/10", className)}>
    {#each tabs as tab (tab.value)}
        <button
            on:click={() => activeTab = tab.value}
            class={cn(
                "px-5 py-2 rounded-xl text-xs font-black transition-all uppercase flex items-center gap-2",
                activeTab === tab.value
                    ? "bg-white/[0.03] text-white shadow-sm"
                    : "text-white/58 hover:text-white"
            )}
        >
            {#if tab.icon}
                <iconify-icon icon={tab.icon} width="16"></iconify-icon>
            {/if}
            {tab.label}
        </button>
    {/each}
</div>

<div class="mt-6">
    <slot {activeTab} />
</div>
