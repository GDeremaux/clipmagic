import * as z from 'zod';
import { RGBColorSchema } from '../color';

export const storyInputSchema = z.object({
  storySettings: z.object({
    title: z.string().optional().default(""),
    content: z.string().optional().default("")
  }),
  voiceSettings: z.object({
    service: z.string().default("polly"),
    languageCode: z.string().default("en-US"),
    elevenlabsVoiceId: z.string().default("pNInz6obpgDQGcFmaJgB"),
    pollyVoiceId: z.string().default("Matthew"),
    advanced: z.object({
      speed: z.number().default(1.2),
      isActive: z.boolean().default(false),
      stability: z.number().default(0.5),
      similarity: z.number().default(0.5),
      styleExaggeration: z.number().default(0),
      speakerBoost: z.boolean().default(true)
    })
  }),
  audio: z.object({
    title: z.object({
      key: z.string().default(""),
      transcription: z.unknown(),
      duration: z.number()
    }),
    content: z.object({
      key: z.string().default(""),
      transcription: z.unknown(),
      duration: z.number()
    })
  }),
  backgroundSettings: z.object({
    fileName: z.string().default("")
  }),
  subtitlesSettings: z.object({
    text: z.object({
      fontPath: z.string().default("clipmagic-files/fonts/Montserrat-VariableFont_wght.ttf"),
      fontWeight: z.string().default("700"),
      isItalic: z.boolean().default(false),
      size: z.string().default("24"),
      textColor: RGBColorSchema.default({ r: 255, g: 255, b: 255 }),
      stroke: z.object({
        isActive: z.boolean().default(false),
        color: RGBColorSchema.default({ r: 0, g: 0, b: 0 }),
        width: z.number().default(0)
      }),
      shadow: z.object({
        isActive: z.boolean().default(false),
        color: RGBColorSchema.default({ r: 0, g: 0, b: 0 }),
        opacity: z.number().default(80),
        blurRadius: z.number().default(10),
        offsetX: z.number().default(5),
        offsetY: z.number().default(-5)
      })
    }),
    subtitling: z.object({
      maxChar: z.number().default(15),
      maxDuration: z.number().default(2),
      startAdjust: z.number().default(0),
      endAdjust: z.number().default(0)
    }),
    animation: z.object({
      fadeInDuration: z.number().default(0),
      fadeOutDuration: z.number().default(0)
    })
  })
});

export const storyProjectSchema = z.object({ 
  input: storyInputSchema,
  formValues: z.unknown(),
  videoConfig: z.object({
    fps: z.number().default(30),
    durationInFrames: z.number().default(30),
    width: z.number().default(1920),
    height: z.number().default(1080),
  })
});