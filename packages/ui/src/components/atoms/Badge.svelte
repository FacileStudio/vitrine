<script lang="ts">
    import { cva, type VariantProps } from 'class-variance-authority';
    import type { Snippet } from 'svelte';

    const badgeClass = cva(
        "inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tight border min-w-[70px]",
        {
            variants: {
                variant: {
                    indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
                    rose: "bg-rose-500/10 text-rose-300 border-rose-500/20",
                    amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
                    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
                    slate: "bg-white/[0.03] text-white/58 border-white/10"
                }
            },
            defaultVariants: {
                variant: "slate"
            }
        }
    );

    let {
        variant = 'slate',
        class: className = '',
        children,
    }: {
        variant?: VariantProps<typeof badgeClass>['variant'];
        class?: string;
        children?: Snippet;
    } = $props();
</script>

<span class={[badgeClass({ variant }), className].filter(Boolean).join(' ')}>
    {@render children?.()}
</span>
