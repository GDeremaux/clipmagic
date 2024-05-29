"use client";

import TextInput from "@/components/forms/text-input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { H4 } from "@/components/ui/typography";
import { TemplateFormComponentProps, projectTemplates } from "@/data/template";
import { zodResolver } from "@hookform/resolvers/zod";
import { on } from "events";
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

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onChange = (values: z.infer<typeof FormSchema>) => {
    startTransition(async () => {
      setFormValues(values);
    })
  }

	return (
    <div className="flex-grow">
      <Form {...form}>
        <form
          onChange={form.handleSubmit(onChange)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <Tabs defaultValue="story" className="w-full space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="story">Story</TabsTrigger>
                <TabsTrigger value="voice">Voice</TabsTrigger>
                <TabsTrigger value="subtitles">Subtitles</TabsTrigger>
                <TabsTrigger value="background">Background</TabsTrigger>
              </TabsList>
              <TabsContent value="story" className="flex flex-col gap-y-4">
                <H4>Story</H4>
                <TextInput
                  name="storySettings.redditLink"
                  label="Reddit Link"
                  placeholder="https://www.reddit.com/r/askreddit/..."
                />
              </TabsContent>
              <TabsContent value="voice">
                <H4>Voice (text-to-speech)</H4>
              </TabsContent>
              <TabsContent value="subtitles">
                <H4>Subtitles and text</H4>
              </TabsContent>
              <TabsContent value="background">
                <H4>Background</H4>
              </TabsContent>
            </Tabs>
          </div>
        </form>
      </Form>
    </div>
)};

export default StoryTemplateForm;