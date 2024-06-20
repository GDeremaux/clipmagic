"use server";

// Temporary, just for v1 beta

import * as z from "zod";

import { elevenlabs } from "@/lib/elevenlabs";
import { get } from "lodash";
import { generateTTSAudioS3Key } from "./audio";


const generateStoryProject = async (
  formValues: any
) => {
  // Step 1: Get prompt

  const { title, content } = formValues.storySettings;

  // Step 2: Generate Elevenlabs TTS with transcription

  const titleAudio = await generateTTSAudioS3Key(formValues, title);  // AWS S3 keys
  const contentAudio = await generateTTSAudioS3Key(formValues, content);

  // Step 3: Generate project object

  const { storySettings, subtitlesSettings, backgroundSettings } = formValues;
  const audioSettings = {
    title: titleAudio,
    content: contentAudio,
  };
  
  const project = {
    storySettings,
    subtitlesSettings,
    backgroundSettings,
    audioSettings,
  };

  return project;
}

export default generateStoryProject;