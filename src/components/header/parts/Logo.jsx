import Link from "next/link";
import { SiCodesandbox } from "react-icons/si";

import Box from "../../ui/box";

/**
 * Logo component that displays the site logo with "Tools by Vijay" text
 *
 * @component
 * @returns {JSX.Element} A link to the homepage containing the site logo
 */
const Logo = () => (
  <Link href="/" className="group flex items-center overflow-hidden">
    <Box
      flex
      align="center"
      justify="center"
      p={2}
      className="bg-accent-foreground text-primary h-10 w-10"
    >
      <SiCodesandbox size={18} />
    </Box>
    <Box
      flex
      align="center"
      py={2}
      px={4}
      className="bg-primary text-primary-foreground group-hover:text-accent-foreground h-10 min-w-10 text-sm transition-colors duration-200 ease-in-out"
    >
      <span className="text-base font-bold">Tools by Vijay</span>
    </Box>
  </Link>
);

export default Logo;
