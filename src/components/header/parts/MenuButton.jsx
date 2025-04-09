"use client";

import PropTypes from "prop-types";
import { RiMenu3Fill } from "react-icons/ri";

import { Button } from "../../ui/button";

/**
 * MenuButton component renders a button that toggles the sidebar menu
 *
 * @component
 * @param {Object} props - The component props
 * @param {Function} props.onClick - Callback function triggered when the button is clicked
 * @returns {JSX.Element} A button component with "Menu" text and hamburger icon
 * @example
 * // Basic usage
 * const handleClick = () => setIsOpen(true);
 * <MenuButton onClick={handleClick} />
 *
 * @since 1.0.0
 * @category Navigation
 */
const MenuButton = ({ onClick }) => (
  <Button onClick={onClick} variant="default">
    Menu
    <RiMenu3Fill />
  </Button>
);

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
