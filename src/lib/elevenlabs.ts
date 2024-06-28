import { ElevenLabsClient } from "elevenlabs";
import axios from "axios";
import { getWordLevelTimestamps } from "./transcription";

export const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY
});

interface GenerateAudioWithTimestampsSettings {
  text: string;
  model_id: string;
  voice_settings: {
    stability: number;
    similarity_boost: number;
    style: number;
    use_speaker_boost: boolean;
  };
}

export const generateAudioWithTimestamps = async (voiceId: string, settings: GenerateAudioWithTimestampsSettings) => {  // Doing this with manual requests because this feature isn't available in Elevenlabs SDK yet
  const options = {
    headers: {'xi-api-key': process.env.ELEVENLABS_API_KEY , 'Content-Type': 'application/json'},
  };

  const response = await axios.post(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps`,
    settings,
    options
  );

  const audioBase64 = response.data.audio_base64;
  const audioBuffer = Buffer.from(audioBase64, 'base64');

  const alignment = response.data.alignment;

  const transcription = getWordLevelTimestamps(alignment)

  return { audioBuffer, transcription };
}