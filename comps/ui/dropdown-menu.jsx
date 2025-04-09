"use client";

import * as React from "react";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
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

function DropdownMenuGroup({ children, ...props }) {
  return (
    <div role="group" data-slot="dropdown-menu-group" {...props}>
      {children}
    </div>
  );
}

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
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

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

// Remaining simpler components

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

// Sub-menu implementation
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
