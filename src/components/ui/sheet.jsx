"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
  useRef,
} from "react";

import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { RiCloseFill } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Create context for state management
const SheetContext = createContext({
  open: false,
  onOpenChange: () => {},
  side: "right",
});

/**
 * Sheet component to manage state and provide context.
 *
 * @param {Object} props - Component props
 * @param {boolean} [props.open] - Controlled open state
 * @param {Function} [props.onOpenChange] - Callback for open state change
 * @param {any} props.children - Content inside the sheet
 * @returns {JSX.Element} Sheet component
 */
function Sheet({ open: controlledOpen, onOpenChange, children, ...props }) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const handleOpenChange = useCallback(
    (value) => {
      if (controlledOpen === undefined) {
        setUncontrolledOpen(value);
      }
      onOpenChange?.(value);
    },
    [controlledOpen, onOpenChange]
  );

  return (
    <SheetContext.Provider
      value={{
        open,
        onOpenChange: handleOpenChange,
        side: "right",
      }}
    >
      <div data-slot="sheet" {...props}>
        {children}
      </div>
    </SheetContext.Provider>
  );
}

Sheet.propTypes = {
  open: PropTypes.bool,
  onOpenChange: PropTypes.func,
  children: PropTypes.node,
};

/**
 * Button to close the sheet.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Close button content
 * @returns {JSX.Element} SheetClose component
 */
function SheetClose({ className, children, ...props }) {
  const { onOpenChange } = useContext(SheetContext);

  return (
    <Button
      type="button"
      data-slot="sheet-close"
      variant="secondary"
      className={cn("h-10 w-10", className)}
      onClick={() => onOpenChange(false)}
      {...props}
    >
      {children}
    </Button>
  );
}

SheetClose.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Portal for rendering sheet content outside the DOM hierarchy.
 *
 * @param {Object} props - Component props
 * @param {any} props.children - Portal content
 * @returns {JSX.Element|null} SheetPortal component
 */
function SheetPortal({ children, ...props }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div data-slot="sheet-portal" {...props}>
      {children}
    </div>,
    document.body
  );
}

SheetPortal.propTypes = {
  children: PropTypes.node,
};

/**
 * Overlay for the sheet, used as a backdrop.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} SheetOverlay component
 */
function SheetOverlay({ className, ...props }) {
  const { open, onOpenChange } = useContext(SheetContext);

  return (
    <div
      role="presentation"
      aria-hidden={!open}
      data-slot="sheet-overlay"
      data-state={open ? "open" : "closed"}
      className={cn(
        "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        open ? "opacity-100" : "pointer-events-none opacity-0",
        className
      )}
      onClick={() => onOpenChange(false)}
      {...props}
    />
  );
}

SheetOverlay.propTypes = {
  className: PropTypes.string,
};

/**
 * Main content area of the sheet.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Content inside the sheet
 * @param {string} [props.side="right"] - Side of the screen where the sheet appears
 * @returns {JSX.Element|null} SheetContent component
 */
function SheetContent({ className, children, side = "right", ...props }) {
  const { open, onOpenChange } = useContext(SheetContext);
  const contentRef = useRef(null);

  // Handle ESC key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  // Prevent scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Always render, use CSS transforms to hide
  return (
    <SheetPortal>
      <SheetOverlay />
      <div
        ref={contentRef}
        data-slot="sheet-content"
        data-state={open ? "open" : "closed"}
        aria-hidden={!open}
        className={cn(
          "bg-background border-border/50 fixed z-50 flex flex-col gap-4 shadow-lg",
          "transition-all duration-300 ease-in-out",
          !open && "pointer-events-none",
          // Side-specific transforms and animations
          side === "right" && [
            "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            open
              ? "data-[state=open]:animate-in data-[state=open]:slide-in-from-right translate-x-0"
              : "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right translate-x-full",
          ],
          side === "left" && [
            "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            open
              ? "data-[state=open]:animate-in data-[state=open]:slide-in-from-left translate-x-0"
              : "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left translate-x-[-100%]",
          ],
          side === "top" && [
            "inset-x-0 top-0 h-auto border-b",
            open
              ? "data-[state=open]:animate-in data-[state=open]:slide-in-from-top translate-y-0"
              : "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top translate-y-[-100%]",
          ],
          side === "bottom" && [
            "inset-x-0 bottom-0 h-auto border-t",
            open
              ? "data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom translate-y-0"
              : "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom translate-y-full",
          ],
          className
        )}
        {...props}
      >
        {children}
      </div>
    </SheetPortal>
  );
}

SheetContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  side: PropTypes.oneOf(["right", "left", "top", "bottom"]),
};

/**
 * Header section of the sheet.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Content inside the header
 * @returns {JSX.Element} SheetHeader component
 */
function SheetHeader({ className, children, ...props }) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(
        "flex flex-row items-center justify-between gap-4",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-1.5">{children}</div>
      <SheetClose>
        <RiCloseFill className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetClose>
    </div>
  );
}

SheetHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Footer section of the sheet.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} SheetFooter component
 */
function SheetFooter({ className, ...props }) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

SheetFooter.propTypes = {
  className: PropTypes.string,
};

export { Sheet, SheetClose, SheetContent, SheetHeader, SheetFooter };
