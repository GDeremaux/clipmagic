import * as z from "zod";

import { AbsoluteFill } from "remotion";
import StoryPropsSchema from "./story-props-schema";
import { InputContext } from "../../components/input-context";

export const StoryComposition = ({...props}: z.infer<typeof StoryPropsSchema>) => {
  return (
    <InputContext.Provider value={props}>
      <AbsoluteFill>
        Hello
      </AbsoluteFill>
    </InputContext.Provider>
  )
};