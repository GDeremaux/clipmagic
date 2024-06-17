"use server";

// Temporary, just for v1 beta

import * as z from "zod";

import { elevenlabs } from "@/lib/elevenlabs";
import { getParsedFormValues } from "@/lib/form";
import getPrompt from "./get-prompt";


const generateStoryProject = (
  formValues: any
) => {

  // Step 1: Get the prompt

  const prompt = getPrompt(formValues);
  return prompt;

  // Step 2: Generate Elevenlabs TTS

  try {
    const audio = elevenlabs.generate({
      voice: formValues.voiceSettings.voiceId,
      text: ""
    })
  } catch (error) {
    console.log("Failed to generate Elevenlabs TTS audio !", error);
  }
}

export default generateStoryProject;