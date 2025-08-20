import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

const servicesData = [
  {
    slug: 'kelas-digital-marketing',
    icon: '🖥️📊', 
    title: 'Kelas Digital Marketing',
    description: 'Program pelatihan intensif untuk Anda yang ingin menguasai dunia pemasaran digital, dari dasar hingga strategi tingkat lanjut.',
  },
  {
    slug: 'jasa-pembuatan-web-app',
    icon: '💻',
    title: 'Jasa Pembuatan Web/App',
    description: 'Kami membangun solusi digital kustom, mulai dari website berbasis CMS yang mudah dikelola hingga aplikasi full-stack yang kompleks.',
  },
  {
    slug: 'jasa-periklanan-digital',
    icon: '📢',
    title: 'Jasa Periklanan Digital',
    description: 'Tingkatkan visibilitas dan jangkauan bisnis Anda melalui strategi periklanan digital yang terukur di berbagai platform.',
  },
  {
    slug: 'kelas-fullstack-developer',
    icon: '👨‍💻',
    title: 'Kelas Fullstack Developer',
    description: 'Menjadi seorang pengembang web handal dengan menguasai teknologi front-end dan back-end untuk membangun aplikasi modern.',
  },
  {
    slug: 'Pemasaran-Akuisisi-Project',
    icon: '📈',
    title: 'Pemasaran & Akuisisi Spesialis',
    description: 'Divisi spesialis kami untuk eksekusi Project lapangan berskala besar, membantu klien mencapai target akuisisi dengan tim terlatih.',
  },
  {
    slug: 'ui-ux-design-service',
    icon: '🎨',
    title: 'UI/UX Design & Prototyping',
    description: 'Menciptakan pengalaman pengguna yang intuitif dan menarik melalui desain antarmuka yang modern dan fungsional.',
  }
];

const Services = () => {
  return (
    <main className="bg-gray-50 font-sans">
      <section className="relative pt-24 pb-16 text-center">
        <div className="container mx-auto px-6 relative">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Ekosistem Solusi Digital Anda
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
            Temukan bagaimana layanan kami dapat berkolaborasi untuk menciptakan dampak nyata bagi pertumbuhan bisnis dan keahlian Anda.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Grid diubah untuk mobile-first, layout asimetris hanya aktif di desktop (lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Link 
                to={`/layanan/${service.slug}`} 
                key={service.title} 
                // Kelas responsif untuk layout asimetris di layar besar
                className={`group relative block p-1 rounded-2xl bg-gradient-to-br from-blue-200 via-gray-200 to-blue-200 transition-all duration-300 transform hover:scale-[1.03] hover:!bg-gradient-to-br hover:from-blue-400 hover:to-purple-400 
                           ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <div className="relative w-full h-full p-8 rounded-[14px] bg-white/80 backdrop-blur-xl shadow-lg">
                  {/* Kontainer flexbox diatur agar tingginya menyesuaikan konten */}
                  <div className={`flex flex-col h-full ${index === 0 ? 'lg:flex-row lg:items-center lg:gap-8' : ''}`}>
                    <div className={`text-5xl mb-4 shrink-0 transition-transform duration-500 group-hover:scale-110 ${index === 0 ? 'lg:text-7xl' : ''}`}>
                      {service.icon}
                    </div>
                    {/* flex-1 dan flex-col untuk memastikan deskripsi bisa 'grow' */}
                    <div className="flex-1 flex flex-col">
                      <h3 className={`font-bold text-gray-900 ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>{service.title}</h3>
                      {/* flex-grow ditambahkan di sini untuk mengatasi overflow */}
                      <p className={`mt-2 text-gray-600 flex-grow ${index === 0 ? 'text-base lg:text-lg' : 'text-base'}`}>{service.description}</p>
                      
                      <div className="mt-6 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                          <span className="font-semibold text-blue-600 flex items-center gap-2">
                            Lihat Detail
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </main>
  );
};

export default Services;
