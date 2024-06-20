import LogoIcon from "@/components/brand/logo-icon";
import VideoPreview from "@/components/projects/video-preview";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface TemplateFormWrapperProps {
  children: React.ReactNode
}

const TemplateFormWrapper = ({
  children
}: TemplateFormWrapperProps) => {
  return (
    <div className="flex flex-row gap-x-4 flex-grow-0">
      <div className="flex flex-col gap-y-4 justify-between w-fit h-full flex-grow">
        <div className="max-h-[533px]">
          {children}
        </div>
        
        <Button variant="secondary">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh preview
        </Button>
      </div>
      <div className="flex flex-col gap-y-4 justify-between w-fit h-full flex-shrink-0">
        <VideoPreview />
        <Button>
          <LogoIcon
            width={16}
            variant="unicolor"
            invertTheme
            className="mr-2"
          />
          Render
        </Button>
      </div>
    </div>
  )
}

export default TemplateFormWrapper;