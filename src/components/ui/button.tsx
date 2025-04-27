import React, { JSX, forwardRef, isValidElement, ReactNode } from "react";
import { cloneElement } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/utils/classNameUtils";

/**
 * Slot component for polymorphic prop forwarding.
 */
type SlotProps = {
  children: React.ReactElement;
} & React.HTMLAttributes<HTMLElement>;

const Slot = forwardRef<HTMLElement, SlotProps>(({ children, ...props }, ref) => {
  if (!isValidElement(children)) {
    return null;
  }

  // Ensure children.props is always an object before spreading
  const childProps = children.props && typeof children.props === "object" ? children.props : {};

  return cloneElement(children, {
    ...props,
    ...childProps, // Spread props and ensure children.props is valid
    ref: ref
      ? (childRef) => {
          if (typeof ref === "function") {
            ref(childRef);
          } else if (ref) {
            ref.current = childRef;
          }

          const { ref: childOriginalRef } = children;
          if (typeof childOriginalRef === "function") {
            childOriginalRef(childRef);
          } else if (childOriginalRef) {
            childOriginalRef.current = childRef;
          }
        }
      : children.props.ref,
  });
});

/**
 * Button component with multiple variants and sizes.
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap shrink-0",
    "text-sm font-semibold",
    "rounded-md outline-none border",
    "cursor-pointer disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    "transition-all active:scale-[0.98]",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-accent-foreground border-accent-foreground text-foreground",
          "hover:bg-primary hover:border-primary hover:text-primary-foreground",
          "focus-visible:ring-accent-foreground/20",
        ].join(" "),
        primary: [
          "bg-primary border-primary text-primary-foreground",
          "hover:bg-accent-foreground hover:border-accent-foreground hover:text-primary",
          "focus-visible:ring-foreground/20",
        ].join(" "),
        secondary: [
          "bg-secondary border-secondary text-secondary-foreground",
          "hover:bg-secondary-foreground hover:border-secondary-foreground hover:text-background",
          "focus-visible:ring-secondary-foreground/10",
        ].join(" "),
        destructive: [
          "bg-destructive border-destructive text-white",
          "hover:bg-destructive/70 hover:border-destructive/70 text-white",
          "focus-visible:ring-destructive/20",
        ].join(" "),
        success: [
          "bg-green-500 border-green-500 text-white",
          "hover:bg-green-600 hover:border-green-600 hover:text-white",
          "focus-visible:ring-primary-200",
        ].join(" "),
        outline: [
          "bg-background border-primary text-primary",
          "hover:bg-primary hover:border-primary hover:text-primary-foreground",
        ].join(" "),
        ghost: [
          "border-transparent hover:bg-accent hover:border-transparent hover:text-accent-foreground",
        ].join(" "),
        link: ["border-transparent text-primary underline-offset-4", "hover:underline"].join(" "),
      },
      size: {
        default: "h-10 px-6 rounded-lg py-2 text-sm has-[>svg]:px-5",
        sm: "h-8 rounded-md gap-1.5 px-4 text-xs has-[>svg]:px-3.5",
        lg: "h-12 rounded-xl px-8 text-base has-[>svg]:px-7",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

/**
 * Button component with various styles and sizes.
 */
type ButtonProps = {
  className?: string;
  variant?:
    | "default"
    | "primary"
    | "destructive"
    | "success"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Ensure props is an object before spreading
    const validProps = props && typeof props === "object" ? props : {};

    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...validProps}
        ref={ref} // Forward ref correctly
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button"; // Set the display name for the Button component

export { Button, buttonVariants };
