"use client";

import PropTypes from "prop-types";
import { RiCloseFill } from "react-icons/ri";

import Logo from "../parts/Logo";
import { Button } from "@/components/ui/button";
import { SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";

const SidebarHeader = ({ onClose }) => (
  <SheetHeader className="flex flex-row items-center justify-between gap-4 border-b border-gray-200 p-4 dark:border-gray-700">
    <SheetTitle className="flex">
      <Logo />
    </SheetTitle>
    <SheetClose asChild onClick={onClose}>
      <Button variant="default" size="icon" className="h-10 w-10">
        <RiCloseFill className="h-5 w-5" />
        <span className="sr-only">Close menu</span>
      </Button>
    </SheetClose>
  </SheetHeader>
);

SidebarHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SidebarHeader;
