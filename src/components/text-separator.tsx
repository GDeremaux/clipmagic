import { Separator } from "@/components/ui/separator";

interface TextSeparatorProps {
  text: string
}

const TextSeparator = ({
  text
}: TextSeparatorProps) => {
  return (
    <div className="flex flex-row gap-x-2 w-full items-center">
      <div data-orientation="horizontal" role="none" className="shrink bg-border h-[1px] grow"></div>
      <span className="w-fit text-sm text-neutral-400">{text}</span>
      <div data-orientation="horizontal" role="none" className="shrink bg-border h-[1px] grow"></div>
    </div>
    
  )
}

export default TextSeparator;