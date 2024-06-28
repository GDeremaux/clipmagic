"use client";

import * as z from "zod";

import generateStoryProject from "@/actions/project/generate-story-project";
import LogoIcon from "@/components/brand/logo-icon";
import { Button } from "@/components/ui/button";
import { defaultInstance, getParsedFormValues } from "@/lib/form";
import { StoryTemplateFormSchema } from "@/schemas/templates";
import { RefreshCw } from "lucide-react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProjectContext, { ProjectContextValue } from "@/components/projects/project-context";
import { useContext, useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { StoryComposition } from "@/remotion/compositions/story";
import { cn } from "@/lib/utils";
import estimateCost from "@/actions/project/generate-story-project/estimate-cost";
import CostSpan from "./cost-span";
import { useSession } from "next-auth/react";

interface TemplateFormWrapperProps {
  children: React.ReactNode;
  setProjectTemplateId: (value: string) => void;
}

const TemplateFormWrapper = ({
  children,
  setProjectTemplateId
}: TemplateFormWrapperProps) => {
  const { project, setProject } = useContext(ProjectContext);
  const [isLoading, setIsLoading] = useState(false)
  const [creditsKey, setCreditsKey] = useState<number>(0);

  const session = useSession();
  const userId = session.data?.user?.id || "";
  
  const form = useForm<z.infer<typeof StoryTemplateFormSchema>>({
    resolver: zodResolver(StoryTemplateFormSchema),
    defaultValues: defaultInstance(StoryTemplateFormSchema)
  });
  const isSubmitting = form.formState.isSubmitting;

  const handleRefreshPreview = async () => {
    try {
      setIsLoading(true);
      const newProject = await generateStoryProject(
        getParsedFormValues(form.getValues(), StoryTemplateFormSchema),
        project,
        userId
      )
      setProject(newProject);
      console.log(newProject);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    console.log(isSubmitting)
  }, [isSubmitting])

  return (
    // @ts-ignore (idk why this is throwing an error, it has always worked fine in the app)
    <Form
      {...form}
    >
        <div className="flex flex-row gap-x-4 flex-grow-0">
          <div className="flex flex-col gap-y-4 justify-between w-fit h-full flex-grow">
            <div className="max-h-[533px]">
              <form
                onChange={() => {
                  setCreditsKey((prev) => prev + 1);
                }}
                onSubmit={form.handleSubmit(() => {})}
                className="space-y-6 max-h-full"
              >
                {children}
              </form>
            </div>
            <Button
              variant="secondary"
              onClick={handleRefreshPreview}
              disabled={isLoading}
            >
              <RefreshCw className={cn("h-4 w-4 mr-2", isLoading && "animate-spin")} />
              Refresh preview
              <CostSpan schema={StoryTemplateFormSchema} formValues={form.getValues()} project={project} refreshKey={creditsKey} />
              {/*<span className="opacity-50 ml-2">(Cost: 20 credits)</span>*/}
            </Button>
          </div>
          <div className="flex flex-col gap-y-4 justify-between w-fit h-full flex-shrink-0">
            <Player
              component={StoryComposition}
              inputProps={project}
              durationInFrames={project.videoConfig.durationInFrames}
              compositionWidth={project.videoConfig.width}
              compositionHeight={project.videoConfig.height}
              fps={project.videoConfig.fps}
              style={{
                height: 533,
                width: 300,
              }}
              className="rounded-md"
              controls
            />
            <Button
              onClick={async () => {
                await handleRefreshPreview();
                setProjectTemplateId("render");
              }}
              disabled={isLoading}
            >
              <LogoIcon
                width={16}
                variant="unicolor"
                invertTheme
                className="mr-2"
              />
              Render
              <CostSpan schema={StoryTemplateFormSchema} formValues={form.getValues()} project={project} refreshKey={creditsKey} add={10} />
            </Button>
          </div>
        </div>
    </Form>
  )
}

export default TemplateFormWrapper;