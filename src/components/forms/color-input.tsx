"use client";

import { useFormContext } from "react-hook-form";
import { FormContext, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useContext, useEffect, useState } from "react";
import { GradientPicker } from "@/components/gradient-picker";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import * as z from "zod";
import { RGBColorSchema } from "@/schemas/color";
import { Slider } from "@/components/ui/slider";

interface ColorInputProps {
  name: string;
  label: string;
  className?: string;
}

const ColorInput = ({
  name,
  label,
  className
}: ColorInputProps) => {
  const form = useFormContext();
  
  const { isSubmitting } = form.formState;  // If the form is submitting
  const isDisabled = useContext(FormContext).isDisabled;  // If this input is disabled (2 different things)

  const isPending = isSubmitting || isDisabled;  // Is this input pending ? (just for the front-end)

  const initialColor = form.getValues(name) || { r: 0, g: 0, b: 0 };
  const [color, setColor] = useState<z.infer<typeof RGBColorSchema>>(initialColor);

  return (
    <FormField
      control={form.control}
      name={name}
      disabled={isDisabled}
      render={({field: {value, onChange}}) => (
        <FormItem className={cn(isPending && "opacity-50", className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger className="w-full">
                <Button
                  variant="outline"
                  className={cn("w-full flex flex-row justify-between items-center gap-x-2")}
                  disabled={isPending}
                >
                  <span
                    style={{
                      backgroundColor: `rgb(${color?.r},${color?.g},${color?.b})`
                    }}
                    className="h-4 w-full rounded-sm"
                  />
                  <ChevronDown className="h-4 w-4 opacity-50 shrink-0"/>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className={cn(isPending && "opacity-50", "flex flex-col gap-y-6 pb-2")} >
                  <span className="text-sm font-medium">Color picker</span>

                  <span
                    style={{
                      backgroundColor: `rgb(${color?.r},${color?.g},${color?.b})`
                    }}
                    className="h-6 w-full bg-white rounded-lg"
                  />

                  <div className="flex flex-col gap-y-4">
                    <div className="flex flex-row justify-between">
                      <FormLabel>Red</FormLabel>
                      <span className="text-sm font-mono opacity-50">{color.r}</span>
                    </div>
                    <Slider
                      defaultValue={[color.r]}
                      max={255}
                      min={0}
                      step={1}
                      disabled={isPending}
                      onValueChange={(vals) => {
                        setColor({
                          ...color,
                          r: vals[0]
                        })
                        onChange(color)
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-y-4">
                    <div className="flex flex-row justify-between">
                      <FormLabel>Green</FormLabel>
                      <span className="text-sm font-mono opacity-50">{color.g}</span>
                    </div>
                    <Slider
                      defaultValue={[color.g]}
                      max={255}
                      min={0}
                      step={1}
                      disabled={isPending}
                      onValueChange={(vals) => {
                        const newColor = { ...color, g: vals[0] };
                        setColor(newColor)
                        onChange(newColor);
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-y-4">
                    <div className="flex flex-row justify-between">
                      <FormLabel>Blue</FormLabel>
                      <span className="text-sm font-mono opacity-50">{color.b}</span>
                    </div>
                    <Slider
                      defaultValue={[color.b]}
                      max={255}
                      min={0}
                      step={1}
                      disabled={isPending}
                      onValueChange={(vals) => {
                        const newColor = { ...color, b: vals[0] };
                        setColor(newColor);
                        onChange(newColor);
                      }}
                    />
                  </div>
                </div>

              </PopoverContent>
            </Popover>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ColorInput;