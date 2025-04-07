"use client";

import * as React from "react";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import PropTypes from "prop-types";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Root component for Alert Dialogs that require user confirmation.
 *
 * @param {Object} props - Component props
 * @returns {React.ReactElement} AlertDialog component
 */
function AlertDialog({ ...props }) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

/**
 * Trigger element that opens the alert dialog when pressed.
 *
 * @param {Object} props - Component props
 * @returns {React.ReactElement} AlertDialogTrigger component
 */
function AlertDialogTrigger({ ...props }) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

/**
 * Portal component for rendering alert dialog outside of parent component.
 *
 * @param {Object} props - Component props
 * @returns {React.ReactElement} AlertDialogPortal component
 */
function AlertDialogPortal({ ...props }) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

/**
 * Overlay component that covers the viewport when alert dialog is open.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} AlertDialogOverlay component
 */
function AlertDialogOverlay({ className, ...props }) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

AlertDialogOverlay.propTypes = {
  className: PropTypes.string,
};

/**
 * Main content container for the alert dialog.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Dialog content
 * @returns {React.ReactElement} AlertDialogContent component
 */
function AlertDialogContent({ className, children, ...props }) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPortal>
  );
}

AlertDialogContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Container for alert dialog header content.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Header content
 * @returns {React.ReactElement} AlertDialogHeader component
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
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Footer content
 * @returns {React.ReactElement} AlertDialogFooter component
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
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Title content
 * @returns {React.ReactElement} AlertDialogTitle component
 */
function AlertDialogTitle({ className, children, ...props }) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Title>
  );
}

AlertDialogTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Description component for the alert dialog.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Description content
 * @returns {React.ReactElement} AlertDialogDescription component
 */
function AlertDialogDescription({ className, children, ...props }) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Description>
  );
}

AlertDialogDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Action button component for the alert dialog.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 * @returns {React.ReactElement} AlertDialogAction component
 */
function AlertDialogAction({ className, children, ...props }) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Action>
  );
}

AlertDialogAction.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Cancel button component for the alert dialog.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 * @returns {React.ReactElement} AlertDialogCancel component
 */
function AlertDialogCancel({ className, children, ...props }) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Cancel>
  );
}

AlertDialogCancel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
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
