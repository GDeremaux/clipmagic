const getVideoConfig = (input: any) => {
  const voiceSpeed = input.voiceSettings.advanced.speed;

  const titleAudio = input.audio.title;
  const contentAudio = input.audio.content;

  const durationInFrames = Math.floor(60*(
    titleAudio.duration / voiceSpeed +
    0.5 +
    contentAudio.duration / voiceSpeed
  ));

  return {
    fps: 60,
    durationInFrames,
    width: 1080,
    height: 1920,
  }
}

export default getVideoConfig;