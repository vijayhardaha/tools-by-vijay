import type { JSX, ReactNode } from 'react';
/**
 * Props for the PageContent component.
 *
 * @type {PageContentProps}
 * @property {ReactNode} children - The content to be rendered inside the page
 */
interface PageContentProps {
  children: ReactNode;
}

/**
 * PageContent component
 *
 * A container component that wraps page content with consistent styling.
 * Provides a white background with rounded corners and shadow.
 *
 * @param {PageContentProps} props - Component props
 *
 * @returns {JSX.Element} The rendered component
 */
export default function PageContent({ children }: PageContentProps): JSX.Element {
  return <div className="relative">{children}</div>;
}
