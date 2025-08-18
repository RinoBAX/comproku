import React from 'react';
import { Link } from 'react-router-dom';
//update
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
    slug: 'pemasaran-akuisisi-proyek',
    icon: '📈',
    title: 'Pemasaran & Akuisisi Spesialis',
    description: 'Divisi spesialis kami untuk eksekusi proyek lapangan berskala besar, membantu klien mencapai target akuisisi dengan tim terlatih.',
  },
  {
    slug: 'ui-ux-design-service',
    icon: '🎨',
    title: 'UI/UX Design & Prototyping',
    description: 'Menciptakan pengalaman pengguna yang intuitif dan menarik melalui desain antarmuka yang modern dan fungsional.',
  }
];

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


const Services = () => {
  return (
    <main className="bg-gray-50 font-sans">
      <section className="relative pt-20 pb-16 text-center">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Link to={`/layanan/${service.slug}`} key={service.title} 
                    className="group relative block p-1 rounded-2xl bg-gradient-to-br from-blue-200 via-gray-200 to-blue-200 transition-all duration-300 transform hover:scale-[1.03] hover:!bg-gradient-to-br hover:from-blue-400 hover:to-purple-400"
                    style={{ gridRow: index === 0 ? 'span 2' : 'auto', gridColumn: index === 0 ? 'span 2' : 'auto' }}
              >
                <div className="relative w-full h-full p-8 rounded-[14px] bg-white/80 backdrop-blur-xl shadow-lg transition-all duration-300">
                  <div className={`flex flex-col h-full ${index === 0 ? 'md:flex-row md:items-center md:gap-8' : ''}`}>
                    <div className={`text-5xl mb-4 md:mb-0 transition-transform duration-500 group-hover:scale-110 ${index === 0 ? 'md:text-7xl' : ''}`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-gray-900 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>{service.title}</h3>
                      <p className={`mt-2 text-gray-600 ${index === 0 ? 'text-lg' : 'text-base'}`}>{service.description}</p>
                      
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
