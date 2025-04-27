import { ReactNode, ElementType } from "react";

import { cn } from "@/utils/classNameUtils";

/**
 * Props for the Card component.
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A flexible card component with customizable styles and structure.
 */
function Card({ className, children, component, ...props }: CardProps) {
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

/**
 * Props for the CardHeader component.
 */
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A header section for the card, typically used for titles or actions.
 */
function CardHeader({ className, children, component, ...props }: CardHeaderProps) {
  const Tag = component || "div";
  return (
    <Tag
      data-slot="card-header"
      className={cn(
        "flex w-full flex-col items-start",
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

/**
 * Props for the CardTitle component.
 */
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: ReactNode;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * A title section for the card, typically used for headings.
 */
function CardTitle({ className, children, component, ...props }: CardTitleProps) {
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

/**
 * Props for the CardDescription component.
 */
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Additional class names for the card description. */
  className?: string;
  /** Content to be rendered inside the card description. */
  children: ReactNode;
  /** Custom component to render as the card description root. Defaults to "p". */
  component?: ElementType;
}

/**
 * A description section for the card, typically used for supplementary text.
 */
function CardDescription({ className, children, component, ...props }: CardDescriptionProps) {
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

/**
 * Props for the CardAction component.
 */
interface CardActionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * An action section for the card, typically used for buttons or links.
 */
function CardAction({ className, children, component, ...props }: CardActionProps) {
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

/**
 * Props for the CardContent component.
 */
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A content section for the card, typically used for the main body.
 */
function CardContent({ className, children, component, ...props }: CardContentProps) {
  const Tag = component || "div";
  return (
    <Tag data-slot="card-content" className={cn("px-4 md:px-6", className)} {...props}>
      {children}
    </Tag>
  );
}

/**
 * Props for the CardFooter component.
 */
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A footer section for the card, typically used for additional actions or information.
 */
function CardFooter({ className, children, component, ...props }: CardFooterProps) {
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

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
