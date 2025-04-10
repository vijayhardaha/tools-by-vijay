import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

/**
 * Card component that serves as a container for related content.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Card content
 * @returns {JSX.Element} Card component
 */
function Card({ className, children, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground border-border/60 flex flex-col gap-6 rounded-xl border py-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Card header component that typically contains title and description.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Header content
 * @returns {JSX.Element} CardHeader component
 */
function CardHeader({ className, children, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Card title component.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Title content
 * @returns {JSX.Element} CardTitle component
 */
function CardTitle({ className, children, ...props }) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-lg leading-none font-bold", className)}
      {...props}
    >
      {children}
    </div>
  );
}

CardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Card description component for additional context.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Description content
 * @returns {JSX.Element} CardDescription component
 */
function CardDescription({ className, children, ...props }) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground mt-1 text-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
}

CardDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Card action component for interactive elements in the header.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Action content
 * @returns {JSX.Element} CardAction component
 */
function CardAction({ className, children, ...props }) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

CardAction.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Card content component for the main body content.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Card body content
 * @returns {JSX.Element} CardContent component
 */
function CardContent({ className, children, ...props }) {
  return (
    <div data-slot="card-content" className={cn("px-6", className)} {...props}>
      {children}
    </div>
  );
}

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * Card footer component for actions and supplementary content.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Footer content
 * @returns {JSX.Element} CardFooter component
 */
function CardFooter({ className, children, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
