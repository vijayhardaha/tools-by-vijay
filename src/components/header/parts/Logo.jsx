import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Logo component that displays the site logo with next/image
 *
 * @component
 * @param {object} props - Component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @returns {JSX.Element} A link to the homepage containing the site logo
 */
const Logo = ({ className }) => (
  <Link href="/" className="inline-flex">
    <Image
      src="/images/site-logo.svg"
      alt="Tools by Vijay Logo"
      width={791}
      height={160}
      className={cn("h-10 w-auto", className)}
      priority
    />
  </Link>
);

export default Logo;
