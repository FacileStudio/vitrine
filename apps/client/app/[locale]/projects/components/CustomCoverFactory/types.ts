import { Project, ShelfCardRefs } from "../../lib/types";

export interface CustomCoverProps {
    coverClass: string;
    project: Project;
    refs: ShelfCardRefs;
    index: number;
}
