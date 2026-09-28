import { createUniversalTrpcClient } from "@repo/trpc-client";

export const trpc = createUniversalTrpcClient({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/trpc`,
    getToken: () => null,
    onUnauthorized: () => {},
});

export default trpc;
