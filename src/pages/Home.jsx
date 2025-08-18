import React from 'react';
import { Link } from 'react-router-dom';

const WhatsAppButton = () => {
    return (
        <a href="https://wa.me/6285719409984"
           target="_blank"
           rel="noopener noreferrer"
           title="Hubungi kami via WhatsApp"
           className="fixed bottom-5 right-5 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl z-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.2-27.2l-6.9-4.1-72.3 19 19.3-70.4-4.5-7.2c-19.3-30.7-29.8-66.3-29.8-103.3 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
        </a>
    );
};

const Home = () => {
  const services = [
    { title: 'Web & Aplikasi', description: 'Pengembangan solusi digital kustom, dari CMS hingga full-stack.', icon: '💻' },
    { title: 'Periklanan Digital', description: 'Strategi iklan terukur melalui Meta Ads, Google Ads, SEO, dan SEM.', icon: '📢' },
    { title: 'Kelas Profesional', description: 'Tingkatkan skill dengan kelas Digital Marketing & Fullstack.', icon: '🖥️📊' },
    { title: 'Akuisisi Project', description: 'Eksekusi Project lapangan berskala Nasional dengan tim dari seluruh Indonesia.', icon: '📈' }
  ];

  const whyUsData = [
    { icon: '✅', title: 'Solusi Terintegrasi', description: 'Dari ide hingga eksekusi, kami menyediakan layanan lengkap di satu tempat.' },
    { icon: '👥', title: 'Tim Ahli & Berpengalaman', description: 'Project Anda ditangani oleh para profesional dengan rekam jejak terbukti.' },
    { icon: '🎯', title: 'Fokus Pada Hasil', description: 'Kami berorientasi pada data dan hasil nyata untuk mengembangkan bisnis Anda.' },
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
      <section className="relative pt-16 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-60" aria-hidden="true"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                Akselerasi Bisnis & Karir 
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
                  Digital Anda
                </span>
              </h1>
              <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg leading-8 text-gray-600">
                Wujudkan potensi penuh bisnis dan karir Anda di era digital dengan hasil maksimal bersama PT. Bax Digital Indonesia.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/layanan" className="inline-block bg-blue-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300">
                  Lihat Semua Layanan
                </Link>
                <Link to="/ContactUs" className="inline-block bg-white text-gray-700 font-bold text-lg py-3 px-8 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200">
                  Hubungi Kami
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img src="https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754625129137-725915223.png" alt="Ilustrasi Tim Digital Bekerja" className="rounded-2xl shadow-2xl w-full max-w-md transform transition-transform duration-500 hover:scale-105" 
                   onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/448x298/FFFFFF/334155?text=Gambar'; }}/>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Layanan Unggulan Kami</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">Kami menyediakan berbagai solusi untuk setiap kebutuhan digital Anda.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => (
              <div key={service.title} className="group p-8 text-center bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-blue-50 to-purple-100 text-blue-600 mx-auto mb-6 shadow-inner transition-transform duration-300 group-hover:scale-110">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <h3 className="font-bold text-xl mt-4 text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Mengapa Memilih Bax Digital?</h2>
            <p className="text-gray-600 mt-4 mb-8 text-lg">Kami bukan hanya vendor, kami adalah partner pertumbuhan digital Anda.</p>
            <div className="space-y-6">
              {whyUsData.map(item => (
                <div key={item.title} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold shadow-md">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754627703371-924940257.png" alt="Tim Bax Digital sedang berdiskusi" className="rounded-2xl shadow-2xl w-full max-w-xl transform transition-transform duration-500 hover:scale-105" 
                 onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/FFFFFF/334155?text=Gambar'; }}/>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Apa Kata Mereka?</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">Kepercayaan dan kepuasan klien adalah prioritas utama kami.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map(testimonial => (
              <div key={testimonial.name} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                <p className="text-gray-700 italic flex-grow">"{testimonial.comment}"</p>
                <div className="flex items-center mt-6 pt-6 border-t border-gray-200">
                  <img src={testimonial.imageUrl} alt={testimonial.name} className="w-14 h-14 rounded-full shadow-md object-cover" 
                       onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/56x56/EBF4FF/334155?text=Img'; }}/>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" aria-hidden="true"></div>
        <div className="container mx-auto px-6 relative text-center text-white">
          <h2 className="text-4xl font-extrabold">Siap Memulai Project Digital Anda?</h2>
          <p className="mt-4 mb-8 max-w-2xl mx-auto text-lg text-blue-100">Diskusikan ide Anda dengan tim kami tanpa biaya. Mari wujudkan visi Anda menjadi kenyataan.</p>
          <Link to="/ContactUs" className="bg-white text-blue-600 font-bold text-lg py-4 px-10 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-blue-300/50 inline-block">
            Konsultasi Gratis
          </Link>
        </div>
      </section>
      
      <WhatsAppButton />
    </main>
  );
};

export default Home;
