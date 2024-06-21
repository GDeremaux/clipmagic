import uploadFile from "@/actions/aws/s3/upload-file";
import { elevenlabs, generateAudioWithTimestamps } from "@/lib/elevenlabs";
import { getWordLevelTimestamps } from "@/lib/transcription";
import { randomUUID } from "crypto";


export const generateAudioStream = async (
  formValues: any, 
  text: string
) => {
  const {  // Advanced voice settings
    stability,
    similarity: similarity_boost,
    styleExaggeration: style,
    speakerBoost: use_speaker_boost
  } = formValues.voiceSettings.advanced;

  const voice = formValues.voiceSettings.voiceId;

  const elevenlabsConfig = {  // Final Elevenlabs config
    model_id: "eleven_multilingual_v2",
    voice_settings: {
      stability,
      similarity_boost,
      style,
      use_speaker_boost
    }
  };

  const { audioBuffer, alignment } = await generateAudioWithTimestamps(voice, {
    ...elevenlabsConfig,
    text
  });

  /* const chunks: Buffer[] = [];  // Convert audio stream to buffer

  for await (const chunk of audio) {
    chunks.push(chunk);
  }

  const content = Buffer.concat(chunks);

  return content;  // Return audio buffer */

  return { audioBuffer, alignment };  // Return audio buffer
};


export const generateTTSAudio = async (
  formValues: any, 
  text: string
) => {
  const { audioBuffer: stream, alignment } = await generateAudioStream(formValues, text);
  const transcription = getWordLevelTimestamps(alignment);

  const key = await uploadFile(stream, `${randomUUID()}.mp3`);  // Upload audio to S3

  return { key, transcription };  // Return S3 key
};