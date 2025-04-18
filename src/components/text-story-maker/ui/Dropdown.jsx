import { cloneElement, useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";

/**
 * Dropdown component for displaying a toggleable menu.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The dropdown content, including DropdownTrigger and DropdownContent.
 * @param {string} props.label - Accessible label for the dropdown menu.
 * @returns {JSX.Element} The rendered Dropdown component.
 */
export const Dropdown = ({ children, label = "Menu" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuId = useRef(`dropdown-menu-${Math.random().toString(36).slice(2, 9)}`).current;

  /**
   * Toggles the dropdown open or closed.
   */
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    /**
     * Handles clicks outside the dropdown to close it.
     *
     * @param {MouseEvent} event - The mouse event triggered by clicking outside.
     */
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard events for accessibility
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef} role="navigation" aria-label={label}>
      {children({ isOpen, toggleDropdown, menuId })}
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.func.isRequired,
  label: PropTypes.string,
};

/**
 * DropdownTrigger component for rendering the trigger button.
 *
 * @param {Object} props - Component props.
 * @param {Function} props.onClick - The click handler for toggling the dropdown.
 * @param {React.ReactElement} props.children - The button element to be used as the trigger.
 * @param {boolean} props.isOpen - Whether the dropdown is open.
 * @param {string} props.menuId - ID of the dropdown menu for aria attributes.
 * @returns {JSX.Element} The rendered DropdownTrigger component.
 */
export const DropdownTrigger = ({ onClick, children, isOpen, menuId }) => {
  return (
    <>
      {cloneElement(children, {
        onClick,
        "aria-expanded": isOpen,
        "aria-haspopup": true,
        "aria-controls": isOpen ? menuId : undefined,
      })}
    </>
  );
};

DropdownTrigger.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  menuId: PropTypes.string,
};

/**
 * DropdownContent component for rendering the dropdown menu.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Whether the dropdown is open.
 * @param {React.ReactNode} props.children - The dropdown menu content.
 * @param {string} props.menuId - ID for the dropdown menu.
 * @param {string} props.label - Accessible label for the menu.
 * @returns {JSX.Element|null} The rendered DropdownContent component or null if not open.
 */
export const DropdownContent = ({
  isOpen,
  children,
  menuId = "dropdown-menu",
  label = "Dropdown menu",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute right-0 mt-2 min-w-70 rounded-3xl bg-neutral-900/97 p-6 py-4 text-white shadow-lg"
      role="menu"
      id={menuId}
      aria-label={label}
      tabIndex={-1}
    >
      <div role="presentation">{children}</div>
    </div>
  );
};

DropdownContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  menuId: PropTypes.string,
  label: PropTypes.string,
};
