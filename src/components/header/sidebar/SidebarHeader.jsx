"use client";

import PropTypes from "prop-types";
import { RiCloseFill } from "react-icons/ri";

import Logo from "@/components/header/parts/Logo";
import { Button } from "@/components/ui/button";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";

/**
 * Header component for the sidebar that displays the logo and close button
 *
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onClose - Function to be called when the close button is clicked
 * @returns {JSX.Element} - Rendered SidebarHeader component
 */
const SidebarHeader = ({ onClose }) => (
  <SheetHeader className="border-border flex flex-row items-center justify-between gap-4 border-b p-4">
    <SheetTitle className="flex">
      <Logo />
    </SheetTitle>
    <Button variant="secondary" className="h-10 w-10" onClick={onClose}>
      <RiCloseFill className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </Button>
  </SheetHeader>
);

SidebarHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SidebarHeader;
