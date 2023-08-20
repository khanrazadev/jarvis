"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const MobileSidebar = async ({
  apiLimitCount = 0,
  isPro = false,
}: MobileSidebarProps) => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
