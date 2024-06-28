"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectTemplateChoice from "@/components/projects/template-choice";
import { useState } from "react";
import { projectTemplates } from "@/data/template";
import { H3 } from "@/components/ui/typography";
import TemplateFormWrapper from "@/components/projects/template-form-wrapper";
import ProjectContext from "./project-context";
import defaultProject from "@/remotion/compositions/story/default-project";
import RenderStep from "./render-step";

interface NewProjectDialogProps {
  trigger: React.ReactNode
}

const NewProjectDialog = ({
  trigger
}: NewProjectDialogProps) => {
  const [projectTemplateId, setProjectTemplateId] = useState<string>("");

  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [project, setProject] = useState<any>(defaultProject);

  const TemplateFormComponent = projectTemplateId ? projectTemplates[projectTemplateId]?.formComponent : undefined;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-[1000px]">
        <ProjectContext.Provider value={{project, setProject}}>
          <DialogHeader>
            <DialogTitle><H3 className="mb-2">{dialogTitle}</H3></DialogTitle>
          </DialogHeader>
          {
            projectTemplateId === "" && 
              <ProjectTemplateChoice
                setDialogTitle={setDialogTitle}
                setProjectTemplateId={setProjectTemplateId}
              />
          }
          {
            projectTemplateId !== "" &&
            projectTemplateId !== "render" &&
            projectTemplates[projectTemplateId] &&
            TemplateFormComponent &&
              <TemplateFormWrapper
                setProjectTemplateId={setProjectTemplateId}
              >
                <TemplateFormComponent
                  setDialogTitle={setDialogTitle}
                />
              </TemplateFormWrapper>

          }
          {
            projectTemplateId === "render" &&
              <RenderStep
                setDialogTitle={setDialogTitle}
              />

          }
        </ProjectContext.Provider>
      </DialogContent>
    </Dialog>
  )
}

export default NewProjectDialog;