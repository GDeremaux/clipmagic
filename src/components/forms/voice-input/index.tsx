import { FormContext } from "@/components/ui/form";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import SelectInput from "../select-input";
import { SelectItem } from "@/components/ui/select";
import ElevenlabsVoiceInput from "./elevenlabs-voice-input";
import InputSubcategory from "../input-subcategory";
import SliderInput from "../slider-input";
import CheckboxInput from "../checkbox-input";
import * as SelectPrimitive from "@radix-ui/react-select"
import { Badge } from "@/components/ui/badge";
import PollyVoiceInput from "./polly-voice-input";

interface VoiceInputProps {
  name: string;
}

const VoiceInput = ({
  name
}: VoiceInputProps) => {
  const form = useFormContext();

  const model = form.watch(`${name}.service`);

  const selectedLanguage: string | undefined = form.watch(`${name}.languageCode`);

  return (
    <>
      <SelectInput
        name={`${name}.service`}
        label="Model"
        placeholder="Choose a model..."
      >
        <SelectItem
          value="polly"
          customItemText
        >
          <div className="flex flex-col gap-y-0.5">
            <span className="font-bold text-lg flex flex-row gap-x-2 items-center">
              <SelectPrimitive.ItemText>Standard</SelectPrimitive.ItemText>
            </span>
            <span className="text-muted-foreground">
              Natural voice (Amazon Polly API), good for most use cases and low cost.
            </span>
          </div>
        </SelectItem>
        <SelectItem
          value="elevenlabs"
          customItemText
        >
          <div className="flex flex-col gap-y-0.5">
            <span className="font-bold text-lg flex flex-row gap-x-2 items-center">
              <SelectPrimitive.ItemText>Premium</SelectPrimitive.ItemText>
              <Badge className="h-4 mt-1">Subscribed users only</Badge>
            </span>
            <span className="text-muted-foreground">
              Ultra-realistic premium voice (Elevenlabs API), perfect for hooking the viewer.
            </span>
          </div>
        </SelectItem>
      </SelectInput>
      {
        model === "polly" &&
        <PollyVoiceInput
          name={name}
          label="Choose a voice"
          placeholder="Select a voice..."
        />
      }
      {
        model === "elevenlabs" &&
        <ElevenlabsVoiceInput
          name={name}
          label="Choose a voice"
          placeholder="Select a voice..."
        />
      }
      <InputSubcategory
        title="Advanced settings"
        name={`${name}.advanced.isActive`}
      >
        <SliderInput
          name={`${name}.advanced.speed`}
          label="Speed"
          min={0.25}
          max={2}
          step={0.01}
        />
        <SliderInput
          name={`${name}.advanced.stability`}
          label="Stability"
          min={0}
          max={1}
          step={0.01}
        />
        <SliderInput
          name={`${name}.advanced.similarity`}
          label="Similarity"
          min={0}
          max={1}
          step={0.01}
        />
        <SliderInput
          name={`${name}.advanced.styleExaggeration`}
          label="Style exaggeration"
          min={0}
          max={1}
          step={0.01}
        />
        <CheckboxInput
          name={`${name}.advanced.speakerBoost`}
          label="Speaker boost"
        />                                          
      </InputSubcategory>
    </>
  );
};

export default VoiceInput;