import { useFormContext } from "react-hook-form";
import { FormContext, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectInputProps {
  children: React.ReactNode;
  name: string;
  label: string;
  placeholder: string;
  className?: string;
}

const SelectInput = ({
  children,
  name,
  label,
  placeholder,
  className,
}: SelectInputProps) => {
  const form = useFormContext();
  
  const { isSubmitting } = form.formState;  // If the form is submitting
  const isDisabled = useContext(FormContext).isDisabled;  // If this input is disabled (2 different things)

  const isPending = isSubmitting || isDisabled;  // Is this input pending ? (just for the front-end)
  
  return (
    <FormField
      control={form.control}
      name={name}
      disabled={isDisabled}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={ isPending }>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} className="w-full" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {children}  {/* SelectItems */}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default SelectInput;