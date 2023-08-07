import NavbarComponent from "@/components/navbar";
import SidebarComponent from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full relative">
      <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <SidebarComponent />
      </div>
      <main className="md:pl-72">
        <NavbarComponent />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
