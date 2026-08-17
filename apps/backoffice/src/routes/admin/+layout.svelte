<script lang="ts">
    import authStore from '$lib/auth-store';
    import { page } from '$app/stores';
    import { resolve } from '$app/paths';
    import 'iconify-icon';

    const menuItems = [
        { name: 'Dashboard', icon: 'solar:widget-bold', href: '/admin' },
    ] as const;

    function getInitials(user: any) {
        return (user?.firstName?.[0] || 'A').toUpperCase();
    }
</script>

<div class="flex h-screen w-full overflow-hidden">
    <aside class="sticky top-0 flex h-screen w-60 flex-col border-r border-border bg-background">
        <div class="flex items-center gap-3 px-5 pt-8 pb-6">
            <iconify-icon icon="solar:shield-user-bold" width="20" class="text-foreground"></iconify-icon>
            <span class="text-xl font-bold font-heading tracking-tight">Admin</span>
        </div>

        <nav class="flex flex-1 flex-col gap-1 px-3">
            {#each menuItems as item (item.href)}
                {@const active = $page.url.pathname === item.href}
                <a
                    href={resolve(item.href)}
                    class="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors {active
                        ? 'bg-foreground text-background font-medium'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'}"
                >
                    <iconify-icon icon={item.icon} width="18" class="shrink-0"></iconify-icon>
                    {item.name}
                </a>
            {/each}
        </nav>

        <div class="border-t border-border"></div>

        <div class="flex flex-col gap-2 p-4">
            <a
                href={resolve('/admin/profile')}
                class="flex items-center gap-3 rounded-xl border border-border/70 bg-muted/40 p-2.5 transition-colors hover:bg-muted"
            >
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-foreground text-sm font-semibold text-background">
                    {getInitials($authStore.user)}
                </div>
                <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-medium">{$authStore.user?.firstName || 'Admin'}</p>
                    <p class="truncate text-xs text-muted-foreground">{$authStore.user?.email}</p>
                </div>
            </a>
            <button
                onclick={() => authStore.logout()}
                class="flex w-full items-center justify-start gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
            >
                <iconify-icon icon="solar:logout-2-bold" width="18"></iconify-icon>
                Logout
            </button>
        </div>
    </aside>

    <main class="flex-1 overflow-y-auto">
        <slot />
    </main>
</div>
