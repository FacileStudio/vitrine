import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
    output: 'standalone',
    experimental: {
        optimizePackageImports: ['gsap', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
    },
    images: {
        qualities: [75, 85, 95],
    },
    devIndicators: false,
    async rewrites() {
        return [
            {
                source: '/v/event/:path*',
                destination: 'https://vision.facile.studio/api/event/:path*',
            },
        ];
    },
};

export default withNextIntl(nextConfig);
