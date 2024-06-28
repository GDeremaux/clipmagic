import { Transcription } from "../../../../types/transcription";
import BasicSubtitles from "../../../../components/subtitles/basic-subtitles";
import { useInputContext } from "../../../../lib/use-input-context";
import { Audio, Sequence } from "remotion";

const Content = () => {
  const input = useInputContext();

  const duration = input.audio.content.duration;
  const speed = input.voiceSettings.advanced.speed;

  const durationInFrames = Math.floor(60 * (duration / speed));

  const from = Math.floor(60 * (input.audio.title.duration / speed + 0.5))

  return (
    <Sequence from={from} durationInFrames={durationInFrames}>
      <BasicSubtitles transcription={input.audio.content.transcription as Transcription} speed={speed} />
      <Audio
        src={"https://cdn.clipmagic.io/" + input.audio.content.key}
        playbackRate={speed}
      />
    </Sequence>
  )
}

export default Content;