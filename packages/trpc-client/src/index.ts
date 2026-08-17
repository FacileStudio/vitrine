import { createTRPCProxyClient, httpBatchLink, type TRPCClient } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

interface TrpcConfig {
  baseUrl: string;
  getToken: () => string | null | Promise<string | null>;
  onUnauthorized: () => void;
}

export const createUniversalTrpcClient = <TRouter extends AnyRouter = AnyRouter>(
  config: TrpcConfig
): TRPCClient<TRouter> => {
  const cleanBaseUrl = config.baseUrl.replace(/\/$/, '');

  return createTRPCProxyClient<TRouter>({
    links: [
      httpBatchLink({
        url: cleanBaseUrl,
        async headers() {
          const token = await config.getToken();
          return {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            'x-trpc-source': 'universal-client',
          };
        },
        fetch: async (url: RequestInfo | URL, options?: RequestInit) => {
          const res = await fetch(url, options);

          if (
            res.status === 401 &&
            typeof window !== 'undefined' &&
            !window.location.pathname.includes('/login')
          ) {
            config.onUnauthorized();
          }

          return res;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any),
    ],
  });
};
