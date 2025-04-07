import Link from "next/link";
import { SiCodesandbox } from "react-icons/si";

import Box from "@/components/ui/box";

/**
 * Logo component that displays the site logo with "Tools by Vijay" text
 *
 * @component
 * @returns {JSX.Element} A link to the homepage containing the site logo
 */
const Logo = () => (
  <Link href="/" className="flex items-center">
    <Box
      flex
      align="center"
      justify="center"
      p={2}
      className="bg-primary text-foreground h-10 w-10"
    >
      <SiCodesandbox className="text-xl" />
    </Box>
    <Box
      flex
      align="center"
      py={2}
      px={4}
      className="bg-foreground text-background h-10 min-w-10"
    >
      <span className="text-base font-bold">Tools by Vijay</span>
    </Box>
  </Link>
);

export default Logo;
