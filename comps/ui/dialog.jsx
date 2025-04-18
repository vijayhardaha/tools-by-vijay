"use client";

import * as React from "react";

import PropTypes from "prop-types";
import { LuX as XIcon } from "react-icons/lu";

import { cn } from "@/utils/classNameUtils";

// Create Dialog Context
const DialogContext = React.createContext({
  open: false,
  onOpenChange: () => {},
});

/**
 * Root component for Dialogs.
 *
 * The Dialog component is the container for all dialog-related components.
 * It manages the state of the dialog (open/closed) and provides this state
 * to all child components through context.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render within the dialog
 * @param {boolean} [props.open=false] - Controls whether the dialog is open
 * @param {Function} [props.onOpenChange] - Callback function triggered when dialog open state changes
 * @returns {React.ReactElement} - Dialog component
 *
 * @example
 * ```jsx
 * <Dialog open={isOpen} onOpenChange={setIsOpen}>
 *   <DialogTrigger>Open Dialog</DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Example Dialog</DialogTitle>
 *     </DialogHeader>
 *     <p>Dialog content goes here</p>
 *   </DialogContent>
 * </Dialog>
 * ```
 */
function Dialog({ children, open = false, onOpenChange, ...props }) {
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleOpenChange = React.useCallback(
    (value) => {
      setIsOpen(value);
      onOpenChange?.(value);
    },
    [onOpenChange]
  );

  return (
    <DialogContext.Provider
      value={{ open: isOpen, onOpenChange: handleOpenChange }}
    >
      <div data-slot="dialog" {...props}>
        {children}
      </div>
    </DialogContext.Provider>
  );
}

Dialog.propTypes = {
  open: PropTypes.bool,
  onOpenChange: PropTypes.func,
  children: PropTypes.node,
};

/**
 * Trigger element that opens the dialog when pressed
 */
function DialogTrigger({ children, ...props }) {
  const { onOpenChange } = React.useContext(DialogContext);

  return (
    <button
      data-slot="dialog-trigger"
      type="button"
      onClick={() => onOpenChange(true)}
      {...props}
    >
      {children}
    </button>
  );
}

DialogTrigger.propTypes = {
  children: PropTypes.node,
};

/**
 * Portal component for rendering dialog
 */
function DialogPortal({ children, ...props }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return React.createPortal(
    <div data-slot="dialog-portal" {...props}>
      {children}
    </div>,
    document.body
  );
}

DialogPortal.propTypes = {
  children: PropTypes.node,
};

/**
 * Close button for the dialog
 */
function DialogClose({ children, ...props }) {
  const { onOpenChange } = React.useContext(DialogContext);

  return (
    <button
      data-slot="dialog-close"
      type="button"
      onClick={() => onOpenChange(false)}
      {...props}
    >
      {children}
    </button>
  );
}

DialogClose.propTypes = {
  children: PropTypes.node,
};

/**
 * Overlay component
 */
function DialogOverlay({ className, children, ...props }) {
  const { open, onOpenChange } = React.useContext(DialogContext);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-hidden="true"
      data-state={open ? "open" : "closed"}
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      onClick={() => onOpenChange(false)}
      {...props}
    >
      {children}
    </div>
  );
}

DialogOverlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Main content container for the dialog
 */
function DialogContent({ className, children, ...props }) {
  const { open } = React.useContext(DialogContext);

  if (!open) return null;

  return (
    <DialogPortal>
      <DialogOverlay />
      <div
        role="presentation"
        aria-hidden={!open}
        data-slot="dialog-content"
        data-state={open ? "open" : "closed"}
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation();
          }
        }}
        {...props}
      >
        {children}
        <DialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogClose>
      </div>
    </DialogPortal>
  );
}

DialogContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

// Remaining components (header, footer, title, description) can stay largely the same
// as they're primarily styling wrappers

function DialogHeader({ className, children, ...props }) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    >
      {children}
    </div>
  );
}

DialogHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

function DialogFooter({ className, children, ...props }) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

DialogFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

function DialogTitle({ className, children, ...props }) {
  return (
    <h2
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

DialogTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

function DialogDescription({ className, children, ...props }) {
  return (
    <p
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    >
      {children}
    </p>
  );
}

DialogDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
