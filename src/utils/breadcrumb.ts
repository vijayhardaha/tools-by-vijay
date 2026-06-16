/**
 * Breadcrumb item structure.
 *
 * @type {BreadcrumbItem}
 * @property {string} name - Name of the page or breadcrumb label
 * @property {string} path - URL path for the breadcrumb link
 */
export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Build breadcrumb items for a given page path.
 *
 * Accepts an optional array of parent items to support multi-level breadcrumbs.
 * Automatically prepends the Home breadcrumb.
 *
 * @param {string} path - The page path (e.g., '/slugify').
 * @param {string} currentPage - The name of the current page.
 * @param {BreadcrumbItem[]} [parents] - Optional parent breadcrumb items (e.g., category).
 *
 * @returns {BreadcrumbItem[]} Array of breadcrumb items.
 *
 * @example
 * // Simple: Home > About
 * buildBreadcrumbs('/about', 'About')
 * @example
 * // With parent: Home > Writing & Editing > Slugify
 * buildBreadcrumbs('/slugify', 'Slugify', [{ name: 'Writing & Editing', path: '/tools/writing-editing' }])
 */
export function buildBreadcrumbs(path: string, currentPage: string, parents?: BreadcrumbItem[]): BreadcrumbItem[] {
  return [{ name: 'Home', path: '/' }, ...(parents || []), { name: currentPage, path }];
}
