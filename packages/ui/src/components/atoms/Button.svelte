<script lang="ts">
    import { cva, type VariantProps } from 'class-variance-authority';
    import type { Snippet } from 'svelte';

    const buttonClass = cva(
        "inline-flex items-center justify-center gap-2 font-medium transition-all active:translate-y-px disabled:opacity-50 disabled:pointer-events-none",
        {
            variants: {
                intent: {
                    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
                    secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-accent",
                    danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    ghost: "text-muted-foreground hover:bg-muted hover:text-foreground"
                },
                size: {
                    sm: "h-8 px-3 text-xs rounded-md",
                    md: "h-9 px-4 text-sm rounded-lg",
                    lg: "h-10 px-6 text-sm rounded-lg"
                }
            },
            defaultVariants: {
                intent: "primary",
                size: "md"
            }
        }
    );

    let {
        intent = 'primary',
        size = 'md',
        type = 'button',
        disabled = false,
        class: className = '',
        onclick,
        children,
        ...restProps
    }: {
        intent?: VariantProps<typeof buttonClass>['intent'];
        size?: VariantProps<typeof buttonClass>['size'];
        type?: "button" | "submit";
        disabled?: boolean;
        class?: string;
        onclick?: () => void;
        children?: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<button
    {type}
    {disabled}
    class={buttonClass({ intent, size, class: className })}
    {onclick}
    {...restProps}
>
    {@render children?.()}
</button>
