import { cloneElement, useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";

/**
 * Dropdown component for displaying a toggleable menu.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The dropdown content, including DropdownTrigger and DropdownContent.
 * @returns {JSX.Element} The rendered Dropdown component.
 */
export const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <div className="relative" ref={dropdownRef}>
      {children({ isOpen, toggleDropdown })}
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.func.isRequired,
};

/**
 * DropdownTrigger component for rendering the trigger button.
 *
 * @param {Object} props - Component props.
 * @param {Function} props.onClick - The click handler for toggling the dropdown.
 * @param {React.ReactElement} props.children - The button element to be used as the trigger.
 * @returns {JSX.Element} The rendered DropdownTrigger component.
 */
export const DropdownTrigger = ({ onClick, children }) => {
  return (
    <>
      {cloneElement(children, {
        onClick,
      })}
    </>
  );
};

DropdownTrigger.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

/**
 * DropdownContent component for rendering the dropdown menu.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Whether the dropdown is open.
 * @param {React.ReactNode} props.children - The dropdown menu content.
 * @returns {JSX.Element|null} The rendered DropdownContent component or null if not open.
 */
export const DropdownContent = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 min-w-70 rounded-3xl bg-neutral-900/97 p-6 py-4 text-white shadow-lg">
      <div>{children}</div>
    </div>
  );
};

DropdownContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
