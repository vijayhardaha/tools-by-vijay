import React from "react";

import PropTypes from "prop-types";

/**
 * PageHeader component for displaying page titles and descriptions
 *
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the page
 * @param {string} [props.description] - Optional description text for the page
 * @param {ReactElement} [props.icon] - Optional icon element to display next to the title
 * @returns {ReactElement} Rendered component
 */
const PageHeader = ({ title, description, icon = null }) => {
  return (
    <div
      className="relative left-1/2 -mt-8 mb-8 w-screen -translate-x-1/2 text-white"
      style={{
        background:
          "radial-gradient(100% 225% at 100% 0%, #FAFF00 0%, #000000 100%), linear-gradient(235deg, #FF7A00 0%, #000000 100%), linear-gradient(20deg, #241E92 0%, #241E92 30%, #5432D3 calc(30% + 1px), #5432D3 35%, #7B6CF6 calc(35% + 1px), #7B6CF6 50%, #E5A5FF calc(50% + 1px), #E5A5FF 100%), linear-gradient(120deg, #110133 0%, #110133 40%, #00918E calc(40% + 1px), #00918E 60%, #4DD599 calc(60% + 1px), #4DD599 70%, #FFDC34 calc(70% + 1px), #FFDC34 100%)",
        backgroundBlendMode: "overlay, hard-light, overlay, normal",
      }}
    >
      <div className="mx-auto mb-4 max-w-5xl px-6 lg:px-4">
        <div className="py-10">
          <h1 className="inline-flex items-center space-x-2 text-2xl font-bold">
            {icon && <span className="mr-2 inline-block">{icon}</span>}
            {title}
          </h1>
          {description && <p className="mt-1">{description}</p>}
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.element,
};

export default PageHeader;
