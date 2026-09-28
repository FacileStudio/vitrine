"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Project } from "@/lib/content/projects";

const ProjectsContext = createContext<Project[]>([]);

export function ProjectsProvider({ projects, children }: { projects: Project[]; children: ReactNode }) {
    return <ProjectsContext.Provider value={projects}>{children}</ProjectsContext.Provider>;
}

export const useProjects = () => useContext(ProjectsContext);
