import { ReactNode, ElementType } from "react";

import { cn } from "@/utils/classNameUtils";

/**
 * Props for the Card component.
 */
interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A flexible card component with customizable styles and structure.
 */
function Card({ className, children, component, ...props }: ICardProps) {
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
interface ICardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A header section for the card, typically used for titles or actions.
 */
function CardHeader({ className, children, component, ...props }: ICardHeaderProps) {
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
interface ICardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: ReactNode;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * A title section for the card, typically used for headings.
 */
function CardTitle({ className, children, component, ...props }: ICardTitleProps) {
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
interface ICardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
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
function CardDescription({ className, children, component, ...props }: ICardDescriptionProps) {
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
interface ICardActionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * An action section for the card, typically used for buttons or links.
 */
function CardAction({ className, children, component, ...props }: ICardActionProps) {
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
interface ICardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A content section for the card, typically used for the main body.
 */
function CardContent({ className, children, component, ...props }: ICardContentProps) {
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
interface ICardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A footer section for the card, typically used for additional actions or information.
 */
function CardFooter({ className, children, component, ...props }: ICardFooterProps) {
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
