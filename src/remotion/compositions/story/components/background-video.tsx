import { AbsoluteFill, OffthreadVideo } from "remotion";
import { useContext } from "react";
import InputContext from "./input-context";

const BackgroundVideo = () =>{
  const input = useContext(InputContext);
  const videoUrl = "https://cdn.clipmagic.io/" + input.backgroundSettings.fileName;

  return (
    <AbsoluteFill>
      <OffthreadVideo
        src={videoUrl}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        muted
      />
    </AbsoluteFill>
  )
}

export default BackgroundVideo;