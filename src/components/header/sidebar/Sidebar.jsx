"use client";

import PropTypes from "prop-types";

import { Sheet, SheetContent } from "@/components/ui/sheet";

import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

/**
 * Sidebar component that displays a sliding panel from the right side of the screen.
 * Contains header, body, and footer sections.
 *
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls the visibility of the sidebar
 * @param {Function} props.onClose - Callback function triggered when closing the sidebar
 * @returns {JSX.Element} Sidebar component
 */
const Sidebar = ({ isOpen, onClose }) => (
  <Sheet open={isOpen} onOpenChange={onClose}>
    <SheetContent
      side="right"
      className="fixed inset-y-0 right-0 m-0 h-full w-[600px] max-w-full rounded-none p-0 shadow-lg"
    >
      <SidebarHeader />

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
