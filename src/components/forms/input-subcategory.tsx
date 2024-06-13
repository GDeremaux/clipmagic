"use client";

import { useState } from "react";
import { ChevronDown, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";import { FormContext, FormLabel } from "../ui/form";
import { cn } from "@/lib/utils";
import CheckboxInput from "./checkbox-input";
import { useFormContext } from "react-hook-form";

interface InputSubcategoryProps {
  children?: React.ReactNode;
  title: string;
  name?: string;
}

const InputSubcategory = ({
  children,
  title,
  name
}: InputSubcategoryProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useFormContext();
  const isDisabled = name ? !form.watch(name) : false;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="rounded-md border flex flex-col overflow-hidden"
    >
      <CollapsibleTrigger asChild>
        <div className={cn("flex flex-row items-center justify-between gap-x-1 h-12 px-3 text-sm font-medium transition-colors hover:bg-accent cursor-pointer", isOpen && "border-b")}>
          {
            !name &&
            <span>{title}</span>
          }
          {
            name &&
            <CheckboxInput label={title} name={name} />
          }
          <ChevronDown className={cn("h-4 w-4 opacity-50", isOpen && "rotate-180")} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <FormContext.Provider
          value={{
            isDisabled
          }}
        >
          <div className="flex flex-col gap-y-4 m-3 mt-4 mb-5">
            {children}
          </div>
        </FormContext.Provider>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default InputSubcategory;