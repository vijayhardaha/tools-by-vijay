"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const DrawerContext = React.createContext(null);

function useDrawer() {
  const context = React.useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a Drawer");
  }
  return context;
}

function Drawer({
  children,
  open,
  onOpenChange,
  direction = "bottom",
  ...props
}) {
  const [isOpen, setIsOpen] = React.useState(open || false);

  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  const handleOpenChange = React.useCallback(
    (value) => {
      setIsOpen(value);
      onOpenChange?.(value);
    },
    [onOpenChange]
  );

  const value = React.useMemo(
    () => ({
      open: isOpen,
      onOpenChange: handleOpenChange,
      direction,
    }),
    [isOpen, handleOpenChange, direction]
  );

  return (
    <DrawerContext.Provider value={value}>
      <div
        data-slot="drawer"
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    </DrawerContext.Provider>
  );
}

function DrawerTrigger({ children, ...props }) {
  const { onOpenChange } = useDrawer();

  return (
    <button
      type="button"
      data-slot="drawer-trigger"
      onClick={() => onOpenChange(true)}
      {...props}
    >
      {children}
    </button>
  );
}

function DrawerPortal({ children, ...props }) {
  const { open } = useDrawer();

  if (!open) return null;

  return (
    <div data-slot="drawer-portal" {...props}>
      {children}
    </div>
  );
}

function DrawerClose({ children, ...props }) {
  const { onOpenChange } = useDrawer();

  return (
    <button
      type="button"
      data-slot="drawer-close"
      onClick={() => onOpenChange(false)}
      {...props}
    >
      {children}
    </button>
  );
}

function DrawerOverlay({ className, ...props }) {
  const { onOpenChange, open } = useDrawer();

  return (
    <div
      data-slot="drawer-overlay"
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

function DrawerContent({ className, children, ...props }) {
  const { direction, open, onOpenChange } = useDrawer();

  // Handle ESC key to close drawer
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onOpenChange(false);
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <div
        data-slot="drawer-content"
        data-state={open ? "open" : "closed"}
        data-vaul-drawer-direction={direction}
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          direction === "bottom" &&
            "data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
          direction === "top" &&
            "data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
          direction === "left" &&
            "data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
          direction === "right" &&
            "data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
          className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </div>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props }) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function DrawerTitle({ className, ...props }) {
  return (
    <h2
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function DrawerDescription({ className, ...props }) {
  return (
    <p
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
