"use client";

import React, { JSX } from "react";

import { RiMenu3Fill } from "react-icons/ri";

import { Button } from "@/components/ui/button";

/**
 * Props for the MenuButton component.
 */
type MenuButtonProps = {
  onClick: () => void;
};

/**
 * MenuButton component renders a button that toggles the sidebar menu.
 *
 * @param {MenuButtonProps} props - The component props.
 * @returns {JSX.Element} A button component with "Menu" text and hamburger icon.
 */
const MenuButton: React.FC<MenuButtonProps> = ({ onClick }: MenuButtonProps): JSX.Element => (
  <Button onClick={onClick} variant="primary" className="w-12 md:w-auto">
    <span className="hidden md:inline-flex">Menu</span>
    <RiMenu3Fill />
  </Button>
);

export default MenuButton;
