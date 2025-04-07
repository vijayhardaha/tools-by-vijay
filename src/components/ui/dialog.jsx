"use client";

import * as React from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

/**
 * Dialog component for displaying content that requires user interaction.
 *
 * @param {Object} props - Component props
 * @param {boolean} [props.open] - Whether the dialog is open
 * @param {Function} [props.onOpenChange] - Callback when open state changes
 * @param {React.ReactNode} props.children - Dialog content
 * @returns {React.ReactElement} Dialog component
 */
function Dialog({ children, ...props }) {
  return (
    <DialogPrimitive.Root data-slot="dialog" {...props}>
      {children}
    </DialogPrimitive.Root>
  );
}

Dialog.propTypes = {
  open: PropTypes.bool,
  onOpenChange: PropTypes.func,
  children: PropTypes.node,
};

/**
 * Trigger element that opens the dialog when pressed.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Trigger content
 * @returns {React.ReactElement} DialogTrigger component
 */
function DialogTrigger({ children, ...props }) {
  return (
    <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props}>
      {children}
    </DialogPrimitive.Trigger>
  );
}

DialogTrigger.propTypes = {
  children: PropTypes.node,
};

/**
 * Portal component for rendering dialog outside of parent component.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Portal content
 * @returns {React.ReactElement} DialogPortal component
 */
function DialogPortal({ children, ...props }) {
  return (
    <DialogPrimitive.Portal data-slot="dialog-portal" {...props}>
      {children}
    </DialogPrimitive.Portal>
  );
}

DialogPortal.propTypes = {
  children: PropTypes.node,
};

/**
 * Close button for the dialog.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Close button content
 * @returns {React.ReactElement} DialogClose component
 */
function DialogClose({ children, ...props }) {
  return (
    <DialogPrimitive.Close data-slot="dialog-close" {...props}>
      {children}
    </DialogPrimitive.Close>
  );
}

DialogClose.propTypes = {
  children: PropTypes.node,
};

/**
 * Overlay component that covers the viewport when dialog is open.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Optional overlay content
 * @returns {React.ReactElement} DialogOverlay component
 */
function DialogOverlay({ className, children, ...props }) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Overlay>
  );
}

DialogOverlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Main content container for the dialog.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Dialog content
 * @returns {React.ReactElement} DialogContent component
 */
function DialogContent({ className, children, ...props }) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

DialogContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Container for dialog header content.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Header content
 * @returns {React.ReactElement} DialogHeader component
 */
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

/**
 * Container for dialog footer content, typically action buttons.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Footer content
 * @returns {React.ReactElement} DialogFooter component
 */
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

/**
 * Title component for the dialog.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Title content
 * @returns {React.ReactElement} DialogTitle component
 */
function DialogTitle({ className, children, ...props }) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Title>
  );
}

DialogTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Description component for the dialog.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Description content
 * @returns {React.ReactElement} DialogDescription component
 */
function DialogDescription({ className, children, ...props }) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Description>
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
