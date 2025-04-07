import Link from "next/link";
import { GiGearStickPattern } from "react-icons/gi";
import Box from "../../ui/box";

const Logo = () => (
  <Link href="/" className="flex items-center">
    <Box
      flex
      align="center"
      justify="center"
      p={2}
      className="bg-primary text-foreground h-12 w-12"
    >
      <GiGearStickPattern className="text-2xl" />
    </Box>
    <Box
      flex
      align="center"
      py={2}
      px={4}
      className="bg-foreground text-background h-12 min-w-12"
    >
      <span className="text-lg font-bold">Tools by Vijay</span>
    </Box>
  </Link>
);

export default Logo;
