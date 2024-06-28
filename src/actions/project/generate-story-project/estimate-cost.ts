import { isEqual } from "lodash";

const estimateCost = (
  formValues: any,
  previousProject: any
) => {
  const { title, content } = formValues.storySettings;
  const { storySettings, subtitlesSettings, backgroundSettings, voiceSettings } = formValues;

  // Get old title and content
  let oldTitle = previousProject.formValues.storySettings.title;
  let oldContent = previousProject.formValues.storySettings.content;
  let oldVoiceSettings = previousProject.formValues.voiceSettings;

  const hasTitleChanged = title !== oldTitle || !isEqual(voiceSettings, oldVoiceSettings);
  const hasContentChanged = content !== oldContent || !isEqual(voiceSettings, oldVoiceSettings);

  const titleAudioCost = hasTitleChanged ? 10 : 0;

  const contentAudioCost = hasContentChanged ? 10 : 0;

  return titleAudioCost + contentAudioCost;
}

export default estimateCost;