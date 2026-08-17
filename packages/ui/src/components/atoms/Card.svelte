<script lang="ts">
    import { cva, type VariantProps } from 'class-variance-authority';

    const cardClass = cva(
        "bg-card text-card-foreground border border-border transition-all",
        {
            variants: {
                padding: {
                    none: "p-0",
                    sm: "p-4",
                    md: "p-6",
                    lg: "p-8",
                },
                rounded: {
                    sm: "rounded-md",
                    md: "rounded-lg",
                    lg: "rounded-xl",
                    xl: "rounded-2xl",
                },
                shadow: {
                    none: "shadow-none",
                    sm: "shadow-sm",
                    md: "shadow-md",
                    lg: "shadow-lg",
                },
                hover: {
                    none: "",
                    lift: "hover:shadow-lg hover:-translate-y-0.5",
                    scale: "hover:scale-[1.01]",
                },
            },
            defaultVariants: {
                padding: "md",
                rounded: "lg",
                shadow: "none",
                hover: "none",
            }
        }
    );

    export let padding: VariantProps<typeof cardClass>['padding'] = 'md';
    export let rounded: VariantProps<typeof cardClass>['rounded'] = 'lg';
    export let shadow: VariantProps<typeof cardClass>['shadow'] = 'none';
    export let hover: VariantProps<typeof cardClass>['hover'] = 'none';
    let className = "";
    export { className as class };
</script>

<div class={cardClass({ padding, rounded, shadow, hover, class: className })}>
    <slot />
</div>
