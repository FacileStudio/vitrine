import { createUniversalTrpcClient } from "@repo/trpc-client";

const PUBLIC_API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

// server renders run inside the client container, where the public API host may not resolve
const API = typeof window === "undefined" ? process.env.API_URL || PUBLIC_API : PUBLIC_API;

export const trpc = createUniversalTrpcClient({
    baseUrl: `${API}/trpc`,
    getToken: () => null,
    onUnauthorized: () => {},
});

export default trpc;
