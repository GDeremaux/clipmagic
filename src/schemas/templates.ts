import * as z from "zod";

import { RGBColorSchema } from "@/schemas/color";

export const StoryTemplateFormSchema = z.object({
  storySettings: z.object({
    method: z.enum(["reddit", "quora", "prompt", "script"]).default("reddit"),

    redditLink: z.string().default(""),
    quoraLink: z.string().optional().default(""),
    prompt: z.string().optional().default(""),
    customScript: z.object({
      title: z.string().optional().default(""),
      script: z.string().optional().default("")
    }).optional()
  }).refine((data) => {
    switch (data.method) {
      case "reddit":
        return data.redditLink !== undefined;
      case "quora":
        return data.quoraLink !== undefined;
      case "prompt":
        return data.prompt !== undefined;
      case "script":
        return data.customScript?.script !== undefined || data.customScript?.title !== undefined;
    }
  }, {
    message: "The input of the selected story method is required!"
  }),
  voiceSettings: z.object({
    voiceId: z.string().min(4).default(""),
    advanced: z.object({
      isActive: z.boolean().default(false),
      stability: z.number().default(0.5),
      similarity: z.number().default(0.5),
      styleExaggeration: z.number().default(0),
      speakerBoost: z.boolean().default(true)
    })
  }),
  backgroundSettings: z.object({
    fileName: z.string().default("")
  }),
  subtitlesSettings: z.object({
    text: z.object({
      fontPath: z.string().default(""),
      fontWeight: z.string().default(""),
      isItalic: z.boolean().default(false),
      size: z.string().default(""),
      textColor: RGBColorSchema.default({ r: 255, g: 255, b: 255 }),
      stroke: z.object({
        isActive: z.boolean().default(false),
        color: RGBColorSchema.default({ r: 0, g: 0, b: 0 }),
        width: z.number().default(0)
      }),
      shadow: z.object({
        isActive: z.boolean().default(false),
        color: RGBColorSchema.default({ r: 0, g: 0, b: 0 }),
        opacity: z.number().default(0),
        blurRadius: z.number().default(0),
        offsetX: z.number().default(0),
        offsetY: z.number().default(0)
      })
    }),
    subtitling: z.object({
      maxChar: z.number().default(0),
      maxDuration: z.number().default(0),
      startAdjust: z.number().default(0),
      endAdjust: z.number().default(0)
    }),
    animation: z.object({
      fadeInDuration: z.number().default(0),
      fadeOutDuration: z.number().default(0)
    })
  })
});