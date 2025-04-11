import PropTypes from "prop-types";

/**
 * A wrapper component for toolbars that provides consistent styling.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to render inside the toolbar wrapper.
 * @returns {JSX.Element} The styled toolbar wrapper component.
 */
const ToolBarWrapper = ({ children }) => {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-[#222222] p-2 px-4 text-white">
      {children}
    </div>
  );
};

ToolBarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToolBarWrapper;
