import { useFormContext } from "react-hook-form";
import { FormContext, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useContext } from "react";
import { Textarea } from "@/components/ui/textarea";

interface TextareaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}

const TextareaInput = ({
  name,
  label,
  placeholder,
  className,
  ...props
}: TextareaInputProps) => {
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
            <Textarea
              {...field}
              placeholder={placeholder}
              disabled={isSubmitting}
              className="h-24 max-h-48"
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default TextareaInput;