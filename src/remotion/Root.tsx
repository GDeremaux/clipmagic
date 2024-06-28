import React from "react";
import * as z from "zod";
import { CalculateMetadataFunction, Composition } from "remotion";
import { StoryComposition } from "./compositions/story";
import defaultProject from "./compositions/story/default-project";
import { storyProjectSchema } from "./schemas/projects/story";

const calculateStoryMetadata: CalculateMetadataFunction<z.infer<typeof storyProjectSchema>> = ({
  props,
  defaultProps,
  abortSignal,
}) => {
  return props.videoConfig;
};
 
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="StoryTemplate"
        component={StoryComposition}
        defaultProps={defaultProject}
        schema={storyProjectSchema}
        calculateMetadata={calculateStoryMetadata}
      />
    </>
  );
};