import { useFormContext } from "react-hook-form";
import { FormContext, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useContext } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}

const TextInput = ({
  name,
  label,
  placeholder,
  className,
  ...props
}: TextInputProps) => {
  const form = useFormContext();
  
  const { isSubmitting } = form.formState;  // If the form is submitting
  const isDisabled = useContext(FormContext).isDisabled;  // If this input is disabled (2 different things)

  const isPending = isSubmitting || isDisabled;  // Is this input pending ? (just for the front-end)
  
  return (
    <FormField
      control={form.control}
      name={name}
      disabled={isDisabled}
      render={({field}) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              disabled={isPending}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

const helloWorld = () => {
  console.log('Hello, World!');
}

export default TextInput;