import React, { cloneElement, useState, useEffect, useRef, ReactNode, ReactElement } from "react";

/**
 * Dropdown component for displaying a toggleable menu.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The dropdown content, including DropdownTrigger and DropdownContent.
 * @param {string} props.label - Accessible label for the dropdown menu.
 * @returns {React.JSX.Element} The rendered Dropdown component.
 */
interface DropdownProps {
  children: (props: { isOpen: boolean; toggleDropdown: () => void; menuId: string }) => ReactNode;
  label?: string;
}

export const Dropdown = ({ children, label = "Menu" }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
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
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    const handleKeyDown = (event: KeyboardEvent) => {
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

interface DropdownTriggerProps {
  onClick: () => void;
  children: ReactElement;
  isOpen?: boolean;
  menuId?: string;
}

export const DropdownTrigger = ({
  onClick,
  children,
  isOpen = false,
  menuId,
}: DropdownTriggerProps) => {
  // Ensure children is a valid ReactElement before calling cloneElement
  if (React.isValidElement(children)) {
    return (
      <>
        {cloneElement(children as ReactElement<any>, {
          onClick,
          "aria-expanded": isOpen,
          "aria-haspopup": true,
          "aria-controls": isOpen ? menuId : undefined,
        })}
      </>
    );
  }

  return null; // Return null if children is not a valid React element
};

interface DropdownContentProps {
  isOpen: boolean;
  children: ReactNode;
  menuId?: string;
  label?: string;
}

export const DropdownContent = ({
  isOpen,
  children,
  menuId = "dropdown-menu",
  label = "Dropdown menu",
}: DropdownContentProps) => {
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
