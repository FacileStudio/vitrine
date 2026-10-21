"use client";

import { createContext, useContext, type Context, type ReactNode } from "react";
import type { Project } from "@/lib/content/projects";
import type { AuthoredStep } from "@/lib/content/method";
import type { AuthoredMember } from "@/lib/content/studio";

// the three backoffice-editable lists the shell loads once per request and every route reads
const ProjectsContext = createContext<Project[]>([]);
const MethodContext = createContext<AuthoredStep[]>([]);
const MembersContext = createContext<AuthoredMember[]>([]);

const listProvider = <T,>(context: Context<T[]>) =>
    function ListProvider({ value, children }: { value: T[]; children: ReactNode }) {
        return <context.Provider value={value}>{children}</context.Provider>;
    };

export const ProjectsProvider = listProvider(ProjectsContext);
export const MethodProvider = listProvider(MethodContext);
export const MembersProvider = listProvider(MembersContext);

export const useProjects = () => useContext(ProjectsContext);
export const useMethod = () => useContext(MethodContext);
export const useMembers = () => useContext(MembersContext);
