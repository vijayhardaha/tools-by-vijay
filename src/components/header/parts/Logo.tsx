import Link from 'next/link';
import { GiGearStickPattern } from 'react-icons/gi';

const Logo = () => (
  <Link href="/" className="flex items-center">
    <div className="bg-primary-500 text-secondary-500 flex h-12 w-12 items-center justify-center p-2">
      <GiGearStickPattern className="text-2xl" />
    </div>
    <div className="bg-secondary-500 flex h-12 items-center px-4 py-2 text-white">
      <span className="text-lg font-bold">Tools by Vijay</span>
    </div>
  </Link>
);

export default Logo;
