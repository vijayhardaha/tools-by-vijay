"use client";

import PropTypes from "prop-types";
import { RiCloseFill } from "react-icons/ri";

import Logo from "../parts/Logo";
import { Button } from "../../ui/button";
import { SheetHeader, SheetTitle } from "../../ui/sheet";

const SidebarHeader = ({ onClose }) => (
  <SheetHeader className="flex flex-row items-center justify-between gap-4 border-b border-gray-200 p-4 dark:border-gray-700">
    <SheetTitle className="flex">
      <Logo />
    </SheetTitle>{" "}
    <Button className="btn btn-primary h-10 w-10" onClick={onClose}>
      <RiCloseFill className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </Button>
  </SheetHeader>
);

SidebarHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SidebarHeader;
