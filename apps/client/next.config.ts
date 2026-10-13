import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const MODELS = join(process.cwd(), 'public/models');

const ICONS = join(process.cwd(), 'public/icons');

// the newest icon's mtime in base 36: it changes whenever a logo is swapped, so browsers holding an old copy refetch it
const ICONS_VERSION = Math.floor(Math.max(...readdirSync(ICONS, { recursive: true }).map((f) => statSync(join(ICONS, String(f))).mtimeMs))).toString(36);

// assets get replaced under the same name, so a day fresh then background revalidation, never immutable
const ASSET_CACHE = 'public, max-age=86400, stale-while-revalidate=604800';

const nextConfig: NextConfig = {
    output: 'standalone',
    transpilePackages: ['@repo/trpc-client'],
    env: { NEXT_PUBLIC_ICONS_VERSION: ICONS_VERSION },
    async headers() {
        return [
            ...['models', 'images', 'videos', 'fonts'].map((dir) => ({
                source: `/${dir}/:path*`,
                headers: [{ key: 'Cache-Control', value: ASSET_CACHE }],
            })),
            // logos get swapped under the same name, so the browser revalidates them: a 304 costs nothing next to a stale logo
            { source: '/icons/:path*', headers: [{ key: 'Cache-Control', value: 'no-cache' }] },
            // three reads X-File-Size before Content-Length, which gzip drops, so the loader can count bytes
            ...readdirSync(MODELS).map((name) => ({
                source: `/models/${name}`,
                headers: [{ key: 'X-File-Size', value: String(statSync(join(MODELS, name)).size) }],
            })),
        ];
    },
    experimental: {
        optimizePackageImports: ['@radix-ui/react-dialog'],
    },
    devIndicators: false,
};

export default withNextIntl(nextConfig);
