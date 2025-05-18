"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
  useRef,
  ReactNode,
} from "react";

import { createPortal } from "react-dom";
import { RiCloseFill } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/classNameUtils";

// Create context for state management
interface ISheetContextType {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  side: "right" | "left" | "top" | "bottom";
}

const SheetContext = createContext<ISheetContextType>({
  open: false,
  onOpenChange: () => {},
  side: "right",
});

/**
 * Props for the Sheet component
 */
interface ISheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  children: ReactNode;
}

/**
 * Sheet component to manage state and provide context.
 */
function Sheet({ open: controlledOpen, onOpenChange, children, ...props }: ISheetProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const handleOpenChange = useCallback(
    (value: boolean) => {
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

/**
 * Props for the SheetClose component
 */
interface ISheetCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

/**
 * Button to close the sheet.
 */
function SheetClose({ className = "", children, ...props }: ISheetCloseProps) {
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

/**
 * Props for the SheetPortal component
 */
interface ISheetPortalProps {
  children: ReactNode;
}

/**
 * Portal for rendering sheet content outside the DOM hierarchy.
 */
function SheetPortal({ children, ...props }: ISheetPortalProps) {
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

/**
 * Props for the SheetOverlay component
 */
interface ISheetOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Overlay for the sheet, used as a backdrop.
 */
function SheetOverlay({ className = "", ...props }: ISheetOverlayProps) {
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

/**
 * Props for the SheetContent component
 */
interface ISheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  side?: "right" | "left" | "top" | "bottom";
}

/**
 * Main content area of the sheet.
 */
function SheetContent({ className = "", children, side = "right", ...props }: ISheetContentProps) {
  const { open, onOpenChange } = useContext(SheetContext);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle ESC key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
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

  return (
    <SheetPortal>
      <SheetOverlay />
      <div
        ref={contentRef}
        data-slot="sheet-content"
        data-state={open ? "open" : "closed"}
        className={cn(
          "bg-background border-border/50 fixed z-50 flex flex-col gap-4 shadow-lg",
          "transition-all duration-300 ease-in-out",
          !open && "pointer-events-none",
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

/**
 * Props for the SheetHeader component
 */
interface ISheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

/**
 * Header section of the sheet.
 */
function SheetHeader({ className, children, ...props }: ISheetHeaderProps) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-row items-center justify-between gap-4", className)}
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

/**
 * Props for the SheetFooter component
 */
interface ISheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Footer section of the sheet.
 */
function SheetFooter({ className, ...props }: ISheetFooterProps) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("border-border mt-auto flex flex-col gap-2 border-t p-4", className)}
      {...props}
    />
  );
}

export { Sheet, SheetClose, SheetContent, SheetHeader, SheetFooter };
