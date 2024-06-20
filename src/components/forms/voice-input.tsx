import { useFormContext } from "react-hook-form";
import { FormContext, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useContext, useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, Play } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import SelectInput from "./select-input";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Badge } from "../ui/badge";


const ELEVENLABS_VOICES_API = "https://api.elevenlabs.io/v1/voices";


const getOptions = async () => {
  try {
    const parsedJSON = await axios.get(ELEVENLABS_VOICES_API);  // Request to Elevenlabs API

    const options = parsedJSON.data.voices.map((voice: any) => {
      return {
        label: voice.name,
        value: voice.voice_id,
        previewUrl: voice.preview_url,
        labels: [voice.labels["description"], voice.labels["use case"]]
      }
    });  // Format the options

    return options;
  } catch (error) {
    console.error(error);
  }
};


interface VoiceInputProps {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}


const VoiceInput = ({
  name,
  label,
  placeholder = "Select a voice",
  className
}: VoiceInputProps) => {
  const form = useFormContext();
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  const { isSubmitting } = form.formState;
  const isDisabled = useContext(FormContext).isDisabled;
  const isPending = isSubmitting || isDisabled;


  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const options = await getOptions();
        setOptions(options);
      } catch (error) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);


  const handlePlayClick = (  // Not used yet
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string
  ) => {
    event.stopPropagation();
    const audio = new Audio(url);
    audio.play();
  };

  
  return (
    <SelectInput
      {...{ name, label, placeholder, className }}
    >
      {
        options.map((option: any) => {  // For each voice in options
          return (
            <div className="flex flex-row items-center justify-between">
              <SelectItem
                key={option.value}
                value={option.value}
                onClick={event => event.stopPropagation()}
                customItemText
              >
                <div className="flex flex-row items-center justify-between w-full">
                  <SelectPrimitive.ItemText>
                    {option.label}
                  </SelectPrimitive.ItemText>
                  <div className="flex flex-row gap-x-2 items-center">
                    {
                      option.labels.map((label: string) => {
                        return (
                          <Badge variant="secondary">
                            {label}
                          </Badge>
                        )
                      })
                    }
                  </div>
                </div>
              </SelectItem>
              <div onClick={(e) => {handlePlayClick(e, option.previewUrl)}} className="h-8 flex items-center hover:bg-secondary cursor-pointer flex-shrink-0 px-2 rounded-sm">
                <Play className="h-4 w-4" />
              </div>
              
            </div>

          )
        })
      }
    </SelectInput>
  )
}

export default VoiceInput;