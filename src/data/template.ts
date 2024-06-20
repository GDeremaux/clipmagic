import * as z from "zod";

import { StoryTemplateFormSchema } from "@/schemas/templates";

import StoryTemplateForm from "@/components/templates/forms/story";

export interface TemplateFormComponentProps {
  setDialogTitle: Function;
  setFormValues: Function;
}

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  formComponent: React.FC<TemplateFormComponentProps>;
  dialogTitle: string;
  formSchema: z.ZodObject<any>;
};

export type ProjectTemplatesType = {
  [key: string]: ProjectTemplate
}

export const projectTemplates: ProjectTemplatesType = {
  story: {
    id: "story",
    name: "Story video",
    description: "Create a story video from a Reddit or Quora post, or from a prompt",
    formComponent: StoryTemplateForm,
    dialogTitle: "Template settings",
    formSchema: StoryTemplateFormSchema
  }
};