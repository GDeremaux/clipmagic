import defaultProject from "@/remotion/compositions/story/default-project";
import { createContext } from "react";

export interface ProjectContextValue {
  project: any,
  setProject: Function
}

const ProjectContext = createContext<ProjectContextValue>({
  project: {},
  setProject: () => {}
});

export default ProjectContext;