"use client";

import { createContext, useContext, type Context, type ReactNode } from "react";
import type { Project } from "@/lib/content/projects";
import type { AuthoredStep } from "@/lib/content/process";
import type { AuthoredMember } from "@/lib/content/studio";

// the three backoffice-editable lists the shell loads once per request and every route reads
const ProjectsContext = createContext<Project[]>([]);
const ProcessContext = createContext<AuthoredStep[]>([]);
const MembersContext = createContext<AuthoredMember[]>([]);

const listProvider = <T,>(context: Context<T[]>) =>
    function ListProvider({ value, children }: { value: T[]; children: ReactNode }) {
        return <context.Provider value={value}>{children}</context.Provider>;
    };

export const ProjectsProvider = listProvider(ProjectsContext);
export const ProcessProvider = listProvider(ProcessContext);
export const MembersProvider = listProvider(MembersContext);

export const useProjects = () => useContext(ProjectsContext);
export const useProcess = () => useContext(ProcessContext);
export const useMembers = () => useContext(MembersContext);
