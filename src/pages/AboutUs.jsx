import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

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
      description: 'Aplikasi pertama kami diluncurkan, menghubungkan talenta digital dengan peluang proyek di seluruh Indonesia.'
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
      <section className="pt-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Mendorong Transformasi Digital di Indonesia.
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600">
              Kami bukan hanya perusahaan teknologi. Kami adalah mitra pertumbuhan Anda, menyediakan platform, edukasi, dan solusi untuk era digital.
            </p>
          </div>
        </div>
      </section>

      {/* --- STORY & IMAGE SECTION --- */}
      <section id="story" className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative max-w-7xl mx-auto">
            <img 
              src="https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/berkas-1754616564655-517845958.jpg" 
              alt="Tim Bax Digital Indonesia" 
              className="relative w-full rounded-3xl shadow-2xl"
            />
            {/* Timeline Overlay */}
            <div className="md:absolute md:inset-x-0 md:-bottom-24 grid md:grid-cols-3 gap-8 px-8">
              {timeline.map((item) => (
                <div key={item.title} className="mt-8 md:mt-0 p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200">
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
      <section id="values" className="pt-20 pb-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
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
