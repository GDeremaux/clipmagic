"use client";

import { ProjectTemplatesType, projectTemplates } from "@/data/template";
import ProjectTemplate from "@/components/projects/templates/project-template";

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

      return <ProjectTemplate
        template={template}
        setProjectTemplateId={setProjectTemplateId}
      />
    })
  )
} 

export default ProjectTemplateChoice;