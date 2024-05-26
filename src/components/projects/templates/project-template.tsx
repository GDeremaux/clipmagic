import { H4 } from "@/components/ui/typography";
import { ProjectTemplate as ProjectTemplateInterface } from "@/data/template";
import Image from "next/image";

interface ProjectTemplateProps {
  template: ProjectTemplateInterface,
  setProjectTemplateId: Function
}

const ProjectTemplate = ({
  template,
  setProjectTemplateId
}: ProjectTemplateProps) => {
  const {id, name, description} = template;

  const onClick = () => {
    setProjectTemplateId(id);
  };

  return (
    <div
      className="flex items-center space-x-4 h-28 rounded-lg border p-4 hover:bg-accent cursor-pointer"
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
        <span className="font-bold">Stories</span>
        <span className="text-muted-foreground">{description}</span>
      </div>
    </div>
  );
};

export default ProjectTemplate;