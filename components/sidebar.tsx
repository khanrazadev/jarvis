import Image from "next/image";
import Link from "next/link";

const SidebarComponent = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
        </Link>
        <div className="space-y-1"></div>
      </div>
    </div>
  );
};

export default SidebarComponent;
