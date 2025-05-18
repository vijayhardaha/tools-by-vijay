"use client";

import { RiMenu3Fill } from "react-icons/ri";

import { Button } from "@/components/ui/button";

/**
 * Props for the MenuButton component.
 */
type IMenuButtonProps = {
  onClick: () => void;
};

/**
 * MenuButton component renders a button that toggles the sidebar menu.
 *
 * @param {MenuButtonProps} props - The component props.
 * @returns {React.JSX.Element} A button component with "Menu" text and hamburger icon.
 */
const MenuButton: React.FC<IMenuButtonProps> = ({
  onClick,
}: IMenuButtonProps): React.JSX.Element => (
  <Button onClick={onClick} variant="primary" className="w-12 md:w-auto" aria-label="Menu">
    <span className="hidden md:inline-flex">Menu</span>
    <span className="sr-only">Menu</span>
    <RiMenu3Fill />
  </Button>
);

export default MenuButton;
