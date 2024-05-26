"use client";

import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { H4 } from "@/components/ui/typography";
import { TemplateFormComponentProps, projectTemplates } from "@/data/template";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const StoryTemplateForm = ({
  setDialogTitle
}: TemplateFormComponentProps) => {
  const storyTemplate = projectTemplates.story;
  const FormSchema = storyTemplate.formSchema;

  setDialogTitle(storyTemplate.dialogTitle)

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

	return (
    <div className="flex-grow">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit()}
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
              <TabsContent value="story">
                <H4>Story</H4>
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