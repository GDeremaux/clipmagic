import { useFormContext } from "react-hook-form";
import { FormContext, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useContext } from "react";

interface TextInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

const TextInput = ({
  name,
  label,
  placeholder
}: TextInputProps) => {
  const form = useFormContext();
  const { isPending } = useContext(FormContext);
  
  return (
    <FormField
      control={form.control}
      name={name}
      render={({field}) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
          <Input
            {...field}
            placeholder={placeholder}
            disabled={isPending}
          />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default TextInput;