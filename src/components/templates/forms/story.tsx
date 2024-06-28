"use client";

import generateStoryProject from "@/actions/project/generate-story-project";
import FormWarning from "@/components/form-warning";
import CheckboxInput from "@/components/forms/checkbox-input";
import ColorInput from "@/components/forms/color-input";
import FontInput from "@/components/forms/font-input";
import InputSubcategory from "@/components/forms/input-subcategory";
import SelectInput from "@/components/forms/select-input";
import SliderInput from "@/components/forms/slider-input";
import TextInput from "@/components/forms/text-input";
import TextareaInput from "@/components/forms/textarea-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectItem } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { H4 } from "@/components/ui/typography";
import { TemplateFormComponentProps, projectTemplates } from "@/data/template";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import getScriptfromReddit from "@/actions/templates/story/get-script-from-reddit";
import ElevenlabsVoiceInput from "@/components/forms/voice-input/elevenlabs-voice-input";
import VoiceInput from "@/components/forms/voice-input";
import VideoInput from "@/components/forms/video-input";

const StoryTemplateForm = ({
  setDialogTitle
}: TemplateFormComponentProps) => {
  const storyTemplate = projectTemplates.story;
  const FormSchema = storyTemplate.formSchema;

  const form = useFormContext();

  setDialogTitle(storyTemplate.dialogTitle);

  const applyScriptFromReddit = async () => {
    const redditUrl = (document.getElementById('redditUrl') as HTMLInputElement).value;

    const { title, content } = await getScriptfromReddit(redditUrl);

    form.setValue("storySettings.title", title);
    form.setValue("storySettings.content", content);
  };

  const voiceMethod = form.watch("voiceSettings.method");

	return (
    <div className="space-y-4 max-h-[533px]">
      <Tabs defaultValue="story" className="flex flex-col w-full h-[533px]">
        <TabsList className="grid w-full grid-cols-4 mb-5">
          <TabsTrigger value="story">Story</TabsTrigger>
          <TabsTrigger value="voice">Voice</TabsTrigger>
          <TabsTrigger value="subtitles">Subtitles</TabsTrigger>
          <TabsTrigger value="background">Background</TabsTrigger>
        </TabsList>
        <TabsContent value="story" className="space-y-4 mt-0 overflow-y-scroll px-[5px] mx-[-5px] h-full">
          <H4>Story</H4>
            <div className="flex flex-row w-full gap-x-2">
              <Popover>
                <PopoverTrigger className="w-1/3 flex-shrink-0">
                  <Button size="lg" variant="secondary" className="w-full flex flex-row gap-x-2">
                    <Image
                      alt="Reddit icon"
                      src="/icons/reddit.png"
                      width={16}
                      height={16}
                    />
                    <span>From Reddit</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="redditUrl">Reddit URL</Label>
                      <Input
                        id="redditUrl"
                        type="text"
                        placeholder="https://www.reddit.com/r/AskReddit/comments/..."
                      />
                    </div>
                    <Button className="w-full" type="button" onClick={async () => { await applyScriptFromReddit() }}>Get script</Button>
                  </form>
                </PopoverContent>
              </Popover>
              <Button disabled size="lg" variant="secondary" className="w-1/3">
                From Quora (soon)
              </Button>
              <Button disabled size="lg" variant="secondary" className="w-1/3">
                From Prompt (soon)
              </Button>
            </div>
            <TextInput
              name="storySettings.title"
              id="scriptTitle"
              label="Question"
              placeholder="What's the weirdest thing a penguin has said to you ?"
            />
            <TextareaInput
              name="storySettings.content"
              id="scriptContent"
              label="Answer"
              placeholder="In the vast frozen landscapes of Antarctica, there lived a penguin named Percy. Despite being a proud member of the penguin community,..."
            />
        </TabsContent>
        <TabsContent value="voice" className="space-y-4 mt-0 overflow-y-scroll px-[5px] mx-[-5px] h-full">
          <H4>Voice (text-to-speech)</H4>
          <VoiceInput name="voiceSettings" />
        </TabsContent>
        <TabsContent value="subtitles" className="space-y-4 mt-0 overflow-y-scroll px-[5px] mx-[-5px] h-full">
          <H4>Subtitles and text</H4>
          
          <InputSubcategory title="Text">
            <div className="flex flex-row w-full justify-between gap-x-2">
              <FontInput
                name="subtitlesSettings.text.fontPath"
                label="Font"
                placeholder="Choose a font..."
              />
              <SelectInput
                name="subtitlesSettings.text.fontWeight"
                label="Weight"
                placeholder="Choose a weight..."
                className="w-3/12"
              >
                <SelectItem value="100">Thin</SelectItem>
                <SelectItem value="200">Extra Light</SelectItem>
                <SelectItem value="300">Light</SelectItem>
                <SelectItem value="400">Regular</SelectItem>
                <SelectItem value="500">Medium</SelectItem>
                <SelectItem value="600">Semi Bold</SelectItem>
                <SelectItem value="700">Bold</SelectItem>
                <SelectItem value="800">Extra Bold</SelectItem>
              </SelectInput>
              <SelectInput
                name="subtitlesSettings.text.size"
                label="Size"
                placeholder="Choose a size..."
                className="w-2/12"
              >
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="12">12</SelectItem>
                <SelectItem value="16">16</SelectItem>
                <SelectItem value="24">24</SelectItem>
                <SelectItem value="32">32</SelectItem>
              </SelectInput>
              <ColorInput
                name="subtitlesSettings.text.textColor"
                label="Color"
                className="w-2/12"
              />
            </div>

            <CheckboxInput
              name="subtitlesSettings.text.isItalic"
              label="Italic"
            />

            <InputSubcategory
              title="Stroke"
              name="subtitlesSettings.text.stroke.isActive"
            >
              <SliderInput
                name="subtitlesSettings.text.stroke.width"
                label="Width"
                min={0}
                max={25}
                step={1}
              />
              <ColorInput
                name="subtitlesSettings.text.stroke.color"
                label="Color"
                className="w-1/3"
              />
            </InputSubcategory>

            <InputSubcategory
              title="Shadow"
              name="subtitlesSettings.text.shadow.isActive"
            >
              <SliderInput
                name="subtitlesSettings.text.shadow.opacity"
                label="Opacity"
                min={0}
                max={100}
                step={1}
              />
              <SliderInput
                name="subtitlesSettings.text.shadow.blurRadius"
                label="Blur Radius"
                min={0}
                max={50}
                step={1}
              />
              <div className="flex flex-row w-full justify-between gap-x-4">
                <SliderInput
                  name="subtitlesSettings.text.shadow.offsetX"
                  label="Offset X"
                  min={-100}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <SliderInput
                  name="subtitlesSettings.text.shadow.offsetY"
                  label="Offset Y"
                  min={-100}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
              <ColorInput
                name="subtitlesSettings.text.shadow.color"
                label="Color"
                className="w-1/3"
              />
            </InputSubcategory>

          </InputSubcategory>

          <InputSubcategory title="Subtitling">
            <SliderInput
              name="subtitlesSettings.subtitling.maxChar"
              label="Maximum length in characters"
              min={0}
              max={50}
              step={1}
            />
            <SliderInput
              name="subtitlesSettings.subtitling.maxDuration"
              label="Maximum duration in seconds"
              min={0}
              max={20}
              step={1}
            />
            <SliderInput
              name="subtitlesSettings.subtitling.startAdjust"
              label="Start time adjust"
              min={-2}
              max={2}
              step={0.01}
            />
            <SliderInput
              name="subtitlesSettings.subtitling.endAdjust"
              label="End time adjust"
              min={-2}
              max={2}
              step={0.01}
            />
          </InputSubcategory>

          <InputSubcategory title="Animation">
            <SliderInput
              name="subtitlesSettings.animation.fadeInDuration"
              label="Fade in duration"
              min={0}
              max={2}
              step={0.01}
            />
            <SliderInput
              name="subtitlesSettings.animation.fadeOutDuration"
              label="Fade out duration"
              min={0}
              max={2}
              step={0.01}
            />
          </InputSubcategory>
        </TabsContent>
        <TabsContent value="background" className="space-y-4 mt-0 overflow-y-scroll px-[5px] mx-[-5px] h-full">
          <VideoInput
            name="backgroundSettings.fileName"
            label="Choose a background video"
          />
          <FormWarning message="We do not recommend using stock videos, because your video could be striked by the algorithms ! We highly encourage you to record or buy your own footage." />
        </TabsContent>
      </Tabs>
    </div>
)};

export default StoryTemplateForm;