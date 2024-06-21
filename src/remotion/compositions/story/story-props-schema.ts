import * as z from 'zod';
import { RGBColorSchema } from '../../schemas/color';

const StoryPropsSchema = z.object({
  storySettings: z.object({
    title: z.string().optional().default(""),
    content: z.string().optional().default("")
  }),
  audio: z.object({
    title: z.object({
      key: z.string().default(""),
      transcription: z.unknown()
    }),
    content: z.object({
      key: z.string().default(""),
      transcription: z.unknown()
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
  }),
  formValues: z.unknown()
});

export default StoryPropsSchema;