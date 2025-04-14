import * as React from "react";

import PropTypes from "prop-types"; // Added for prop type validation

import { cn } from "@/utils/classNameUtils";

/**
 * Skeleton component used as a placeholder while content is loading.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.className] - Additional CSS classes to apply to the skeleton.
 * @param {Object} [props.props] - Additional props to spread onto the skeleton element.
 * @returns {JSX.Element} The rendered skeleton component.
 */
function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-muted animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

Skeleton.propTypes = {
  /** Additional CSS classes to apply to the skeleton. */
  className: PropTypes.string,
  /** Additional props to spread onto the skeleton element. */
  props: PropTypes.object,
};

export { Skeleton };
