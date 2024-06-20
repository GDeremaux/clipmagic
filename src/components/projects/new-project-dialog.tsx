"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProjectTemplateChoice from "@/components/projects/template-choice";
import { useState } from "react";
import { projectTemplates } from "@/data/template";
import { H3 } from "@/components/ui/typography";
import TemplateFormWrapper from "@/components/templates/template-form-wrapper";

interface NewProjectDialogProps {
  trigger: React.ReactNode
}

const NewProjectDialog = ({
  trigger
}: NewProjectDialogProps) => {
  const [projectTemplateId, setProjectTemplateId] = useState<string | undefined>();
  const projectTemplate = projectTemplateId ? projectTemplates[projectTemplateId] : undefined;
  const formSchema = projectTemplate?.formSchema;

  const [dialogTitle, setDialogTitle] = useState<string>("");

  const [formValues, setFormValues] = useState();

  const TemplateFormComponent = projectTemplateId ? projectTemplates[projectTemplateId].formComponent : undefined;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-[1000px]">
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
                setFormValues={setFormValues}
              />
            </TemplateFormWrapper>

        }
        
      </DialogContent>
    </Dialog>
  )
}

export default NewProjectDialog;