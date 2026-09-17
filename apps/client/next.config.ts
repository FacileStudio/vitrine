import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const MODELS = join(process.cwd(), 'public/models');

// assets get replaced under the same name, so a day fresh then background revalidation, never immutable
const ASSET_CACHE = 'public, max-age=86400, stale-while-revalidate=604800';

const nextConfig: NextConfig = {
    output: 'standalone',
    async headers() {
        return [
            ...['models', 'images', 'videos', 'fonts', 'icons'].map((dir) => ({
                source: `/${dir}/:path*`,
                headers: [{ key: 'Cache-Control', value: ASSET_CACHE }],
            })),
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
