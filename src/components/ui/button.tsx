import { cloneElement, forwardRef, isValidElement } from "react";

import { cva } from "class-variance-authority";
import PropTypes from "prop-types";

import { cn } from "@/utils/classNameUtils";

/**
 * Custom Slot implementation to replace @radix-ui/react-slot.
 * A utility component that projects its children's props through to a single element.
 * Useful for creating polymorphic components where you want to forward props to a child element.
 *
 * The Slot component essentially becomes transparent in the props hierarchy, merging its own props
 * with the child's props and properly handling ref forwarding to ensure compatibility with React's
 * ref system.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactElement} props.children - The child element to clone and merge props with
 * @param {React.Ref} [props.ref] - Ref to forward to the child element
 * @returns {React.ReactElement|null} Cloned child element with merged props or null if the child is invalid
 * @example
 * // Basic usage to pass props to a child component
 * <Slot className="text-red-500">
 *   <SomeComponent />
 * </Slot>
 *
 * // The className will be passed to SomeComponent
 */
const Slot = forwardRef(({ children, ...props }, ref) => {
  if (!isValidElement(children)) {
    return null;
  }

  return cloneElement(children, {
    ...props,
    ...children.props,
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

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    " whitespace-nowrap shrink-0",
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
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.variant="default"] - Visual style variant
 * @param {string} [props.size="default"] - Button size
 * @param {boolean} [props.asChild=false] - Whether to merge props onto the immediate child
 * @param {any} props.children - Button content
 * @returns {JSX.Element} Button component
 */
function Button({ className, variant, size, asChild = false, children, ...props }) {
  const Comp = asChild ? Slot : "button";

  const { asChild: _, ...componentProps } = props;

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...componentProps}
    >
      {children}
    </Comp>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "link",
  ]),
  size: PropTypes.oneOf(["default", "sm", "lg", "icon"]),
  asChild: PropTypes.bool,
  children: PropTypes.node,
};

export { Button, buttonVariants };
