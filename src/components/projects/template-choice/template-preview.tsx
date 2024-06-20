import { buttonVariants } from "@/components/ui/button";
import { H4 } from "@/components/ui/typography";
import { ProjectTemplate as ProjectTemplateInterface } from "@/data/template";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TemplatePreviewProps {
  template: ProjectTemplateInterface,
  setProjectTemplateId: Function
}

const TemplatePreview = ({
  template,
  setProjectTemplateId
}: TemplatePreviewProps) => {
  const {id, name, description} = template;

  const onClick = () => {
    setProjectTemplateId(id);
  };

  return (
    <div
      className={cn(buttonVariants({variant: "outline"}), "flex items-center justify-start space-x-4 h-28 rounded-lg border p-4 cursor-pointer")}
      onClick={onClick}
    >
      <Image
        alt={description}
        src={`/templates/thumbnails/story.jpg`}
        height={0}
        width={44}
        className="object-cover rounded-sm"
      />
      <div className="flex flex-col gap-y-0.5">
        <H4 className="font-bold">Stories</H4>
        <span className="text-muted-foreground">{description}</span>
      </div>
    </div>
  );
};

export default TemplatePreview;