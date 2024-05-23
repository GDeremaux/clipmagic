import Image from "next/image"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import LoginButton from "@/components/auth/login-button"

import { cn } from "@/lib/utils"
import FullLogo from "../../../src/components/brand/full-logo"

const Navbar = () => {
	return (
		<header className={cn("w-full sticky h-20 z-50 top-0 flex flex-row items-center justify-center border-b bg-background/75 dark:border-neutral-900 border-neutral-100 backdrop-blur-sm")}>
      <div className="flex flex-row max-w-[1450px] w-full justify-between items-center px-8">
        <div className={cn("h-fit w-fit")}> {/* Left */}
          <FullLogo width={160} height={40} variant="default" />
        </div> 
        <div className={cn("h-fit w-fit flex flex-row gap-x-4")}> {/* Right */}
          <Button variant={"ghost"}>Tutorials</Button>
          <ThemeToggle />
          <LoginButton >
            <Button size="default">Sign in</Button>
          </LoginButton>
        </div>
      </div>
		</header>
	)
}

export default Navbar;