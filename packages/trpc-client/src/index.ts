import { createTRPCProxyClient, httpBatchLink, type TRPCClient } from '@trpc/client';
import type { AppRouter } from '@repo/trpc';

interface TrpcConfig {
  baseUrl: string;
  onUnauthorized: () => void;
}

export const createUniversalTrpcClient = (config: TrpcConfig): TRPCClient<AppRouter> => {
  const cleanBaseUrl = config.baseUrl.replace(/\/$/, '');

  return createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: cleanBaseUrl,
        headers() {
          return {
            'x-trpc-source': 'universal-client',
          };
        },
        fetch: async (url, options) => {
          // The auth token lives in an httpOnly cookie set by the API, never
          // read or sent by client code directly — just ride along with the request.
          const res = await fetch(url, { ...options, credentials: 'include' });

          // No pathname check here: each app's login route differs (e.g. the
          // backoffice's is "/", not "/login"), and onUnauthorized ->
          // authStore.logout() is idempotent, so calling it repeatedly is safe.
          if (res.status === 401 && typeof window !== 'undefined') {
            config.onUnauthorized();
          }

          return res;
        },
      }),
    ],
  });
};
