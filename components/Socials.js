import Link from 'next/link';
import { RiInstagramLine, RiLinkedinLine, RiFacebookLine, RiTwitterXLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex gap-x-5 text-lg items-center">
      <Link href="#" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine  />
      </Link>
      <Link href="#" className="hover:text-accent transition-all duration-300">
        <RiFacebookLine  />
      </Link>
      <Link href="#" className="hover:text-accent transition-all duration-300">
        <RiTwitterXLine  />
      </Link>
      <Link href="#" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine  />
      </Link>
    </div>
  );
};

export default Socials;
