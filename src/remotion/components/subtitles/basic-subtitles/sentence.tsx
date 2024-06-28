import { useCurrentFrame, useVideoConfig } from "remotion";
import { Sentence } from "../../../types/transcription";

interface SentenceProps {
  sentence: Sentence;
  speed: number;
}

const Sentence = ({
  sentence,
  speed
}: SentenceProps) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const time = frame / fps * speed;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        maxWidth: "100%",
        whiteSpace: "normal",
        flexWrap: "wrap"
      }}
    >
      {
        sentence.words.map((word) => {
          const isHighlighted = time >= word.start && time < word.end;

          if (isHighlighted) {
            return <span style={{ color: "yellow" }}>{word.word}&nbsp;</span>;
          } else {
            return <span>{word.word}&nbsp;</span>;
          }
        })
      }
    </div>
  )
}

export default Sentence;