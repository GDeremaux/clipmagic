import { Transcription } from "../../../types/transcription";
import { AbsoluteFill, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import Sentence from "./sentence";
import { useInputContext } from "../../../lib/use-input-context";
import { vw } from "../../../lib/get-units";
import rgbColor from "../../../lib/rgb-color";
import { loadFont } from "@remotion/fonts";
import textStrokeShadow from "../../../lib/text-stroke-shadow";

interface BasicSubtitlesProps {
  transcription: Transcription;
  speed: number;
}

const BasicSubtitles = ({
  transcription,
  speed
}: BasicSubtitlesProps) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const time = frame / fps * speed;

  const input = useInputContext();
  const { fontPath, size, fontWeight, isItalic, textColor, stroke, shadow } = input.subtitlesSettings.text;

  loadFont({
     family: "font",
     url: staticFile(fontPath),
     weight: fontWeight
  });

  console.log((shadow.isActive ? `${vw(shadow.offsetX / 4)} ${vw(shadow.offsetY / 4)} ${vw(shadow.blurRadius / 4)} ${rgbColor({...shadow.color, opacity: shadow.opacity / 100})}, `.repeat(4) : "")
  + (stroke.isActive ? textStrokeShadow(rgbColor(stroke.color), stroke.width) : ""))

  return (
    <AbsoluteFill
      style={{
        fontFamily: "font",
        fontSize: vw(Number(size) * 0.5),
        color: rgbColor(textColor),
        fontWeight: fontWeight,
        fontStyle: isItalic ? "italic" : "normal",
        textShadow: (shadow.isActive ? `${vw(shadow.offsetX / 4)} ${vw(shadow.offsetY / 4)} ${vw(shadow.blurRadius / 4)} ${rgbColor({...shadow.color, opacity: shadow.opacity / 100})}, `.repeat(4) : "")
          + (stroke.isActive ? textStrokeShadow(rgbColor(stroke.color), stroke.width) : ""),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paintOrder: "stroke fill",
        textAlign: "center",
        paddingLeft: vw(10),
        paddingRight: vw(10)
      }}
    >
      {
        transcription.sentences.map((sentence) => {
          if (time >= sentence.start && time < sentence.end) {
            return (
                <Sentence sentence={sentence} speed={speed} />
            );
          }
        })
      }
    </AbsoluteFill>
  )
}

export default BasicSubtitles;