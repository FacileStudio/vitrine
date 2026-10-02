import { createUniversalTrpcClient } from '@repo/trpc-client';

if (!import.meta.env.VITE_API_URL) {
  console.warn('VITE_API_URL is not set. Using default http://localhost:3001/trpc');
}

const baseUrl = import.meta.env.VITE_API_URL
    ? (import.meta.env.VITE_API_URL.endsWith('/trpc')
        ? import.meta.env.VITE_API_URL 
        : `${import.meta.env.VITE_API_URL}/trpc`)
    : 'http://localhost:3000/trpc';

export const trpc = createUniversalTrpcClient({
  baseUrl,
  // an expired or revoked session must not leave the admin stuck on 401s
  onUnauthorized: () => {
    if (window.location.pathname !== '/')
      window.location.href = '/';
  },
});
