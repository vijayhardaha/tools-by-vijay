import React from "react";

import PropTypes from "prop-types";

/**
 * PageContent component
 *
 * A container component that wraps page content with consistent styling.
 * Provides a white background with rounded corners and shadow.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to be displayed inside the container
 * @returns {React.ReactElement} The rendered component
 */
const PageContent = ({ children }) => {
  return <div className="relative">{children}</div>;
};

PageContent.propTypes = {
  /**
   * The content to be displayed inside the container
   */
  children: PropTypes.node.isRequired,
};

export default PageContent;
