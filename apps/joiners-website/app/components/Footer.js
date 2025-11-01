import { pgInfo } from '@shared/constants/pg-info.js';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-bold">{pgInfo.name}</h3>
            <p>{pgInfo.address}</p>
            <p>Email: {pgInfo.email}</p>
            <p>Phone: {pgInfo.contact}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/rooms">Rooms</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} {pgInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
