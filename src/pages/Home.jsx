import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

const IconPlaceholder = ({ className }) => <div className={`w-12 h-12 rounded-full ${className}`}></div>;

const Home = () => {
  const whyUsData = [
    { title: 'Solusi Terintegrasi', description: 'Dari ide hingga eksekusi, kami menyediakan layanan lengkap di satu tempat.' },
    { title: 'Tim Ahli & Berpengalaman', description: 'Project Anda ditangani oleh para profesional dengan rekam jejak terbukti.' },
    { title: 'Fokus Pada Hasil', description: 'Kami berorientasi pada data dan hasil nyata untuk mengembangkan bisnis Anda.' },
  ];

  const testimonials = [
    {
      name: 'Arsajaya Jiwangga',
      company: 'Startup Teknologi',
      comment: 'Kelas Digital Marketingnya memiliki materi yang sangat lengkap. benar benar hasil yang di utamakan adalah hasil nyata Bahkan dari pertemuan ketiga sudah mulai langsung praktek sehingga kami yang menjadi siswa benar benar paham dan menguasai Digital Marketing. Bax Academy dari PT. Bax Digital Indonesia adalah yang terbaik',
      imageUrl: 'https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754622127060-967644153.png'
    },
    {
      name: 'Cipta Darmayanti',
      company: 'UMKM Kuliner',
      comment: 'Hasil dari Jasa Iklannya meningkatkan omset warung. Tidak hanya sekedar mengiklankan, bahkan Bax Digital memberikan masukan dan perubahan pada warung untuk menambah daya tarik dan terbukti warung saya semakin ramai dan bahkan hingga kekurangan lahan untuk parkir. Terima Kasih Bax Digital',
      imageUrl: 'https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754623705708-441799204.png'
    }
  ];

  return (
    <main className="bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white">
        <div className="container mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Akselerasi Bisnis & Karir Digital Anda Bersama Kami
            </h1>
            <p className="mt-4 text-lg text-blue-200">
              Wujudkan potensi penuh Bisnis dan Karir Anda di <strong>ERA DIGITAL</strong> dengan <strong>HASIL MAKSIMAL</strong>
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/layanan" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
                Lihat Semua Layanan
              </Link>
              <Link to="/ContactUs" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Hubungi Kami
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img src="https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754625129137-725915223.png" alt="Ilustrasi Tim Digital Bekerja" className="rounded-lg shadow-2xl w-full max-w-md" 
                 onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/448x298/1E3A8A/FFFFFF?text=Gambar'; }}/>
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Layanan Unggulan Kami</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Kami menyediakan berbagai solusi untuk setiap kebutuhan digital Anda.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <IconPlaceholder className="bg-blue-500 mx-auto" />
              <h3 className="font-bold text-xl mt-4 text-blue-900">Web & Aplikasi</h3>
              <p className="text-sm text-gray-600 mt-2">Pengembangan solusi digital kustom, dari CMS hingga full-stack.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <IconPlaceholder className="bg-orange-500 mx-auto" />
              <h3 className="font-bold text-xl mt-4 text-blue-900">Periklanan Digital</h3>
              <p className="text-sm text-gray-600 mt-2">Strategi iklan terukur melalui Meta Ads, Google Ads, SEO, dan SEM.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <IconPlaceholder className="bg-yellow-400 mx-auto" />
              <h3 className="font-bold text-xl mt-4 text-blue-900">Kelas Profesional</h3>
              <p className="text-sm text-gray-600 mt-2">Tingkatkan skill dengan kelas Digital Marketing & Fullstack.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <IconPlaceholder className="bg-green-500 mx-auto" />
              <h3 className="font-bold text-xl mt-4 text-blue-900">Akuisisi Project</h3>
              <p className="text-sm text-gray-600 mt-2">Eksekusi Project lapangan berskala Nasional dengan tim dari seluruh Indonesia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="bg-white p-3 rounded-lg shadow-2xl">
              <img src="https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754627703371-924940257.png" alt="Tim Bax Digital sedang berdiskusi" className="rounded-md w-full max-w-xl" 
                   onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/EBF4FF/334155?text=Gambar'; }}/>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Mengapa Memilih Bax Digital?</h2>
            <p className="text-gray-600 mt-3 mb-6">Kami bukan hanya vendor, kami adalah partner pertumbuhan digital Anda.</p>
            <div className="space-y-4">
              {whyUsData.map(item => (
                <div key={item.title} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold">✓</div>
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
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">Apa Kata Mereka?</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Kepercayaan dan kepuasan klien adalah prioritas utama kami.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map(testimonial => (
              <div key={testimonial.name} className="bg-blue-50 p-8 rounded-lg shadow-lg flex flex-col">
                <div className="flex items-center">
                  <img src={testimonial.imageUrl} alt={testimonial.name} className="w-14 h-14 rounded-full shadow-md object-cover" 
                       onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/56x56/EBF4FF/334155?text=Img'; }}/>
                  <div className="ml-4">
                    <p className="font-bold text-blue-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <hr className="border-t border-blue-200 my-4" />
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900">
        <div className="container mx-auto px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">Siap Memulai Project Digital Anda?</h2>
          <p className="mt-2 mb-6 text-blue-200">Diskusikan ide Anda dengan tim kami tanpa biaya.</p>
          <Link to="/ContactUs" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 inline-block">
            Konsultasi Gratis
          </Link>
        </div>
      </section>
      
      <WhatsAppButton />
    </main>
  );
};

export default Home;
