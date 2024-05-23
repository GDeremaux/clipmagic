import FullLogo from "@/components/brand/full-logo";
import ThemeToggle from "@/components/theme-toggle";

const AuthLayout = ({
	children
}: {
	children: React.ReactNode
}) => {
	return (
    <>
      <div className="m-4 text-right"> {/* Theme toggle */}
        <ThemeToggle />
      </div>

      <div className="w-fit h-fit fixed top-0 bottom-0 left-0 right-0 m-auto">
        <div className="flex flex-col gap-y-8 items-center">
          <FullLogo width={200} />
          {children}
        </div>
      </div>
    </>
	)
}

export default AuthLayout;