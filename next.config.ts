import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
    output: 'standalone',
    experimental: {
        optimizePackageImports: ['gsap', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
    },
    devIndicators: false,
    webpack: (config, { isServer }) => {
        // Remove the ~14KB polyfill bundle — site only targets modern browsers
        if (!isServer) {
            config.resolve.alias = {
                ...config.resolve.alias,
                'next/dist/client/components/app-call-server': false,
            };
            // Replace Next.js polyfills entry with an empty module
            const originalEntry = config.entry;
            config.entry = async () => {
                const entries = await originalEntry();
                if (entries['polyfills-next']) {
                    entries['polyfills-next'] = [];
                }
                if (entries['polyfills']) {
                    entries['polyfills'] = [];
                }
                return entries;
            };
        }
        return config;
    },
};

export default withNextIntl(nextConfig);
