import { getConsoleFunction, setConsoleFunction } from "three";

// @react-three/fiber v9 still constructs THREE.Clock internally (deprecated in three r183),
// emitting one warning per Canvas. three funnels its own warnings through setConsoleFunction,
// so we intercept that single message and forward everything else untouched. This does NOT
// patch the global console. Remove once @react-three/fiber v10 (stable) drops THREE.Clock.
const SILENCED = "THREE.Clock: This module has been deprecated";

if (typeof window !== "undefined" && !getConsoleFunction()) {
    setConsoleFunction((type: "log" | "warn" | "error", message: string, ...params: unknown[]) => {
        if (type === "warn" && typeof message === "string" && message.includes(SILENCED)) return;
        (console[type] as (...args: unknown[]) => void)(message, ...params);
    });
}
