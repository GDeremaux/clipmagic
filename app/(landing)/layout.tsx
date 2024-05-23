import { cn } from "@/lib/utils"
import Navbar from "./_components/navbar"

export default function LandingLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
			<>
				<Navbar />

				<main className={cn("mt-24")}>
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center max-w-[1400px] px-8">
              {children}
            </div>
          </div>
				</main>
			
				<footer>
					{/* Nothing here for the moment */}
				</footer>

			</>

    )
  }