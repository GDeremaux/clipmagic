import * as z from "zod";

import generateStoryProject from "@/actions/project/generate-story-project";
import LogoIcon from "@/components/brand/logo-icon";
import VideoPreview from "@/components/projects/video-preview";
import { Button } from "@/components/ui/button";
import { defaultInstance, getParsedFormValues } from "@/lib/form";
import { StoryTemplateFormSchema } from "@/schemas/templates";
import { RefreshCw } from "lucide-react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProjectContext, { ProjectContextValue } from "@/components/projects/project-context";
import { useContext } from "react";

interface TemplateFormWrapperProps {
  children: React.ReactNode
}

const TemplateFormWrapper = ({
  children
}: TemplateFormWrapperProps) => {
  const { project, setProject } = useContext(ProjectContext);
  
  const form = useForm<z.infer<typeof StoryTemplateFormSchema>>({
    resolver: zodResolver(StoryTemplateFormSchema),
    defaultValues: defaultInstance(StoryTemplateFormSchema)
  });

  const handleRefreshPreview = async () => {
    const newProject = await generateStoryProject(
      getParsedFormValues(form.getValues(), StoryTemplateFormSchema),
      project
    )

    setProject(newProject);
    console.log(newProject);
  }

  return (
    // @ts-ignore (idk why this is throwing an error, it has always worked fine in the app)
    <Form
      {...form}
    >
        <div className="flex flex-row gap-x-4 flex-grow-0">
          <div className="flex flex-col gap-y-4 justify-between w-fit h-full flex-grow">
            <div className="max-h-[533px]">
              <form
                onSubmit={form.handleSubmit(() => {})}
                onChange={() => {}}
                className="space-y-6 max-h-full"
              >
                {children}
              </form>
            </div>
            <Button
              variant="secondary"
              onClick={handleRefreshPreview}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh preview
            </Button>
          </div>
          <div className="flex flex-col gap-y-4 justify-between w-fit h-full flex-shrink-0">
            <VideoPreview />
            <Button>
              <LogoIcon
                width={16}
                variant="unicolor"
                invertTheme
                className="mr-2"
              />
              Render
            </Button>
          </div>
        </div>
    </Form>
  )
}

export default TemplateFormWrapper;