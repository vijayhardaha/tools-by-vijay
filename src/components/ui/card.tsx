import type { JSX, ReactNode, ElementType, HTMLAttributes } from 'react';

import { cn } from '@/utils/classNameUtils';

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
export default function Card({ className, children, component, ...props }: CardProps): JSX.Element {
  const Tag = component || 'div';
  return (
    <Tag
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground border-border flex flex-col gap-4 rounded-xl border py-4 md:gap-6 md:py-6',
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
        'flex w-full flex-col items-start',
        'gap-1.5 px-4 md:px-6 [.border-b]:pb-4 md:[.border-b]:pb-6',
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
    <Tag data-slot="card-title" className={cn('text-lg leading-none font-bold', className)} {...props}>
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
    <Tag data-slot="card-description" className={cn('text-muted-foreground text-sm', className)} {...props}>
      {children}
    </Tag>
  );
}

/**
 * Props for the CardAction component.
 *
 * @type {CardActionProps}
 * @property {string} [className] - Additional CSS classes
 * @property {ReactNode} children - Action content
 * @property {ElementType} [component] - Custom root element type
 */
interface CardActionProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * An action section for the card, typically used for buttons or links.
 *
 * @param {CardActionProps} props - The component props
 *
 * @returns {JSX.Element} The rendered card action
 */
function CardAction({ className, children, component, ...props }: CardActionProps): JSX.Element {
  const Tag = component || 'div';
  return (
    <Tag
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
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
    <Tag data-slot="card-content" className={cn('px-4 md:px-6', className)} {...props}>
      {children}
    </Tag>
  );
}

/**
 * Props for the CardFooter component.
 *
 * @type {CardFooterProps}
 * @property {string} [className] - Additional CSS classes
 * @property {ReactNode} children - Footer content
 * @property {ElementType} [component] - Custom root element type
 */
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  component?: ElementType;
}

/**
 * A footer section for the card, typically used for additional actions or information.
 *
 * @param {CardFooterProps} props - The component props
 *
 * @returns {JSX.Element} The rendered card footer
 */
function CardFooter({ className, children, component, ...props }: CardFooterProps): JSX.Element {
  const Tag = component || 'div';
  return (
    <Tag
      data-slot="card-footer"
      className={cn('flex items-center px-4 md:px-6 [.border-t]:pt-4 md:[.border-t]:pt-6', className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
