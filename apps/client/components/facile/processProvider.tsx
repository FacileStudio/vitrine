"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { AuthoredStep } from "@/lib/content/process";

const ProcessContext = createContext<AuthoredStep[]>([]);

export function ProcessProvider({ steps, children }: { steps: AuthoredStep[]; children: ReactNode }) {
    return <ProcessContext.Provider value={steps}>{children}</ProcessContext.Provider>;
}

export const useProcess = () => useContext(ProcessContext);
