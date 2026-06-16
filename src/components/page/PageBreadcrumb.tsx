import type { JSX } from 'react';

import Link from 'next/link';

import type { BreadcrumbItem } from '@/utils/breadcrumb';

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
 * 1. Multi-level: pass an `items` array with name/path pairs for deep navigation
 * 2. Simple: pass a `pageName` string for a basic Home / {pageName} breadcrumb
 *
 * @param {PageBreadcrumbProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered breadcrumb navigation.
 */
export function PageBreadcrumb({ items, pageName }: PageBreadcrumbProps): JSX.Element {
  // Derive breadcrumb items from pageName for backward compatibility
  const breadcrumbItems: BreadcrumbItem[] = items ?? [
    { name: 'Home', path: '/' },
    { name: pageName || '', path: '' },
  ];

  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ul className="flex flex-wrap items-center text-sm">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li key={item.name} className="mb-0 flex items-center">
              {!isLast && item.path ? (
                <Link href={item.path} className="hover:underline">
                  {item.name}
                </Link>
              ) : (
                <span
                  className={isLast ? 'text-accent-foreground font-medium' : ''}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.name}
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
