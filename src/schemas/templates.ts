import * as z from "zod";

import { RGBColorSchema } from "@/schemas/color";

export const StoryTemplateFormSchema = z.object({
  storySettings: z.object({
    method: z.enum(["reddit", "quora", "prompt", "script"]),

    redditLink: z.string().optional(),
    quoraLink: z.string().optional(),
    prompt: z.string().optional(),
    customScript: z.string().optional()
  }).refine((data) => {
    switch (data.method) {
      case "reddit":
        return data.redditLink !== undefined;
      case "quora":
        return data.quoraLink !== undefined;
      case "prompt":
        return data.prompt !== undefined;
      case "script":
        return data.customScript !== undefined;
    }
  }, {
    message: "The input of the selected story method is required!"
  }),
  voiceSettings: z.object({
    voiceId: z.string().min(4),
    advanced: z.object({
      stability: z.number(),
      similarity: z.number(),
      styleExaggeration: z.number(),
      speakerBoost: z.boolean()
    })
  }),
  backgroundSettings: z.object({
    videoPath: z.string()
  }),
  subtitlesSettings: z.object({
    text: z.object({
      fontPath: z.string(),
      fontWeight: z.string(),
      isItalic: z.boolean(),
      size: z.number(),
      textColor: RGBColorSchema,
      stroke: z.object({
        strokeColor: RGBColorSchema,
        strokeWidth: z.number()
      }),
      shadow: z.object({
        color: RGBColorSchema,
        opacity: z.number(),
        blurRadius: z.number(),
        offsetX: z.number(),
        offsetY: z.number()
      })
    }),
    subtitling: z.object({
      maxChar: z.number(),
      maxDuration: z.number(),
      startAdjust: z.number(),
      endAdjust: z.number()
    }),
    animation: z.object({
      fadeInDuration: z.number(),
      fadeOutDuration: z.number()
    })
  })
});