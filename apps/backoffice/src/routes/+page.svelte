<script lang="ts">
    import { goto } from '$app/navigation';
    import { resolve } from '$app/paths';
    import authStore from '$lib/auth-store';
    import { trpc } from '$lib/trpc'
    import { isAdmin, loginSchema, type SessionUser } from '@repo/auth-shared';
    import { Spinner } from '@repo/ui';
    import { logger } from '@repo/logger';
    import 'iconify-icon';

    let email = $state('');
    let password = $state('');
    let error = $state('');
    let isLoggingIn = $state(false);

    async function handleLogin() {
        isLoggingIn = true;
        error = '';

        const validation = loginSchema.safeParse({ email, password });
        if (!validation.success) {
            error = validation.error.issues[0].message;
            isLoggingIn = false;
            return;
        }

        try {
            const { token, user } = await (trpc.auth as any).login.mutate({ email, password });

            if (!isAdmin(user as SessionUser)) {
                error = "Accès refusé : espace réservé aux administrateurs.";
                isLoggingIn = false;
                return;
            }

            authStore.setAuth(
                { token },
                user as SessionUser
            );
            goto(resolve('/admin'));
        } catch (err: any) {
            logger.error({ err }, 'Login error');
            error = err.message || "Une erreur est survenue lors de la connexion";
            isLoggingIn = false;
        }
    }
</script>

<svelte:head>
    <title>Connexion — Backoffice</title>
</svelte:head>

{#if $authStore.loading}
    <div class="flex min-h-screen items-center justify-center bg-background">
        <Spinner size="xl" />
    </div>
{:else}
    <div class="flex min-h-screen">
        <div class="hidden lg:flex lg:w-1/2 flex-col bg-foreground px-12 py-10">
            <a href="/" class="flex items-center gap-3 mb-auto">
                <iconify-icon icon="solar:shield-keyhole-bold" width="24" class="text-background"></iconify-icon>
                <span class="text-xl font-bold font-heading tracking-tight text-background">Admin</span>
            </a>

            <div class="mb-auto">
                <h2 class="text-4xl font-bold font-heading text-background leading-tight tracking-tight">
                    Your<br />back office.
                </h2>
                <p class="mt-4 text-sm text-background/50 max-w-xs leading-relaxed">
                    Manage your contacts, members, and statistics with ease.
                </p>
            </div>

            <p class="text-xs text-background/30">
                &copy; {new Date().getFullYear()} Built with Facile.
            </p>
        </div>

        <div class="flex w-full lg:w-1/2 flex-col items-center justify-center px-8 py-12 bg-background">
            <div class="w-full max-w-sm">
                <div class="mb-8">
                    <div class="flex items-center gap-3 mb-6 lg:hidden">
                        <iconify-icon icon="solar:shield-keyhole-bold" width="24" class="text-foreground"></iconify-icon>
                        <span class="text-xl font-bold font-heading tracking-tight">Admin</span>
                    </div>
                    <h1 class="text-2xl font-bold font-heading tracking-tight text-foreground">
                        Welcome back
                    </h1>
                    <p class="mt-1.5 text-sm text-muted-foreground">
                        Log in to access the back office.
                    </p>
                </div>

                <form onsubmit={(e) => { e.preventDefault(); handleLogin(); }} class="space-y-4">
                    <div class="space-y-1.5">
                        <label for="email" class="text-sm font-medium text-foreground">Email</label>
                        <input
                            id="email"
                            type="email"
                            bind:value={email}
                            placeholder="you@example.com"
                            required
                            class="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 outline-none"
                        />
                    </div>

                    <div class="space-y-1.5">
                        <label for="password" class="text-sm font-medium text-foreground">Password</label>
                        <input
                            id="password"
                            type="password"
                            bind:value={password}
                            placeholder="••••••••"
                            required
                            class="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 outline-none"
                        />
                    </div>

                    {#if error}
                        <div class="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                            {error}
                        </div>
                    {/if}

                    <button
                        type="submit"
                        disabled={isLoggingIn}
                        class="h-9 w-full rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90 active:translate-y-px disabled:pointer-events-none disabled:opacity-50"
                    >
                        {isLoggingIn ? 'Verifying...' : 'Log in'}
                    </button>
                </form>
            </div>
        </div>
    </div>
{/if}
