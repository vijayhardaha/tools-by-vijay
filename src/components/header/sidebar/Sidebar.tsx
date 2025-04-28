"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";

import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

/**
 * Props for the Sidebar component.
 */
type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * Sidebar component that displays a sliding panel from the right side of the screen.
 * Contains header, body, and footer sections.
 *
 * @param {SidebarProps} props - Component props.
 * @returns {JSX.Element} Sidebar component.
 */
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }: SidebarProps): React.JSX.Element => (
  <Sheet open={isOpen} onOpenChange={onClose}>
    <SheetContent
      side="right"
      className="fixed inset-y-0 right-0 m-0 h-full w-[600px] max-w-full rounded-none p-0 shadow-lg"
    >
      <SidebarHeader />

      <div className="flex flex-1 flex-col">
        <SidebarBody />
      </div>
      <SidebarFooter />
    </SheetContent>
  </Sheet>
);

export default Sidebar;
