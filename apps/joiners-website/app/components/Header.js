import Link from 'next/link';
import { pgInfo } from '@shared/constants/pg-info.js';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <Link href="/">{pgInfo.name}</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-neutral-700 hover:text-primary">Home</Link></li>
            <li><Link href="/about" className="text-neutral-700 hover:text-primary">About</Link></li>
            <li><Link href="/rooms" className="text-neutral-700 hover:text-primary">Rooms</Link></li>
            <li><Link href="/gallery" className="text-neutral-700 hover:text-primary">Gallery</Link></li>
            <li><Link href="/policies" className="text-neutral-700 hover:text-primary">Policies</Link></li>
            <li><Link href="/fees" className="text-neutral-700 hover:text-primary">Fees</Link></li>
            <li><Link href="/contact" className="text-neutral-700 hover:text-primary">Contact</Link></li>
  
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
