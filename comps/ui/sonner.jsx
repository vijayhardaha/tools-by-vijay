"use client";

import PropTypes from "prop-types";
import { Toaster as Sonner } from "sonner";

/**
 * Toaster component that wraps the Sonner Toaster with custom styles and props.
 *
 * @param {object} props - Props passed to the Sonner Toaster component.
 * @returns {JSX.Element} The styled Toaster component.
 */
const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      style={{
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      }}
      {...props}
    />
  );
};

Toaster.propTypes = {
  /** Additional props to pass to the Sonner Toaster component */
  props: PropTypes.object,
};

export { Toaster };
