"use client";

import * as React from "react";

import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

// Create a context to manage popover state
const PopoverContext = React.createContext({
  open: false,
  setOpen: () => {},
  triggerRef: { current: null },
  anchorRef: { current: null },
  contentRef: { current: null },
});

function Popover({
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  ...props
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const triggerRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const anchorRef = React.useRef(null);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = React.useCallback(
    (state) => {
      if (!isControlled) {
        setUncontrolledOpen(state);
      }
      onOpenChange?.(state);
    },
    [isControlled, onOpenChange]
  );

  return (
    <PopoverContext.Provider
      value={{
        open,
        setOpen,
        triggerRef,
        contentRef,
        anchorRef,
      }}
    >
      <div data-slot="popover" {...props}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

function PopoverTrigger({ children, aschild, ...props }) {
  const { open, setOpen, triggerRef } = React.useContext(PopoverContext);

  const handleClick = (e) => {
    setOpen(!open);
    props.onClick?.(e);
  };

  const child = aschild ? (
    React.Children.only(children)
  ) : (
    <button
      type="button"
      {...props}
      onClick={handleClick}
      ref={triggerRef}
      data-slot="popover-trigger"
    >
      {children}
    </button>
  );

  if (aschild) {
    return React.cloneElement(child, {
      ...props,
      ref: triggerRef,
      "data-slot": "popover-trigger",
      onClick: handleClick,
    });
  }

  return child;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  children,
  ...props
}) {
  const { open, contentRef, triggerRef, anchorRef } =
    React.useContext(PopoverContext);
  const [mounted, setMounted] = React.useState(false);
  const [side, setSide] = React.useState("bottom");
  const [animationState, setAnimationState] = React.useState(
    open ? "open" : "closed"
  );

  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  React.useEffect(() => {
    setAnimationState(open ? "open" : "closed");
  }, [open]);

  React.useEffect(() => {
    if (!mounted || !open || !contentRef.current || !triggerRef.current) return;

    const targetRef = anchorRef.current || triggerRef.current;
    const content = contentRef.current;
    const targetRect = targetRef.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();

    // Determine the available space
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // Calculate space available in different directions
    const spaceAbove = targetRect.top;
    const spaceBelow = viewportHeight - targetRect.bottom;
    const spaceLeft = targetRect.left;
    const spaceRight = viewportWidth - targetRect.right;

    // Determine the best side to show the popover
    let bestSide = "bottom";
    if (spaceBelow < contentRect.height && spaceAbove > spaceBelow) {
      bestSide = "top";
    }
    if (spaceRight < contentRect.width && spaceLeft > spaceRight) {
      bestSide = spaceLeft > spaceRight ? "left" : "right";
    }

    setSide(bestSide);

    // Position the content
    let top = 0;
    let left = 0;

    if (bestSide === "bottom") {
      top = targetRect.bottom + sideOffset;

      if (align === "start") {
        left = targetRect.left;
      } else if (align === "end") {
        left = targetRect.right - contentRect.width;
      } else {
        // center
        left = targetRect.left + targetRect.width / 2 - contentRect.width / 2;
      }
    } else if (bestSide === "top") {
      top = targetRect.top - contentRect.height - sideOffset;

      if (align === "start") {
        left = targetRect.left;
      } else if (align === "end") {
        left = targetRect.right - contentRect.width;
      } else {
        // center
        left = targetRect.left + targetRect.width / 2 - contentRect.width / 2;
      }
    } else if (bestSide === "left") {
      left = targetRect.left - contentRect.width - sideOffset;

      if (align === "start") {
        top = targetRect.top;
      } else if (align === "end") {
        top = targetRect.bottom - contentRect.height;
      } else {
        // center
        top = targetRect.top + targetRect.height / 2 - contentRect.height / 2;
      }
    } else if (bestSide === "right") {
      left = targetRect.right + sideOffset;

      if (align === "start") {
        top = targetRect.top;
      } else if (align === "end") {
        top = targetRect.bottom - contentRect.height;
      } else {
        // center
        top = targetRect.top + targetRect.height / 2 - contentRect.height / 2;
      }
    }

    // Apply positioning
    content.style.position = "absolute";
    content.style.top = `${top}px`;
    content.style.left = `${left}px`;
    content.dataset.side = bestSide;

    // Ensure the content stays within viewport boundaries
    const contentRect2 = content.getBoundingClientRect();
    if (contentRect2.right > viewportWidth) {
      content.style.left = `${viewportWidth - contentRect2.width - 10}px`;
    }
    if (contentRect2.left < 0) {
      content.style.left = "10px";
    }
    if (contentRect2.bottom > viewportHeight) {
      content.style.top = `${viewportHeight - contentRect2.height - 10}px`;
    }
    if (contentRect2.top < 0) {
      content.style.top = "10px";
    }
  }, [mounted, open, align, sideOffset, contentRef, triggerRef, anchorRef]);

  // Click outside handler
  React.useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        const { setOpen } = React.useContext(PopoverContext);
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      ref={contentRef}
      data-slot="popover-content"
      data-state={animationState}
      data-side={side}
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>,
    document.body
  );
}

function PopoverAnchor({ children, ...props }) {
  const { anchorRef } = React.useContext(PopoverContext);

  return (
    <div ref={anchorRef} data-slot="popover-anchor" {...props}>
      {children}
    </div>
  );
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
