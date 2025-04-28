"use client";

import React, { JSX, useState } from "react";

import Link from "next/link";
import { PiTextAa as AaIcon } from "react-icons/pi";

import Logo from "@/components/header/parts/Logo";
import MenuButton from "@/components/header/parts/MenuButton";
import Sidebar from "@/components/header/sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/classNameUtils";

/**
 * Header component that displays the app logo and menu button
 * Controls the sidebar visibility
 *
 * @returns {JSX.Element} Header component with logo, menu button and sidebar
 */
const Header: React.FC = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <header className="border-border sticky top-0 z-50 border-b bg-white">
        <div className="relative z-20 mx-auto max-w-6xl px-4">
          <header className="flex items-center justify-between gap-4 py-4">
            <Logo />
            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="default"
                className={cn(
                  "w-12 border-none md:w-auto md:px-6",
                  "to-line-500 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white md:inline-flex",
                  "hover:from-pink-500 hover:via-red-500 hover:to-purple-500"
                )}
              >
                <Link href="/text-story-maker">
                  <span className="inline-flex md:hidden">
                    <span className="sr-only">Text Story Maker</span>
                    <AaIcon className="size-5" />
                  </span>
                  <span className="hidden md:inline-flex"> Text Story Maker</span>
                </Link>
              </Button>
              <MenuButton onClick={toggleDrawer} />
            </div>
          </header>
        </div>
      </header>
      <Sidebar isOpen={isOpen} onClose={closeDrawer} />
    </>
  );
};

export default Header;
