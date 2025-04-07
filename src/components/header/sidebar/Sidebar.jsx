"use client";

import PropTypes from "prop-types";

import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const Sidebar = ({ isOpen, onClose }) => (
  <Sheet open={isOpen} onOpenChange={onClose}>
    <SheetContent
      side="right"
      className="fixed inset-y-0 right-0 m-0 h-full w-80 max-w-full rounded-none p-0 shadow-lg dark:bg-gray-800"
    >
      <SidebarHeader onClose={onClose} />

      <div className="flex h-[calc(100%-var(--header-height))] flex-col">
        <div className="flex-1 overflow-y-auto">
          <SidebarBody />
        </div>
      </div>
      <SidebarFooter />
    </SheetContent>
  </Sheet>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
