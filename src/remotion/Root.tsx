import React from "react";
import { Composition } from "remotion";
import { StoryComposition } from "./compositions/story/Composition";
import defaultProps from "./compositions/story/default-props";
 
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="StoryTemplate"
        component={StoryComposition}
        durationInFrames={60}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={defaultProps}
      />
    </>
  );
};