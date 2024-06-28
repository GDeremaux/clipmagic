"use server";

import uploadFile from "@/lib/aws/s3/upload-file";
import { elevenlabs, generateAudioWithTimestamps } from "@/lib/elevenlabs";
import { generateAudioWithTimestamps as generatePollyAudioWithTimestamps } from "@/lib/aws/polly";
import { getSentenceLevelTimestamps, getWordLevelTimestamps } from "@/lib/transcription";
import { randomUUID } from "crypto";
import { parseBuffer } from 'music-metadata';


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

  const pollyVoice = formValues.voiceSettings.pollyVoiceId;
  const elevenlabsVoice = formValues.voiceSettings.elevenlabsVoiceId;

  const elevenlabsConfig = {  // Final Elevenlabs config
    model_id: "eleven_multilingual_v2",
    voice_settings: {
      stability,
      similarity_boost,
      style,
      use_speaker_boost
    }
  };

  const { audioBuffer, transcription } = formValues.voiceSettings.service === "elevenlabs" ?
    await generateAudioWithTimestamps(elevenlabsVoice, {
      ...elevenlabsConfig,
      text
    }) :
    await generatePollyAudioWithTimestamps(pollyVoice, {
      Text: text,
      LanguageCode: formValues.voiceSettings.languageCode
    })

  /* const chunks: Buffer[] = [];  // Convert audio stream to buffer

  for await (const chunk of audio) {
    chunks.push(chunk);
  }

  const content = Buffer.concat(chunks);

  return content;  // Return audio buffer */

  return { audioBuffer, transcription };  // Return audio buffer
};


const getAudioDuration = async (audioBuffer: Buffer): Promise<number> => {
  try {
    // Parse the audio metadata from the buffer
    const metadata = await parseBuffer(audioBuffer, 'audio/mpeg');
    
    // Retrieve the duration in seconds
    const duration = metadata.format.duration;

    if (duration === undefined) {
      throw new Error('Unable to retrieve duration from audio buffer');
    }

    return duration;
  } catch (error) {
    // Handle errors
    console.error('Error parsing audio buffer:', error);
    throw error;
  }
};


export const generateTTSAudio = async (
  formValues: any, 
  text: string
) => {
  text = text.replace(/\n/g, ' ');  // Replace newlines with spaces

  const { audioBuffer: stream, transcription } = await generateAudioStream(formValues, text);
  const sentenceLevelTranscription = getSentenceLevelTimestamps({
    wordLevelTranscription: transcription,
    maxLength: formValues.subtitlesSettings.subtitling.maxChar,
    maxDuration: formValues.subtitlesSettings.subtitling.maxDuration,
    startAdjust: formValues.subtitlesSettings.subtitling.startAdjust,
    endAdjust: formValues.subtitlesSettings.subtitling.endAdjust
  });
  const duration = await getAudioDuration(stream);

  const key = await uploadFile({file: stream, fileName: `${randomUUID()}.mp3`});  // Upload audio to S3

  return { key, transcription: sentenceLevelTranscription, duration };  // Return S3 key
};