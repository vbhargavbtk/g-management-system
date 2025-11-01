import Link from 'next/link';
import { pgInfo } from '@shared/constants/pg-info.js';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">{pgInfo.name}</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
            <li><Link href="/rooms" className="text-gray-600 hover:text-blue-600">Rooms</Link></li>
            <li><Link href="/gallery" className="text-gray-600 hover:text-blue-600">Gallery</Link></li>
            <li><Link href="/policies" className="text-gray-600 hover:text-blue-600">Policies</Link></li>
            <li><Link href="/fees" className="text-gray-600 hover:text-blue-600">Fees</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            <li><Link href="/apply" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Apply Now</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
