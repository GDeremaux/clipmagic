import FullLogo from "@/components/brand/full-logo";
import { Button } from "@/components/ui/button";
import { Plus, Film, Settings, Sparkles, HelpCircle } from 'lucide-react';
import NavButton from "./nav-button";

interface SidebarProps {

}

const Sidebar = ({}: SidebarProps) => {
  return (
    <div className="flex flex-col px-4 py-6 border-r-[1px] shadow-sm justify-between flex-shrink-0 h-screen w-64 bg-card">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col justify-start items-center mb-1">
          <FullLogo
            width={160}
            className="mx-4"
          />
        </div>
        <div className="w-full flex flex-col">
          <Button size="lg" className="flex flex-row items-center justify-start px-4">
            <Plus className="h-6 w-6 mr-2" />
            <span className="pb-0.5">New project</span>
          </Button>
        </div>
        <div className="w-full flex flex-col text-muted-foreground gap-y-1">
          <NavButton
            text="My projects"
            href="/dashboard/projects"
            icon={<Film />}
          />
          <NavButton
            text="Settings"
            href="/dashboard/settings"
            icon={<Settings />}
          />
        </div> 
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="w-full flex flex-col text-muted-foreground gap-y-1">
          <NavButton
            text="Upgrade to Pro"
            href="/dashboard/upgrade"
            icon={<Sparkles />}
          />
        </div>
      </div>
    </div>
  )
}

export default Sidebar;