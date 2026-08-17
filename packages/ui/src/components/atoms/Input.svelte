<script lang="ts">
    export let value: string | number = "";
    export let placeholder = "";
    export let type: "text" | "email" | "password" | "number" | "tel" | "url" = "text";
    export let error = false;
    export let id = "";
    export let name = "";

    let className = "";
    export { className as class };
</script>

<input
    {id}
    {name}
    {type}
    {placeholder}
    bind:value
    class="h-9 w-full rounded-lg border bg-transparent px-3 text-sm transition-colors placeholder:text-muted-foreground outline-none
    {error ? 'border-destructive focus-visible:border-destructive focus-visible:ring-destructive/50' : 'border-input focus-visible:border-ring focus-visible:ring-ring/50'}
    focus-visible:ring-3
    {className}"
    {...$$restProps}
    on:input
    on:blur
    on:keydown
/>
