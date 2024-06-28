import InputContext from "../input-context";
import { useContext } from "react";
import { Audio, Sequence, staticFile } from "remotion";
import TitlePreview from "./title-preview";

const Title = () => {
  const input = useContext(InputContext);
  
  const duration = input.audio.title.duration;
  const speed = input.voiceSettings.advanced.speed;

  const durationInFrames = Math.floor(60 * (duration / speed + 0.5));

  return (
    <Sequence from={0} durationInFrames={durationInFrames}>
      <TitlePreview />
      <Audio
        src={"https://cdn.clipmagic.io/" + input.audio.title.key}
        playbackRate={speed}
      />
    </Sequence>
  )
}

export default Title;