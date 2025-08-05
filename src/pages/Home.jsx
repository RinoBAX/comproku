import React from 'react';
import { Link } from 'react-router-dom';

// Anda bisa mengimpor ikon dari library seperti 'react-icons'
// npm install react-icons
// import { FaLaptopCode, FaBullhorn, FaUsers, FaRocket } from 'react-icons/fa';

// Komponen Ikon Dummy jika tidak menggunakan library
const IconPlaceholder = ({ className }) => <div className={`w-12 h-12 rounded-full ${className}`}></div>;

const Home = () => {
  const whyUsData = [
    { title: 'Solusi Terintegrasi', description: 'Dari ide hingga eksekusi, kami menyediakan layanan lengkap di satu tempat.' },
    { title: 'Tim Ahli & Berpengalaman', description: 'Proyek Anda ditangani oleh para profesional dengan rekam jejak terbukti.' },
    { title: 'Fokus Pada Hasil', description: 'Kami berorientasi pada data dan hasil nyata untuk mengembangkan bisnis Anda.' },
  ];

  const testimonials = [
    {
      name: 'Klien A',
      company: 'Startup Teknologi',
      comment: 'Tim Bax Digital sangat responsif dan profesional. Website yang mereka buat melebihi ekspektasi kami!',
      imageUrl: 'https://placehold.co/100x100/f1c40f/ffffff?text=A'
    },
    {
      name: 'Klien B',
      company: 'UMKM Kuliner',
      comment: 'Berkat strategi iklan dari Bax Digital, penjualan kami meningkat 200% dalam 3 bulan. Luar biasa!',
      imageUrl: 'https://placehold.co/100x100/3498db/ffffff?text=B'
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white">
        <div className="container mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Akselerasi Bisnis & Karir Digital Anda Bersama Kami
            </h1>
            <p className="mt-4 text-lg text-blue-200">
              Solusi digital lengkap dari PT. Bax Digital Indonesia untuk membawa Anda ke level berikutnya.
            </p>
            <div className="mt-8 space-x-4">
              <Link to="/layanan" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                Lihat Semua Layanan
              </Link>
              <Link to="/ContactUs" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Hubungi Kami
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img src="https://placehold.co/500x400/FFFFFF/1E3A8A?text=Bax+Digital" alt="Ilustrasi Digital" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Layanan Unggulan Section */}
      <section id="layanan" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Layanan Unggulan Kami</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Kami menyediakan berbagai solusi untuk setiap kebutuhan digital Anda.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <IconPlaceholder className="bg-blue-500 mx-auto" />
              <h3 className="font-bold text-xl mt-4 text-blue-900">Web & Aplikasi</h3>
              <p className="text-sm text-gray-600 mt-2">Pengembangan solusi digital kustom, dari CMS hingga full-stack.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <IconPlaceholder className="bg-orange-500 mx-auto" />
              <h3 className="font-bold text-xl mt-4 text-blue-900">Periklanan Digital</h3>
              <p className="text-sm text-gray-600 mt-2">Strategi iklan terukur melalui Google Ads, SEO, dan SEM.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <IconPlaceholder className="bg-yellow-400 mx-auto" />
              <h3 className="font-bold text-xl mt-4 text-blue-900">Kelas Profesional</h3>
              <p className="text-sm text-gray-600 mt-2">Tingkatkan skill dengan kelas Digital Marketing & Fullstack.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <IconPlaceholder className="bg-blue-900 mx-auto" />
              <h3 className="font-bold text-xl mt-4 text-blue-900">Akuisisi Proyek</h3>
              <p className="text-sm text-gray-600 mt-2">Eksekusi proyek lapangan berskala besar dengan tim ahli.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://placehold.co/600x450/1E3A8A/FFFFFF?text=Tim+Kami" alt="Tim Bax Digital" className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Mengapa Memilih Bax Digital?</h2>
            <p className="text-gray-600 mt-3 mb-6">Kami bukan hanya vendor, kami adalah partner pertumbuhan digital Anda.</p>
            <div className="space-y-4">
              {whyUsData.map(item => (
                <div key={item.title} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-900">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Apa Kata Mereka?</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Kepercayaan dan kepuasan klien adalah prioritas utama kami.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map(testimonial => (
              <div key={testimonial.name} className="bg-blue-50 p-8 rounded-lg shadow-lg">
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                <div className="flex items-center mt-6">
                  <img src={testimonial.imageUrl} alt={testimonial.name} className="w-14 h-14 rounded-full shadow-md" />
                  <div className="ml-4">
                    <p className="font-bold text-blue-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-900">
        <div className="container mx-auto px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">Siap Memulai Proyek Digital Anda?</h2>
          <p className="mt-2 mb-6 text-blue-200">Diskusikan ide Anda dengan tim kami tanpa biaya.</p>
          <Link to="/ContactUs" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105">
            Konsultasi Gratis
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
