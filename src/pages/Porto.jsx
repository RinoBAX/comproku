import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const portfolioData = [
  {
    imageUrl: 'https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754545973731-168684090.jpg',
    title: 'Briefing Pagi Tim Lapangan',
    description: 'Memulai hari dengan koordinasi dan semangat untuk mencapai target.',
    category: 'Koordinasi Tim',
    span: 'md:col-span-1',
  },
  {
    imageUrl: 'https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754719715139-436917888.jpg',
    title: 'Event Roadshow',
    description: 'Menjangkau lebih banyak audiens melalui event promosi di masyarakat.',
    category: 'Promosi',
    span: 'md:col-span-2',
  },
  {
    imageUrl: 'https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754719822340-471513782.jpg',
    title: 'Kekompakan Tim BaxProject',
    description: 'Merayakan pencapaian target bersama tim yang solid.',
    category: 'Budaya Kerja',
    span: 'md:col-span-2',
  },
  {
    imageUrl: 'https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754546575576-739107613.jpg',
    title: 'Akuisisi Merchant QRIS',
    description: 'Membantu UMKM lokal untuk go-digital dengan pembayaran QRIS.',
    category: 'Akuisisi',
    span: 'md:col-span-1',
  },
];

const Porto = () => {
  return (
    <main className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-60" aria-hidden="true"></div>
        <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl text-center mx-auto">
                {/* Ukuran font disesuaikan untuk mobile */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                    Jejak Digital,<br/>
                    <span className="block mt-2 md:mt-0 md:inline bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
                        Dampak Nyata.
                    </span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
                    Ini bukan sekadar galeri. Ini adalah bukti nyata bagaimana ide, strategi, dan eksekusi kami di lapangan menciptakan cerita sukses yang menginspirasi.
                </p>
            </div>
        </div>
      </section>

      {/* --- MASONRY GALLERY --- */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          {/* Judul kecil untuk transisi yang lebih baik */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">Galeri Project Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.map((item, index) => (
              <div key={index} className={`group relative rounded-2xl overflow-hidden shadow-lg ${item.span}`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <span className="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-full">{item.category}</span>
                    <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </main>
  );
};

export default Porto;
