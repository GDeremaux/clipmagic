import { useFormContext } from "react-hook-form";
import { FormContext, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useContext, useState } from "react";
import { H4 } from "@/components/ui/typography";
import TextSeparator from "@/components/text-separator";
import { CloudUploadIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Dropzone from 'react-dropzone';
import getPresignedUrl from "@/actions/aws/s3/get-presigned-url";
import axios, { AxiosProgressEvent } from 'axios';
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import VideoPreview from "@/components/video-preview";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const uploadToS3 = async (
  acceptedFiles: File[],
  setUploadProgress: Function = () => {},
  setIsProgressBarShown: Function = () => {}
) => {
  if (typeof acceptedFiles[0] === "undefined") return;

  const { uploadUrl, key } = await getPresignedUrl(acceptedFiles[0].type);

  const config = {
    onUploadProgress: (progressEvent: AxiosProgressEvent) => {
      if (progressEvent.total !== undefined) {
        const { loaded, total } = progressEvent;
        const progress = Math.round((loaded * 100) / total);
        setUploadProgress(progress);
      }
    }
  };

  try {
    setIsProgressBarShown(true);
    await axios.put(uploadUrl, acceptedFiles[0], config);
  } catch (error) { } finally {
    setIsProgressBarShown(false);
  }

  return key;
}

interface VideoInputProps {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}

const VideoInput = ({
  name,
  label,
  placeholder,
  className
}: VideoInputProps) => {
  const form = useFormContext();
  
  const { isSubmitting } = form.formState;  // If the form is submitting
  const isDisabled = useContext(FormContext).isDisabled;  // If this input is disabled (2 different things)

  const isPending = isSubmitting || isDisabled;  // Is this input pending ? (just for the front-end)

  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isProgressBarShown, setIsProgressBarShown] = useState(false);
  const [dropzoneKey, setDropzoneKey] = useState<number>(0);  // Used to reset the dropzone, since there is no official way to do so

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);  // The selected files (there can only be one)

  type GameplayCategory = 'Minecraft' | 'Trackmania';

  const gameplays = {
    "Minecraft": [
      "clipmagic-files/minecraft/Vertical+Minecraft+Parkour+5+Minutes+Gameplay+(13)+Free+To+Use.mp4",
      "clipmagic-files/minecraft/Minecraft+Parkour+Gameplay+NO+COPYRIGHT.mp4",
      "clipmagic-files/minecraft/Vertical+Minecraft+Parkour+5+Minutes+Gameplay+(9)+Free+To+Use.mp4"
    ],
    "Trackmania": [
      "clipmagic-files/trackmania/Imagine+you+Only+Press+Left+and+this+is+going+to+happen+(Trackmania+2020).mp4",
      "clipmagic-files/trackmania/I+have+build+the+Longest+Press+Forward+Map+in+Trackmania2020.mp4"
    ]
  };
  const gameplayCategories = Object.keys(gameplays);

  const [selectedCategory, setSelectedCategory] = useState<GameplayCategory>(gameplayCategories[0] as GameplayCategory);

  const onDrop = async (acceptedFiles: File[]) => {
    setSelectedFiles(acceptedFiles);  // Set the selected files

    try {
      const key = await uploadToS3(acceptedFiles, setUploadProgress, setIsProgressBarShown);
      form.setValue(name, key);  // Set the value of the input to the file name
    } catch (error) {

    }
  }

  const resetDropzone = () => {
    setDropzoneKey(dropzoneKey + 1);
    setSelectedFiles([]);
    setUploadProgress(0);
    form.setValue(name, undefined);
  }

  const selectGameplay = (fileUrl: string) => {
    setSelectedFiles([
      new File([new Blob()], "Stock footage.mp4 (not recommended)")
    ]);
    form.setValue(name, fileUrl);
  }
  
  return (
    <FormField
      control={form.control}
      name={name}
      disabled={isDisabled}
      render={({field}) => (
        <FormItem className={className}>
          <FormControl>
            <div className="flex flex-col gap-y-4 px-4 py-4 rounded-lg border">
              <div className="flex flex-row justify-between items-start">
                <H4>Choose or upload a video</H4>
                <Select
                  onValueChange={(value) => {
                    setSelectedCategory(value as GameplayCategory);
                  }}
                  defaultValue={selectedCategory}
                >
                  <SelectTrigger className="w-[180px] h-8">
                    <SelectValue placeholder="Select a gameplay..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {
                        gameplayCategories.map((category) => {
                          return (
                            <SelectItem value={category}>{category}</SelectItem>
                          )
                        })
                      }
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="mx-10">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {gameplays[selectedCategory].map((fileName) => (
                      <CarouselItem key={fileName} className="basis-1/3">
                          <VideoPreview
                            videoURL={`https://d2zvj5k63ic615.cloudfront.net/${fileName}`}
                            className={cn(
                              buttonVariants({variant: "secondary"}),
                              "rounded-sm h-[90px] w-full border p-0 cursor-pointer",
                              form.getValues(name) === fileName && "border-primary hover:border-primary"
                            )}
                            onClick={() => { selectGameplay(fileName) }}
                          />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="translate-x-2" />
                  <CarouselNext className="-translate-x-2" />
                </Carousel>                
              </div>


              <TextSeparator text="or" />

              <Dropzone
                onDrop={acceptedFiles => onDrop(acceptedFiles)}
                accept={{
                  "video/*": [".mp4", ".webm", ".ogg", ".mov", ".avi", ".flv", ".wmv", ".mkv"],
                }}
                maxSize={10**9}  // 1GB
                disabled={selectedFiles[0] ? true : false}
                key={dropzoneKey}
              >
                {({getRootProps, getInputProps, isDragActive}) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className={cn(
                      "flex h-[166px] items-center justify-between rounded-lg border-2 border-dashed cursor-pointer text-center flex-col gap-y-2 overflow-hidden",
                      selectedFiles[0] && "cursor-default"
                    )}>
                      <div className="h-1" />
                      <div className="flex flex-col gap-y-2">
                        <CloudUploadIcon className="mx-auto h-8 w-8 text-gray-400" />
                        {
                          isDragActive &&
                          <p className="text-sm text-muted-foreground">Drop the files here ...</p>
                        }
                        {
                          !isDragActive && !selectedFiles[0] &&
                          <p className="text-sm text-muted-foreground">Drag and drop your video file here or <Button variant="link" className="p-0 m-0 h-fit">click to browse</Button>.<br/><span className="italic text-xs">(max. 1GB)</span></p>
                        }
                        {
                          selectedFiles[0] &&
                          <>
                          <p className="text-sm text-muted-foreground">
                            {selectedFiles[0].name}<br />
                            {
                              isProgressBarShown &&
                              <>Uploading...</>
                            }
                          </p>
                          {
                            !isProgressBarShown &&
                            <Button
                              variant="link"
                              onClick={() => resetDropzone()}
                              className="p-0 m-0 h-fit"
                            >Cancel / upload another file</Button>
                          }
                          </>
                        }

                      </div>
                      <div className="h-1 w-full">
                        <Progress
                          value={uploadProgress}
                          bgColor="background"
                          className={cn(
                            "w-full h-1 rounded-none transition-opacity",
                            isProgressBarShown ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Dropzone>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default VideoInput;