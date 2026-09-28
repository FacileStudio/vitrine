<script lang="ts">
    import { cn } from '@repo/utils';

    let {
        value = $bindable(''),
        placeholder = 'Search...',
        class: className = '',
        oninput
    }: {
        value?: string;
        placeholder?: string;
        class?: string;
        oninput?: () => void;
    } = $props();
</script>

<div class={cn("relative", className)}>
    <input
        type="text"
        bind:value
        {placeholder}
        {oninput}
        class="w-full px-6 py-3 bg-white/[0.03] border-2 border-white/10 rounded-[24px] focus:border-indigo-500 outline-none transition-all font-medium text-sm"
    />
</div>
