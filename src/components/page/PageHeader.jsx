import React from "react";

import PropTypes from "prop-types";

/**
 * PageHeader component for displaying page titles and descriptions
 *
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the page
 * @param {string} [props.description] - Optional description text for the page
 * @param {React.ReactElement} [props.icon] - Optional icon element to display next to the title
 * @returns {React.ReactElement} Rendered component
 */
const PageHeader = ({ title, description, icon = null }) => {
  return (
    <div className="mb-4">
      <h1 className="inline-flex items-center space-x-2 text-2xl font-bold">
        {icon && <span className="mr-2 inline-block">{icon}</span>}
        {title}
      </h1>
      {description && <p className="mt-1">{description}</p>}
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.element,
};

export default PageHeader;
