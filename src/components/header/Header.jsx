"use client";

import { useState } from "react";

import Logo from "@/components/header/parts/Logo";
import MenuButton from "@/components/header/parts/MenuButton";
import Sidebar from "@/components/header/sidebar/Sidebar";
import Box from "@/components/ui/box";

/**
 * Header component that displays the app logo and menu button
 * Controls the sidebar visibility
 *
 * @returns {JSX.Element} Header component with logo, menu button and sidebar
 */
const Header = () => {
  /**
   * State to control sidebar visibility
   * @type {[boolean, function]} isOpen - Whether the sidebar is open, setIsOpen - Function to update state
   */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the sidebar open/closed state
   * @returns {void}
   */
  const toggleDrawer = () => setIsOpen(!isOpen);

  /**
   * Closes the sidebar
   * @returns {void}
   */
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 shadow-xs">
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-white/65 backdrop-blur-xs"></div>
        <div className="relative z-20 mx-auto max-w-5xl px-4">
          <Box
            component="header"
            flex={true}
            align="center"
            justify="between"
            py="4"
            className="bg-dark2/80 text-primary-400"
          >
            <Logo />
            <MenuButton onClick={toggleDrawer} />
          </Box>
          <Sidebar isOpen={isOpen} onClose={closeDrawer} />
        </div>
      </header>
    </>
  );
};

export default Header;
