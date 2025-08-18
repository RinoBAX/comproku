import React from 'react';
import { Link } from 'react-router-dom';

// Anda bisa menghapus import WhatsAppButton dari sini jika tidak digunakan di dalam footer
// import WhatsAppButton from '../components/WhatsAppButton';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/baxdigitalindonesia/', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-1.11a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd" /></svg> },
    { name: 'LinkedIn', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
    { name: 'Facebook', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Kolom Logo & Deskripsi */}
          <div className="md:col-span-4">
            <Link to="/" className="text-2xl font-bold text-white">PT. Bax Digital Indonesia</Link>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Kami adalah perusahaan teknologi yang berdedikasi untuk menciptakan solusi digital yang berdampak dan memberdayakan masyarakat.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-slate-500 hover:text-white transition-colors">
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Tautan Layanan */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-lg font-semibold text-white">Layanan</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/layanan/jasa-pembuatan-web-app" className="text-slate-400 hover:text-white">Web & Aplikasi</Link></li>
              <li><Link to="/layanan/jasa-periklanan-digital" className="text-slate-400 hover:text-white">Periklanan Digital</Link></li>
              <li><Link to="/layanan/kelas-digital-marketing" className="text-slate-400 hover:text-white">Kelas Digital</Link></li>
              <li><Link to="/layanan/pemasaran-akuisisi-proyek" className="text-slate-400 hover:text-white">Akuisisi Project</Link></li>
            </ul>
          </div>

          {/* Kolom Tautan Perusahaan */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white">Perusahaan</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/AboutUs" className="text-slate-400 hover:text-white">Tentang Kami</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-white">Portfolio</Link></li>
              <li><Link to="/ContactUs" className="text-slate-400 hover:text-white">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Kolom Kontak */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-white">Lokasi Kami</h3>
            <div className="mt-4 space-y-3 text-slate-400 text-sm">
              <p>Jl. Lenteng Agung Raya No.11a, Lenteng Agung, Jagakarsa, Jakarta Selatan, Indonesia</p>
              <p>admin@baxdigitalindonesia.com</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p className="text-sm">&copy; {new Date().getFullYear()} PT. Bax Digital Indonesia. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
