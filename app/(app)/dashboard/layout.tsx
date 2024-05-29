import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

interface DashbaordLayoutProps {
  children: React.ReactNode
}

const DashbaordLayout = ({
  children
}: DashbaordLayoutProps) => {
  return (
    <div className="h-screen w-full flex flex-row justify-between">
      <Sidebar /> {/* LEFT */}
      <div className="flex flex-col w-full m-0"> {/* RIGHT */}
        <Navbar />
        <div className="flex flex-row justify-center h-screen pt-3 px-8 overflow-auto">
          <div className="h-full max-w-[1116px] w-full"> {/* CENTERED CONTENT */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbaordLayout;