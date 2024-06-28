import { useFormContext } from "react-hook-form";
import { FormContext, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useContext, useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, Play } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn, removeDuplicates } from "@/lib/utils";
import SelectInput from "../select-input";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Badge } from "../../ui/badge";
import { getVoices } from "@/lib/aws/polly";
import { LanguageCode } from "@aws-sdk/client-polly";

const getLanguageOptions = async () => {
  const voices = await getVoices("neural");

  const allLanguages = voices?.map((voice) => {
    return {
      label: voice.LanguageName,
      value: voice.LanguageCode,
    };
  }) || [];

  const languages: any[] = []

  for (const language of allLanguages) {
    let isIncluded = false;

    for (const includedLanguage of languages) {
      if (includedLanguage.value === language.value) {
        isIncluded = true;
      }
    }

    if (!isIncluded) {
      languages.push(language);
    }
  }

  return languages;
};


const getOptions = async (languageCode: string) => {
  const voices = await getVoices("neural");

  const options = voices?.map((voice) => {
    if (voice.LanguageCode as string == languageCode)
      return {
        label: voice.Name as string,
        value: voice.Id as string,
        languageCode: voice.LanguageCode as string,
        previewUrl: "",
        labels: [voice.Gender as string]
      }
  }) || [];

  return options;
};


interface PollyVoiceInputProps {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}


const PollyVoiceInput = ({
  name,
  label,
  placeholder = "Select a voice",
  className
}: PollyVoiceInputProps) => {
  const form = useFormContext();
  const [options, setOptions] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);

  const { isSubmitting } = form.formState;
  const isDisabled = useContext(FormContext).isDisabled;
  const isPending = isSubmitting || isDisabled;

  const selectedLanguage = form.watch(`${name}.languageCode`);
  const selectedVoiceId = form.watch(`${name}.pollyVoiceId`);


  useEffect(() => {
    const fetchLanguages = async () => {
      const languages = await getLanguageOptions();
      setLanguages(languages as any);
    }

    fetchLanguages();
  }, []);

  useEffect(() => {
    const handleLanguageChange = async () => {
      const options = await getOptions(selectedLanguage);
      setOptions(options);
      const ids = options.map(option => option?.value);
      const isSelectedVoiceValid = ids.includes(form.getValues(`${name}.pollyVoiceId`));
      if (!isSelectedVoiceValid) {
        const firstVoiceForLanguage = options.find(option => option?.languageCode == selectedLanguage);
        form.setValue(`${name}.pollyVoiceId`, firstVoiceForLanguage?.value);
      }

    }

    handleLanguageChange()
      .catch((error) => { throw error; })
  }, [selectedLanguage]);

  const handlePlayClick = (  // Not used yet
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string
  ) => {
    event.stopPropagation();
    const audio = new Audio(url);
    audio.play();
  };

  
  return (
    <>
      <SelectInput
        name={`${name}.languageCode`}
        label="Language"
        placeholder="Choose a language..."
      >
        {
          languages.map((language: any) => {
            return (
              <SelectItem
                value={language.value}
              >
                {language.label}
              </SelectItem>
            )
          })
        }
      </SelectInput>
      <SelectInput
        {...{ name: `${name}.pollyVoiceId`, label, placeholder, className }}
        key={selectedVoiceId}
      >
        {
          options.length !== 0 &&
          options.map((option: any) => {  // For each voice in options
            if (option !== undefined) return (
              <div className="flex flex-row items-center justify-between">
                <SelectItem
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
                <div onClick={(e) => {handlePlayClick(e, option.previewUrl)}} className="h-8 flex items-center hover:bg-secondary flex-shrink-0 px-2 rounded-sm opacity-50 cursor-not-allowed">
                  <Play className="h-4 w-4" />
                </div>
                
              </div>

            )
          })
        }
      </SelectInput>
    </>
    
  )
}

export default PollyVoiceInput;