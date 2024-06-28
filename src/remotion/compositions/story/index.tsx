import * as z from "zod";

import { AbsoluteFill, Series, staticFile } from "remotion";
import { storyProjectSchema } from "../../schemas/projects/story";
import InputContext from "./components/input-context";
import BackgroundVideo from "./components/background-video";
import Title from "./components/title";
import loadFonts from "../../lib/load-fonts";
import Content from "./components/content";

loadFonts();

export const StoryComposition = ({...props}: z.infer<typeof storyProjectSchema>) => {
  return (
    <InputContext.Provider value={props.input}>
      <AbsoluteFill
        style={{
          color: "black",
          lineHeight: 1.2
        }}
      >
        <BackgroundVideo />
        <Title />
        <Content />
      </AbsoluteFill>
    </InputContext.Provider>
  )
};