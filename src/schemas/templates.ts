import * as z from "zod";

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
    voiceId: z.string(),
    stability: z.number(),
    similarity: z.number(),
    styleExaggeration: z.number(),
    speakerBoost: z.boolean()
  }),
  backgroundSettings: z.object({
    videoURL: z.string()
  }),
  subtitlesSettings: z.object({
    
  })
});