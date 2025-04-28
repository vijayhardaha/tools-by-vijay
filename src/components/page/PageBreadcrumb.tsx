import { JSX } from "react";

import Link from "next/link";

/**
 * Props for the PageBreadcrumb component.
 * @property {string} pageName - The name of the current page to display in the breadcrumb.
 */
interface PageBreadcrumbProps {
  pageName: string;
}

/**
 * PageBreadcrumb component displays a simple breadcrumb navigation
 * with Home as a link and the current page name without a link.
 *
 * @param {PageBreadcrumbProps} props - The props for the component.
 * @returns {JSX.Element} The rendered breadcrumb navigation.
 */
const PageBreadcrumb: React.FC = ({ pageName }: PageBreadcrumbProps): React.JSX.Element => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap items-center text-sm">
        <li className="flex items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-1 text-gray-500">/</span>
        </li>
        <li className="text-accent-foreground flex items-center font-medium" aria-current="page">
          {pageName}
        </li>
      </ol>
    </nav>
  );
};

export default PageBreadcrumb;
