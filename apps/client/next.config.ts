import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const MODELS = join(process.cwd(), 'public/models');

const nextConfig: NextConfig = {
    output: 'standalone',
    // three reads X-File-Size before Content-Length, which gzip drops, so the loader can count bytes
    async headers() {
        return readdirSync(MODELS).map((name) => ({
            source: `/models/${name}`,
            headers: [{ key: 'X-File-Size', value: String(statSync(join(MODELS, name)).size) }],
        }));
    },
    experimental: {
        optimizePackageImports: ['@radix-ui/react-dialog'],
    },
    devIndicators: false,
};

export default withNextIntl(nextConfig);
