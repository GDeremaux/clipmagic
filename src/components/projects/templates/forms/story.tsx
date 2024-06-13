"use client";

import FormWarning from "@/components/form-warning";
import CheckboxInput from "@/components/forms/checkbox-input";
import ColorInput from "@/components/forms/color-input";
import FontInput from "@/components/forms/font-input";
import InputSubcategory from "@/components/forms/input-subcategory";
import SelectInput from "@/components/forms/select-input";
import SliderInput from "@/components/forms/slider-input";
import TextInput from "@/components/forms/text-input";
import TextareaInput from "@/components/forms/textarea-input";
import VideoInput from "@/components/forms/video-input";
import VoiceInput from "@/components/forms/voice-input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectItem } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { H4 } from "@/components/ui/typography";
import { TemplateFormComponentProps, projectTemplates } from "@/data/template";
import { defaultInstance, getParsedFormValues } from "@/lib/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { on } from "events";
import { revalidatePath } from "next/cache";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const StoryTemplateForm = ({
  setDialogTitle,
  setFormValues
}: TemplateFormComponentProps) => {
  const storyTemplate = projectTemplates.story;
  const FormSchema = storyTemplate.formSchema;

  setDialogTitle(storyTemplate.dialogTitle);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultInstance(FormSchema)
  });

  const method = form.watch("storySettings.method");  // watch() is here used to dynamically change the UI and re-render

	return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {})}
        onChange={() => {}}
        className="space-y-6 max-h-full"
      >
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

              <SelectInput
                name="storySettings.method"
                label="Method"
                placeholder="Select a method..."
              >
                <SelectItem value="reddit">Reddit</SelectItem>
                <SelectItem value="quora">Quora</SelectItem>
                <SelectItem value="prompt">Prompt</SelectItem>
                <SelectItem value="script">Custom Script</SelectItem>
              </SelectInput>

              {
                method === "reddit" &&
                <TextInput
                  name="storySettings.redditLink"
                  label="Reddit Link"
                  placeholder="https://www.reddit.com/r/askreddit/..."
                />
              }

              {
                method === "quora" &&
                <TextInput
                  name="storySettings.quoraLink"
                  label="Quora Link"
                  placeholder="https://www.quora.com/Why-is-the-sky-blue"
                />
              }

              {
                method === "prompt" &&
                <TextareaInput
                  name="storySettings.prompt"
                  label="AI Prompt"
                  placeholder="Write a funny story about a clumsy penguin."
                />
              }

              {
                method === "script" &&
                <>
                  <TextInput
                    name="storySettings.customScript.title"
                    label="Story Title"
                    placeholder="What's the weirdest thing a penguin has said to you ?"
                  />
                  <TextareaInput
                    name="storySettings.customScript.script"
                    label="Script"
                    placeholder="In the vast frozen landscapes of Antarctica, there lived a penguin named Percy. Despite being a proud member of the penguin community,..."
                  />
                </>

              }
              
            </TabsContent>
            <TabsContent value="voice" className="space-y-4 mt-0 overflow-y-scroll px-[5px] mx-[-5px] h-full">
              <H4>Voice (text-to-speech)</H4>
              <VoiceInput
                name="voiceSettings.voiceId"
                label="Choose a voice"
                placeholder="Select a voice..."
              />
              <InputSubcategory
                title="Advanced settings"
                name="voiceSettings.advanced.isActive"
              >
                <SliderInput
                  name="voiceSettings.advanced.stability"
                  label="Stability"
                  min={0}
                  max={1}
                  step={0.01}
                />
                <SliderInput
                  name="voiceSettings.advanced.similarity"
                  label="Stability"
                  min={0}
                  max={1}
                  step={0.01}
                />
                <SliderInput
                  name="voiceSettings.advanced.styleExaggeration"
                  label="Stability"
                  min={0}
                  max={1}
                  step={0.01}
                />
                <CheckboxInput
                  name="voiceSettings.advanced.speakerBoost"
                  label="Speaker boost"
                />                                          
              </InputSubcategory>
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
                      min={0}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <SliderInput
                      name="subtitlesSettings.text.shadow.offsetY"
                      label="Offset Y"
                      min={0}
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
              <Button onClick={() => { console.log( getParsedFormValues(form, FormSchema) )}}>Debug (console.log) values</Button>
            </TabsContent>
          </Tabs>
        </div>
      </form>
    </Form>
)};

export default StoryTemplateForm;