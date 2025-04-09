import * as React from "react";
import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

// Define variants using shadcn-like styling
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[16px_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50 border-gray-200 dark:border-gray-800",
        destructive:
          "text-red-500 dark:text-red-500 bg-white dark:bg-gray-950 border-red-200 dark:border-red-900 [&>svg]:text-current *:data-[slot=alert-description]:text-red-500/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Alert component for showing important messages to users.
 */
function Alert({ className, variant, children, ...props }) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

Alert.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "destructive"]),
  children: PropTypes.node,
};

/**
 * Alert title component.
 */
function AlertTitle({ className, children, ...props }) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

AlertTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Alert description component for detailed information.
 */
function AlertDescription({ className, children, ...props }) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

AlertDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export { Alert, AlertTitle, AlertDescription };
