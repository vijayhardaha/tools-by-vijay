import PropTypes from "prop-types";

import { cn } from "@/utils/classNameUtils";

/**
 * Card component that serves as a container for related content.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Card content
 * @param {React.ElementType} [props.component] - HTML tag to render
 * @returns {JSX.Element} Card component
 */
function Card({ className, children, component, ...props }) {
  const Tag = component || "div";
  return (
    <Tag
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground border-border flex flex-col gap-4 rounded-xl border py-4 md:gap-6 md:py-6",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

/**
 * Card header component that typically contains title and description.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Header content
 * @param {React.ElementType} [props.component] - HTML tag to render
 * @returns {JSX.Element} CardHeader component
 */
function CardHeader({ className, children, component, ...props }) {
  const Tag = component || "div";
  return (
    <Tag
      data-slot="card-header"
      className={cn(
        "flex flex-col items-start",
        "gap-1.5 px-4 md:px-6 [.border-b]:pb-4 md:[.border-b]:pb-6",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

/**
 * Card title component.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Title content
 * @param {React.ElementType} [props.component] - HTML tag to render
 * @returns {JSX.Element} CardTitle component
 */
function CardTitle({ className, children, component, ...props }) {
  const Tag = component || "h2";
  return (
    <Tag
      data-slot="card-title"
      className={cn("text-lg leading-none font-bold", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

CardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

/**
 * Card description component for additional context.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Description content
 * @param {React.ElementType} [props.component] - HTML tag to render
 * @returns {JSX.Element} CardDescription component
 */
function CardDescription({ className, children, component, ...props }) {
  const Tag = component || "p";
  return (
    <Tag
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

CardDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

/**
 * Card action component for interactive elements in the header.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Action content
 * @param {React.ElementType} [props.component] - HTML tag to render
 * @returns {JSX.Element} CardAction component
 */
function CardAction({ className, children, component, ...props }) {
  const Tag = component || "div";
  return (
    <Tag
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

CardAction.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

/**
 * Card content component for the main body content.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Card body content
 * @param {React.ElementType} [props.component] - HTML tag to render
 * @returns {JSX.Element} CardContent component
 */
function CardContent({ className, children, component, ...props }) {
  const Tag = component || "div";
  return (
    <Tag data-slot="card-content" className={cn("px-4 md:px-6", className)} {...props}>
      {children}
    </Tag>
  );
}

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

/**
 * Card footer component for actions and supplementary content.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {any} props.children - Footer content
 * @param {React.ElementType} [props.component] - HTML tag to render
 * @returns {JSX.Element} CardFooter component
 */
function CardFooter({ className, children, component, ...props }) {
  const Tag = component || "div";
  return (
    <Tag
      data-slot="card-footer"
      className={cn(
        "flex items-center px-4 md:px-6 [.border-t]:pt-4 md:[.border-t]:pt-6",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.elementType,
};

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
