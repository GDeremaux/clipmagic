import { useFormContext } from "react-hook-form";
import { FormContext, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MouseEventHandler, useContext } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

interface CheckboxInputProps {
  name: string;
  label: string;
  className?: string;
}

const CheckboxInput = ({
  name,
  label,
  className
}: CheckboxInputProps) => {
  const form = useFormContext();
  
  const { isSubmitting } = form.formState;  // If the form is submitting
  const isDisabled = useContext(FormContext).isDisabled;  // If this input is disabled (2 different things)

  const isPending = isSubmitting || isDisabled;  // Is this input pending ? (just for the front-end)

  const handleItemClick = (event: React.MouseEvent<HTMLDivElement>) => {}
  
  return (
    <FormField
      control={form.control}
      name={name}
      disabled={isDisabled}
      render={({field}) => (
        <FormItem className={cn("flex flex-row items-center space-x-3 space-y-0 my-1", isPending && "opacity-50", className)} onClick={handleItemClick}>
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={isPending}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              {label}
            </FormLabel>
          </div>
        </FormItem>
      )}
    />
  )
}

export default CheckboxInput;