import React from "react";

import clsx from "clsx";
import PropTypes from "prop-types";

/**
 * A flexible and customizable Box component based on Tailwind CSS.
 *
 * @param {Object} props - The properties for the Box component.
 * @param {string} [props.component='div'] - The HTML tag type to render (e.g., `div`, `section`, `header`).
 * @param {boolean} [props.flex=false] - Whether to apply `flex` display.
 * @param {boolean} [props.inline=false] - Whether to apply `inline-flex` display.
 * @param {string} [props.align='stretch'] - Tailwind alignment class (e.g., `start`, `center`, `end`).
 * @param {string} [props.justify='flex-start'] - Tailwind justify class (e.g., `start`, `center`, `between`).
 * @param {string} [props.gap='0'] - Tailwind gap class (e.g., `1`, `2`, `4`).
 * @param {boolean} [props.col=false] - Whether to apply `flex-col` for column layout.
 * @param {boolean} [props.row=false] - Whether to apply `flex-row` for row layout.
 * @param {string} [props.className=''] - Additional custom classes.
 * @param {string} [props.p=null] - Tailwind padding class (e.g., `p-4`).
 * @param {string} [props.px=null] - Tailwind horizontal padding class (e.g., `px-4`).
 * @param {string} [props.py=null] - Tailwind vertical padding class (e.g., `py-4`).
 * @param {string} [props.pl=null] - Tailwind left padding class (e.g., `pl-4`).
 * @param {string} [props.pr=null] - Tailwind right padding class (e.g., `pr-4`).
 * @param {string} [props.pt=null] - Tailwind top padding class (e.g., `pt-4`).
 * @param {string} [props.pb=null] - Tailwind bottom padding class (e.g., `pb-4`).
 * @param {string} [props.m=null] - Tailwind margin class (e.g., `m-4`).
 * @param {string} [props.mx=null] - Tailwind horizontal margin class (e.g., `mx-4`).
 * @param {string} [props.my=null] - Tailwind vertical margin class (e.g., `my-4`).
 * @param {string} [props.ml=null] - Tailwind left margin class (e.g., `ml-4`).
 * @param {string} [props.mr=null] - Tailwind right margin class (e.g., `mr-4`).
 * @param {string} [props.mt=null] - Tailwind top margin class (e.g., `mt-4`).
 * @param {string} [props.mb=null] - Tailwind bottom margin class (e.g., `mb-4`).
 * @param {React.ReactNode} props.children - The content to render inside the Box.
 * @param {Object} rest - Additional props passed to the `div` element.
 * @returns {JSX.Element} The rendered Box component.
 */
const Box = ({
  component: Component = "div", // Added component prop
  flex = false,
  inline = false,
  align = "flex-start",
  justify = "flex-start",
  gap = null,
  col = false,
  row = false,
  className = "",
  p = null,
  px = null,
  py = null,
  pl = null,
  pr = null,
  pt = null,
  pb = null,
  m = null,
  mx = null,
  my = null,
  ml = null,
  mr = null,
  mt = null,
  mb = null,
  children,
  ...rest
}) => {
  const classes = clsx(className, {
    flex: flex,
    "inline-flex": inline,
    "flex-col": col,
    "flex-row": row,
    [`items-${align}`]: align,
    [`justify-${justify}`]: justify,
    [`gap-${gap}`]: gap,
    [`p-${p}`]: p,
    [`px-${px}`]: px,
    [`py-${py}`]: py,
    [`pl-${pl}`]: pl,
    [`pr-${pr}`]: pr,
    [`pt-${pt}`]: pt,
    [`pb-${pb}`]: pb,
    [`m-${m}`]: m,
    [`mx-${mx}`]: mx,
    [`my-${my}`]: my,
    [`ml-${ml}`]: ml,
    [`mr-${mr}`]: mr,
    [`mt-${mt}`]: mt,
    [`mb-${mb}`]: mb,
  });

  return (
    <Component className={classes} {...rest}>
      {" "}
      {/* Use Component instead of hardcoded div */}
      {children}
    </Component>
  );
};

Box.propTypes = {
  component: PropTypes.string, // Added prop type for component
  flex: PropTypes.bool,
  inline: PropTypes.bool,
  align: PropTypes.string,
  justify: PropTypes.string,
  gap: PropTypes.string,
  col: PropTypes.bool,
  row: PropTypes.bool,
  className: PropTypes.string,
  p: PropTypes.string,
  px: PropTypes.string,
  py: PropTypes.string,
  pl: PropTypes.string,
  pr: PropTypes.string,
  pt: PropTypes.string,
  pb: PropTypes.string,
  m: PropTypes.string,
  mx: PropTypes.string,
  my: PropTypes.string,
  ml: PropTypes.string,
  mr: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string,
  children: PropTypes.node,
};

export default Box;
