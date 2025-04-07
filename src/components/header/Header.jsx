"use client";

import { useState } from "react";

import Drawer from "./drawer/Drawer";
import Logo from "./parts/Logo";
import MenuButton from "./parts/MenuButton";
import Box from "../ui/box"; // Import Box component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-4">
      <Box
        component="header"
        flex={true}
        align="center"
        justify="between"
        py="4"
        className="bg-dark2 text-primary-500"
      >
        <Logo />
        <MenuButton onClick={() => setIsOpen(true)} />
      </Box>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />{" "}
      {/* Renamed */}
    </div>
  );
};

export default Header;
