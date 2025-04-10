"use client";

import * as React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { LuX as XIcon } from "react-icons/lu";
import { cn } from "@/lib/utils";

// Create context for state management
const SheetContext = React.createContext({
  open: false,
  onOpenChange: () => {},
  side: "right",
  disableClose: true,
});

/**
 * Sheet component to manage state and provide context.
 *
 * @param {Object} props - Component props
 * @param {boolean} [props.open] - Controlled open state
 * @param {Function} [props.onOpenChange] - Callback for open state change
 * @param {boolean} [props.disableClose=true] - Disable close button
 * @param {React.ReactNode} props.children - Content inside the sheet
 * @returns {React.ReactElement} Sheet component
 */
function Sheet({
  open: controlledOpen,
  onOpenChange,
  disableClose = true,
  children,
  ...props
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const handleOpenChange = React.useCallback(
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
      value={{ open, onOpenChange: handleOpenChange, disableClose }}
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
  disableClose: PropTypes.bool,
  children: PropTypes.node,
};

/**
 * Button to trigger the opening of the sheet.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Trigger content
 * @returns {React.ReactElement} SheetTrigger component
 */
function SheetTrigger({ children, ...props }) {
  const { onOpenChange } = React.useContext(SheetContext);

  return (
    <button
      type="button"
      data-slot="sheet-trigger"
      onClick={() => onOpenChange(true)}
      {...props}
    >
      {children}
    </button>
  );
}

SheetTrigger.propTypes = {
  children: PropTypes.node,
};

/**
 * Button to close the sheet.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Close button content
 * @returns {React.ReactElement} SheetClose component
 */
function SheetClose({ children, ...props }) {
  const { onOpenChange } = React.useContext(SheetContext);

  return (
    <button
      type="button"
      data-slot="sheet-close"
      onClick={() => onOpenChange(false)}
      {...props}
    >
      {children}
    </button>
  );
}

SheetClose.propTypes = {
  children: PropTypes.node,
};

/**
 * Portal for rendering sheet content outside the DOM hierarchy.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Portal content
 * @returns {React.ReactElement|null} SheetPortal component
 */
function SheetPortal({ children, ...props }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
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
 * @returns {React.ReactElement|null} SheetOverlay component
 */
function SheetOverlay({ className, ...props }) {
  const { open, onOpenChange } = React.useContext(SheetContext);

  if (!open) return null;

  return (
    <div
      data-slot="sheet-overlay"
      data-state={open ? "open" : "closed"}
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
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
 * @param {React.ReactNode} props.children - Content inside the sheet
 * @param {string} [props.side="right"] - Side of the screen where the sheet appears
 * @returns {React.ReactElement|null} SheetContent component
 */
function SheetContent({ className, children, side = "right", ...props }) {
  const { open, onOpenChange, disableClose } = React.useContext(SheetContext);
  const contentRef = React.useRef(null);

  // Handle ESC key
  React.useEffect(() => {
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
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <SheetPortal>
      <SheetOverlay />
      <div
        ref={contentRef}
        data-slot="sheet-content"
        data-state={open ? "open" : "closed"}
        className={cn(
          "bg-background border-border/50 data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-300",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        {!disableClose && (
          <SheetClose className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        )}
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
 * @returns {React.ReactElement} SheetHeader component
 */
function SheetHeader({ className, ...props }) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

SheetHeader.propTypes = {
  className: PropTypes.string,
};

/**
 * Footer section of the sheet.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} SheetFooter component
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

/**
 * Title of the sheet.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} SheetTitle component
 */
function SheetTitle({ className, ...props }) {
  return (
    <h2
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

SheetTitle.propTypes = {
  className: PropTypes.string,
};

/**
 * Description text for the sheet.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} SheetDescription component
 */
function SheetDescription({ className, ...props }) {
  return (
    <p
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

SheetDescription.propTypes = {
  className: PropTypes.string,
};

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
