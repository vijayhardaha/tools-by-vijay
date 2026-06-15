import type { JSX, ReactNode, ElementType, HTMLAttributes } from 'react';

import { cn } from '@/utils/classnames';

/**
 * Props for the Card component.
 *
 * @type {CardProps}
 * @property {string} [className] - Additional CSS classes
 * @property {ReactNode} children - Card content
 * @property {ElementType} [component] - Custom root element type
 */
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A flexible card component with customizable styles and structure.
 *
 * @param {CardProps} props - The component props
 *
 * @returns {JSX.Element} The rendered card component
 */
function Card({ className, children, component, ...props }: CardProps): JSX.Element {
  const Tag = component || 'div';
  return (
    <Tag
      data-slot="card"
      className={cn(
        // Display & layout
        'bg-card text-card-foreground',

        // Layout
        'border-border flex flex-col rounded-xl border',

        // Spacing
        'gap-4 py-4',

        // Responsive
        'md:gap-6 md:py-6',

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
 *
 * @type {CardHeaderProps}
 * @property {string} [className] - Additional CSS classes
 * @property {ReactNode} children - Header content
 * @property {ElementType} [component] - Custom root element type
 */
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A header section for the card, typically used for titles or actions.
 *
 * @param {CardHeaderProps} props - The component props
 *
 * @returns {JSX.Element} The rendered card header
 */
function CardHeader({ className, children, component, ...props }: CardHeaderProps): JSX.Element {
  const Tag = component || 'div';
  return (
    <Tag
      data-slot="card-header"
      className={cn(
        // Display & layout
        'flex w-full flex-col items-start',

        // Spacing
        'gap-2 px-4',

        // Responsive
        'md:px-6',

        // Border interaction
        '[.border-b]:pb-4 md:[.border-b]:pb-6',

        // Grid
        'has-data-[slot=card-action]:grid-cols-[1fr_auto]',

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
 *
 * @type {CardTitleProps}
 * @property {string} [className] - Additional CSS classes
 * @property {ReactNode} children - Title content
 * @property {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [component] - Heading element type
 */
interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: ReactNode;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * A title section for the card, typically used for headings.
 *
 * @param {CardTitleProps} props - The component props
 *
 * @returns {JSX.Element} The rendered card title
 */
function CardTitle({ className, children, component, ...props }: CardTitleProps): JSX.Element {
  const Tag = component || 'h2';
  return (
    <Tag
      data-slot="card-title"
      className={cn(
        // Display
        'text-lg leading-none font-bold',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/**
 * Props for the CardDescription component.
 *
 * @type {CardDescriptionProps}
 * @property {string} [className] - Additional CSS classes
 * @property {ReactNode} children - Description content
 * @property {ElementType} [component] - Custom root element type, defaults to "p"
 */
interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A description section for the card, typically used for supplementary text.
 *
 * @param {CardDescriptionProps} props - The component props
 *
 * @returns {JSX.Element} The rendered card description
 */
function CardDescription({ className, children, component, ...props }: CardDescriptionProps): JSX.Element {
  const Tag = component || 'p';
  return (
    <Tag
      data-slot="card-description"
      className={cn(
        // Display
        'text-muted-foreground text-sm',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/**
 * Props for the CardContent component.
 *
 * @type {CardContentProps}
 * @property {string} [className] - Additional CSS classes
 * @property {ReactNode} children - Content body
 * @property {ElementType} [component] - Custom root element type
 */
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A content section for the card, typically used for the main body.
 *
 * @param {CardContentProps} props - The component props
 *
 * @returns {JSX.Element} The rendered card content
 */
function CardContent({ className, children, component, ...props }: CardContentProps): JSX.Element {
  const Tag = component || 'div';
  return (
    <Tag
      data-slot="card-content"
      className={cn(
        // Spacing
        'px-4 md:px-6',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
