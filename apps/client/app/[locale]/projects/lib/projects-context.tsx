"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Project } from "./projects";

const ProjectsContext = createContext<Project[] | null>(null);

// fetched once server-side (layout.tsx) and handed down through context so
// every client component under it (Menu, Footer, Shelf) reads the same list
// synchronously instead of each fetching or receiving it as a drilled prop
export function ProjectsProvider({ projects, children }: { projects: Project[]; children: ReactNode }) {
    return <ProjectsContext.Provider value={projects}>{children}</ProjectsContext.Provider>;
}

export function useProjects(): Project[] {
    const projects = useContext(ProjectsContext);
    if (!projects) {
        throw new Error("useProjects must be used within a ProjectsProvider");
    }
    return projects;
}
