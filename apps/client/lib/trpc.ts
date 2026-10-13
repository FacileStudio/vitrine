import { createUniversalTrpcClient } from "@repo/trpc-client";

const api = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export const trpc = createUniversalTrpcClient({
    baseUrl: api.endsWith("/trpc") ? api : `${api}/trpc`,
    onUnauthorized: () => {},
});
