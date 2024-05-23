import ThemeToggle from "@/components/theme-toggle";

interface NavbarProps {

}

const Navbar = ({}: NavbarProps) => {
  return (
    <div className="flex flex-row justify-end h-20 p-5 items-center flex-shrink-0">
      <ThemeToggle />
    </div>
  )
}

export default Navbar;