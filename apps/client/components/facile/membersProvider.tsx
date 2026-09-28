"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { AuthoredMember } from "@/lib/content/studio";

const MembersContext = createContext<AuthoredMember[]>([]);

export function MembersProvider({ members, children }: { members: AuthoredMember[]; children: ReactNode }) {
    return <MembersContext.Provider value={members}>{children}</MembersContext.Provider>;
}

export const useMembers = () => useContext(MembersContext);
