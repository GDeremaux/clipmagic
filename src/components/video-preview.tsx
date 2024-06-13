interface VideoPreviewProps extends React.VideoHTMLAttributes<HTMLVideoElement>  {
  videoURL: string;
}

const VideoPreview = ({
  videoURL,
  ...props
}: VideoPreviewProps) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLVideoElement>) => {
    const vid = e.currentTarget;
    vid.muted = true;
    vid.play();
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLVideoElement>) => {
    const vid = e.currentTarget
    vid.muted = true
    vid.currentTime = 1
    vid.pause()
  }

  return (
    <video
      src={videoURL}
      controls={false}
      muted
      onLoadedMetadata={(e) => {e.currentTarget.currentTime = 1}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="object-cover"
      {...props}
    />
  );
}

export default VideoPreview;