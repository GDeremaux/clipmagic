import { Button } from "@/components/ui/button";
import { H1, H2 } from "@/components/ui/typography";
import { Plus } from "lucide-react";

const ProjectsPage = () => {
  return (
    <div>
      <div className="flex flex-row justify-between"> {/* Header */}
        <H2>Projects</H2>
        <Button>
          <Plus className="mr-2 ml-[-4px]"/>
          <span className="pb-0.5">New project</span>
        </Button>
      </div>
    </div>
  )
};

export default ProjectsPage;