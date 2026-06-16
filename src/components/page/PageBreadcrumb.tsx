import type { JSX } from 'react';

import Link from 'next/link';

/**
 * A single breadcrumb item in the navigation trail.
 *
 * @type {BreadcrumbItem}
 * @property {string} label - The display text for this breadcrumb
 * @property {string} [href] - Optional URL for the breadcrumb link (last item is typically not linked)
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Props for the PageBreadcrumb component.
 *
 * @type {PageBreadcrumbProps}
 * @property {BreadcrumbItem[]} [items] - Array of breadcrumb items for multi-level navigation
 * @property {string} [pageName] - Simple page name for backward-compatible single-level breadcrumb
 */
interface PageBreadcrumbProps {
  items?: BreadcrumbItem[];
  pageName?: string;
}

/**
 * PageBreadcrumb component displays a breadcrumb navigation trail.
 *
 * Supports two modes:
 * 1. Multi-level: pass an `items` array with label/href pairs for deep navigation
 * 2. Simple: pass a `pageName` string for a basic Home / {pageName} breadcrumb
 *
 * @param {PageBreadcrumbProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered breadcrumb navigation.
 */
export function PageBreadcrumb({ items, pageName }: PageBreadcrumbProps): JSX.Element {
  // Derive breadcrumb items from pageName for backward compatibility
  const breadcrumbItems: BreadcrumbItem[] = items ?? [{ label: 'Home', href: '/' }, { label: pageName || '' }];

  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ul className="flex flex-wrap items-center text-sm">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li key={item.label} className="mb-0 flex items-center">
              {!isLast && item.href ? (
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? 'text-accent-foreground font-medium' : ''}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && <span className="mx-1 text-gray-500">/</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
