import { createUniversalTrpcClient } from '@repo/trpc-client';

if (!import.meta.env.VITE_API_URL) {
  console.warn('VITE_API_URL is not set. Using default http://localhost:3001/trpc');
}

export const trpc = createUniversalTrpcClient({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3001/trpc',
  getToken: () => (typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null),
  // a stale token from another project on this port must not leave the admin stuck on 401s
  onUnauthorized: () => {
    localStorage.removeItem('token');
    if (window.location.pathname !== '/')
      window.location.href = '/';
  },
});
