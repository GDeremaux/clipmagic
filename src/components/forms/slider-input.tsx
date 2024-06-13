import { useFormContext } from "react-hook-form";
import { FormContext, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface SliderInputProps {
  name: string;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

const SliderInput = ({
  name,
  label,
  min = 0,
  max = 1,
  step = 0.01,
  className
}: SliderInputProps) => {
  const form = useFormContext();

  const { isSubmitting } = form.formState;  // If the form is submitting
  const isDisabled = useContext(FormContext).isDisabled;  // If this input is disabled (2 different things)

  const isPending = isSubmitting || isDisabled;  // Is this input pending ? (just for the front-end)
  
  return (
    <FormField
      control={form.control}
      name={name}
      disabled={isDisabled}
      render={({ field: { value, onChange } }) => (
        <FormItem className={cn("mb-2", isPending && "opacity-50", className)}>
            <FormLabel className="flex flex-row justify-between">
              {label}
              <span className="text-sm font-mono opacity-50">{value}</span>
            </FormLabel>
          <FormControl>
            <Slider
              min={min}
              max={max}
              step={step}
              defaultValue={[value]}
              disabled={isPending}
              onValueChange={(vals) => {
                onChange(vals[0]);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default SliderInput;