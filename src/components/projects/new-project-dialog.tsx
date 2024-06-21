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

interface NewProjectDialogProps {
  trigger: React.ReactNode
}

const NewProjectDialog = ({
  trigger
}: NewProjectDialogProps) => {
  const [projectTemplateId, setProjectTemplateId] = useState<string | undefined>();

  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [project, setProject] = useState<any>({});

  const TemplateFormComponent = projectTemplateId ? projectTemplates[projectTemplateId].formComponent : undefined;

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
            projectTemplateId === undefined && 
              <ProjectTemplateChoice
                setDialogTitle={setDialogTitle}
                setProjectTemplateId={setProjectTemplateId}
              />
          }
          {
            projectTemplateId &&
            projectTemplates[projectTemplateId] &&
            TemplateFormComponent &&
              <TemplateFormWrapper>
                <TemplateFormComponent
                  setDialogTitle={setDialogTitle}
                />
              </TemplateFormWrapper>

          }
        </ProjectContext.Provider>
      </DialogContent>
    </Dialog>
  )
}

export default NewProjectDialog;