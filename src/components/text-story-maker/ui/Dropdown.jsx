import { cloneElement, useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";

/**
 * Dropdown component for displaying a toggleable menu.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The dropdown content, including DropdownTrigger and DropdownContent.
 * @returns {JSX.Element} The rendered Dropdown component.
 */
const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
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
    <div className="absolute right-0 mt-2 min-w-40 rounded-lg bg-neutral-100 p-2 shadow-xl">
      <div>{children}</div>
    </div>
  );
};

DropdownContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dropdown;
