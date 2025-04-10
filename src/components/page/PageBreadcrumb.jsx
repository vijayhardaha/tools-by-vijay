import React from "react";

import Link from "next/link";

import PropTypes from "prop-types";

/**
 * PageBreadcrumb component displays a simple breadcrumb navigation
 * with Home as a link and the current page name without a link
 */
const PageBreadcrumb = ({ pageName }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap items-center text-sm">
        <li className="flex items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-1 text-gray-500">/</span>
        </li>
        <li
          className="text-accent-foreground flex items-center font-medium"
          aria-current="page"
        >
          {pageName}
        </li>
      </ol>
    </nav>
  );
};

PageBreadcrumb.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default PageBreadcrumb;
