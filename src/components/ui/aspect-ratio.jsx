"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import PropTypes from "prop-types";

/**
 * AspectRatio component that maintains a specified aspect ratio for its content.
 *
 * @param {Object} props - Component props
 * @param {number} [props.ratio] - The aspect ratio to maintain (width/height)
 * @param {React.ReactNode} props.children - The content to display within the aspect ratio container
 * @returns {React.ReactElement} AspectRatio component
 */
function AspectRatio({ children, ...props }) {
  return (
    <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props}>
      {children}
    </AspectRatioPrimitive.Root>
  );
}

AspectRatio.propTypes = {
  ratio: PropTypes.number,
  children: PropTypes.node,
};

export { AspectRatio };
