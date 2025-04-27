"use client";

import PropTypes from "prop-types";

import Logo from "@/components/header/parts/Logo";
import { SheetHeader } from "@/components/ui/sheet";

/**
 * Header component for the sidebar that displays the logo and close button
 *
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onClose - Function to be called when the close button is clicked
 * @returns {JSX.Element} - Rendered SidebarHeader component
 */
const SidebarHeader = () => (
  <SheetHeader className="border-border border-b p-4">
    <div className="flex">
      <Logo />
    </div>
  </SheetHeader>
);

SidebarHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SidebarHeader;
