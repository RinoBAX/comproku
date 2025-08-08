import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-3">PT. Bax Digital Indonesia</h3>
            <p className="text-gray-400 text-sm">
              Kami adalah perusahaan teknologi yang berdedikasi untuk menciptakan solusi digital yang berdampak dan memberdayakan masyarakat.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/layanan" className="text-gray-400 hover:text-white">Layanan</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
              <li><Link to="/AboutUs" className="text-gray-400 hover:text-white">Tentang Kami</Link></li>
              <li><Link to="/ContactUs" className="text-gray-400 hover:text-white">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Lokasi Kami</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Jl. Lenteng Agung Raya No.11a Rt13/Rw08, Lenteng Agung, Jagakarsa, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>admin@baxdigitalindonesia.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-700 text-center text-gray-500">
          <p className="text-xs">&copy; 2024 PT. Bax Digital Indonesia. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
