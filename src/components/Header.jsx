import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//update

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Bax<span className="text-gray-800">Digital</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/layanan" className="text-gray-600 hover:text-blue-600 font-medium">Layanan</Link>
            <Link to="/AboutUs" className="text-gray-600 hover:text-blue-600 font-medium">Tentang Kami</Link>

            <a href="/portfolio" className="text-gray-600 hover:text-blue-600 font-medium">Portfolio</a>
            <a href="/ContactUs" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">Hubungi Kami</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link to="/" onClick={handleLinkClick} className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded">Home</Link>
            <Link to="/layanan" onClick={handleLinkClick} className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded">Layanan</Link>
            <Link to="/AboutUs" onClick={handleLinkClick} className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded">Tentang Kami</Link>
            <a href="/portfolio" onClick={handleLinkClick} className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded">Portfolio</a>
            <a href="/ContactUs" onClick={handleLinkClick} className="block mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition-colors">Hubungi Kami</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
