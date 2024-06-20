"use client";

import { ProjectTemplatesType, projectTemplates } from "@/data/template";
import TemplatePreview from "./template-preview";

interface ProjectTemplateChoice {
  setDialogTitle: Function,
  setProjectTemplateId: Function
}

const ProjectTemplateChoice = ({
  setDialogTitle,
  setProjectTemplateId
}: ProjectTemplateChoice) => {
  setDialogTitle("Choose a template")
    
  return (
    Object.keys(projectTemplates).map((key) => {
      const template = projectTemplates[key as keyof ProjectTemplatesType];

      return <TemplatePreview
        template={template}
        setProjectTemplateId={setProjectTemplateId}
      />
    })
  )
} 

export default ProjectTemplateChoice;