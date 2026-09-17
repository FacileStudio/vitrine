import { getConsoleFunction, setConsoleFunction } from "three";

// remove once @react-three/fiber v10 stops constructing THREE.Clock
const SILENCED = "THREE.Clock: This module has been deprecated";

if (typeof window !== "undefined" && !getConsoleFunction()) {
    setConsoleFunction((type: "log" | "warn" | "error", message: string, ...params: unknown[]) => {
        if (type === "warn" && typeof message === "string" && message.includes(SILENCED)) return;
        (console[type] as (...args: unknown[]) => void)(message, ...params);
    });
}
