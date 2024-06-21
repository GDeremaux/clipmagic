"use server";

// Temporary, just for v1 beta

import * as z from "zod";

import { elevenlabs } from "@/lib/elevenlabs";
import { get } from "lodash";
import { generateTTSAudio } from "./audio";
import { hasExternalOtelApiPackage } from "next/dist/build/webpack-config";


const generateStoryProject = async (
  formValues: any,
  previousProject: any
) => {
  // Step 1: Get prompt

  const { title, content } = formValues.storySettings;

  let oldTitle = "";
  let oldContent = "";
  let oldTitleAudio = "";
  let oldContentAudio = "";

  if (previousProject.formValues) {
    oldTitle = previousProject.formValues.storySettings.title;
    oldContent = previousProject.formValues.storySettings.content;
    oldTitleAudio = previousProject.audio.title;
    oldContentAudio = previousProject.audio.content;
  }  // Get old title and content

  // Step 2: Generate Elevenlabs TTS with transcription

  const hasTitleChanged = title !== oldTitle;
  const hasContentChanged = content !== oldContent;

  // Generate new audio only if title or content has changed
  const titleAudio = hasTitleChanged ? await generateTTSAudio(formValues, title) : oldTitleAudio;  // AWS S3 keys
  const contentAudio = hasContentChanged ? await generateTTSAudio(formValues, content) : oldContentAudio;

  // Step 3: Generate project object

  const { storySettings, subtitlesSettings, backgroundSettings } = formValues;
  const audio = {
    title: titleAudio,
    content: contentAudio,
  };
  
  const project = {
    storySettings,
    subtitlesSettings,
    backgroundSettings,
    audio,
    formValues
  };

  return project;
}

export default generateStoryProject;