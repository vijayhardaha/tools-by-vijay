"use client";

import * as React from "react";

import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

import { buttonVariants } from "../../src/components/ui/button";

// Create context for state management
const AlertDialogContext = React.createContext({
  open: false,
  onOpenChange: () => {},
});

/**
 * Root component for Alert Dialogs that require user confirmation.
 */
function AlertDialog({
  open: controlledOpen,
  onOpenChange,
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
    <AlertDialogContext.Provider
      value={{ open, onOpenChange: handleOpenChange }}
    >
      <div data-slot="alert-dialog" {...props}>
        {children}
      </div>
    </AlertDialogContext.Provider>
  );
}

AlertDialog.propTypes = {
  open: PropTypes.bool,
  onOpenChange: PropTypes.func,
  children: PropTypes.node,
};

/**
 * Trigger element that opens the alert dialog when pressed.
 */
function AlertDialogTrigger({ children, ...props }) {
  const { onOpenChange } = React.useContext(AlertDialogContext);

  return (
    <button
      type="button"
      data-slot="alert-dialog-trigger"
      onClick={() => onOpenChange(true)}
      {...props}
    >
      {children}
    </button>
  );
}

AlertDialogTrigger.propTypes = {
  children: PropTypes.node,
};

/**
 * Portal component for rendering alert dialog outside of parent component.
 */
function AlertDialogPortal({ children, ...props }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return React.createPortal(
    <div data-slot="alert-dialog-portal" {...props}>
      {children}
    </div>,
    document.body
  );
}

AlertDialogPortal.propTypes = {
  children: PropTypes.node,
};

/**
 * Overlay component that covers the viewport when alert dialog is open.
 *
 * The overlay provides a semi-transparent background that dims the content
 * behind the dialog, helping to focus the user's attention on the alert.
 * It automatically handles open/closed animations based on the dialog state.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes to apply to the overlay
 * @returns {React.ReactElement|null} - Rendered overlay or null when dialog is closed
 */
function AlertDialogOverlay({ className, ...props }) {
  const { open } = React.useContext(AlertDialogContext);

  if (!open) return null;

  return (
    <div
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      data-state={open ? "open" : "closed"}
      {...props}
    />
  );
}

AlertDialogOverlay.propTypes = {
  className: PropTypes.string,
  // Add propTypes for any additional props spread via ...props
};

/**
 * Main content container for the alert dialog.
 */
function AlertDialogContent({ className, children, ...props }) {
  const { open, onOpenChange } = React.useContext(AlertDialogContext);
  const contentRef = React.useRef(null);

  // Handle Escape key
  React.useEffect(() => {
    if (!open) return;

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        // Only close if there's a cancel action available
        const cancelButton = contentRef.current?.querySelector(
          '[data-cancel="true"]'
        );
        if (cancelButton) {
          onOpenChange(false);
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [open, onOpenChange]);

  // Prevent scroll on body when open
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
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <div
        ref={contentRef}
        role="alertdialog"
        aria-modal="true"
        data-slot="alert-dialog-content"
        data-state={open ? "open" : "closed"}
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AlertDialogPortal>
  );
}

AlertDialogContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Container for alert dialog header content.
 */
function AlertDialogHeader({ className, children, ...props }) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    >
      {children}
    </div>
  );
}

AlertDialogHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Container for alert dialog footer content, typically action buttons.
 */
function AlertDialogFooter({ className, children, ...props }) {
  return (
    <div
      data-slot="alert-dialog-footer"
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

AlertDialogFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Title component for the alert dialog.
 */
function AlertDialogTitle({ className, children, ...props }) {
  return (
    <h2
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

AlertDialogTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Description component for the alert dialog.
 */
function AlertDialogDescription({ className, children, ...props }) {
  return (
    <p
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    >
      {children}
    </p>
  );
}

AlertDialogDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Action button component for the alert dialog.
 */
function AlertDialogAction({ className, children, onClick, ...props }) {
  const { onOpenChange } = React.useContext(AlertDialogContext);

  const handleClick = (e) => {
    onClick?.(e);
    onOpenChange(false);
  };

  return (
    <button
      type="button"
      data-slot="alert-dialog-action"
      className={cn(buttonVariants(), className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

AlertDialogAction.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

/**
 * Cancel button component for the alert dialog.
 */
function AlertDialogCancel({ className, children, onClick, ...props }) {
  const { onOpenChange } = React.useContext(AlertDialogContext);

  const handleClick = (e) => {
    onClick?.(e);
    onOpenChange(false);
  };

  return (
    <button
      type="button"
      data-slot="alert-dialog-cancel"
      data-cancel="true"
      className={cn(buttonVariants({ variant: "outline" }), className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

AlertDialogCancel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
