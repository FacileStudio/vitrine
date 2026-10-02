import { createUniversalTrpcClient } from "@repo/trpc-client";


const baseUrl = process.env.NEXT_PUBLIC_API_URL
    ? (process.env.NEXT_PUBLIC_API_URL.endsWith('/trpc')
        ? process.env.NEXT_PUBLIC_API_URL 
        : `${process.env.NEXT_PUBLIC_API_URL}/trpc`)
    : 'http://localhost:3000/trpc';

export const trpc = createUniversalTrpcClient({
    baseUrl,
    onUnauthorized: () => {},
});

export default trpc;
