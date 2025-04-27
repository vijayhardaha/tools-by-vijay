import Image from "next/image";
import Link from "next/link";
import propTypes from "prop-types";

import { cn } from "@/utils/classNameUtils";

/**
 * Logo component that displays the site logo with next/image
 *
 * @component
 * @param {object} props - Component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @returns {JSX.Element} A link to the homepage containing the site logo
 */
const Logo = ({ className }) => (
  <Link href="/">
    <Image
      src="/images/site-logo.svg"
      alt="Site logo for Tools by Vijay Hardaha"
      aria-label="Site logo for Tools by Vijay Hardaha"
      width={791}
      height={160}
      className={cn("h-10 w-auto", className)}
      priority
    />
    <span className="sr-only">Tools by Vijay Hardaha</span>
  </Link>
);

Logo.propTypes = {
  className: propTypes.string,
};

export default Logo;
