import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const portfolioData = [
  {
    imageUrl: 'https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754545973731-168684090.jpg',
    title: 'Briefing Pagi Tim Lapangan',
    description: 'Memulai hari dengan koordinasi dan semangat untuk mencapai target.',
    category: 'Koordinasi Tim'
  },
  {
    imageUrl: 'https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754546575576-739107613.jpg',
    title: 'Akuisisi Merchant QRIS',
    description: 'Membantu UMKM lokal untuk go-digital dengan pembayaran QRIS.',
    category: 'Akuisisi'
  },
  {
    imageUrl: 'https://placehold.co/600x400/e74c3c/ffffff?text=Edukasi+Nasabah',
    title: 'Edukasi Nasabah Perbankan',
    description: 'Memberikan penjelasan produk perbankan kepada calon nasabah.',
    category: 'Edukasi'
  },
  {
    imageUrl: 'https://placehold.co/600x400/9b59b6/ffffff?text=Registrasi+KTA',
    title: 'Proses Registrasi KTA',
    description: 'Membantu nasabah dalam proses pengajuan Kredit Tanpa Agunan.',
    category: 'Registrasi'
  },
  {
    imageUrl: 'https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754719715139-436917888.jpg',
    title: 'Event Roadshow Pembukaan Rekening terhadap Masyarakat',
    description: 'Menjangkau lebih banyak audiens melalui event promosi di masyarakat melalui program program BAX yang membantu kehidupan masyarakat dan membuka peluang untuk sesi Sharing dan potensi penghasilan bersama.',
    category: 'Promosi'
  },
  {
    imageUrl: 'https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754719822340-471513782.jpg',
    title: 'Kekompakan Tim BaxProject',
    description: 'Merayakan pencapaian target bersama, tim yang solid dalam membantu satu sama lain untuk memecahkan masalah dan mendapatkan hasil terbaik dilapangan baik secara individu maupun secara team.',
    category: 'Budaya Kerja'
  },
];


const Porto = () => {
  return (
    <main>
      <section className="bg-white pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">Galeri Portfolio Kami</h1>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            Dokumentasi keberhasilan dan dedikasi tim BaxProject di lapangan dalam menjalankan berbagai proyek akuisisi dan pemasaran.
          </p>
        </div>
      </section>

      <section className="pt-12 pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }}
                  />
                </div>
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-semibold">{item.category}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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
