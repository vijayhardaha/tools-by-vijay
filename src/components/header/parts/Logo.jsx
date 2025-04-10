import Link from "next/link";
import { LuPocketKnife as LogoIcon } from "react-icons/lu";

import Box from "@/components/ui/box";

/**
 * Logo component that displays the site logo with "Tools by Vijay" text
 *
 * @component
 * @returns {JSX.Element} A link to the homepage containing the site logo
 */
const Logo = () => (
  <Link
    href="/"
    className="inline-flex items-center overflow-hidden rounded-lg"
  >
    <Box
      flex
      align="center"
      justify="center"
      p={2}
      className="bg-accent-foreground text-primary h-10 w-10"
    >
      <LogoIcon size={18} />
    </Box>
    <Box
      flex
      align="center"
      py={2}
      px={4}
      className="bg-primary text-primary-foreground h-10"
    >
      <span className="text-sm font-bold tracking-wide">Tools by Vijay</span>
    </Box>
  </Link>
);

export default Logo;
