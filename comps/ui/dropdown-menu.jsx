"use client";

import * as React from "react";

import PropTypes from "prop-types";
import {
  LuCheck as CheckIcon,
  LuChevronRight as ChevronRightIcon,
  LiCircle as CircleIcon,
} from "react-icons/lu";

import { cn } from "@/lib/utils";

// Create context for dropdown state management
const DropdownMenuContext = React.createContext({
  open: false,
  onOpenChange: () => {},
  triggerRef: { current: null },
  activeItemIndex: -1,
  setActiveItemIndex: () => {},
});

const SubMenuContext = React.createContext({
  open: false,
  onOpenChange: () => {},
  parentMenuContext: null,
});

/**
 * DropdownMenu component provides a context for dropdown functionality
 *
 * @param {Object} props - Component props
 * @param {boolean} [props.open] - Controls the open state of the dropdown menu
 * @param {Function} [props.onOpenChange] - Callback when open state changes
 * @param {React.ReactNode} props.children - Content to render inside the dropdown
 * @returns {JSX.Element} A dropdown menu component
 */
function DropdownMenu({
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  children,
  ...props
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const [activeItemIndex, setActiveItemIndex] = React.useState(-1);
  const triggerRef = React.useRef(null);

  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const onOpenChange = controlledOnOpenChange || setUncontrolledOpen;

  return (
    <DropdownMenuContext.Provider
      value={{
        open,
        onOpenChange,
        triggerRef,
        activeItemIndex,
        setActiveItemIndex,
      }}
    >
      <div data-slot="dropdown-menu" {...props}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
}

DropdownMenu.propTypes = {
  open: PropTypes.bool,
  onOpenChange: PropTypes.func,
  children: PropTypes.node.isRequired,
};

/**
 * Portal component for rendering dropdown menu content outside the DOM hierarchy
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to render inside the portal
 * @returns {React.ReactPortal|null} A React portal or null if not mounted
 */
function DropdownMenuPortal({ children, ...props }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return React.createPortal(
    <div data-slot="dropdown-menu-portal" {...props}>
      {children}
    </div>,
    document.body
  );
}

DropdownMenuPortal.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * DropdownMenuTrigger component renders a button to toggle the dropdown menu.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to render inside the trigger
 * @param {Function} [props.onClick] - Callback when the trigger is clicked
 * @returns {JSX.Element} A button element
 */
function DropdownMenuTrigger({ children, ...props }) {
  const { onOpenChange, triggerRef, open } =
    React.useContext(DropdownMenuContext);

  const handleClick = (e) => {
    e.preventDefault();
    onOpenChange(!open);
    props.onClick?.(e);
  };

  return (
    <button
      data-slot="dropdown-menu-trigger"
      ref={triggerRef}
      type="button"
      aria-haspopup="menu"
      aria-expanded={open}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

DropdownMenuTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

/**
 * DropdownMenuContent component renders the dropdown menu content.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional class names for styling
 * @param {number} [props.sideOffset=4] - Offset from the trigger element
 * @param {React.ReactNode} props.children - Content to render inside the dropdown
 * @returns {JSX.Element|null} A dropdown menu content element or null if not open
 */
function DropdownMenuContent({
  className,
  sideOffset = 4,
  children,
  ...props
}) {
  const { open, onOpenChange, triggerRef } =
    React.useContext(DropdownMenuContext);
  const contentRef = React.useRef(null);
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  // Position the dropdown relative to the trigger
  React.useEffect(() => {
    if (open && triggerRef.current && contentRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();

      let top = triggerRect.bottom + sideOffset;
      let left = triggerRect.left;

      // Adjust position if out of viewport
      if (top + contentRect.height > window.innerHeight) {
        top = triggerRect.top - contentRect.height - sideOffset;
      }

      if (left + contentRect.width > window.innerWidth) {
        left = triggerRect.right - contentRect.width;
      }

      setPosition({ top, left });
    }
  }, [open, sideOffset]);

  // Close on click outside
  React.useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        onOpenChange(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onOpenChange]);

  // Handle escape key
  React.useEffect(() => {
    if (!open) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <DropdownMenuPortal>
      <div
        data-slot="dropdown-menu-content"
        ref={contentRef}
        role="menu"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 absolute z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
        data-state={open ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    </DropdownMenuPortal>
  );
}

DropdownMenuContent.propTypes = {
  className: PropTypes.string,
  sideOffset: PropTypes.number,
  children: PropTypes.node.isRequired,
};

/**
 * DropdownMenuGroup component renders a group of dropdown menu items.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to render inside the group
 * @returns {JSX.Element} A group element
 */
function DropdownMenuGroup({ children, ...props }) {
  return (
    <div role="group" data-slot="dropdown-menu-group" {...props}>
      {children}
    </div>
  );
}

DropdownMenuGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * DropdownMenuItem component renders an individual dropdown menu item.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional class names for styling
 * @param {boolean} [props.inset] - Whether the item is inset
 * @param {string} [props.variant="default"] - Variant of the item
 * @param {React.ReactNode} props.children - Content to render inside the item
 * @param {Function} [props.onClick] - Callback when the item is clicked
 * @param {boolean} [props.disabled] - Whether the item is disabled
 * @returns {JSX.Element} A button element
 */
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  children,
  onClick,
  disabled,
  ...props
}) {
  const { onOpenChange } = React.useContext(DropdownMenuContext);

  const handleClick = (e) => {
    if (disabled) return;
    onClick?.(e);
    onOpenChange(false);
  };

  return (
    <button
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      role="menuitem"
      type="button"
      disabled={disabled}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

DropdownMenuItem.propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "destructive"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

/**
 * DropdownMenuCheckboxItem component renders a checkbox item in the dropdown menu.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional class names for styling
 * @param {React.ReactNode} props.children - Content to render inside the checkbox item
 * @param {boolean} props.checked - Whether the checkbox is checked
 * @param {Function} props.onCheckedChange - Callback when the checkbox state changes
 * @returns {JSX.Element} A checkbox item element
 */
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  onCheckedChange,
  ...props
}) {
  const handleClick = () => {
    onCheckedChange?.(!checked);
  };

  return (
    <button
      data-slot="dropdown-menu-checkbox-item"
      role="menuitemcheckbox"
      type="button"
      aria-checked={checked}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        {checked && <CheckIcon className="size-4" />}
      </span>
      {children}
    </button>
  );
}

DropdownMenuCheckboxItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  checked: PropTypes.bool.isRequired,
  onCheckedChange: PropTypes.func.isRequired,
};

/**
 * DropdownMenuRadioGroup component renders a group of radio items in the dropdown menu.
 *
 * @param {Object} props - Component props
 * @param {any} props.value - Current value of the radio group
 * @param {Function} props.onValueChange - Callback when the value changes
 * @param {React.ReactNode} props.children - Content to render inside the radio group
 * @returns {JSX.Element} A radio group element
 */
function DropdownMenuRadioGroup({ value, onValueChange, children, ...props }) {
  return (
    <div data-slot="dropdown-menu-radio-group" role="group" {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            checked: child.props.value === value,
            onCheckedChange: () => onValueChange?.(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
}

DropdownMenuRadioGroup.propTypes = {
  value: PropTypes.any.isRequired,
  onValueChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

/**
 * DropdownMenuRadioItem component renders a radio item in the dropdown menu.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional class names for styling
 * @param {React.ReactNode} props.children - Content to render inside the radio item
 * @param {any} props.value - Value of the radio item
 * @param {boolean} props.checked - Whether the radio item is checked
 * @param {Function} props.onCheckedChange - Callback when the radio item state changes
 * @returns {JSX.Element} A radio item element
 */
function DropdownMenuRadioItem({
  className,
  children,
  value,
  checked,
  onCheckedChange,
  ...props
}) {
  const handleClick = () => {
    onCheckedChange?.(true);
  };

  return (
    <button
      data-slot="dropdown-menu-radio-item"
      role="menuitemradio"
      type="button"
      aria-checked={checked}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        {checked && <CircleIcon className="size-2 fill-current" />}
      </span>
      {children}
    </button>
  );
}

DropdownMenuRadioItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  value: PropTypes.any.isRequired,
  checked: PropTypes.bool.isRequired,
  onCheckedChange: PropTypes.func.isRequired,
};

/**
 * DropdownMenuLabel component renders a label in the dropdown menu.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional class names for styling
 * @param {boolean} [props.inset] - Whether the label is inset
 * @param {React.ReactNode} props.children - Content to render inside the label
 * @returns {JSX.Element} A label element
 */
function DropdownMenuLabel({ className, inset, children, ...props }) {
  return (
    <div
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

DropdownMenuLabel.propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

/**
 * DropdownMenuSeparator component renders a separator in the dropdown menu.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional class names for styling
 * @returns {JSX.Element} A separator element
 */
function DropdownMenuSeparator({ className, ...props }) {
  return (
    <div
      data-slot="dropdown-menu-separator"
      role="separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

DropdownMenuSeparator.propTypes = {
  className: PropTypes.string,
};

/**
 * DropdownMenuShortcut component renders a shortcut in the dropdown menu.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional class names for styling
 * @returns {JSX.Element} A shortcut element
 */
function DropdownMenuShortcut({ className, ...props }) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

DropdownMenuShortcut.propTypes = {
  className: PropTypes.string,
};

/**
 * DropdownMenuSub component renders a sub-menu in the dropdown menu.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to render inside the sub-menu
 * @returns {JSX.Element} A sub-menu element
 */
function DropdownMenuSub({ children, ...props }) {
  const [open, setOpen] = React.useState(false);
  const parentMenuContext = React.useContext(DropdownMenuContext);

  return (
    <SubMenuContext.Provider
      value={{ open, onOpenChange: setOpen, parentMenuContext }}
    >
      <div data-slot="dropdown-menu-sub" {...props}>
        {children}
      </div>
    </SubMenuContext.Provider>
  );
}

DropdownMenuSub.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * DropdownMenuSubTrigger component renders a trigger for the sub-menu.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional class names for styling
 * @param {boolean} [props.inset] - Whether the trigger is inset
 * @param {React.ReactNode} props.children - Content to render inside the trigger
 * @returns {JSX.Element} A sub-menu trigger element
 */
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
  const { onOpenChange } = React.useContext(SubMenuContext);

  return (
    <button
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      type="button"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )}
      onClick={() => onOpenChange(true)}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </button>
  );
}

DropdownMenuSubTrigger.propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

/**
 * DropdownMenuSubContent component renders the content of the sub-menu.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional class names for styling
 * @returns {JSX.Element|null} A sub-menu content element or null if not open
 */
function DropdownMenuSubContent({ className, ...props }) {
  const { open, onOpenChange } = React.useContext(SubMenuContext);
  const contentRef = React.useRef(null);

  // Close on click outside
  React.useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        onOpenChange(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      data-slot="dropdown-menu-sub-content"
      ref={contentRef}
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 absolute top-0 left-full z-50 ml-1 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      data-state={open ? "open" : "closed"}
      {...props}
    />
  );
}

DropdownMenuSubContent.propTypes = {
  className: PropTypes.string,
};

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
