"use client";

import { forwardRef } from "react";

import { cva } from "class-variance-authority";
import PropTypes from "prop-types";

import { cn } from "@/utils/classNameUtils";

/**
 * Styling variants for the Label component
 */
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

/**
 * Label component for form elements with accessibility features
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {any} props.children - Content to display inside the label
 * @param {string} props.htmlFor - ID of the form element this label is associated with
 * @returns {JSX.Element} The Label component
 */
const Label = forwardRef(({ className, children, htmlFor, ...props }, ref) => (
  <label ref={ref} className={cn(labelVariants(), className)} htmlFor={htmlFor} {...props}>
    {children}
  </label>
));

Label.displayName = "Label";

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export { Label };
