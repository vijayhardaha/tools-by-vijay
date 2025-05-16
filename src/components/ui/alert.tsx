import { cva } from "class-variance-authority";
import { LuCircleAlert, LuInfo, LuTriangleAlert, LuCircleCheck, LuCircleX } from "react-icons/lu";

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
        warning: "text-amber-500 bg-amber-50 border-amber-200 [&>svg]:text-current",
        success: "text-green-500 bg-green-50 border-green-200 [&>svg]:text-current",
        danger: "text-red-500 bg-red-50 border-red-200 [&>svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Default icons for each variant
const defaultIcons: Record<string, React.ReactElement> = {
  default: <LuCircleAlert />,
  info: <LuInfo />,
  warning: <LuTriangleAlert />,
  success: <LuCircleCheck />,
  danger: <LuCircleX />,
};

// Define TypeScript types for the Alert component props
interface IAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "default" | "info" | "warning" | "success" | "danger";
  title?: string;
  text?: React.ReactNode;
  icon?: React.ReactNode | null;
  children?: React.ReactNode;
}

/**
 * Alert component for showing important messages to users.
 *
 * @param {AlertProps} props - The component props
 * @returns {React.JSX.Element} The rendered Alert component
 */
function Alert({
  className,
  variant = "default",
  title = "",
  text = "",
  icon,
  children,
  ...props
}: IAlertProps): React.JSX.Element {
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

export { Alert };
