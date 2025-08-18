import React from 'react';

// Komponen WhatsAppButton bisa di-import dari file terpisah jika sudah ada
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

const AboutUs = () => {
  const values = [
    {
      icon: '💡',
      title: 'Inovasi Tanpa Henti',
      description: 'Kami tidak pernah berhenti mencari cara baru dan lebih baik untuk memecahkan masalah digital Anda.',
    },
    {
      icon: '🤝',
      title: 'Kolaborasi & Kemitraan',
      description: 'Kami percaya hasil terbaik lahir dari kerja sama tim yang solid dan kemitraan yang kuat dengan klien.',
    },
    {
      icon: '📈',
      title: 'Bertumbuh Bersama',
      description: 'Kami berkomitmen untuk terus belajar dan bertumbuh, baik sebagai individu maupun sebagai perusahaan.',
    },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Kelahiran Ide',
      description: 'Berawal dari tekad untuk menciptakan teknologi yang memberdayakan, PT. Bax Digital Indonesia didirikan untuk membangun ekosistem digital yang produktif.'
    },
    {
      year: '2023',
      title: 'Peluncuran BaxLancer',
      description: 'Aplikasi pertama kami diluncurkan, menghubungkan talenta digital dengan peluang project di seluruh Indonesia.'
    },
    {
      year: '2024',
      title: 'Ekspansi Ekosistem',
      description: 'Kami memperluas jangkauan dengan meluncurkan BaxAcademy untuk edukasi dan BaxProject untuk solusi lapangan berskala besar.'
    }
  ];

  return (
    <main className="bg-white font-sans text-gray-800">
      {/* --- HERO SECTION --- */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Mendorong Transformasi Digital di Indonesia.
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600">
              Kami bukan hanya perusahaan teknologi. Kami adalah mitra pertumbuhan Anda, menyediakan platform, edukasi, dan solusi untuk era digital.
            </p>
          </div>
        </div>
      </section>

      {/* --- STORY & IMAGE SECTION --- */}
      <section id="story" className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <img 
              src="https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754616564655-517845958.jpg" 
              alt="Tim Bax Digital Indonesia" 
              className="w-full rounded-3xl shadow-2xl"
            />
            {/* Timeline untuk Mobile */}
            <div className="mt-12 md:hidden">
                {timeline.map((item, index) => (
                    <div key={item.title} className="relative pl-8 pb-8">
                        <div className="absolute left-0 top-1 h-full w-px bg-gray-300"></div>
                        <div className="absolute left-[-9px] top-0 h-5 w-5 rounded-full bg-blue-600 border-4 border-white"></div>
                        <p className="text-sm font-bold text-blue-600">{item.year}</p>
                        <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
          </div>
          {/* Timeline Overlay untuk Desktop */}
          <div className="hidden md:block relative max-w-7xl mx-auto mt-[-6rem]">
            <div className="grid md:grid-cols-3 gap-8 px-8">
              {timeline.map((item) => (
                <div key={item.title} className="p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200">
                  <p className="text-sm font-bold text-blue-600">{item.year}</p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section id="values" className="pt-16 md:pt-24 pb-20 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-gray-900">DNA Kami</h2>
            <p className="mt-4 text-lg text-gray-600">Tiga pilar utama yang membentuk cara kami bekerja dan berinovasi.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="group p-8 text-left bg-white rounded-2xl border border-gray-200 transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2">
                   <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-100 text-blue-600 mb-6 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                       <span className="text-3xl">{value.icon}</span>
                   </div>
                   <h3 className="text-2xl font-bold mb-2 text-gray-900">{value.title}</h3>
                   <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
    </main>
  );
};

export default AboutUs;
