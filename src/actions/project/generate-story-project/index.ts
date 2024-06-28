"use server";

// Temporary, just for v1 beta

import * as z from "zod";

import { elevenlabs } from "@/lib/elevenlabs";
import { get } from "lodash";
import { generateTTSAudio } from "./audio";
import { hasExternalOtelApiPackage } from "next/dist/build/webpack-config";
import getVideoConfig from "./get-video-config";
import { isEqual } from "lodash";
import { removeCreditsFromUser } from "@/data/user";
import estimateCost from "./estimate-cost";


const generateStoryProject = async (
  formValues: any,
  previousProject: any,
  userId: string
) => {
  // Step 1: Get prompt

  const { title, content } = formValues.storySettings;
  const { storySettings, subtitlesSettings, backgroundSettings, voiceSettings } = formValues;

  // Get old title and content
  let oldTitle = previousProject.formValues.storySettings.title;
  let oldContent = previousProject.formValues.storySettings.content;
  let oldTitleAudio = previousProject.input.audio.title;
  let oldContentAudio = previousProject.input.audio.content;
  let oldVoiceSettings = previousProject.formValues.voiceSettings;

  // Step 2: Generate Elevenlabs or polly TTS with transcription

  const hasTitleChanged = title !== oldTitle || !isEqual(voiceSettings, oldVoiceSettings);
  const hasContentChanged = content !== oldContent || !isEqual(voiceSettings, oldVoiceSettings);

  // Generate new audio only if title or content has changed
  const titleAudio = hasTitleChanged ? await generateTTSAudio(formValues, title) : oldTitleAudio;  // AWS S3 keys
  const contentAudio = hasContentChanged ? await generateTTSAudio(formValues, content) : oldContentAudio;

  const cost = estimateCost(formValues, previousProject);
  await removeCreditsFromUser(userId, cost);

  // Step 3: Generate project object

  const audio = {
    title: titleAudio,
    content: contentAudio,
  };
  
  const input = {
    storySettings,
    subtitlesSettings,
    backgroundSettings,
    voiceSettings,
    audio
  };

  const videoConfig = getVideoConfig(input);

  const project = {
    input,
    formValues,
    videoConfig,
  };

  return project;
}

export default generateStoryProject;