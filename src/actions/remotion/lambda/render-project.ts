"use server";

import { getRenderProgress, renderMediaOnLambda, speculateFunctionName } from "@remotion/lambda/client";

interface RenderProjectProps {
  project: Record<string, unknown>;
  composition: string;
  framesPerLambda?: number;
}

const functionName = speculateFunctionName({
  memorySizeInMb: 2048,
  diskSizeInMb: 2048,
  timeoutInSeconds: 120
})

export const triggerProjectRender = async ({
  project,
  composition,
  framesPerLambda = 100
}: RenderProjectProps) => {
  
  const render = await renderMediaOnLambda({
    functionName,
    inputProps: project,
    region: "eu-west-3",
    serveUrl: "clipmagic-remotion-site",
    codec: "h264",
    composition,
    framesPerLambda
  });

  console.log(render.renderId)

  return render;
} 

export const getProjectRenderProgress = async (renderId: string) => {
  console.log("Getting render progress")
  const progress = await getRenderProgress({
    bucketName: "remotionlambda-euwest3-qbgr101fvr",
    functionName,
    region: "eu-west-3",
    renderId: renderId
  });

  return progress;
}