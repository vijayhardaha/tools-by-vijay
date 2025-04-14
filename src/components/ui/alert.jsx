import * as React from "react";

import { cva } from "class-variance-authority";
import PropTypes from "prop-types";
import {
  LuCircleAlert,
  LuInfo,
  LuTriangleAlert,
  LuCircleCheck,
  LuCircleX,
} from "react-icons/lu";

import { cn } from "@/utils/classNameUtils";

// Define variants using shadcn-like styling
const alertVariants = cva(
  [
    // Layout & Box
    "relative w-full rounded-lg border px-4 py-3 text-sm",

    // Grid layout based on presence of SVG
    "grid grid-cols-[0_1fr] has-[>svg]:grid-cols-[16px_1fr]",
    "has-[>svg]:gap-x-3 gap-y-0.5 items-start",

    // SVG-specific styling
    "[&>svg]:size-4",
    "[&>svg]:translate-y-0.5",
    "[&>svg]:text-current",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-neutral-50 text-neutral-700 border-neutral-200",
        info: "text-blue-500 bg-blue-50 border-blue-200 [&>svg]:text-current",
        warning:
          "text-amber-500 bg-amber-50 border-amber-200 [&>svg]:text-current",
        success:
          "text-green-500 bg-green-50 border-green-200 [&>svg]:text-current",
        danger: "text-red-500 bg-red-50 border-red-200 [&>svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Default icons for each variant
const defaultIcons = {
  default: <LuCircleAlert />,
  info: <LuInfo />,
  warning: <LuTriangleAlert />,
  success: <LuCircleCheck />,
  danger: <LuCircleX />,
};

/**
 * Alert component for showing important messages to users.
 *
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS classes to apply to the alert
 * @param {('default'|'info'|'warning'|'success'|'danger')} [props.variant='default'] - The visual style variant of the alert
 * @param {string} [props.title] - Title text to display in the alert
 * @param {string} [props.text] - Main message text to display in the alert
 * @param {React.ReactNode} [props.icon] - Custom icon to display, defaults to variant-specific icon
 * @param {React.ReactNode} [props.children] - Optional children to render in the alert (used for custom content)
 * @param {Object} [props.rest] - Any additional props will be spread onto the underlying div element
 * @returns {JSX.Element} The rendered Alert component
 */
function Alert({ className, variant, title, text, icon, children, ...props }) {
  // Use provided icon or default for the variant
  const iconToRender = icon || defaultIcons[variant];

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon !== null && iconToRender}
      {children}

      {title && (
        <div
          data-slot="alert-title"
          className="col-start-2 line-clamp-1 min-h-4 font-semibold tracking-tight"
        >
          {title}
        </div>
      )}

      {text && (
        <div
          data-slot="alert-description"
          className="col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed"
        >
          {text}
        </div>
      )}
    </div>
  );
}

Alert.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "info", "warning", "success", "danger"]),
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node,
};

Alert.defaultProps = {
  variant: "default",
  className: "",
  title: "",
  text: "",
};

export { Alert };
