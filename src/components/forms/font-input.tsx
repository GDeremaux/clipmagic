import { useFormContext } from "react-hook-form";
import { FormContext, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fonts } from "@/data/font";
import SelectInput from "@/components/forms/select-input";

interface FontInputProps {
  name: string;
  label: string;
  placeholder: string;
  className?: string;
}

const FontInput = ({
  name,
  label,
  placeholder,
  className
}: FontInputProps) => {
  return (
    <SelectInput
      name={name}
      label={label}
      placeholder={placeholder}
      className="w-5/12"
    >
      {
        Object.keys(fonts).map((font: string) => {
          return (
            <SelectItem value={(fonts as any)[font].fileName} className={className}>{font}</SelectItem>
          )
        })
      }
    </SelectInput>
  )
}

export default FontInput;