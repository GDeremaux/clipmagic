"use client";

import { getProjectRenderProgress, triggerProjectRender } from "@/actions/remotion/lambda/render-project";
import { use, useContext, useEffect, useState } from "react";
import ProjectContext from "./project-context";
import { Progress } from "@/components/ui/progress";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import estimateCost from "@/actions/project/generate-story-project/estimate-cost";
import { removeCreditsFromUser } from "@/data/user";

interface RenderStepProps {
  setDialogTitle: (value: string) => void
}

const RenderStep = ({
  setDialogTitle
}: RenderStepProps) => {
  const [ downloadUrl, setDownloadUrl ] = useState<string | null>(null)
  const [ progress, setProgress ] = useState<number>(0);
  const { project } = useContext(ProjectContext);

  const session = useSession();
  const userId = session.data?.user?.id || "";

  const render = () => {
    if (downloadUrl) return;

    try {
      const cost = 10;
      removeCreditsFromUser(userId, cost);
    } catch {
      setDialogTitle("You don't have enough credits to render this video.")
      return;
    }

    setDialogTitle("Your video is rendering...")
    console.log("1")

    triggerProjectRender({project, composition: "StoryTemplate"})
      .then((render) => {
        const interval = setInterval(() => {
          getProjectRenderProgress(render.renderId)
            .then((progress) => {
              if (progress.done) {
                clearInterval(interval);
                setDownloadUrl(progress.outputFile);
                setDialogTitle("Download your video")
              }
              if (progress.fatalErrorEncountered) {
                clearInterval(interval);
                setDialogTitle("An error occurred while rendering your video")
                console.log(progress.errors)
              }
              setProgress(progress.overallProgress)
            })
          }, 2000)
      })
  }

  useEffect(render, [])

  const cloudfrontDownloadUrl = "https://cdn.clipmagic.io/renders/" + downloadUrl?.split("/renders/")[1]

  return (
    <div
      className="w-full flex flex-col gap-y-4"
    >
      <Progress
        value={progress * 100}
      />

      <Link
        className={cn(
          buttonVariants({variant: "default", size: "lg"}),
          !downloadUrl && "pointer-events-none cursor-not-allowed opacity-50",
          "w-full"
        )}
        href={cloudfrontDownloadUrl || "#"}
        target="_blank"
      >
        Download
      </Link>
    </div>
  )
}

export default RenderStep;