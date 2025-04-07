import Link from "next/link";
import Box from "../../ui/box";

import { SiCodesandbox } from "react-icons/si";
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
