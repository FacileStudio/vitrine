import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
    output: 'standalone',
    experimental: {
        optimizePackageImports: ['@radix-ui/react-dialog'],
    },
    devIndicators: false,
};

export default withNextIntl(nextConfig);
